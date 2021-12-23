import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatIconModule} from '@angular/material/icon';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,ReactiveFormsModule,
    MatFormFieldModule,MatInputModule

  ],
  exports:[
    MatGridListModule,
MatIconModule,
MatTabsModule,
MatToolbarModule,
MatTableModule,
MatDialogModule,
FormsModule,ReactiveFormsModule,
MatFormFieldModule,
MatInputModule
  ]
})
export class SharedModule { }
