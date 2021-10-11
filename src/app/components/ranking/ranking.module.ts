import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';
import { TeamListComponent } from '../team-list/team-list.component';
import { TeamListItemComponent } from '../team-list-item/team-list-item.component';
import { FilterPipePipe } from 'src/app/pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    RankingComponent,
    TeamListComponent,
    TeamListItemComponent,
    FilterPipePipe,
  ],
  imports: [CommonModule, RankingRoutingModule],
})
export class RankingModule {}
