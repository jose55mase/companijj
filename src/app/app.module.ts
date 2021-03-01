import { BrowserAnimationsModule }   from "@angular/platform-browser/animations";
import { NgModule }                  from '@angular/core';
import { RouterModule }              from '@angular/router';
import { ToastrModule }              from "ngx-toastr";
import { ReactiveFormsModule,
  FormsModule }                      from '@angular/forms';


import { SidebarModule }              from './sidebar/sidebar.module';
import { FooterModule }               from './shared/footer/footer.module';
import { NavbarModule}                from './shared/navbar/navbar.module';
import { FixedPluginModule}           from './shared/fixedplugin/fixedplugin.module';


import { AppComponent }               from './app.component';
import { AppRoutes }                  from './app.routing';

import { AdminLayoutComponent }       from './layouts/admin-layout/admin-layout.component';
import { MaterialModule }             from './angularMaterial/angular-material.module';
import { ComponentModule }            from './component/component.module';

import { LoadComponent }              from './load/load.component';
import { AngularFireModule }          from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule }     from '@angular/fire/firestore';

import { environment }                from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoadComponent,
  ],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    ComponentModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
