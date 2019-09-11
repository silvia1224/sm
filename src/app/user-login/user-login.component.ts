import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  private uname=''  //登录用户名
  private upwd=''  //用户输入的登录密码

  //申明依赖的服务对象
  constructor(private http:HttpClient,private api:ApiService,private alertController:AlertController) { }

  ngOnInit() {}

  doLogin(){
    //console.log(this.uname,this.upwd)
    //向服务器端发送异步post请求
    let body=`uname=${this.uname}&upwd=${this.upwd}`
    let options={//可用于修改请求头部的选项对象
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }
    this.http.post(this.api.userLoginApi,body,options).subscribe((res:any)=>{
      console.log("获取到异步响应数据：登录的结果")
      console.log(res)
      if(res.code==200){
        //alert('登录成功')
        this.alertController.create({
          header:'登录成功',
          message:'欢迎回来'+this.uname,
          buttons:['OK']
        }).then((dialog)=>{
          //对话框创建并挂载到dom树完成，开始呈现它
          dialog.present()
        })
      }else{
        //alert('登录失败')
      }
    })
  }

}
