import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Project { description: string; imgalt: string; imgpath: string; tagName: Array<any>; title: string; }
export interface ProjectID extends Project { projectId: string; }

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  private projectsCollection: AngularFirestoreCollection<Project>;
  projects: Observable<ProjectID[]>;
  constructor(private afs: AngularFirestore) {
    this.projectsCollection = this.afs.collection<Project>('projects');
    this.projects = this.projectsCollection.snapshotChanges()
    .pipe(
      map(projectSnaps => projectSnaps.map(project => {
        const projectData = project.payload.doc.data();
        const projectId = project.payload.doc.id;
        return {projectId, ...projectData}
      }))
    );
  }
}
