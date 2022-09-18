import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { FormModule } from './form/form.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
      isGlobal: true,
    }),
    TelegrafModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        token: configService.get('TELEGRAM_BOT_API_KEY'),
      }),
      inject: [ConfigService],
    }),
    FormModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
