import { Injectable } from '@angular/core';

import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { Laboratorio } from 'src/app/shared/models/laboratorio';
import { Medicamento } from 'src/app/shared/models/medicamento';


@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {


  lab=new Laboratorio();
  dosif=new Dosificacion();
  
  MedicamentosData:Medicamento[]=[{
    idMedicamento:1, nombreMedicamento:'	1000',codigoCompra:'001',nomLaboratorio:(this.lab.nombreLab),cantidad:'2',precio:'1000',
    dosificacion: this.dosif.nombre
  }];

  constructor() { 

    }
    
    getMedicamentos():Medicamento[]{
    
      return this.MedicamentosData;
   
  }
  
  agregarMedicamento(medicamento:Medicamento):Medicamento{
   
    medicamento.idMedicamento=this.MedicamentosData.length+1;
    this.MedicamentosData.push(medicamento);
    return medicamento;

  }


 editarMedicamento(medicamento:Medicamento):Medicamento{
  let indexMedicamento=this.MedicamentosData.findIndex(item=>item.idMedicamento==medicamento.idMedicamento);
Object.assign(this.MedicamentosData[indexMedicamento]=medicamento);
  return medicamento;
 }


eliminarMedicamento(id:number){
  this.MedicamentosData=this.MedicamentosData.filter(item=>item.idMedicamento!=id);
  }
}
