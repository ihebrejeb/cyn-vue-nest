import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { ProjectWithCountDto } from './dto/project-with-count.dto';

@Injectable()
export class ProjectService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}
  onApplicationBootstrap() {
    this.projectsRepository.count().then((count) => {
      if (count === 0) {
        this.create({
          title: 'Project 1',
          description: 'Description 1',
        });
        this.create({
          title: 'Project 2',
          description: 'Description 2',
        });
        this.create({
          title: 'Project 3',
          description: 'Description 3',
        });
      }
    });
  }

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectsRepository.save(createProjectDto);
  }

  findAll(): Promise<ProjectWithCountDto[]> {
    return this.projectsRepository
      .createQueryBuilder('project')
      .loadRelationCountAndMap('project.tasksCount', 'project.tasks', 'tasks')
      .getMany();
  }

  findOne(id: number): Promise<Project> {
    return this.projectsRepository.findOneBy({ id });
  }

  update(id: number, updateProjectDto: UpdateProjectDto): Promise<Project> {
    throw new Error('Method not implemented.');
  }

  async remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
