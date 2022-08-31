import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatIconModule} from  '@angular/material/icon';
import {MatCheckboxModule} from  '@angular/material/checkbox';
import {MatCardModule} from  '@angular/material/card';
import {MatFormFieldModule} from  '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import {MatRadioModule} from  '@angular/material/radio';
import {MatListModule} from  '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,

    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatSnackBarModule,
    ToastrModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
 
 exports: [MatButtonModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatListModule,
  MatGridListModule,
  FormsModule,
  MatSnackBarModule,
  ToastrModule,
  MatTableModule,
  ReactiveFormsModule,
  
  ],
})
export class MaterialModule { }
