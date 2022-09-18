import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FormModelDto } from './form-model.dto';
import FormService from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('send')
  @UsePipes(ValidationPipe)
  async sendMessage(@Body() formModelDto: FormModelDto): Promise<any> {
    return await this.formService.sendForm(formModelDto);
  }
}
