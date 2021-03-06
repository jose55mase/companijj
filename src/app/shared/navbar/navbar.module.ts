import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { NgbModule }                from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule }           from 'app/angularMaterial/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule,MaterialModule,FormsModule,
    ReactiveFormsModule, ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {


  constructor(){  }
}
