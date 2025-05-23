import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './components/legal/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './components/legal/legal-notice/legal-notice.component';
import { MainComponent } from './main/main.component';
export const routes: Routes = [
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: '**', redirectTo: '' },
  { path: '', component: MainComponent }
];
