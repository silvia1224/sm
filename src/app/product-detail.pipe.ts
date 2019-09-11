import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from './api.service';

@Pipe({
  name: 'productDetail'
})
export class ProductDetailPipe implements PipeTransform {
  //声明依赖ApiService 需要使用ApiService
  constructor(private api:ApiService){}

  transform(val){
    if(val){//防止尚未获得数据，val是
      //转换管道：把src="img转换为 src="http://www.codeboy.com/img
      return val.replace(/src=\"img/g,'src="'+this.api.server+'img')
    }
  }s

}
