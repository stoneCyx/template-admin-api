import { Body, Controller, Get, Post,HttpStatus, HttpException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('login')
  async login(@Body() accountInfo) {
    interface retType {
      username:String;
      role:String
    }
    const { username, password } = accountInfo;
    const ret = await this.appService.login({ username, password });
    if(!ret){
      return { message:'用户不存在',code:404 }
    }

    return ret;
  }

}
