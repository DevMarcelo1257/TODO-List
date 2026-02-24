import { Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
 } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto} from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';


@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService){}

    @Post()
    create(@Body() dto: CreateTodoDto){
        return this.todosService.create(dto);
    }

    @Get()
    findAll(){
        return this.todosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.todosService.findOne(Number(id));
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() dto: UpdateTodoDto){
        return this.todosService.update(Number(id), dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.todosService.remove(Number(id));
    }

}