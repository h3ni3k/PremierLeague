import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { ResponseBody } from '../../Types';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  @Input() data!: ResponseBody;
  // isLoaded: boolean = false;

  constructor() {
    // console.log(this.data);
  }

  ngOnInit(): void {
    // console.log(this.data.data.season);
  }
}
