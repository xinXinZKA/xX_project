const Controller = require('egg').Controller;

class ThreeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("five.html")
    }

    async add(){
        await this.ctx.render('five.html')
    }
}

module.exports = ThreeController;