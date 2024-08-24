import { NgFor, NgStyle, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { IPreviewPosition, IUser } from '../../interfaces';
import { renderer2Utility } from '../../utilities/renderer2.utility';
import { NumberFormatterPipe } from '../../pipes/numberFormatter.pipe';

@Component({
  selector: 'app-preview-component',
  standalone: true,
  imports: [NgStyle, NgTemplateOutlet, NgFor, NumberFormatterPipe],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
})
export class PreviewComponent implements AfterViewInit {
  @Input({ required: true }) public userData!: IUser;
  @Input() public position!: IPreviewPosition;
  @ViewChild('outlet', { static: true })
  private _outlet!: ElementRef<HTMLDivElement>;
  private _renderer2Utility = renderer2Utility();

  constructor() {}

  ngAfterViewInit(): void {
    this._pickPlacementPosition();
  }

  private _pickPlacementPosition(): void {
    const { zone, hostCenterX, hostCenterY } = this.position;
    const { height: hostHeight, width: hostWidth } =
      this._outlet.nativeElement.getBoundingClientRect() || {};
    switch (zone) {
      case 'a':
        return this._placeInZone(
          hostCenterX - hostWidth,
          hostCenterY - hostHeight
        );
      case 'b':
        return this._placeInZone(hostCenterX, hostCenterY - hostHeight);
      case 'c':
        return this._placeInZone(hostCenterX - hostWidth, hostCenterY);
      case 'd':
        return this._placeInZone(hostCenterX, hostCenterY);
    }
  }

  private _placeInZone(left: number, top: number): void {
    this._renderer2Utility(this._outlet.nativeElement, 'left', `${left}px`);
    this._renderer2Utility(this._outlet.nativeElement, 'top', `${top}px`);
  }
}
