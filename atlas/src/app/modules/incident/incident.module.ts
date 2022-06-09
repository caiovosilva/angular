import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IncidentTestComponentComponent } from './components/incident-test-component/incident-test-component.component';

@NgModule({
  declarations: [IncidentTestComponentComponent],
  imports: [SharedModule]
})
export class IncidentModule {}
