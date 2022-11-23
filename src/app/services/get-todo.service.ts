import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetTodoService {
  public con = 'http://localhost/Todo-List-API';
  headers = new HttpHeaders();
  constructor(
    private http: HttpClient
  ) { }

  getTodoList() {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.con}/`);
  }
}
