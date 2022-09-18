import { IsEmail, IsNotEmpty } from 'class-validator';

export class FormModelDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
