<template>
     <div class="app_container">
        <div class="img_main">
        <span class="text1">牛批</span>
        <span class="text2">智能</span>
        <span class="text3">保险箱</span>
        <span class="text4">别说了 我爱了</span>
        <span class="text5">·</span>
        <span class="text6">··</span>
            <img class="guanggao" src="./images/guanggao.png" alt="">
        </div>
        <div class="main">
            <img class="safe" src="./images/safe.png" alt="">
            <p class="text7">N · B保险箱</p>
            <p class="text8">最后一次位置：{{text}}</p>
            <button>监听此保险箱</button>
        </div>
     </div>
</template>

<script>
export default {
    el:"app_container",
    data(){
        return{
            text:"幻想乡"
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .app_container{
        margin-top: 1.26rem;
        position:absolute;
        top: 0;
        left: 0;
    }
    .guanggao{
        width: 7.5rem;
        height: 3.78rem;
    }
    .text1{
        font-size: 0.25rem;
        position:absolute;
        color: #ffffff;
        margin-left: 0.6rem;
        margin-top: 1.08rem;
        letter-spacing: 0.05rem;
    }
    .text2{
        font-size: 0.03rem;
        position:absolute;
        color: #ffffff;
        font-size: 0.35rem;
        margin-left: 1.24rem;
        margin-top: 0.96rem;
        letter-spacing: 0.07rem;
        font-weight:bold
    }
    .text3{
        font-size: 0.25rem;
        position:absolute;
        color: #ffffff;
        margin-top: 1.08rem;
        margin-left: 2.1rem;
        letter-spacing: 0.05rem;
    }
    .text4{
        font-size: 0.25rem;
        position:absolute;
        color: #ffffff;
        letter-spacing: 0.05rem;
        margin-top: 1.63rem;
        margin-left: 0.6rem;
    }
    .text5{
        color: #ffffff;
        position:absolute;
        font-size: 1.1rem;
        margin-left: 3.2rem;
        margin-top: 2.7rem;
    }
    .text6{
        position:absolute;
        color: #8d8980;
        font-size: 1.1rem;
        margin-top: 2.7rem;
        margin-left: 3.6rem;
        letter-spacing: 0.11rem;
    }
    .img_main{
        width: 7.5rem;
        height: 3.78rem;
        margin: 0 auto;
    }
    .main{
        width: 7.5rem;
        height: 8.28rem;
        text-align: center;
    }
    .safe{
        margin-top: 0.82rem;
        width: 2.4rem;
        height: 2.48rem;
    }
    .text7{
        font-size: 0.45rem;
        margin-top: 0.4rem;
        letter-spacing: 0.02rem;
    }
    .text8{
        font-size: 0.3rem;
        color:#999999;
        margin-top: 0.25rem;
    }
    button{
        width: 6.66rem;
        height: 0.96rem;
        background-color: #0090ff;
        color: #ffffff;
        font-size: 0.3rem;
        letter-spacing: 0.03rem;
        margin-top: 1.65rem;
    }
</style>
