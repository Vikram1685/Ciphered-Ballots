import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingComponent } from './voting/voting.component';
import { CastvoteComponent } from './castvote/castvote.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: "",
    component: VotingComponent
  },
  {
    path: "castvote",
    component: CastvoteComponent
  },
  {
    path: "results",
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
