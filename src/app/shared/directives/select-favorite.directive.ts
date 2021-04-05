import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[mySelectFavorite]',
})
export class SelectFavoriteDirective implements OnInit {
  el!: HTMLElement;
  clicked: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.el = this.elRef.nativeElement;
    // this.renderer.
  }

  @HostListener('mouseover') onHover() {
    this.el.textContent = 'favorite';
    this.renderer.addClass(this.el, 'like-hover');
  }

  @HostListener('mouseout') onHoverOut() {
    if (!this.clicked) {
      this.renderer.removeClass(this.el, 'like-hover');
      this.el.textContent = 'favorite_border';
    }
  }

  @HostListener('click') onToggle() {
    if (!this.clicked) {
      this.renderer.addClass(this.el, 'like-active');
      this.el.textContent = 'favorite';
      this.clicked = true;
    } else {
      this.renderer.removeClass(this.el, 'like-active');
      this.el.textContent = 'favorite_border';
      this.clicked = false;
    }
  }
}
