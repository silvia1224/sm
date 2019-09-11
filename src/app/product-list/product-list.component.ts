import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private productList=[]  //商品列表
  private pno=0      //当前加载的是第几页数据
  private hasMore=true  //还有更多数据可供加载吗？

  @ViewChild('myInfiniteScroll',{static:false})
  private myInfiniteScroll

  constructor(private nav:NavController,private http:HttpClient,private api:ApiService) { }

  ngOnInit() {
    //组件初始化创建完成,立即加载第一页商品数据
    this.pno++
    this.loadData()
  }
  gunDongDaoWei(){
    console.log("滚动到位了")
    //setTimeout(() => {
      //模拟数据加载完成,可以隐藏"加载中..."
      //this.myInfiniteScoll.complete() //加载完成
   // }, 3000);
  }
  goBack(){
    //回退到历史记录的上一个页面
    this.nav.back()
    //this.nav.navigateBack()
    //this.nav.navigateForward()
    //this.nav.navigateRoot()
  }
  loadData(){
    this.pno++
    //异步请求服务器端商品数据
    this.http.get(this.api.productListApi+'?pno='+this.pno).subscribe((res:any)=>{
      //console.log("异步获取到了商品列表数据")
      //console.log(res)
      //加载更多数据
      this.productList=this.productList.concat(res.data)
      console.log(this.productList)
      //隐藏"无限滚动"组件"加载中..."的提示,让其可以触发"滚动到位事件"
      this.myInfiniteScroll.complete()
      //判断还有更多数据可供加载吗
      if(this.pno==res.pageCount){
        console.log("已经没有更多数据可供加载了")
        this.hasMore=false
      }
    })
  }
}
