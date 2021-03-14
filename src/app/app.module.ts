import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateOneComponent } from './components/templates/template-one/template-one.component';
import { TemplateTwoComponent } from './components/templates/template-two/template-two.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PictureBoxComponent } from './components/elements/picture-box/picture-box.component';
import { ColorBoxComponent } from './components/elements/color-box/color-box.component';
import { AddOnsBoxComponent } from './components/elements/add-ons-box/add-ons-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateOneComponent,
    TemplateTwoComponent,
    PictureBoxComponent,
    ColorBoxComponent,
    AddOnsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
