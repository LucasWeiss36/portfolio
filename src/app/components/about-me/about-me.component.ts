import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
	imgSrc:string[] = [
		"assets/icons/colored/location_on.svg",
		"assets/icons/colored/cognition.svg",
		"assets/icons/colored/new_releases.svg"
	]
	jsonSrc:string[] =[
		"aboutMe.description.first",
		"aboutMe.description.second",
		"aboutMe.description.third"
		
	]
}
