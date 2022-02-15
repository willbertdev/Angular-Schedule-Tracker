import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subcription: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subcription = this.uiService.onToggle().subscribe(
      (value) => this.showAddTask = value
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {

    const addData = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(addData);

    this.text = "";
    this.day = "";
    this.reminder = false;



  }
}
