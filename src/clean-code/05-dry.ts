
type Size = ''|'S'|'M'|'L'|'Xl'

class Product{
  constructor(
    public name:string = '',
    public price:number = 0,
    public size:Size = '',
  ){}

  validateProductArguments():void {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
            if ( (<string>this[key]).length <= 0) throw Error(`The ${key} is empty`);
          break;
        case "number":
            if ( (<number>this[key]) <= 0) throw Error(`The ${key} is zero`);
          break;

        default:
          throw Error(`${ typeof this[key] } is not supported.` )
          break;
      }
    }
  }

  toString():string {
    // no DRY
    // // if (this.name.length <= 0) throw Error('The name is empty');
    // // if (this.price <= 0) throw Error('The price is empty');
    // // if (this.size.length <= 0) throw Error('The size is empty');

    // con DRY
    this.validateProductArguments();

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(()=>{
  const bluePants = new Product('Pantalones', 10, 'S');
  console.log(bluePants.toString());
})()




