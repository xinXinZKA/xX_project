'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render("clazz_list.html")
  }
}



module.exports = HomeController;
