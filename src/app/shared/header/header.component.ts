import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public portfolioService: PortfolioService,
    private translate: TranslateService
  ) {
    let language = this.portfolioService.getLanguageFromSessionStorage();
    this.translate.setDefaultLang(`${language}`);
    this.portfolioService.changeLanguage(`${language}`);
  }

  menuIsOpen: boolean = false;



  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.portfolioService.changeLanguage(lang);
  }
}
