import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule, 
    MatToolbarModule, 
    DragDropModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
