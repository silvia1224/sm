import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  private product={}   //商品数据

  //声明依赖服务的对象，当前路由。Http请求，api地址
  constructor(private nav:NavController,private route:ActivatedRoute,private http:HttpClient,private api:ApiService) {}

  ngOnInit() {
    //组件初始化完成后
    //读取路由参数api
    this.route.params.subscribe((data)=>{
       let pid=data.pid //路由地址中参数：商品编号
      //根据pid异步请求服务端商品数据
       this.http.get(this.api.productDetailApi+'?lid='+pid).subscribe((res:any)=>{
         //console.log('异步请求获取商品详情')
         console.log(res)
         this.product=res.details
         console.log(this.product)
       })
    })
   }
   goBack(){
    //回退到历史记录的上一个页面
    this.nav.back()
  }
}
