import { Injectable } from '@nestjs/common';
const crypto = require('crypto');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  login({username, password}){
    return  new Promise((resolve) => setTimeout(()=>{
      if(username === 'admin' && password === '123456'){
       
        const md5 = crypto.createHash('md5');
        const accesstoken = md5.update(JSON.stringify({username:'admin',role:'admin'})).digest('base64');
         resolve({
          username:'admin',
          role:'admin',
          accesstoken
        })
      }else{
        resolve(null);
      }
    }, 500));
  }
}
