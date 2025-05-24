import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };
  binding: any;

  mailTest = false;
  isChecked = false;
  isSuccess = false;

  post = {
    endPoint: 'https://lucas-weiss.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  email: string = '';
  message: string = '';
  isEmailValid: boolean = true;
  isFormSubmitted: boolean = false;

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  onEmailChange() {
    this.isEmailValid = this.validateEmail(this.email);
  }

  onSubmit(ngForm: NgForm) {
    if (this.validateEmail(this.email) && this.message.trim().length > 0) {
      // Hier würde die Logik zum Senden der E-Mail implementiert werden
      this.isFormSubmitted = true;
      this.email = '';
      this.message = '';
      ngForm.resetForm();
    }
  }
  @ViewChildren('boxElement') boxElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            observer.unobserve(entry.target); // Animation nur einmal pro Element
          }
        });
      },
      { threshold: 0.1 }
    );

    this.boxElements.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }

  isValidEmail(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  }
}
