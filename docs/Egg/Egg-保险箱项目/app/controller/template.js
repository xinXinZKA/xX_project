'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async nine() {
        const { ctx } = this;
      await ctx.render("nine.html",{
        nine_img:"/public/images/fase2.png",
        ten_img:"/public/images/Opendoor1.png",
        eleven_img:"/public/images/Callthepolice1.png",
        twelve_img:"/public/images/Relation1.png"
      });
      }
    
      async ten() {
        const { ctx } = this;
      await ctx.render("ten.html",{
        nine_img:"/public/images/fase1.png",
        ten_img:"/public/images/Opendoor2.png",
        eleven_img:"/public/images/Callthepolice1.png",
        twelve_img:"/public/images/Relation1.png"
      });
      }
    
      async eleven() {
        const { ctx } = this;
      await ctx.render("eleven.html",{
        nine_img:"/public/images/fase1.png",
        ten_img:"/public/images/Opendoor1.png",
        eleven_img:"/public/images/Callthepolice2.png",
        twelve_img:"/public/images/Relation1.png"
      });
      }
    
      async twelve() {
        const { ctx } = this;
      await ctx.render("twelve.html",{
        nine_img:"/public/images/fase1.png",
        ten_img:"/public/images/Opendoor1.png",
        eleven_img:"/public/images/Callthepolice1.png",
        twelve_img:"/public/images/Relation2.png"
      });
      }
    
      async seven(){
        const { ctx } = this;
        await ctx.render("seven.html");
      }
}

module.exports = HomeController;