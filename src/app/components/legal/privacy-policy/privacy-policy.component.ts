import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  private translate = inject(TranslateService);
  private portfolio = inject(PortfolioService);

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    const lang = this.portfolio.getLanguageFromSessionStorage();
    this.translate.setDefaultLang('en');
    
  } 
}
