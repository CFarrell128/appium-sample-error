import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { SelectMissionRoutingModule } from './select-mission-routing.module';
import { SelectMissionComponent } from './select-mission.component';

@NgModule({
    imports: [
        SelectMissionRoutingModule
    ],
    declarations: [
        SelectMissionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SelectMissionModule { }
