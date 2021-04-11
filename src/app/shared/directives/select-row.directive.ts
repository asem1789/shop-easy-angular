import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { By } from 'protractor';

@Directive({
  selector: '[mySelectRow]',
})
export class SelectRowDirective implements OnInit {
  el!: HTMLElement;
  @Input() first!: boolean;
  current!: HTMLElement;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.first) {
      this.el = this.elRef.nativeElement;
      this.selectRow(this.el);
    }
  }

  selectRow(el: HTMLElement) {
    this.renderer.addClass(el, 'row-selected');
  }

  @HostListener('click') onClick() {
    this.el = this.elRef.nativeElement;
    let nodeList: NodeList = this.elRef.nativeElement.parentElement.childNodes;
    nodeList.forEach((el: any) => {
      let isHasClass = el.classList?.contains('row-selected');
      if (isHasClass) {
        this.renderer.removeClass(el, 'row-selected');
      }
    });

    this.renderer.addClass(this.el, 'row-selected');
  }
}
