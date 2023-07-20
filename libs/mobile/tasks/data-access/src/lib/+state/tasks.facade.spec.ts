import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Category, Task } from '../services/task.service';
import * as TasksActions from './tasks.actions';
import { TasksEffects } from './tasks.effects';
import { TasksFacade } from './tasks.facade';
import { TasksEntity } from './tasks.models';
import { TASKS_FEATURE_KEY, TasksState, tasksReducer } from './tasks.reducer';

interface TestSchema {
  tasks: TasksState;
}

const categoryMock: Category = {
  id: 69,
  name: 'Cleaning',
  icon: 'sparkle',
};

const taskArrayMock: Task[] = [
  {
    id: '69',
    owner: 'John Doe',
    type: categoryMock,
    title: 'Clean windows',
    description: 'Clean upstairs windows',
  },
  {
    id: 'Super69',
    owner: 'Karen Doe',
    type: categoryMock,
    title: 'Fix radiators',
    description: 'Fix bedroom radiator',
  },
];

//TODO: Implement better mock
const authMock = {
  auth: jest.fn(),
};

//TODO: Implement better mock
const firestoreMock = {
  firestore: jest.fn(),
};

describe('TasksFacade', () => {
  let facade: TasksFacade;
  let store: Store<TestSchema>;
  const createTasksEntity = (taskEntity: Task): TasksEntity => taskEntity;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TASKS_FEATURE_KEY, tasksReducer),
          EffectsModule.forFeature([TasksEffects]),
        ],
        providers: [
          TasksFacade,
          {
            provide: Firestore,
            useValue: firestoreMock,
          },
          {
            provide: Auth,
            useValue: authMock,
          },
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(TasksFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    xit('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allTasks$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allTasks$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadTasksSuccess` to manually update list
     */
    it('allTasks$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allTasks$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        TasksActions.loadTasksSuccess({
          tasks: [
            createTasksEntity(taskArrayMock[0]),
            createTasksEntity(taskArrayMock[1]),
          ],
        })
      );

      list = await readFirst(facade.allTasks$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
