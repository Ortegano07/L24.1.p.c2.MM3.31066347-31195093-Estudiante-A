import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Cl_Becado extends Cl_Estudiante{
    constructor(nombre, acumnotas, cantmaterias){
        super(nombre, acumnotas, cantmaterias);
    }

    montoBeca(){
        if (this.promedio() > 15){
            return 30;
        }
        else if (this.promedio() == 10){
            return 20;
        }
        else if (this.promedio() < 10){
            return "no le corresponde beca";
        }
    }
}