import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee-model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL = 'http://localhost:8080/api/employee'

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL)
  }

  getEmployeesById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.API_URL}/${id}`)
  }

  deleteEmployees(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }

  createEmployees(employees: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.API_URL, employees)
  }

  editEmployees(id: number, updated: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.API_URL}/${id}`, updated)
  }

}
