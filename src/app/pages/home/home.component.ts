import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  imgs: Object;
}
export interface Img {
  path: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  routePath: string;

  constructor(public dialog: MatDialog, private route: Router) {}

  ngOnInit () {
    this.routePath = this.route.url
  }

  openDialog(imgs: Array<Img>): void {
    const dialogRef = this.dialog.open(GalleryModal, {
      minWidth: '85vw',
      maxHeight: '90vh',
      data: {imgs: imgs},
      panelClass: 'custom-modalbox'
    });
    console.log(imgs);
  }
}

@Component({
  selector: 'gallery-modal',
  templateUrl: 'gallery-modal.component.html',
})
export class GalleryModal {

  constructor(public dialogRef: MatDialogRef<GalleryModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
