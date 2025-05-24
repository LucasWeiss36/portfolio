import { Component } from '@angular/core';
import { AtfComponent } from '../components/atf/atf.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { MySkillsComponent } from '../components/my-skills/my-skills.component';
import { FeaturedProjectsComponent } from '../components/featured-projects/featured-projects.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { ContactComponent } from '../components/contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AtfComponent, AboutMeComponent, MySkillsComponent, FeaturedProjectsComponent, TestimonialsComponent, ContactComponent,TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


	scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
}
