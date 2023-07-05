import { IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public description: string;
}
