'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
    await ctx.render("eleven.html");
    }

    async twelve(){
        await this.ctx.render("nine.html")
    }

}

module.exports = HomeController;