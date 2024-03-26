import { Component, OnInit } from '@angular/core';

import { AddFormComponent } from './add-form/add-form.component';
import { CommonModule } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItemComponent, CommonModule, AddFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  list = [
    'andrej',
    'herlinde',
    'bedside tables',
    'kids room cleaning',
    'playground',
  ];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
