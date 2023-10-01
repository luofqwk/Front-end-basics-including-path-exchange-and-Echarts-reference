<template>
        <div>
    <div class="form1">
        <span class="text1">今年业务总量统计</span>
        <div class="myChartleft1" >
          <div id="chartleft1"></div>
        </div>
    </div>
    <div class="form2">
        <span class="text1">历年业务总量统计</span>
        <div id="myChart2" ></div>
    </div>
    <div class="a9992"><span class="diary"></span><span class="font1">2012-2023</span><span class="rectangle1"></span></div>
    <div class="form3">
        <div class="circle"></div>
        <div class="right-form3yellow-text">交易数量</div>
        <div class="right-yellow">
          <div class="right-yellow-number">38个</div>
        </div>
        <div class="right-form3blue-text1">金额</div>
        <div class="right-blue1">
          <div class="right-blue1-number1">2000元</div>
        </div>
        <div class="right-form3blue-text2">采购方式</div>
        <div class="right-blue2">
          <div class="right-blue2-number2">12种</div>
        </div>
        <span class="text2">物资按照招标方式分类统计</span>
    </div>
    </div>
</template>
<script>
export default {
  mounted () {
    this.drawline1()
    this.drawline2()
  },
  methods: {
    drawline1 () {
      const myChart = this.$echarts.init(document.getElementById('chartleft1'))
      var option
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  legend: [
    {
        data: ['数量'],
        left: 218,
        textStyle: {
      fontSize: 12,
      color: '#FFFF'
    }
    },
    {
        data: ['金额'],
        left: 342,
        textStyle: {
      fontSize: 12,
      color: '#FFFF'
    }
    }
        ],
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      lineStyle: {
          color: '#FFF'
        },
        axisLine: {
        show: false,
        lineStyle: {
          color: '#FFF'
        }
      },
      // prettier-ignore
      data: ['产业', '授权', '其他']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '单位（元）',
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#FFF'
        }
      },
      splitLine: {
      show: false // 隐藏 y 轴网格线
    },
      axisLabel: {
        formatter: '{value} '
      }
    },
    {
      type: 'value',
      name: '单位（个）',
      position: 'left',
      alignTicks: true,
      splitLine: {
      show: false // 隐藏 y 轴网格线
    },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#FFF'
        }
      },
      axisLabel: {
        formatter: '{value} '
      }
    }
  ],
  series: [
    {
      name: '数量',
      type: 'bar',
      itemStyle: {
 color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
 {
 offset: 0,
  color: '#00FFE8'
 },
 {
 offset: 0.5,
 color: '#00ffea30'
},
{
 offset: 1,
 color: '#00ffea00'
}
 ]),
 barBorderRadius: [100, 100, 0, 0]
},
        barWidth: 20,
      data: [
        2.0, 4.9, 7.0
      ]
    },
    {
      name: '金额',
      type: 'bar',
      barWidth: 20,
      itemStyle: {
color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
 {
offset: 0,
 color: '#D0BC6E'
},
{
offset: 0.5,
color: '#d0bc6e30'
},
{
 offset: 1,
color: '#d0bc6e00'
}
]),
 barBorderRadius: [100, 100, 0, 0]
 },
      yAxisIndex: 1,
      data: [
        2.6, 5.9, 9.0
      ]
    }
  ]
}
option && myChart.setOption(option)
  },
  drawline2 () {
    const myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      var option
option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: [
    {
        data: ['数量'],
        icon: 'ract',
    textStyle: {
      fontSize: 14,
      color: '#FFFF'
    },
     left: 218
    },
    {
        data: ['金额'],
        icon: 'ract',
    textStyle: {
      fontSize: 14,
      color: '#FFFF'
    },
        left: 342
    }
        ],
  grid: {
    left: '3%',
    bottom: '3%',
    right: '0%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {
      show: false,
      lineStyle: {
          color: '#FFF'
        }
    },
    data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
  },
  yAxis: [{
    name: '单位（个）',
    type: 'value',
    axisLine: {
        show: false,
        lineStyle: {
          color: '#FFF'
        }
      },
    splitLine: {
      show: false // 隐藏 y 轴网格线
    }
  },
  {
    name: '单位（元）',
    type: 'value',
    axisLine: {
        show: false,
        lineStyle: {
          color: '#FFF'
        }
      },
    splitLine: {
      show: false // 隐藏 y 轴网格线
    }
  }
],
  series: [
  {
      name: '金额',
      type: 'line',
      symbol: 'none',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310, 120, 340, 540, 120, 470],
      areaStyle: {
        color: 'rgb(127,255,0,0.3)'
      },
      yAxisIndex: 1
    },
    {
      name: '数量',
      type: 'line',
      stack: 'Total',
      symbol: 'none',
      data: [120, 132, 101, 134, 90, 230, 210, 100, 100, 120, 123, 140],
      areaStyle: {
        color: 'rgb(30,144,255,0.3)'
      },
      yAxisIndex: 0
    }
  ]
}

