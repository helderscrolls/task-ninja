import { Task } from '../services/task.service';

/**
 * Interface for the 'Tasks' data
 */
export interface TasksEntity extends Task {
  name?: string;
}
