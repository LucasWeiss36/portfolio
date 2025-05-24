import {
	AfterViewInit,
	Component,
	ElementRef,
	QueryList,
	ViewChildren,
	inject,
	OnInit,
  } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './shared/header/header.component';
  import { FooterComponent } from './shared/footer/footer.component';
  import { TranslateService } from '@ngx-translate/core';
  import { PortfolioService } from './services/portfolio.service'; // ggf. Pfad anpassen
  
  @Component({
	selector: 'app-root',
	standalone: true,
	imports: [
	  CommonModule,
	  RouterOutlet,
	  HeaderComponent,
	  FooterComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
  })
  export class AppComponent implements AfterViewInit, OnInit {
	title = 'Lucas Weiß';
  
	private translate = inject(TranslateService);
	private portfolioService = inject(PortfolioService);
  
	@ViewChildren('boxElement') boxElements!: QueryList<ElementRef>;
  
	ngOnInit(): void {
	  const savedLang = this.portfolioService.getLanguageFromSessionStorage();
	  this.translate.setDefaultLang('en');
  
	  this.portfolioService.currentLanguage$.subscribe((lang) => {
		this.translate.use(lang);
	  });
	}
  
	ngAfterViewInit(): void {
	  const observer = new IntersectionObserver(
		(entries) => {
		  entries.forEach((entry) => {
			if (entry.isIntersecting) {
			  (entry.target as HTMLElement).classList.add('visible');
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
  