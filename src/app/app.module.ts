import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailPipe } from './product-detail.pipe'
import { FormsModule } from '@angular/forms'

//创建路由词典
const routes=[
  {path:'',redirectTo:'/index',pathMatch:'full'},//跳转路径
  {path:'index',component:IndexComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-detail/:pid',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    UserLoginComponent,
    NotFoundComponent,
    ProductDetailPipe
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),//注册路由词典
    HttpClientModule, //httpClient 服务所在的模块
    FormsModule, //ngModule指令所在的模块
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
