import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonialsKeys = ['first', 'second', 'third'];

  currentIndex = 0;
  isChanging = false;

  getPrevIndex(): number {
    return (this.currentIndex - 1 + this.testimonialsKeys.length) % this.testimonialsKeys.length;
  }

  getNextIndex(): number {
    return (this.currentIndex + 1) % this.testimonialsKeys.length;
  }

  changeSlide(direction: 'next' | 'prev') {
    if (this.isChanging) return;
    this.isChanging = true;
    this.currentIndex = this.getIndexByDirection(direction);
    setTimeout(() => {
      this.isChanging = false;
    }, 500);
  }

  getIndexByDirection(direction: 'next' | 'prev') {
    return direction === 'next' ? this.getNextIndex() : this.getPrevIndex();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  @ViewChildren('boxElement') boxElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            observer.unobserve(entry.target); // Animation nur einmal pro Element
          }
        });
      },
      { threshold: 0.1 }
    );

    this.boxElements.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }
}
