import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseUserCardComponent } from '../base-user-card.component';
import { NgStyle } from '@angular/common';
import { PreviewDirective } from '../../../directives/preview.directive';
import { PreviewComponent } from '../../preview-component/preview-component.component';

@Component({
  selector: 'lib-small-user-card',
  standalone: true,
  imports: [NgStyle, PreviewDirective, PreviewComponent],
  templateUrl: './small-user-card.component.html',
  styleUrl: './small-user-card.component.scss',
})
export class SmallUserCardComponent extends BaseUserCardComponent {
  @ViewChild('outletAnchorElement', { static: true, read: ViewContainerRef })
  public outletAnchorElementRef!: ViewContainerRef;
  @ViewChild('outerOutletParent', { static: true, read: ViewContainerRef })
  public outerOutletParentRef!: ViewContainerRef;
}
