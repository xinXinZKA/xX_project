<template>
     <div class="app_container">
         <p class="container_title">保险箱信息</p>
         <p class="container_txt1">保险箱品牌：{{txt1}}</p>
         <p class="container_txt2">保险箱序列号：{{txt2}}</p>
         <p class="container_txt3">保险箱IP：{{txt3}}</p>
         <div class="box">
             <input class="textbox" placeholder="请输入保险箱名称" type="text" maxlength="16">
         </div>
         <div class="getclick">
             <button class="click">添加保险箱</button>
         </div>
     </div>
</template>

<script>
export default {
    el:"app_container",
    data(){
        return{
            txt1:"三星",
            txt2:"12335566hdhhjasdj",
            txt3:"192.168.1.1"
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
        width: 7.5rem;
        height: 12.06rem;
        background-color: black;
        margin-top: 1.27rem;
        position: absolute;
        top: 0;
        left: 0;
    }
    .container_title{
        color: white;
        text-align: center;
        font-size: 0.46rem;
        letter-spacing: 0.03rem;
        margin-top: 2rem;
    }
    .container_txt1{
        color: #9a9a9a;
        font-size: 0.25rem;
        margin-top: 2rem;
        letter-spacing: 0.05rem;
        text-align: center;
    }
    .container_txt2{
        color: #9a9a9a;
        font-size: 0.25rem;
        margin-top: 0.19rem;
        letter-spacing: 0.05rem;
        text-align: center;
    }
    .container_txt3{
        color: #9a9a9a;
        font-size: 0.25rem;
        margin-top: 0.19rem;
        letter-spacing: 0.05rem;
        text-align: center;
    }
    .textbox{
        width: 5.38rem;
        height: 0.72rem;
        background-color: black;
        color: #9a9a9a;
        text-align: center;
        font-size: 0.25rem;
        letter-spacing: 0.05rem;
        /* margin: 0 auto; */
        border-top:none;
        border-left: none;
        border-right:none;
    }
    .box{
        text-align: center;
        margin-top: 1.04rem;
    }
    .getclick{
        margin-left: 0.3rem;
        margin-top: 1.5rem;
    }
    .click{
        width: 6.67rem;
        height: 0.98rem;
        background-color: #0090ff;
        text-align: center;
        font-size: 0.3rem;
        color: white;
        letter-spacing: 0.05rem;
        margin-left: 0.11rem;
    }
</style>
