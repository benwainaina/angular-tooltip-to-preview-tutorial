import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { IPreviewPosition, IUser } from '../interfaces';
import { PreviewComponent } from '../components/preview-component/preview.component';

@Directive({
  selector: '[previewDirective]',
  standalone: true,
})
export class PreviewDirective implements OnInit {
  @Input({ required: true }) public userData!: IUser;
  @Input({ required: true }) public outletAnchorElement!: any;
  @Input({ required: true }) public parentAnchor!: string;
  @Input() public snapToElementRef: any;

  private _hostElement: ElementRef<HTMLDivElement> = inject(ElementRef);
  private _timeoutRef!: NodeJS.Timeout;

  ngOnInit(): void {
    this._listenForHoverOnHost();
  }

  private _listenForHoverOnHost(): void {
    this._hostElement.nativeElement.addEventListener('mouseenter', (ev) => {
      this._timeoutRef = setTimeout(() => {
        this._attachPreview(
          this._calculatePreviewPlacement(
            this._hostElement.nativeElement.getBoundingClientRect()
          )
        );
      }, 500);
    });

    this._hostElement.nativeElement.addEventListener('mouseleave', (ev) =>
      this._detachPreview()
    );
  }

  private _calculatePreviewPlacement(domRect: DOMRect): IPreviewPosition {
    const {
      x: hostX,
      y: hostY,
      height: hostHeight,
      width: hostWidth,
    } = domRect;
    const {
      width: listWidth = 0,
      height: listHeight = 0,
      x: listStartX = 0,
      y: listStartY = 0,
    } = this._hostElement.nativeElement
      .closest(this.parentAnchor)
      ?.getBoundingClientRect() || {};

    const listCenterX = listStartX + listWidth / 2;
    const listCenterY = listStartY + listHeight / 2;
    let placementPosition: IPreviewPosition = {
      zone: 'd',
      hostCenterY: hostY + hostHeight / 2,
      hostCenterX: hostX + hostWidth / 2,
    };
    if (hostX < listCenterX && hostY < listCenterY) {
      placementPosition.zone = 'd';
    } else if (hostX < listCenterX && hostY > listCenterY) {
      placementPosition.zone = 'b';
    } else if (hostX > listCenterX && hostY < listCenterY) {
      placementPosition.zone = 'c';
    } else if (hostX > listCenterX && hostY > listCenterY) {
      placementPosition.zone = 'a';
    }
    if (this.snapToElementRef) {
      /**
       * if there is an anchor to snap to, we snap to it
       */
      const {
        x: snapToX,
        y: snapToY,
        height: snapToHeight,
      } = this.snapToElementRef.element.nativeElement.getBoundingClientRect();
      placementPosition.hostCenterX = snapToX;
      placementPosition.hostCenterY =
        snapToY +
        (placementPosition.zone === 'c' || placementPosition.zone === 'd'
          ? snapToHeight
          : 0);
    }
    return placementPosition;
  }

  private _attachPreview(placement: IPreviewPosition): void {
    const componentInstance =
      this.outletAnchorElement.createComponent(PreviewComponent);
    componentInstance.instance.userData = this.userData;
    componentInstance.instance.position = placement;
    componentInstance.changeDetectorRef.detectChanges();
  }

  private _detachPreview(): void {
    clearTimeout(this._timeoutRef);
    this.outletAnchorElement.remove();
  }
}
