export class Laboratorio {
    id!: number;
    codigoLab!: string;
    nombreLab!: string;
   
  
    public constructor(partial?: Partial<Laboratorio>) {
      Object.assign(this, partial);
    }
}