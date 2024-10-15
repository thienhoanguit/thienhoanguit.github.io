import { Injectable } from '@angular/core';
import { EntityRepositoryService } from './EntityRepository.service';
import { AppTask } from './app-task.entity';

@Injectable()
export class TaskRepositoryService extends EntityRepositoryService<AppTask> {
  override readonly collectionPath = 'tasks';
}