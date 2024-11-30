import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private languageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.languageSubject.asObservable();

  constructor() {
    const savedLanguage = sessionStorage.getItem('language') || 'en';
    this.languageSubject.next(savedLanguage);
  }

  changeLanguage(lang: string) {
    sessionStorage.setItem('language', lang);
    this.languageSubject.next(lang);
  }

  getLanguageFromSessionStorage() {
    const lang = sessionStorage.getItem('language') || 'en'; 
    return lang;
  }
}