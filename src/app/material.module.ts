import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatSliderModule 
];


@NgModule({
  declarations: [],
  imports: [
    modules,
    CommonModule
  ],
  exports:[modules]
})
export class MaterialModule { }
