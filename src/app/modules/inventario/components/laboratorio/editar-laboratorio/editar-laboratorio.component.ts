import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Laboratorio } from 'src/app/shared/models/laboratorio';
import Swal from 'sweetalert2';
import { LaboratorioService } from '../../../services/laboratorio.service';

@Component({
  selector: 'app-editar-laboratorio',
  templateUrl: './editar-laboratorio.component.html',
  styleUrls: ['./editar-laboratorio.component.css']
})
export class EditarLaboratorioComponent implements OnInit {

 

  form: FormGroup;


  constructor(private fb: FormBuilder, 
    private laboratorioService: LaboratorioService,
    public dialogRef: MatDialogRef<EditarLaboratorioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Laboratorio) {
    
this.form = this.fb.group({
codigoLabCtrl: [data.codigoLab, [Validators.required, Validators.maxLength(3)]],
nombreLabCtrl: [data.nombreLab, [Validators.required, Validators.maxLength(20)]],
})

console.log(data);
}


  ngOnInit(): void {
  }

  editarLaboratorio(){
   
    if (this.form.valid) {
      let laboratorio = new Laboratorio();
      laboratorio.id = this.data.id;
      laboratorio.codigoLab = this.form.value['codigoLabCtrl'];
      laboratorio.nombreLab = this.form.value['nombreLabCtrl'];

      Object.assign(laboratorio, this.laboratorioService.editarLaboratorio(laboratorio));
      this.dialogRef.close(laboratorio);
    }
  }
  
confirmModal(){
  Swal.fire({
    title: 'Correcto',
    text: 'Laboratorio actualizado con éxito!',
    icon: 'success',
    showConfirmButton: false,
    timer: 2000
  })
}



}
