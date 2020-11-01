export class Empleado{
    constructor(
        public id:number = null, 
        public nombre:string = null, 
        public apellido:string = null, 
        public direccion:string = null, 
        public telefono:string = null,
        public fechadesde:Date = null,
        public fechahasta:Date = null){

    }
}