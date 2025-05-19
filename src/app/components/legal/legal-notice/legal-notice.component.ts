import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../../shared/footer/footer.component";
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
