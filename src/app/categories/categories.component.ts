import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

export interface Category {
  imgsrc: string;
  cols: number;
  title: string;
  icon: string;
  route: string;
  id?: string
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;
  snapshot: any;

  constructor(private afs: AngularFirestore, private route: Router) {
  }

  ngOnInit() {
    this.categoryCollection = this.afs.collection('categories', ref => ref.orderBy('order'))
    this.categories = this.categoryCollection.valueChanges({idField: 'id'})
  }

}
