import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

interface Project {
  imgsrc: string;
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

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.categoryCollection = this.afs.collection('categories' + this.docID + '/projects')
    this.categories = this.categoryCollection.valueChanges()
  }

}
