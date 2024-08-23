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
  // username outlets
  @ViewChild('usernameOutlet', { static: true, read: ViewContainerRef })
  public usernameOutletRef!: ViewContainerRef;

  // username snapto anchor
  @ViewChild('usernameSnapTo', { static: true, read: ViewContainerRef })
  public outerOutletParentRef!: ViewContainerRef;

  // avatar outlet
  @ViewChild('avatarOutlet', { static: true, read: ViewContainerRef })
  public avatarOutletRef!: ViewContainerRef;

  // avatar snapto anchor
  @ViewChild('avatarSnapTo', { static: true, read: ViewContainerRef })
  public avatarSnapToRef!: ViewContainerRef;
}
