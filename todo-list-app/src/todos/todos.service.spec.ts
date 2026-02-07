import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a todo', () => {
    const todo = service.create({
      title: 'Estudar NestJS',
    });

    expect(todo).toHaveProperty('id');
    expect(todo.title).toBe('Estudar NestJS');
    expect(todo.completed).toBe(false);
  });

  it('should return all todos', () => {
    service.create({ title: 'Todo 1' });
    service.create({ title: 'Todo 2' });

    const todos = service.findAll();

    expect(todos.length).toBe(2);
  });

  it('should update a todo', () => {
    const todo = service.create({ title: 'Antigo' });

    const updated = service.update(todo.id, {
      title: 'Novo título',
      completed: true,
    });

    expect(updated.title).toBe('Novo título');
    expect(updated.completed).toBe(true);
  });

  it('should remove a todo', () => {
    const todo = service.create({ title: 'Remover' });

    service.remove(todo.id);

    expect(service.findAll().length).toBe(0);
  });
});
