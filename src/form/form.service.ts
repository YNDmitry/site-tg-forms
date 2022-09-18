import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectBot } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';

@Injectable()
export default class FormService {
  constructor(
    @InjectBot() private readonly bot: Context<Update>,
    private config: ConfigService,
  ) {}

  async sendForm(body) {
    const chatAdmins = await this.config.get('ADMIN_IDS');
    let model = '';

    Object.keys(body).forEach((el, idx) => {
      const objModel = `*${el.toUpperCase().trim()}*: ${
        Object.values(body)[idx] || null
      }\n`;
      model += objModel;
    });

    await JSON.parse(chatAdmins).forEach((el) => {
      return this.bot.telegram.sendMessage(el, model, {
        parse_mode: 'Markdown',
      });
    });
  }
}
