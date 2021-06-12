import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoblockComponent } from './components/infoblock/infoblock.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { InfocardComponent } from './components/infocard/infocard.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoblockComponent,
    TopbarComponent,
    InfocardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
