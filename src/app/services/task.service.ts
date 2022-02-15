import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private baseUrl = "http://localhost:5000";


  constructor(private http:HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/tasks`, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/tasks/${task.id}`);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/tasks/${task.id}`, task, httpOptions);
  }

}
