<template>
    <div  class="total" @click.capture="handleBlankClick">
    <div class="top-back" >
         <div class="text1" :style="{backgroundImage: `url(${backstyle1})`}">
            <span class="font1" @click="change1">
                慈溪市
            </span>
         </div>
         <div class="text12" :style="{backgroundImage: `url(${backstyle12})`}"></div>
         <div class="text2" :style="{backgroundImage: `url(${backstyle2})`}">
            <span class="font1" @click="change2">
                余姚市
            </span>
         </div>
         <div class="text22" :style="{backgroundImage: `url(${backstyle22})`}"></div>
         <div class="text3" :style="{backgroundImage: `url(${backstyle3})`}">
            <span class="font1" @click="change3">
                镇海区
            </span>
         </div>
         <div class="text32" :style="{backgroundImage: `url(${backstyle32})`}"></div>
         <div class="text4" :style="{backgroundImage: `url(${backstyle4})`}">
            <span class="font1" @click="change4">
                江北区
            </span>
         </div>
         <div class="text42" :style="{backgroundImage: `url(${backstyle42})`}"></div>
         <div class="text5" :style="{backgroundImage: `url(${backstyle5})`}">
            <span class="font1" @click="change5">
                海曙区
            </span>
         </div>
         <div class="text52" :style="{backgroundImage: `url(${backstyle52})`}"></div>
         <div class="text6" :style="{backgroundImage: `url(${backstyle6})`}">
            <span class="font1" @click="change6">
                奉化区
            </span>
         </div>
         <div class="text62" :style="{backgroundImage: `url(${backstyle62})`}"></div>
         <div class="text7" :style="{backgroundImage: `url(${backstyle7})`}">
            <span class="font1" @click="change7">
                北仑区
            </span>
         </div>
         <div class="text72" :style="{backgroundImage: `url(${backstyle72})`}"></div>
         <div class="text8"  :style="{backgroundImage: `url(${backstyle8})`}">
            <span class="font1" @click="change8">
                鄞州区
            </span>
         </div>
         <div class="text82" :style="{backgroundImage: `url(${backstyle82})`}"></div>
         <div class="text9" :style="{backgroundImage: `url(${backstyle9})`}">
            <span class="font1" @click="change9">
                宁海县
            </span>
         </div>
         <div class="text92" :style="{backgroundImage: `url(${backstyle92})`}"></div>
         <div class="text10" :style="{backgroundImage: `url(${backstyle10})`}">
            <span class="font1" @click="change10">
                象山县
            </span>
         </div>
         <div class="text102" :style="{backgroundImage: `url(${backstyle102})`}"></div>
         <div v-if="changeyellow1">
        <div class="arrow1"></div>
         <div class="form12">
            <span class="font2">慈溪市</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
         <div v-if="changeyellow2">
        <div class="arrow2"></div>
         <div class="form22">
            <span class="font2">余姚市</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
         <div v-if="changeyellow3">
        <div class="arrow3"></div>
         <div class="form32">
            <span class="font2">镇海区</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
         <div v-if="changeyellow4">
        <div class="arrow4"></div>
         <div class="form42">
            <span class="font2">江北区</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
         <div v-if="changeyellow5">
        <div class="arrow5"></div>
         <div class="form52">
            <span class="font2">海曙区</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
         <div v-if="changeyellow6">
        <div class="arrow6"></div>
         <div class="form62">
            <span class="font2">奉化区</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
         <div v-if="changeyellow7">
        <div class="arrow7"></div>
         <div class="form72">
            <span class="font2">北仑区</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
         <div v-if="changeyellow8">
        <div class="arrow8"></div>
         <div class="form82">
            <span class="font2">鄞州区</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
         <div v-if="changeyellow9">
        <div class="arrow9"></div>
         <div class="form92">
            <span class="font2">宁海县</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
         <div v-if="changeyellow10">
        <div class="arrow"></div>
         <div class="form2">
            <span class="font2">象山县</span>
            <div class="font3">
                <div class="font31">总交易数量：</div>
                <div class="font32">总金额:</div>
            </div>
            <div class="font4">
                1,275
            </div>
            <div class="font41">
                1,397
            </div>
         </div>
        </div>
    </div>
    <div class="left-back2"></div>
    <div class="left-each1"><span class="font-each">4,000</span></div>
    <div class="font-each2">总交易数量</div>
    <div class="left-each2"><span class="font-each">2,200</span></div>
    <div class="font-each3">总金额</div>
    <div class="form-bottom1">
        <span class="font-bottom1">工程按照招标方式分类统计</span>
        <div class="chart1">
              <div id="myChart1"></div>
        </div>
        <div>
    <div v-for="(number1,index) in numbers1" :key="index" :class="price1" :style="{ top: index === 0 ? '45px' : (45 + (index * 23)) + 'px' }">{{ number1 }}</div>
  </div>
    </div>
    <div class="form-bottom2">
        <span class="font-bottom2">授权采购按照招标方式分类统计</span>
        <div id="chartright2"></div>
        <div v-for="(number2,index) in numbers2" :key="index" :class="price2" :style="{ top: index === 0 ? '47px' : (47 + (index * 24)) + 'px' }">{{ number2 }}</div>
    </div>