option && myChart2.setOption(option)
}
}
}
</script>

<style scoped>
.form1{
    background-image:url('../assets/image/image4/form.png');
    position:absolute;
    top:110px;
    left:32px;
    width:604px;
    height:294px;
    background-repeat:no-repeat ;
    text-align: left;
    background-size: 100% 100%;
}
.myChartleft1{
    height:260px;
    width:603px;
    position:absolute;
    top:32.5px;
}
#chartleft1{
  width:100%;
  height:100%
}
.text1{
    position:absolute;
    top:7px;
    left:33px;
    width: 74px;
    height: 18px;
    font-size: 18px;
    line-height: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #00FFE8;
    white-space: nowrap;
    overflow-wrap:break-word;
}
.diary{
    background-image: url('../assets/image/image4/diary.png');
    background-size: 100% 100%;
    width:13px;
    height:13px;
    position:absolute;
    top:10px;
    left:15px;
}
.font1{
    width: 43px;
    height: 14px;
    font-size: 14px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #FFFFFF;
    position:absolute;
    left:35px;
    top:10px;
    white-space: nowrap;
    overflow-wrap:break-word;
}
.form2{
    background-image:url('../assets/image/image4/form.png');
    position:absolute;
    top:432px;
    left:32px;
    width:604px;
    height:294px;
    background-repeat:no-repeat ;
    text-align: left;
    background-size: 100% 100%;
}
.a9992{
    background-image: url('../assets/image/image4/right-rectangular.png');
    position:absolute;
    width:111px;
    height:36px;
    background-size:100% 100%;
    top:432.4px;
    left:527px;
}
#myChart2{
  height:260px;
    width:596.9px;
    position:absolute;
    top:32.5px;
}
.form3{
    background-image:url('../assets/image/image4/form2.png');
    position:absolute;
    top:753.9px;
    left:32px;
    width:604px;
    height:294px;
    background-repeat:no-repeat ;
    text-align: left;
    background-size: 100% 100%;
}
.circle{
    background-image: url('../assets/image/image4/right-form3.png');
    position:absolute;
    background-size: 100% 100%;
    width:203px;
    height:176px;
    top:63.5px;
    left:72px;
}
.text2{
    width: 223px;
height: 19px;
font-size: 18px;
font-family: Microsoft YaHei;
font-weight: 400;
color: #00FFE8;
position:absolute;
left:31px;
top:7px;
}
.right-form3yellow-text{
  position: absolute;
  top:86.5px;
  left:335px;
  font-size: 16px;
font-family: Microsoft YaHei;
font-weight: 400;
color: #FFFFFF;
}
.right-yellow{
  background-image: url('../assets/image/image4/right-yellow.png');
  position:absolute;
  width:77px;
  height:37px;
  top:74.5px;
  left:419px;
}
.right-yellow-number{
  position:absolute;
  top:9px;
  width:42px;
  height:20px;
  font-size: 21px;
  color: #FFFFFF;
  font-family: DIN;
  font-weight: normal;
  overflow-wrap: break-word;
  white-space: nowrap;
}
.right-form3blue-text1{
  position:absolute;
  top:154.5px;
  left:367.5px;
  width:33px;
  height:15px;
  font-size: 16px;
font-family: Microsoft YaHei;
font-weight: 400;
color: #FFFFFF;
}
.right-blue1{
  background-image: url('../assets/image/image4/right-blue.png');
  position:absolute;
  width:74px;
  height:30px;
  top:147.5px;
  left:419px;
}
.right-blue1-number1{
  font-size: 16px;
font-family: DIN;
font-weight: normal;
color: #FFFFFF;
position:absolute;
top:7px;
left:3px;
}
.right-form3blue-text2{
  position:absolute;
  top:224.5px;
  left:335px;
  width:64px;
  height:16px;
  font-size: 16px;
font-family: Microsoft YaHei;
font-weight: 400;
color: #FFFFFF;
}
.right-blue2{
  background-image: url('../assets/image/image4/right-blue.png');
  position:absolute;
  width:74px;
  height:30px;
  top:215.5px;
  left:419px;
}
.right-blue2-number2{
  font-size: 16px;
font-family: DIN;
font-weight: normal;
color: #FFFFFF;
position:absolute;
top:9px;
left:1px;
}
</style>
