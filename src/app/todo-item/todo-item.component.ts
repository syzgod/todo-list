import { Component, Input } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() item: string = '';
  @Input() index: number = 0;
}
