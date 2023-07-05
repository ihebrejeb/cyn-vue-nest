// task.controller.ts
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  @Get('project/:projectId')
  async getTasksByProjectId(
    @Param('projectId') projectId: number,
  ): Promise<Task[]> {
    const tasks = await this.taskService.getTasksByProjectId(projectId);
    return tasks;
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.taskService.delete(id);
  }
}
