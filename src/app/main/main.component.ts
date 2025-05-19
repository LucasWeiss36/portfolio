import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { AtfComponent } from '../components/atf/atf.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { MySkillsComponent } from '../components/my-skills/my-skills.component';
import { FeaturedProjectsComponent } from '../components/featured-projects/featured-projects.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, AtfComponent, AboutMeComponent, MySkillsComponent, FeaturedProjectsComponent, TestimonialsComponent, ContactComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
