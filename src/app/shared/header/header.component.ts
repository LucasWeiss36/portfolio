import { Component, HostListener } from '@angular/core';
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
    const language = this.portfolioService.getLanguageFromSessionStorage();
    this.translate.setDefaultLang(`${language}`);
  }
  menuIsOpen: boolean = false;
  hideBurgerMenu: boolean = true;

  ngOnInit() {
    this.updateMenu(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(ev: UIEvent) {
    this.updateMenu((ev.target as Window).innerWidth);
  }

  private updateMenu(width: number) {
    if (width >= 810) {
      this.menuIsOpen = true;
      this.hideBurgerMenu = true;
    } else {
      this.menuIsOpen = false;
      this.hideBurgerMenu = false;
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.portfolioService.changeLanguage(lang);
  }

  toggleBurgerMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
