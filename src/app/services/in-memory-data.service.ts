import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): { todos: ITodo[] } {
    const todos: ITodo[] = [
      {
        "id": 1,
        "name": "Done TODO-LIST",
        "description": "HIHI CODE TODO-LIST"
      },
      {
        "id": 2,
        "name": "Done Homework",
        "description": "HIHI NOT YET"
      },
      {
        "id": 3,
        "name": "Done HAVE S*X",
        "description": "HIHI DUNT HAVE ENOUGH AGE!!!"
      }
    ];
    return { todos };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
}