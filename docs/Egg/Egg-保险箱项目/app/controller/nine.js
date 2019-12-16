'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
    await ctx.render("nine.html");
    }

    async ten(){
        await this.ctx.render('ten.html')
    }

    async add(){
        await this.ctx.render('eight.html')
    }

    async eleven(){
        await this.ctx.render('eleven.html')
    }

    async twelve(){
        await this.ctx.render('twelve.html')
    }

    async thirteen(){
        await this.ctx.render('thirteen.html')
    }
}

module.exports = HomeController;