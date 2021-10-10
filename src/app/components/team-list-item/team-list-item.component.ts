import { Component, OnInit, Input } from '@angular/core';
import { ResponseBody } from '../../Types';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.css'],
})
export class TeamListItemComponent implements OnInit {
  @Input() data!: ResponseBody;

  constructor() {
    console.log(this.data);
  }

  ngOnInit(): void {}
}
