import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamComponent } from './my-team/my-team.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [MyTeamComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class TrainersModule { }
