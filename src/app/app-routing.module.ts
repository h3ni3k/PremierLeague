import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from './resolvers/data.resolver';

const routes: Routes = [
  {
    path: 'ranking',
    loadChildren: () =>
      import('./components/ranking/ranking.module').then(
        (m) => m.RankingModule
      ),
    resolve: { data: DataResolver },
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
