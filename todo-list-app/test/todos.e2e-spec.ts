import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module'
import request from 'supertest';




describe('TodosController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/todos (POST)', async () => {
    return request(app.getHttpServer())
      .post('/todos')
      .send({ title: 'Todo e2e' })
      .expect(201)
      .expect(res => {
        expect(res.body).toHaveProperty('id');
        expect(res.body.title).toBe('Todo e2e');
      });
  });

  it('/todos (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/todos')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('/todos/:id (PATCH)', async () => {
    const create = await request(app.getHttpServer())
      .post('/todos')
      .send({ title: 'Atualizar' });

    await request(app.getHttpServer())
      .patch(`/todos/${create.body.id}`)
      .send({ completed: true })
      .expect(200);
  });

  it('/todos/:id (DELETE)', async () => {
    const create = await request(app.getHttpServer())
      .post('/todos')
      .send({ title: 'Excluir' });

    await request(app.getHttpServer())
      .delete(`/todos/${create.body.id}`)
      .expect(200);
  });
});
