import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  pieceTitle = 'Sample';

  public inEditMode = false;

  // this is for the form to edit title on the fly
  onEnter(pieceTitle: string) { this.pieceTitle = pieceTitle; this.inEditMode = !this.inEditMode; }

  // button to turn on edit mode
  public editMode() {
    this.inEditMode = !this.inEditMode;
    console.log(this.inEditMode);
  }

  ngOnInit() {
  }

}
