<template>
    <div class="header">
       <div class="each1"><span class="font1">产业工程分析表</span></div>
       <div class="text2"><span class="font1">产业授权分析表</span></div>
       <div class="middle">
        <router-link to="/">
        <span class="font2">2023年招标单位采购数据大屏</span>
    </router-link>
    </div>
       <div class="text3">
        <router-link to="/page3">
        <span class="font3">产业物资分析表</span>
    </router-link>
    </div>
       <div class="right2">
           <span class="font-right21">2023/5/31</span>
            <span class="font-right22">星期三</span>
        </div>
    </div>
</template>
<style scoped>
.header{
    width:1920px;
    height:115px;
    z-index: 100000;
}
.each1{
    background-image:url('../assets/image/image4/top-each.png') ;
    position:absolute;
    top:24.6px;
    left:66.6px;
    background-size: 100% 100%;
    width:213px;
    height:37px;
}
.font1{
    width: 126px;
    height: 13px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-family: PangMenZhengDao;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    line-height: 18px;
    position:absolute;
left:55px;
top:5px;
}
.text2{
    background-image:url('../assets/image/image4/top-each.png') ;
    position:absolute;
    top:24.6px;
    left:287.6px;
    background-size: 100% 100%;
    width:213px;
    height:37px;
}
.middle{
    background-image: url('../assets/image/image4/top-back.png');
    background-size:100% 100% ;
    width:1920px;
    height:102px;
    position:absolute;
    top:0;
    left:0
}
.font2{
    width: 595px;
    height: 31px;
    font-size: 42px;
    font-family: PangMenZhengDao;
    font-weight: 400;
    color: #FFFFFF;
    position: absolute;
    left: 685px;
    top: 10px;
}
.right2{
background-image: url('../assets/image/image4/top-each2.png');
height:37px;
width:151px;
background-size: contain;
background-repeat:no-repeat;
position:absolute;
left: 1747px;
top:24.6px;
}
.text3{
    background-image: url('../assets/image/image4/top-right1.png');
    width:213px;
    height:37px;
    position:absolute;
    left: 1445.1px;
    top: 24.6px;
    background-size: 100% 100%;
}
.font3{
    width: 126px;
    height: 13px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-family: PangMenZhengDao;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    line-height: 18px;
    position:absolute;
left:45px;
top:5px;
bottom:18px;
}
.font-right21{
    display: block;
    width: 73px;
    height: 32px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    text-align: left;
    line-height: 20px;
    opacity: 0.6;
    position: absolute;
    left: 42px;
    top: -1px;
}
.font-right22{
    display: block;
    width: 73px;
    height: 32px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    line-height: 20px;
    opacity: 0.6;
    position: absolute;
    left: 51px;
    top: 15px;
}
</style>
