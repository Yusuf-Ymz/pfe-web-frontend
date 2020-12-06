import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

import {MatTableDataSource} from '@angular/material/table';

const MaterialComponents: any = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatTableDataSource
]
@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ],
})
export class MaterialModule { }
