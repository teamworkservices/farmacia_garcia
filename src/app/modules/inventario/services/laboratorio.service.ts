import { Injectable } from '@angular/core';
import { Laboratorio } from 'src/app/shared/models/laboratorio';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {


laboratorioDatos:Laboratorio[]=[{
    id:1, nombreLab:'	Bio Pharm',codigoLab:'001'
  },{  id:2, nombreLab:'Barly S.A',codigoLab:'002'},
  {id: 3, nombreLab: '	Alcames ', codigoLab: '003'},];

  constructor() { }

  
  getLaboratorios():Laboratorio[]{
    return this.laboratorioDatos;
  }
  agregarLaboratorio(laboratorio:Laboratorio):Laboratorio{
   
    laboratorio.id=this.laboratorioDatos.length+1;
    this.laboratorioDatos.push(laboratorio);
    return laboratorio;

  }


 editarLaboratorio(laboratorio:Laboratorio):Laboratorio{
  let indexLaboratorio=this.laboratorioDatos.findIndex(item=>item.id==laboratorio.id);
Object.assign(this.laboratorioDatos[indexLaboratorio]=laboratorio);
  return laboratorio;
 }


eliminarLaboratorio(id:number){
  this.laboratorioDatos=this.laboratorioDatos.filter(item=>item.id!=id);
  }
}
