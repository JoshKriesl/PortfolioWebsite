import { Component, OnInit, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Project {
  imgsrc: string;
  title: string;
  galleryimgs?: Array<Img>;
  route?: string;
}
export interface DialogData {
  imgs: Object;
}
export interface Img {
  path: String;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() docID: string;

  categoryCollection: AngularFirestoreCollection<Project>;
  categories: Observable<Project[]>;

  constructor(public dialog: MatDialog, private afs: AngularFirestore) { }

  ngOnInit() {
    this.categoryCollection = this.afs.collection('categories' + this.docID + '/projects')
    this.categories = this.categoryCollection.valueChanges()
  }

  checkOld(imgs: Array<Img>): void {
    if (imgs != null)
      this.openDialog(imgs)
  }

  openDialog(imgs: Array<Img>): void {
    const dialogRef = this.dialog.open(GalleryModal, {
      minWidth: '85vw',
      maxHeight: '90vh',
      data: {imgs: imgs},
      panelClass: 'custom-modalbox'
    });
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
