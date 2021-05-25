import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoblock',
  templateUrl: './infoblock.component.html',
  styleUrls: ['./infoblock.component.sass']
})
export class InfoblockComponent implements OnInit {

  //constructor() { }
  @Input('sectionTitle')
  sectionTitle = '';
  @Input('sectionContent')
  sectionContent = '';

  ngOnInit(): void {
  }

}
