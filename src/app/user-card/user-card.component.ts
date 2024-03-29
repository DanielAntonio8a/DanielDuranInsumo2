// user-card.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() userName: string="";
  @Input() profileImage: string="";
  @Input() additionalInfo: string="";
}