</div>
</template>
<script>
import leftblue from '../assets/image/image4/left-blue.png'
import leftyellow from '../assets/image/image4/left-yellow.png'
import leftblue2 from '../assets/image/image4/left-blue2.png'
import leftyellow2 from '../assets/image/image4/left-yellow2.png'
export default {
    mounted () {
      this.drawline1()
      this.drawline2()
    },
    data () {
        return {
       numbers1: [1, 200, 300, 10, 50, 60, 70, 80, 40],
       price1: 'price1',
       numbers2: [1, 200, 300, 10, 50, 60, 70, 80, 40],
       price2: 'price2',
       changeyellow1: false,
       changeyellow2: false,
       changeyellow3: false,
       changeyellow4: false,
       changeyellow5: false,
       changeyellow6: false,
       changeyellow7: false,
       changeyellow8: false,
       changeyellow9: false,
       changeyellow10: false
        }
    },
    computed: {
        backstyle1 () {
            return this.changeyellow1 ? leftyellow : leftblue
        },
        backstyle12 () {
            return this.changeyellow1 ? leftyellow2 : leftblue2
        },
        backstyle2 () {
            return this.changeyellow2 ? leftyellow : leftblue
        },
        backstyle22 () {
            return this.changeyellow2 ? leftyellow2 : leftblue2
        },
        backstyle3 () {
            return this.changeyellow3 ? leftyellow : leftblue
        },
        backstyle32 () {
            return this.changeyellow3 ? leftyellow2 : leftblue2
        },
        backstyle4 () {
            return this.changeyellow4 ? leftyellow : leftblue
        },
        backstyle42 () {
            return this.changeyellow4 ? leftyellow2 : leftblue2
        },
        backstyle5 () {
            return this.changeyellow5 ? leftyellow : leftblue
        },
        backstyle52 () {
            return this.changeyellow5 ? leftyellow2 : leftblue2
        },
        backstyle6 () {
            return this.changeyellow6 ? leftyellow : leftblue
        },
        backstyle62 () {
            return this.changeyellow6 ? leftyellow2 : leftblue2
        },
        backstyle7 () {
            return this.changeyellow7 ? leftyellow : leftblue
        },
        backstyle72 () {
            return this.changeyellow7 ? leftyellow2 : leftblue2
        },
        backstyle8 () {
            return this.changeyellow8 ? leftyellow : leftblue
        },
        backstyle82 () {
            return this.changeyellow8 ? leftyellow2 : leftblue2
        },
        backstyle9 () {
            return this.changeyellow9 ? leftyellow : leftblue
        },
        backstyle92 () {
            return this.changeyellow9 ? leftyellow2 : leftblue2
        },
        backstyle10 () {
            return this.changeyellow10 ? leftyellow : leftblue
        },
        backstyle102 () {
            return this.changeyellow10 ? leftyellow2 : leftblue2
        }
    },
    methods: {
        handleBlankClick () {
    this.changeyellow1 = false
    this.changeyellow2 = false
    this.changeyellow3 = false
    this.changeyellow4 = false
    this.changeyellow5 = false
    this.changeyellow6 = false
    this.changeyellow7 = false
    this.changeyellow8 = false
    this.changeyellow9 = false
    this.changeyellow10 = false
  },
        change1 () {
            this.changeyellow1 = true
        },
        change2 () {
            this.changeyellow2 = true
        },
        change3 () {
            this.changeyellow3 = true
        },
        change4 () {
            this.changeyellow4 = true
        },
        change5 () {
            this.changeyellow5 = true
        },
        change6 () {
            this.changeyellow6 = true
        },
        change7 () {
            this.changeyellow7 = true
        },
        change8 () {
            this.changeyellow8 = true
        },
        change9 () {
            this.changeyellow9 = true
        },
        change10 () {
            this.changeyellow10 = true
        },
        drawline1 () {
  // 初始化 echarts 实例
  const myChart1 = this.$echarts.init(document.getElementById('myChart1'))

  // 定义图表的配置项
  var option
  option = {
    // 图例配置
    legend: {
      data: ['公开招标', '邀请招标', '公开邀请竞争性谈判', '邀请竞争性谈判', '单一来源谈判', '框架公开招标', '框架邀请招标', '公开询价', '邀请询价'],
      icon: 'circle',
      orient: 'vertical',
      top: 20,
      right: 100,
      textStyle: {
        fontSize: 14,
        color: '#DEEBFF'
      }
    },
    series: [
      {
        label: {
          show: true,
          position: 'inside',
          formatter: '{d}%',
          textStyle: {
            fontSize: 10,
            color: '#FFFFFF'
          }
        },
        labelLine: {
          show: false
        },
        type: 'pie',
        radius: 140,
        center: ['164px', '150.5px'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: '公开招标' },
          { value: 38, name: '邀请招标' },
          { value: 32, name: '公开邀请竞争性谈判' },
          { value: 30, name: '邀请竞争性谈判' },
          { value: 28, name: '单一来源谈判' },
          { value: 26, name: '框架公开招标' },
          { value: 22, name: '框架邀请招标' },
          { value: 18, name: '公开询价' },
          { value: 20, name: '邀请询价' }
        ]
      }
    ]
  }

  // 设置图表的配置项
  option && myChart1.setOption(option)
},
drawline2 () {
    const myChart = this.$echarts.init(document.getElementById('chartright2'))
    var option
option = {

    legend: {
      data: ['公开招标', '邀请招标', '公开邀请竞争性谈判', '邀请竞争性谈判', '单一来源谈判', '框架公开招标', '框架邀请招标', '公开询价', '邀请询价'],
      color: ['#FFDE00', ' #601986', '#06F3FF', '#EA3434', '#90ED7D', '#F7A35C', '#8085E9', '#920783', '#FFF225'],
      orient: 'vertical',
      icon: 'rect',
      padding: 12,
      top: 20,
      right: 70,
      textStyle: {
        fontSize: 14,
        color: '#DEEBFF'
      }
    },
  series: [
    {
        label: {
          show: true,
          formatter: '{d}%',
          textStyle: {
            fontSize: 10,
            color: '#FFFFFF'
          }
        },
      type: 'pie',
      radius: [40, 105],
      center: ['185px', '130px'],
      roseType: 'area',
      data: [
          { value: 40, name: '公开招标' },
          { value: 38, name: '邀请招标' },
          { value: 32, name: '公开邀请竞争性谈判' },
          { value: 30, name: '邀请竞争性谈判' },
          { value: 28, name: '单一来源谈判' },
          { value: 26, name: '框架公开招标' },
          { value: 22, name: '框架邀请招标' },
          { value: 18, name: '公开询价' },
          { value: 20, name: '邀请询价' }
        ]
    }
  ]
}

option && myChart.setOption(option)
}
    }
}
</script>

