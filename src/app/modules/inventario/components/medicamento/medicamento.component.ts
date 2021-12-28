import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Medicamento } from 'src/app/shared/models/medicamento';
import Swal from 'sweetalert2';
import { MedicamentoService } from '../../services/medicamento.service';
import { CrearMedicamentoComponent } from './crear-medicamento/crear-medicamento.component';
import { EditarMedicamentoComponent } from './editar-medicamento/editar-medicamento.component';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {


  
  MedicamentosData:Medicamento[]=[];
  displayedColumns: string[]=['idMedicamento','nombreMedicamento','codigoCompra','nomLaboratorio','cantidad','precio','dosificacion'];
  dataSource!: MatTableDataSource<Medicamento>
  constructor(public dialog: MatDialog,public medicamentoService:MedicamentoService) { 

  }

  ngOnInit(): void {
  }

    openCreateDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50%";
      const dialogRef = this.dialog.open(CrearMedicamentoComponent, dialogConfig);
dialogRef.afterClosed().subscribe((result)=>{
  if(!!result){
    this.loadMedicamentos();
    this.loadTableMedicamento();
  }
});
  }
  openEditDialog(medicamento: Medicamento){
    
    const dialogRef = this.dialog.open(EditarMedicamentoComponent, {
      width: "50%",
      data: medicamento,
      panelClass: 'dialog-custom'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        this.loadMedicamentos();
        this.loadTableMedicamento();
      }
    });
  }

  loadTableMedicamento() {
    this.dataSource=new MatTableDataSource<Medicamento>([]);
    this.dataSource.data=this.loadMedicamentos();
  }
  loadMedicamentos() {
    return this.medicamentoService.getMedicamentos();
}

eliminarMedicamento(medicamento: Medicamento){
  Swal.fire({
    title: '¿Deseas eliminar el Laboratorio?',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
  }).then((result) => {
    if (result.isConfirmed) {
      this.medicamentoService.eliminarMedicamento(medicamento.idMedicamento);
      this.loadTableMedicamento();
      Swal.fire('Saved!', '', 'success')
    }
  })
} 

}
