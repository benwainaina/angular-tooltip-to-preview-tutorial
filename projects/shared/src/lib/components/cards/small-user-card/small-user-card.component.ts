import { Component } from '@angular/core';
import { BaseUserCardComponent } from '../base-user-card.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'lib-small-user-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './small-user-card.component.html',
  styleUrl: './small-user-card.component.scss',
})
export class SmallUserCardComponent extends BaseUserCardComponent {}
