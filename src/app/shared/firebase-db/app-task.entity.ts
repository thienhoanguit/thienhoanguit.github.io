import { OwnableEntity } from "./model";

export type AppTask = {
    title: string;
    description: string;
    completed: boolean;
  } & OwnableEntity;