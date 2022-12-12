import { ObserversModule } from '@angular/cdk/observers';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient, private auth: AuthService) { }
  
  getCars(): Observable<any> {
    console.log();
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'cookie': `jwt=${this.auth.getToken()}`
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.post('http://localhost:8000/api/getAllCars/', httpOptions);

  }
  getTests(): Observable<any> {
    return this.http.get('http://localhost:8000/api/getAllTests/');
  }
  getWorkers(): Observable<any> {
    return this.http.get('http://localhost:8000/api/getAllWorkers');
  }
  getBreakdowns(): Observable<any> {
    return this.http.get('http://localhost:8000/api/getAllBreakdowns')
  }
  updateTestAppointment(obj: any): Observable<any> {
    return this.http.put('http://localhost:8000/api/updateTestAppointment/', obj)
  }
  updateBreakdown(obj: any): Observable<any> {
    return this.http.put('http://localhost:8000/api/updateBreakdownFixed/', obj)
  }
  updateTest(obj: any): Observable<any> {
    return this.http.put('http://localhost:8000/api/updateTestFixed/', obj)
  } 
}
