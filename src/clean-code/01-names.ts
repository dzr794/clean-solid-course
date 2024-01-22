(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, deleteThisFile: false },
        { id: 2, deleteThisFile: false },
        { id: 3, deleteThisFile: true },
        { id: 4, deleteThisFile: false },
        { id: 5, deleteThisFile: false },
        { id: 7, deleteThisFile: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.deleteThisFile );

    // Malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const filesInDirectory:number = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const studentMaxClasses = 6;


})();



