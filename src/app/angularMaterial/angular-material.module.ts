import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
    imports: [
      MatSliderModule
      ,MatSidenavModule
      ,MatIconModule
      ,MatButtonModule
      ,MatMenuModule
      ,MatToolbarModule
      ,MatTableModule
      ,MatPaginatorModule
      ,MatButtonToggleModule
      ,MatTabsModule
      ,MatProgressBarModule

    ],
    exports: [
      MatSliderModule
      ,MatSidenavModule
      ,MatIconModule
      ,MatButtonModule
      ,MatMenuModule
      ,MatToolbarModule
      ,MatTableModule
      ,MatPaginatorModule
      ,MatButtonToggleModule
      ,MatTabsModule
      ,MatProgressBarModule
    ]
})
export class MaterialModule{}
