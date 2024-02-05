(()=>{
  
  interface Bird{
    eat() : void;
    fly() : void;
    run() : void;
  }

  class Tucan implements Bird{
    public eat(){}
    public fly(){}
    public run(){}
  }

  class HumingBird implements Bird{
    public eat(){}
    public fly(){}
    public run(){}
  }

  class Ostrich implements Bird{
    public fly(){
      throw new Error('Esta ave no vuela');
    }
    public eat(){}
    public run(){}
  }

})()