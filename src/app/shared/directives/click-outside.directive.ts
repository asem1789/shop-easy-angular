import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[myClickOutside]',
})
export class ClickOutsideDirective {
  @Output() offClick = new EventEmitter();

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event.path'])
  public onGlobalClick(targetElementPath: Array<any>) {
    let elementRefInPath = targetElementPath.find(
      (e) => e === this.elRef.nativeElement
    );
    if (!elementRefInPath) {
      this.offClick.emit();
    }
  }
}
