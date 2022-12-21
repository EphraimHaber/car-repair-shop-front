import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import jwtDecode, {JwtPayload} from 'jwt-decode';

function getAccessToken(){
  return localStorage.getItem('access')
}
function isAccessTokenExpiration():boolean {
  const accessToken = localStorage.getItem('access') || 'stuff';
  const decodedToken = jwtDecode<JwtPayload>(accessToken);
  const expiresAt = decodedToken.exp || 10;
  const expirationDate = new Date(expiresAt * 1000);
  const isExpired = Date.now() > expirationDate.getTime();
  // console.log(Date.now() + " VS " + expirationDate.getTime());
  // console.log(isExpired);
  return isExpired
}
function isRefreshTokenExpiration():boolean {
  const accessToken = localStorage.getItem('refresh') || 'stuff';
  const decodedToken = jwtDecode<JwtPayload>(accessToken);
  const expiresAt = decodedToken.exp || 10;
  const expirationDate = new Date(expiresAt * 1000);
  const isExpired = Date.now() > expirationDate.getTime();
  console.log(Date.now() + " VS " + expirationDate.getTime());
  console.log(isExpired);
  return isExpired
}



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private auth: AuthService, private http: HttpClient) {}

  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url == 'http://localhost:8000/api/token/'){
      return next.handle(request);
    }
    const isExpired = isAccessTokenExpiration()
    let isIAmLazyRefreshAll = true
    if (isExpired || isIAmLazyRefreshAll) {
      // refresh the access token if it is expired
      return refreshToken(this.http, this.auth).pipe(
        (() => {
          const authRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${localStorage.getItem('access')}`
            },
            withCredentials: true
          });
          console.log(localStorage.getItem('access'));
          // send the cloned request with the new access token
          return next.handle(authRequest);
        })
      );
    } else {
      window.alert("q")
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
        withCredentials: true
      })
      return next.handle(request);
    }
  }
}
export function refreshToken(http: HttpClient, auth: AuthService): Observable<any> {
  const dict = {"email": localStorage.getItem('email'), "password": localStorage.getItem('password')}
  auth.login(dict).subscribe(data => {
    console.log(data);
    auth.setAccessToken(data.access);
    auth.setRefreshToken(data.refresh);
  })
  const refreshToken = localStorage.getItem('refresh');
  return http.post<any>('http://localhost:8000/api/token/refresh', { refreshToken });
}