import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.sass']
})
export class InfocardComponent implements OnInit {

  @Input('isTranslated')
  isTranslated: false;

  currentAge = new Date().getFullYear() - 1998;

  ngOnInit(): void {
  }

}
