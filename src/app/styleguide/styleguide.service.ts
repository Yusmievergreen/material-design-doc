import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StyleguideService {
  private employeeUrl = 'http://localhost:3000/people'

  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<any> {
    return this.http.get(this.employeeUrl)
  }
}
