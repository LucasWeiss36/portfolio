import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './components/legal/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './components/legal/legal-notice/legal-notice.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
	  scrollPositionRestoration: 'enabled',
	  anchorScrolling: 'enabled',
	  scrollOffset: [0, 0]
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
