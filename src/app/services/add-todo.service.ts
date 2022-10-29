import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTodoService {
  public con = 'http://localhost/Todo-List-API';
  headers = new HttpHeaders();
  constructor(
    private http: HttpClient
  ) { }
  addTodo(data) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.con}/create.php`, { item:data });
  }
}
