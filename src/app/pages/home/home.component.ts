import { Component, HostListener, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
export class HomeComponent {

  screenWidth: number;

  constructor(public dialog: MatDialog) {
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenWidth = window.innerWidth;
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
