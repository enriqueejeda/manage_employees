import { Component, signal } from '@angular/core';
import { EmployeeList } from "./components/employee-list";

@Component({
  selector: 'app-root',
  imports: [EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('manage-employee-app');
}
