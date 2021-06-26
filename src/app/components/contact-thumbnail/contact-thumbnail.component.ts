import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-thumbnail',
  templateUrl: './contact-thumbnail.component.html',
  styleUrls: ['./contact-thumbnail.component.css'],
})
export class ContactThumbnailComponent implements OnInit {
  @Input()
  name!: string;
  tName: string | undefined;
  bColor: string | undefined;
  colorset = ['#00e4f1', '#ff9362', '#ff5b74', '#eff395', '#01babf'];
  constructor() {}

  ngOnInit(): void {
    let n = this.name.split(' ');
    let shortName = n[0][0] + n[1][0];
    this.tName = shortName;
    this.bColor = this.colorset[
      Math.floor(Math.floor(Math.random() * this.colorset.length))
    ];
  }
}
