'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        await this.ctx.render("register.html")
    }

    async create() {
        var md5=require('md5-node');
        const body = this.ctx.request.body;
        const zhuC = {
            name:body.name,
            pass:md5(body.pass),
        }
        await this.app.model.ZhuC.create(zhuC);
        this.ctx.redirect("/succeed")
        
    }
}

module.exports = HomeController; 