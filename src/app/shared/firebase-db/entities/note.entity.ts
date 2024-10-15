import { OwnableEntity } from "../model";

export type NoteEntity = {
    title: string;
    description: string;
} & OwnableEntity;