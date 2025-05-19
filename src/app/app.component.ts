import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { AtfComponent } from './components/atf/atf.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    AtfComponent,
    AboutMeComponent,
    MySkillsComponent,
    FeaturedProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  @ViewChildren('boxElement') boxElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            //   observer.unobserve(entry.target); // Animation nur einmal pro Element
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
