const Controller = require('egg').Controller;

class TwoController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("two.html")
    }
    
    async add(){
        await this.ctx.render('three.html')
    }

    async add(){
        await this.ctx.render('five.html')
    }

}

module.exports = TwoController;