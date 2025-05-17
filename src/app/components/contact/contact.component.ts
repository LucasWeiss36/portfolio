import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
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

  mailTest = true;
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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
			setTimeout(() => {
				this.isSuccess = false;
			}, 3000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete');
            this.isSuccess = true;
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
	  this.isSuccess = true;
      ngForm.resetForm();
	  setTimeout(() => {
		this.isSuccess = false;
	}, 3000);
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
}
