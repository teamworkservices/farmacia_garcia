import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/shared/models/laboratorio';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
import { LaboratorioService } from '../../../services/laboratorio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-laboratorio',
  templateUrl: './crear-laboratorio.component.html',
  styleUrls: ['./crear-laboratorio.component.css']
})
export class CrearLaboratorioComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,private laboratorioService:LaboratorioService, public dialogRef: MatDialogRef<CrearLaboratorioComponent>) {
    this.form = this.fb.group({
      codigoLabCtrl: ['', [Validators.required, Validators.maxLength(3)]],
      nombreLabCtrl: ['', [Validators.required, Validators.maxLength(20)]],
    })
   }

  ngOnInit(): void {
  }


  
  agregarLaboratorio(){
    if(this.form.valid){
      let laboratorio=new Laboratorio();
      laboratorio.codigoLab=this.form.value['codigoLabCtrl'];
      laboratorio.nombreLab=this.form.value['nombreLabCtrl'];

     laboratorio=this.laboratorioService.agregarLaboratorio(laboratorio
        );  
        this.dialogRef.close(laboratorio);  }
  }
  confirmModal(){

    Swal.fire({
      title: 'Correcto',
      text: 'Laboratorio agregado con éxito!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
   
  }

}
