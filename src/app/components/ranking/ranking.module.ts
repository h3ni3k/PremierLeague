import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';
import { TeamListComponent } from '../team-list/team-list.component';
import { TeamListItemComponent } from '../team-list-item/team-list-item.component';

@NgModule({
  declarations: [RankingComponent, TeamListComponent, TeamListItemComponent],
  imports: [CommonModule, RankingRoutingModule],
})
export class RankingModule {}
