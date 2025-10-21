import { Component } from '@angular/core';
import { Employee } from '../models/employee-model';
import { EmployeeService } from '../service/employee-service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, RouterLink],
  template: `
      <nav class="container-fluid bg-primary d-flex p-2 justify-content-between">
        <div class="m-1 size fs-5">
          <i class="fa-solid fa-house" style="color: #ffffff;"></i>
        </div>
        <div class="d-flex bg-info rounded-2 justify-content-center">
          <p class="m-1 fs-6">
            <i class="fa-solid fa-user" style="color: #ffffff;"></i>
          </p>
          <h4 class="mx-2 text-light">Employee Management</h4>
        </div>
      </nav>
      <div class="container mt-4">
        <div class="container d-flex bg-primary p-3 justify-content-between">
          <h2 class="text-light">Mange Employee</h2>
          <a routerLink="/create" class="btn btn-success mb-3"><i class="fa-solid fa-plus" style="color: #ffffff;"></i>ADD</a>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th><th>Nombre</th><th>Apellido</th><th>Email</th><th>Direccion</th><th>Telefono</th><th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            @for (e of employee; track e.id) {
              <tr>
                <td>{{ e.id }}</td>
                <td>{{ e.firstName }}</td>
                <td>{{ e.lastName }}</td>
                <td>{{ e.email}}</td>
                <td>{{ e.adress}}</td>
                <td>{{ e.phone}}</td>
                <td>
                  <a [routerLink]="['/edit', e.id]" class="btn btn-light"><i class="fa-solid fa-pen-to-square" style="color: #FFD43B;"></i></a>
                  <a [routerLink]="['/delete', e.id]" class="btn btn-light"><i class="fa-solid fa-trash" style="color: #ff1100;"></i></a>
                  <a [routerLink]="['/view', e.id]" class="btn btn-light"><i class="fa-solid fa-eye" style="color: #74C0FC;"></i></a>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    `
})
export class EmployeeList {
  employee: Employee[] = []

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employee = data
      },
      error(err) {
        console.error("Error al cargar empleados", err)
      },
    })
  }

}
