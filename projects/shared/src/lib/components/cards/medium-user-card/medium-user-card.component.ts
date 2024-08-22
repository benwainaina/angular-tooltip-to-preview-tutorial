import { Component } from '@angular/core';
import { BaseUserCardComponent } from '../base-user-card.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'lib-medium-user-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './medium-user-card.component.html',
  styleUrl: './medium-user-card.component.scss',
})
export class MediumUserCardComponent extends BaseUserCardComponent {}
