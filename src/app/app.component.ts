import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser } from '../../projects/shared/src/lib/interfaces';
import { data } from './data';
import { NgFor } from '@angular/common';
import { PreviewDirective } from '../../projects/shared/src/lib/directives/preview.directive';
import { PreviewComponent } from '../../projects/shared/src/lib/components/preview-component/preview-component.component';
import { SmallUserCardComponent } from '../../projects/shared/src/lib/components/cards/small-user-card/small-user-card.component';
import { MediumUserCardComponent } from '../../projects/shared/src/lib/components/cards/medium-user-card/medium-user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    PreviewDirective,
    PreviewComponent,
    SmallUserCardComponent,
    MediumUserCardComponent,
    PreviewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public users: Array<IUser> = data;
}
