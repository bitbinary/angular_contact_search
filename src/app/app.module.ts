import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactThumbnailComponent } from './components/contact-thumbnail/contact-thumbnail.component';

@NgModule({
  declarations: [AppComponent, ContactItemComponent, ContactThumbnailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
