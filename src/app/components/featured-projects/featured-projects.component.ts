import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    },
    {
      name: 'DABubble',
      technologies: [
        { name: 'Angular', imgSrc: 'assets/icons/colored/angular.svg' },
        { name: 'Firebase', imgSrc: 'assets/icons/colored/firebase.svg' },
        { name: 'TypeScript', imgSrc: 'assets/icons/colored/typeScript.svg' },
      ],
      image: 'DA_bubble.png',
    },
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
}
