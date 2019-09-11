import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //服务器主地址
  public server='http://www.codeboy.com/'
  //API:首页数据
  public indexApi=this.server+'data/product/index.php'
  //API:商品列表
  public productListApi=this.server+'data/product/list.php'
  //API:商品详情
  public productDetailApi=this.server+'data/product/details.php'
  //API:用户登录
  public userLoginApi=this.server+'data/user/login.php'
  //API:用户注册
  public userRegisterApri=this.server+'data/user/register.php'
  constructor() { }
}
