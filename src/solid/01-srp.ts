(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        
        private productServices: ProductServices;
        private mailer: Mailer;

        constructor(productServices: ProductServices, mailer: Mailer){
            this.productServices = productServices;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productServices.loadProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productServices.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail('client@asd.com', 'to-client');
        }
    
    }
    
    class ProductServices {
        
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {

        private fromEmail = 'abc@gmail.com'

        sendEmail( to:string, template: 'to-client'|'to-me' ){
            console.log('Enviando correo');
        }

    }

    class CartBloc {

        addToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    
    const productServices = new ProductServices();
    const mailer = new Mailer();
    const cartBloc = new CartBloc();

    const productBloc = new ProductBloc( productServices, mailer );

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();