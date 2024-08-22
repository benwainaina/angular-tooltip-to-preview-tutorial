import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces';

@Component({
  template: '',
})
export class BaseUserCardComponent {
  @Input({ required: true }) public userData!: IUser;
}
