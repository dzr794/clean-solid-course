(() => {

    // función para obtener información de una película por Id
    function getMoviesInfoById( movieId: number ):void {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: number ):void {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBiographyById( ActorId: number ):void {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface movieConfiguration {
      title: string, 
      description: string, 
      rating: number, 
      cast: string[]
    }

    function createMovie( {title, description, rating, cast}:movieConfiguration ):void {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    const isUniqueFullName = (fullName:string):boolean => {
      console.log({fullName});

      if (false) {
        throw new Error("el nombre no es unico");
        return false;
      }else{
        return true;
      }

    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if (!isUniqueFullName(fullName)) { 
          return false;
        }

        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    // Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {

      if ( isDead ) return 1500;

      if ( isSeparated ) return 2500;
      
      return ( isRetired ) ? 3000 : 4000
        
    }
    


})();




