'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        await this.ctx.render("succeed.html")
    }

}

module.exports = UserController;
