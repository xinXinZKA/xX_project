<template>
    <div class="app_header">
        <div class="first_nav">
            <img src="./images/nav.gif" alt="">
        </div>
        <div class="clear"></div>
        <div class="second_nav">
            <img class="img_left" src="./images/user.png" alt="">
            <span>保险箱</span>
            <img class="img_right" src="./images/add.png" alt="">
        </div>
        <div class="clear"></div>
    </div>
</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .app_header{
        width: 7.5rem;
        height: 1.28rem;
        position:absolute;
        top: 0;
        left: 0;
    }
    .first_nav img{
        width: 7.5rem;
        float: left;
    }
    .second_nav{
        width: 7.5rem;
        height: 0.88rem;
        background-color: black;
    }
    .clear{
        clear: both
    }
    .img_left{
        float: left;
        width: 0.47rem;
        height: 0.45rem;
        margin-left: 0.3rem;
        margin-top: 0.22rem;
    }
    .second_nav span{
        float: left;
        font-size: 0.3rem;
        color: white;
        margin-left: 2.5rem;
        margin-top: 0.25rem;
        letter-spacing: 0.02rem;
    }
    .img_right{
        float: right;
        width: 0.38rem;
        height: 0.38rem;
        margin-top: 0.25rem;
        margin-right: 0.29rem;
    }
</style>
