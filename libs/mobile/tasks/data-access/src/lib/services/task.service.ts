import { Injectable } from '@angular/core';
import {
  FieldValue,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  userId?: string;
  title: string;
  description: string;
  type: string;
  createdAt?: FieldValue;
  updatedAt?: FieldValue;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private firestore: Firestore) {}

  getTasks(): Observable<Task[]> {
    const tasksRef = collection(this.firestore, 'tasks');
    const tasksRefQuery = query(tasksRef, orderBy('createdAt', 'desc'));

    return collectionData(tasksRefQuery, { idField: 'id' }) as Observable<
      Task[]
    >;
  }

  getTaskById(id: string): Observable<Task> {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return docData(taskDocRef, { idField: 'id' }) as Observable<Task>;
  }

  addTask(task: Task) {
    const timestampedTask: Task = {
      ...task,
      createdAt: serverTimestamp(),
    };

    const tasksRef = collection(this.firestore, 'tasks');
    return addDoc(tasksRef, timestampedTask);
  }

  deleteTask(task: Task) {
    const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
    return deleteDoc(taskDocRef);
  }

  updateTask(task: Task) {
    const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(taskDocRef, {
      title: task.title,
      description: task.description,
      type: task.type,
      updatedAt: serverTimestamp(),
    });
  }
}
