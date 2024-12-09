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
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    },
    { name: 'El Pollo Loco', technologies: ['HTML', 'CSS', 'JavaScript'] },
    { name: 'DA Bubble', technologies: ['Angular', 'Firebase', 'TypeScript'] },
  ];
}
