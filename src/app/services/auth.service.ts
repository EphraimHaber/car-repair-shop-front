import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setAccessToken(token: string):void{
    localStorage.setItem('access', token)
  }

  setRefreshToken(token: string): void {
    localStorage.setItem('refresh', token)
  }

  getToken(): string | null {
    return localStorage.getItem('access');
  }
  getRefreshToken(): string | null {
    return localStorage.getItem('refresh');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('access');
    this.router.navigate(['login']);
  }

  // refreshAccessToken() {
  //   this.http.post
  // }


  login({ email, password }: any): Observable<any> {
    const dict = {"email": email, "password": password}
    return this.http.post('http://localhost:8000/api/token/', dict)
  }




}
