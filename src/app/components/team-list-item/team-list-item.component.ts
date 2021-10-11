import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Standing } from '../../Types';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.css'],
})
export class TeamListItemComponent implements OnInit {
  @Input() standing!: Standing | null;

  constructor() {
    // console.log(this.data);
  }

  ngOnInit(): void {
    // console.log(this.standing);
  }
}
