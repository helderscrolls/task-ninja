import { TasksEntity } from './tasks.models';
import {
  tasksAdapter,
  TasksPartialState,
  initialTasksState,
} from './tasks.reducer';
import * as TasksSelectors from './tasks.selectors';

describe('Tasks Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTasksId = (it: TasksEntity) => it.id;
  const createTasksEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TasksEntity);

  let state: TasksPartialState;

  beforeEach(() => {
    state = {
      tasks: tasksAdapter.setAll(
        [
          createTasksEntity('PRODUCT-AAA'),
          createTasksEntity('PRODUCT-BBB'),
          createTasksEntity('PRODUCT-CCC'),
        ],
        {
          ...initialTasksState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Tasks Selectors', () => {
    it('selectAllTasks() should return the list of Tasks', () => {
      const results = TasksSelectors.selectAllTasks(state);
      const selId = getTasksId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = TasksSelectors.selectEntity(state) as TasksEntity;
      const selId = getTasksId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectTasksLoaded() should return the current "loaded" status', () => {
      const result = TasksSelectors.selectTasksLoaded(state);

      expect(result).toBe(true);
    });

    it('selectTasksError() should return the current "error" state', () => {
      const result = TasksSelectors.selectTasksError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
