const Controller = require('egg').Controller;

class TwoController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("fourteen.html")
    }
    
    async add(){
        await this.ctx.render('eight.html')
    }
    
}

module.exports = TwoController;