import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  get displayedKeys() {
    const total = this.testimonialsKeys.length;
    const prevIndex = (this.currentIndex - 1 + total) % total;
    const nextIndex = (this.currentIndex + 1) % total;

    return [
      this.testimonialsKeys[prevIndex], // Zeigt das letzte Element
      ...this.testimonialsKeys,
      this.testimonialsKeys[nextIndex], // Zeigt das erste Element
    ];
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonialsKeys.length) %
      this.testimonialsKeys.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonialsKeys.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
