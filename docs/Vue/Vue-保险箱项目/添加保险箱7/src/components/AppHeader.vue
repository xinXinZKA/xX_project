<template>
    <div class="app_header">
        <div class="frist_nav">
            <img src="./images/nav.gif" alt="">
        </div>
        <div class="clear"></div>
        <div class="second_nav">
            <img src="./images/Return.png" alt="">
            <span>添加保险箱</span>
        </div>
        <div class="clear"></div>
    </div>
</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .frist_nav img{
        float: left;
        width: 7.5rem;
    }
    .app_header{
        width: 7.5rem;
        height: 1.28rem;
        position: absolute;
        top: 0;
        left: 0;
    }
    .second_nav{
        width: 7.5rem;
        height: 0.88rem;
        background-color: black;
    }
    .second_nav img{
        float: left;
        margin-top: 0.26rem;
        margin-left: 0.3rem;
    }
    .second_nav span{
        font-size: 0.28rem;
        float: left;
        color: #ffffff;
        letter-spacing: 0.02rem;
        margin-left: 2.55rem;
        margin-top: 0.2rem;
    }
    .clear{
        clear: both;
    }
</style>