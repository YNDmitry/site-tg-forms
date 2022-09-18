import { Module } from '@nestjs/common';
import FormService from './form.service';
import { FormController } from './form.controller';
import { ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { FormUpdate } from './form.update';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        token: configService.get('TELEGRAM_BOT_API_KEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [FormController],
  providers: [FormService, FormUpdate],
})
export class FormModule {}
