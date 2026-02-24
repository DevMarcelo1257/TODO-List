import { Component } from '@angular/core';
import { Todo } from './components/todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todo],
  template: `<app-todo></app-todo>`
})
export class App {}