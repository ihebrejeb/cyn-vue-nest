import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column('text')
  description: string;

  // TODO: Add the necessary relationship methods or properties to establish the relationship between the Task and Project entities.
  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
}
