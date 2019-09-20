import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IsLoggedInGuard} from '../authentication/is-logged-in.guard';
import {MyTeamComponent} from './my-team/my-team.component';

const routes: Routes = [
{
  path        : 'team',
  component   : MyTeamComponent,
  canActivate : [IsLoggedInGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class TrainerRoutingModule { }
