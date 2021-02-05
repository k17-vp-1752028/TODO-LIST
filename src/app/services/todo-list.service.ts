import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.model';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private url = 'api/todos';

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.url).pipe(tap(data => console.log('ALL: ' + JSON.stringify(data))), catchError(this.handleError));
  }

  /** GET hero by id. Will 404 if id not found */
  getTodoById(id: number): Observable<ITodo> {
    const uri = `${this.url}/${id}`;

    return this.http.get<ITodo>(uri).pipe(
      tap(_ => console.log(`fetched todo id=${id}`)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {

    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = `An error occurred: ${err.error.message}`;
    } else {
      errMessage = `Server return code: ${err.status}, errMess: ${err.message}`;
    }

    console.log(errMessage);
    return throwError(errMessage);
  }
}
