import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Fontawesome 5
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// All material components module
import { MaterialModulesModule } from './components/material-modules/material-modules.module';


// Components
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageComponent } from './components/page/page.component';
import { TitleComponent } from './components/title/title.component';
import { BarsComponent } from './components/bars/bars.component';
import { NoteComponent } from './components/note/note.component';

// Add an icon to the library for convenient access in other components
library.add(fas, far);

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ToolbarComponent,
    PageComponent,
    TitleComponent,
    BarsComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModulesModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
