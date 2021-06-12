import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  languageToggleButton: false;

  @Input('isTranslated')
  isTranslated = false;
  @Output()
  languageToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeLanguageOnClick(): void {
    this.languageToggle.emit(!this.languageToggleButton);
  }
}
