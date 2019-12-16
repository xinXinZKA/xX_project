const Controller = require('egg').Controller;

class ThreeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("four.html")
    }

    async add(){
        await this.ctx.render('four.html')
    }
}

module.exports = ThreeController;