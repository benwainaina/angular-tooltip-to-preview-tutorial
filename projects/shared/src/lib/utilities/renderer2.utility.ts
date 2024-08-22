import { inject, Renderer2 } from '@angular/core';

export const renderer2Utility = () => {
  const renderer2: Renderer2 = inject(Renderer2);

  return (element: HTMLElement, style: string, value: any) =>
    renderer2.setStyle(element, style, value);
};
