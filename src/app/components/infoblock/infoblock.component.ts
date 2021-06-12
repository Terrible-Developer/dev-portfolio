import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoblock',
  templateUrl: './infoblock.component.html',
  styleUrls: ['./infoblock.component.sass']
})
export class InfoblockComponent implements OnInit {

  @Input('sectionTitle')
  sectionTitle = '';
  @Input('sectionTitleEN')
  sectionTitleEN = '';
  @Input('sectionContent')
  sectionContent = '';
  @Input('sectionContentEN')
  sectionContentEN = '';
  @Input('isTranslated')
  isTranslated = false;

  ngOnInit(): void {
    //console.log(this.isTranslated);
  }

}
