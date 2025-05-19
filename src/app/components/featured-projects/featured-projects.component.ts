import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjectsComponent {
  projects = [
    {
      name: 'Join',
      technologies: [
        { name: 'HTML', imgSrc: 'assets/icons/colored/HTML.svg' },
        { name: 'CSS', imgSrc: 'assets/icons/colored/CSS.svg' },
        { name: 'JavaScript', imgSrc: 'assets/icons/colored/javaScript.svg' },
        { name: 'Firebase', imgSrc: 'assets/icons/colored/firebase.svg' },
      ],
      image: 'join.png',
	  githubLink: 'https://github.com/LucasWeiss36/join',
	  liveLink: 'http://join.lucas-weiss.de/',
    },
    {
      name: 'El Pollo Loco',
      technologies: [
        { name: 'HTML', imgSrc: 'assets/icons/colored/HTML.svg' },
        { name: 'CSS', imgSrc: 'assets/icons/colored/CSS.svg' },
        { name: 'JavaScript', imgSrc: 'assets/icons/colored/javaScript.svg' },
      ],
      image: 'el_pollo_loco.png',
	  githubLink: 'https://github.com/LucasWeiss36/El-Polo-Loco',
	  liveLink: 'http://el-pollo-loco.lucas-weiss.de/',
    }
  ];

  clickedIndex: number | null = null;
  hoveredIndex: number | null = null;

  showHoveredProject(index: number) {
    this.hoveredIndex = index;
  }

  hideHoveredProject() {
    this.hoveredIndex = null;
  }
  showClickedProject(index: number): void {
    this.clickedIndex = index;
    document.body.style.overflow = 'hidden';
  }

  hideClickedProject(): void {
    this.clickedIndex = null;
    document.body.style.overflow = '';
  }

  nextProject() {
    if (this.clickedIndex != null) {
      this.clickedIndex++;
    }
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
