import { Component, OnInit, Input } from '@angular/core';

import { ResponseBody, Standing } from '../../Types';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  @Input() data!: ResponseBody;
  searchTerm: string = 'ch';
  standings = this.data?.data?.standings;
  filtered = {};

  constructor() {}

  ngOnInit(): void {
    this.data.data.standings.map((standing) => {
      this.filtered = standing.team.name.includes(this.searchTerm);
    });
    console.log(this.filtered);
  }

  getInputVal(val: string) {
    this.searchTerm = val;
  }
}
