import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio';

  globalTranslation = false;

  changeLanguage(e): void {
    e.preventDefault();
    this.globalTranslation = !this.globalTranslation;
  }
}
