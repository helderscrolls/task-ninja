import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  FieldValue,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  owner: string | null | undefined;
  title: string;
  description: string;
  type: Category;
  createdAt?: FieldValue;
  updatedAt?: FieldValue;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  getTasks(): Observable<Task[]> {
    const tasksRef = collection(this.firestore, 'tasks');
    const tasksRefQuery = query(tasksRef, orderBy('createdAt', 'desc'));

    return collectionData(tasksRefQuery, { idField: 'id' }) as Observable<
      Task[]
    >;
  }

  getOwnedTasks(): Observable<Task[]> {
    const currentUser = this.auth.currentUser?.displayName;
    const tasksRef = collection(this.firestore, 'tasks');
    const tasksRefQuery = query(
      tasksRef,
      where('owner', '==', currentUser),
      limit(3),
      orderBy('createdAt', 'desc')
    );

    return collectionData(tasksRefQuery, { idField: 'id' }) as Observable<
      Task[]
    >;
  }

  getTaskById(id: string): Observable<Task> {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return docData(taskDocRef, { idField: 'id' }) as Observable<Task>;
  }

  addTask(task: Task) {
    console.log('Current User', this.auth.currentUser);
    console.log('TASK ON SERVICE: ', task);
    const timestampedTask: Task = {
      ...task,
      createdAt: serverTimestamp(),
      owner: this.auth.currentUser?.displayName,
    };

    const tasksRef = collection(this.firestore, 'tasks');
    return addDoc(tasksRef, timestampedTask);
  }

  deleteTask(id: string) {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return deleteDoc(taskDocRef);
  }

  updateTask(task: Task, id: string) {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return updateDoc(taskDocRef, {
      title: task.title,
      description: task.description,
      type: task.type,
      updatedAt: serverTimestamp(),
    });
  }

  assignTask(id: string) {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);

    return updateDoc(taskDocRef, {
      owner: this.auth.currentUser?.displayName,
    });
  }
}
