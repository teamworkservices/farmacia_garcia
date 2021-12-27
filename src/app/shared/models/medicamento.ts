import { Dosificacion } from "./dosificacion";
import { Laboratorio } from "./laboratorio";

export class Medicamento {
    idMedicamento!: number;
    nombreMedicamento!: string;
    codigoCompra!: string;
    nomLaboratorio!: string;
    cantidad!: string;
    precio!: string;
    dosificacion!: string;

  
    public constructor(partial?: Partial<Medicamento>) {
      Object.assign(this, partial);
    }
}