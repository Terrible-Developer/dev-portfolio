import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio';
  overviewString: String = "Victor Bruno Paro" + "\n\n" + "29/04/1998"

  globalTranslation = false;

  changeLanguage(e): void {
    this.globalTranslation = !this.globalTranslation;
  }
}