<style scoped>
.total{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:3;
}
.top-back{
    background-image: url('../assets/image/image4/left-back.png');
    position:absolute;
    background-size: 100% 100%;
    width:508px;
    height:671px;
    top:75px;
    left:950px;
    z-index:1;
}
.text1{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:68px;
    left:131px;
}
.font1{
    width: 39px;
height: 11px;
font-size: 14px;
font-family: YouSheBiaoTiHei;
font-weight: 400;
color: #F0F0F0;
position: absolute;
top:6px;
left:23px;
white-space: nowrap;
    overflow-wrap:break-word;
}
.text12{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:105px;
    left:157px;
}
.text2{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:108px;
    left:36px;
}
.text22{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:154px;
    left:62px;
}
.text3{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:148px;
    left:244px;
}
.text32{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:185px;
    left:270px;
}
.text4{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:159px;
    left:173px;
}
.text42{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:196px;
    left:199px;
}
.text5{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:182px;
    left:82px;
}
.text52{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:219px;
    left:108px;
}
.text6{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:277px;
    left:136px;
}
.text62{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:314px;
    left:162px;
}
.text7{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:220px;
    left:326px;
}
.text72{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:257px;
    left:352px;
}
.text8{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:264px;
    left:259px;
}
.text82{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:301px;
    left:285px;
}
.text9{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:437px;
    left:198px;
}
.text92{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:473px;
    left:218px;
}
.text10{
    position:absolute;
    background-size: 100% 100%;
    width:79.6px;
    height:35px;
    top:424px;
    left:321px;
}
.text102{
    position:absolute;
    background-size: 100% 100%;
    width:30px;
    height: 33.4px;
    top:461px;
    left:342px;
}
.arrow1{
    background-image: url('../assets/image/image4/left-arrow-left_20230810163928.png');
    width:71px;
    height:69px;
    background-size: 100% 100%;
    position: absolute;
    top:145px;
    left:140px;
}
.form12{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:113px;
    left:-90px;
}
.arrow2{
    background-image: url('../assets/image/image4/left-arrow-left_20230810163928.png');
    width:71px;
    height:69px;
    background-size: 100% 100%;
    position: absolute;
    top:85px;
    left:-10px;
}
.form22{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:73px;
    left:-240px;
}
.arrow3{
    background-image: url('../assets/image/image4/left-arrow-left_20230810163928.png');
    width:71px;
    height:69px;
    background-size: 100% 100%;
    position: absolute;
    top:145px;
    left:140px;
}
.form32{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:113px;
    left:-90px;
}
.arrow4{
    background-image: url('../assets/image/image4/left-arrow-left_20230810163928.png');
    width:71px;
    height:69px;
    background-size: 100% 100%;
    position: absolute;
    top:145px;
    left:140px;
}
.form42{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:113px;
    left:-90px;
}
.arrow5{
    background-image: url('../assets/image/image4/left-arrow-left_20230810163928.png');
    width:71px;
    height:69px;
    background-size: 100% 100%;
    position: absolute;
    top:145px;
    left:40px;
}
.form52{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:113px;
    left:-190px;
}
.arrow6{
    background-image: url('../assets/image/image4/left-arrow.png');
    width:61px;
    height:109px;
    background-size: 100% 100%;
    position: absolute;
    top:195px;
    left:105px;
}
.form62{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:63px;
    left:15px;
}
.arrow7{
    background-image: url('../assets/image/image4/left-arrow.png');
    width:61px;
    height:109px;
    background-size: 100% 100%;
    position: absolute;
    top:145px;
    left:285px;
}
.form72{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:13px;
    left:197px;
}
.arrow8{
    background-image: url('../assets/image/image4/left-arrow.png');
    width:61px;
    height:109px;
    background-size: 100% 100%;
    position: absolute;
    top:185px;
    left:220px;
}
.form82{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:53px;
    left:132px;
}
.arrow9{
    background-image: url('../assets/image/image4/left-arrow.png');
    width:61px;
    height:109px;
    background-size: 100% 100%;
    position: absolute;
    top:365px;
    left:172px;
}
.form92{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:228px;
    left:82px;
}
.form2{
    background-image: url('../assets/image/image4/left-each.png');
    position:absolute;
    background-size: 100% 100%;
    width:234px;
    height:140px;
    top:213px;
    left:212px;
}
.font2{
    width: 59px;
height: 18px;
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: bold;
color: #A2EFFD;
white-space: nowrap;
    overflow-wrap:break-word;
    position: absolute;
    top:21px;
    left:24px;
}
.font31{
    font-size: 15px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #FFFFFF;
    text-align: left;
    white-space: nowrap;
    overflow-wrap:break-word;
    position:absolute;
    top:62px;
    left:24px;
}
.font32{
    font-size: 15px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #FFFFFF;
    text-align: left;
    white-space: nowrap;
    overflow-wrap:break-word;
    position:absolute;
    top:94px;
    left:24px;
}
.font4{
    width: 43px;
height: 17px;
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 500;
color: #12D8FF;
position:absolute;
top:62px;
left:148px;
}
.font41{
    width: 44px;
height: 18px;
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 500;
color: #12D8FF;
position:absolute;
top:94px;
left:147px;
}
.left-back2{
    /* background-image: url('../assets/image/image4/left-back2.png'); */
    width:1026px;
    height:296px;
    background-size: 100% 100%;
    position: absolute;
    left:693px;
    top:528px;
}
.left-each1{
    background-image: url('../assets/image/image4/left-number.png');
    width:100px;
    height:136px;
    background-size: 100% 100%;
    position: absolute;
    top:108px;
    left:1749px;
}
.left-each2{
    background-image: url('../assets/image/image4/left-number.png');
    width:100px;
    height:136px;
    background-size: 100% 100%;
    position: absolute;
    top:318px;
    left:1749px;
}
.font-each{
    position: absolute;
    top:40px;
    left:20px;
    width: 74px;
height: 20px;
font-size: 24px;
font-family: PangMenZhengDao;
font-weight: 400;
color: #3BEDDE;
white-space: nowrap;
    overflow-wrap:break-word;
}
.font-each2{
    width: 89px;
height: 18px;
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 500;
color: #FFFFFF;
position:absolute;
white-space: nowrap;
    overflow-wrap:break-word;
top:238px;
left:1754px;
}
.font-each3{
    width: 89px;
height: 18px;
font-size: 18px;
font-family: SourceHanSansCN;
font-weight: 500;
color: #FFFFFF;
position:absolute;
white-space: nowrap;
    overflow-wrap:break-word;
top:448px;
left:1773px;
}
.form-bottom1{
    background-image:url('../assets/image/image4/form2.png');
    position:absolute;
    top:753.9px;
    left:677px;
    width:604px;
    height:294px;
    background-repeat:no-repeat ;
    text-align: left;
    background-size: 100% 100%;
}
.form-bottom2{
    background-image:url('../assets/image/image4/form2.png');
    position:absolute;
    top:753.9px;
    left:1310px;
    width:604px;
    height:294px;
    background-repeat:no-repeat ;
    text-align: left;
    background-size: 100% 100%;
}
.font-bottom1{
    width: 222px;
height: 18px;
font-size: 18px;
font-family: Microsoft YaHei;
font-weight: 400;
color: #00FFE8;
position:absolute;
top:7px;
left:32px;
}
.font-bottom2{
    width: 259px;
height: 18px;
font-size: 18px;
font-family: Microsoft YaHei;
font-weight: 400;
color: #00FFE8;
position:absolute;
top:7px;
left:32px;
}
.arrow{
    background-image: url('../assets/image/image4/left-arrow.png');
    width:61px;
    height:109px;
    background-size: 100% 100%;
    position: absolute;
    top:350px;
    left:292px;
}
.chart1{
    height:260px;
        position:absolute;
        top:32.5px;
        width:602px;
}
#myChart1{
       width:100%;
       height:260px;;
}
#chartright2{
    width:596.5px;
    height:260px;
    position:absolute;
    top:32.5px
}
.price1{
    font-size: 18px;
    color: #00FFE8;
    position:absolute;
    right:40px;
    top:45px;
    padding:10px;
}
.price2{
    font-size: 18px;
    color: #00FFE8;
    position:absolute;
    top:45px;
    right:25px;
    padding:10px;
}

</style>
