import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Components
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  // declarations: [
  //   MatToolbarModule
  // ],
  exports: [
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModulesModule { }
