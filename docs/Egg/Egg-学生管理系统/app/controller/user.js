'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        await this.ctx.render("login.html")
    }

    async login() {
        var md5 = require('md5-node');
        const name = this.ctx.request.body.name;
        const pass = md5(this.ctx.request.body.pass);
        const register = await this.app.model.ZhuC.findOne({
            where:{
                name:name,

            }
        })
        if(register == null){
            this.ctx.body = "用户不存在";
            return
        }
        
        if (name == register.dataValues.name && pass == register.dataValues.pass){
            this.ctx.session.user = name;  //设置session
            this.ctx.redirect("/students")
        }else{
            this.ctx.body = "无效密码或密码错误！"
        }
    }



    async logout(){
        delete this.ctx.session.user  //删除session中的用户，取消用户登录状态
        this.ctx.redirect("/")
    }
}

module.exports = UserController;
 