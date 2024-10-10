export default class Cl_Estudiante {
    constructor(nombre, acumnotas, cantmaterias){
        this.nombre = nombre;
        this.acumnotas = acumnotas;
        this.cantmaterias = cantmaterias;
    }

    promedio(){
        return this.acumnotas / this.cantmaterias;
    }
}