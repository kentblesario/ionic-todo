import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompleteTodoService {
  public con = 'http://localhost/Todo-List-API';
  headers = new HttpHeaders();
  constructor(
    private http: HttpClient
  ) { }
  completeTodo(item, type) {
    console.log(type,'type');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.con}/update.php`, { id: item.id, sort: item.sort, type });
  }
}
