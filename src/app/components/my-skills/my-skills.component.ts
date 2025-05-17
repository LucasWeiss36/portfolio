import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  technologies = [
    { name: 'HTML', imgSrc: 'assets/icons/HTML.svg' },
    { name: 'CSS', imgSrc: 'assets/icons/CSS.svg' },
    { name: 'JavaScript', imgSrc: 'assets/icons/javaScript.svg' },
    { name: 'Material Design', imgSrc: 'assets/icons/material-design.svg' },
    { name: 'TypeScript', imgSrc: 'assets/icons/typeScript.svg' },
    { name: 'Angular', imgSrc: 'assets/icons/angular.svg' },
    { name: 'Firebase', imgSrc: 'assets/icons/firebase.svg' },
    { name: 'GIT', imgSrc: 'assets/icons/git.svg' },
    { name: 'Rest-API', imgSrc: 'assets/icons/rest-api.svg' },
    { name: 'Scrum', imgSrc: 'assets/icons/scrum.svg' },
    { name: 'Growth Mindset', imgSrc: 'assets/icons/colored/growth-mindset.svg' },
  ];

  interests = [
	{name: "React", imgSrc: 'assets/icons/react.svg'},
	{name: "Vue", imgSrc: 'assets/icons/vue.svg'}
  ]

  hoveredIndex: number | null = null;

  showTooltip(index: number) {
    this.hoveredIndex = index; 
  }

  hideTooltip() {
    this.hoveredIndex = null;
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
