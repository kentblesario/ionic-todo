import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public con = 'http://localhost/Todo-List-API';
  headers = new HttpHeaders();
  constructor(
    private http: HttpClient

  ) { }

  authenticate(data) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.con}/auth.php`,{data});
  }

  isJwtValid(data){
    console.log(data);

    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.con}/checkAuth.php`,{jwt:data});
  }

}
