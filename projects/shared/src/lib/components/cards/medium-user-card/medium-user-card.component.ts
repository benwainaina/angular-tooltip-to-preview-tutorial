import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseUserCardComponent } from '../base-user-card.component';
import { NgStyle } from '@angular/common';
import { PreviewDirective } from '../../../directives/preview.directive';
import { PreviewComponent } from '../../preview-component/preview.component';

@Component({
  selector: 'lib-medium-user-card',
  standalone: true,
  imports: [NgStyle, PreviewDirective, PreviewComponent],
  templateUrl: './medium-user-card.component.html',
  styleUrl: './medium-user-card.component.scss',
})
export class MediumUserCardComponent extends BaseUserCardComponent {
  @ViewChild('outletAnchorElement', { static: true, read: ViewContainerRef })
  public outletAnchorElementRef!: ViewContainerRef;
}
