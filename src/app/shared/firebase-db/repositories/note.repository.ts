import { Injectable } from '@angular/core';
import { EntityRepositoryService } from '../EntityRepository.service';
import { NoteEntity } from '../entities/note.entity';

@Injectable()
export class TaskRepositoryService extends EntityRepositoryService<NoteEntity> {
  override readonly collectionPath = 'notes';
}