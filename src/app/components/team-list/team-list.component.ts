import { Component, OnInit, Input } from '@angular/core';

import { ResponseBody } from '../../Types';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  @Input() data!: ResponseBody;
  constructor() {
    console.log(this.data);
  }

  ngOnInit(): void {}
}
