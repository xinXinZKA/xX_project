const Controller = require('egg').Controller;

class OneController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("one.html")
    }
}

module.exports = OneController;