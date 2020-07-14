import { Component, HostListener, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Project { description: string; imgpath: string; title: string; cols: number; galleryimgs: string}
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
  projects$: Observable<Project[]>;
  tagFilter$: BehaviorSubject<string>;

  screenWidth: number;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {
    this.tagFilter$ = new BehaviorSubject('showall');
    this.projects$ = this.tagFilter$.pipe(
      switchMap(tag =>
        this.afs.collection<Project>('projects', ref => ref.orderBy('id','desc')).valueChanges()
      )
    );
    this.getScreenSize();
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
