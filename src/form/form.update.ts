import { Ctx, Sender, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/common/guards/admin.guard';

@Update()
@UseGuards(AdminGuard)
export class FormUpdate {
  @Start()
  start(@Sender('first_name') firstName: string, @Ctx() ctx: Context) {
    console.log(ctx.message.from.id);
    return 'Hey ' + firstName;
  }

  // @Hears(['start'])
  // onStart(
  //   @UpdateType() updateType: TelegrafUpdateType,
  //   @Sender('first_name') firstName: string,
  // ): string {
  //   return `Hey ${firstName}`;
  // }
}
