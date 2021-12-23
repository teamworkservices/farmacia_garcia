import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dosificacion } from 'src/app/shared/models/dosificacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DosificacionService {



  dosificacionData:Dosificacion[]=[{
     id:1, nombre:'Hydrogen',descripcion:"Descripcion",codigo:'H'
   },{  id:2, nombre:'Hydro',descripcion:"Descripcion",codigo:'H'},
   {id: 3, nombre: 'Hogen', descripcion: 'Descripcion', codigo: 'H'},];
  constructor() { }

  getDosificaciones():Dosificacion[]{
    return this.dosificacionData;
  }

  agregarDosificacion(dosificacion:Dosificacion):Dosificacion{
   
    dosificacion.id=this.dosificacionData.length+1;
    this.dosificacionData.push(dosificacion);
    return dosificacion;

  }

editarDosificacion(dosificacion:Dosificacion):Dosificacion{
  let indexDosificacion=this.dosificacionData.findIndex(item=>item.id==dosificacion.id);
Object.assign(this.dosificacionData[indexDosificacion]=dosificacion);
  return dosificacion;
}


eliminarDosificacion(id:number){
  this.dosificacionData=this.dosificacionData.filter(item=>item.id!=id);
  }

}
