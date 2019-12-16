const Controller = require('egg').Controller;

class TwoController extends Controller {
    async seventh() {
        const {
            ctx
        } = this;
        await ctx.render("seventh.html",{
            txt1:"三星",
            txt2:"12335566hdhhjasdj",
            txt3:"192.168.1.1",
        })
    }
    
    async add(){
        await this.ctx.render('seventh.html')
    }

    async index(){
        await this.ctx.render('five.html')
    }

}

module.exports = TwoController;