const Controller = require('egg').Controller;

class ThreeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("eight.html",{
            text:"幻想乡"
        })
    }

    async add(){
        await this.ctx.render('fourteen.html')
    }

    async add(){
        await this.ctx.render('five.html')
    }
    
    // async nine(){
    //     await this.ctx.render('nine.html',{
    //         nine_img:"/public/images/fase2.png",
    //         ten_img:"/public/images/Opendoor1.png",
    //         eleven_img:"/public/images/Callthepolice1.png",
    //         twelve_img:"/public/images/Relation1.png"
    //     })
    // }
}

module.exports = ThreeController;