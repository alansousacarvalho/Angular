import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  background: string = 'blue';

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','white');
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer2
  ) { }

  onMouseOver() {
    this.backgroundColor = 'blue';
  }

}
