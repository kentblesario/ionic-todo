import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteTodoService {
  public con = 'http://localhost/Todo-List-API';
  headers = new HttpHeaders();
  constructor(
    private http: HttpClient
  ) { }

  deleteTodo(todo) {
    const options = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      }),
      body: {
        id: todo.id,
      },
    };

    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.con}/delete.php`, options);
  }

}
