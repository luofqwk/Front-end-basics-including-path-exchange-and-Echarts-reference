<template>
    <div>
    <div class="form1">
        <span class="text1">招标方式</span>
        <div id="chartleft1"></div>
    </div>
    <div class="a9991">
      <span class="font1">标段数</span><span class="rectangle1"></span>
    </div>
    <div class="form2">
        <span class="text1">各单位金额</span>
        <div id="chartleft2"></div>
    </div>
    <div class="a9992"><span class="font1">标段数</span><span class="rectangle1"></span></div>
    <div class="form3">
        <span class="text1">主要物资</span>
        <div id="chartleft3"></div>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      value: null,
      computer: [{
        value: '选项1',
       label: '1kv电脑'
      },
      {
        value: '选项2',
       label: '2kv电脑'
      }
    ]
    }
  },
  mounted () {
    this.drawline1()
    this.drawline2()
    this.drawline3()
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
  legend: [
    {
        data: ['2022年标段数'],
        left: 138,
        textStyle: {
        color: '#FFFFFF',
        fontSize: 12
       }
    },
    {
        data: ['2021年标段数'],
        left: 262,
        textStyle: {
        color: '#FFFFFF',
        fontSize: 12
       }
    },
    {
      data: ['同比增长'],
  icon: 'roundRect',
  iconStyle: {
    color: '#B95F5B' // 设置图标样式的颜色为 #B95F5B
  },
  left: 381,
  textStyle: {
    color: '#FFFFFF',
    fontSize: 12
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
    axisLabel: {
      interval: 0,
      formatter: function (value) {
        if (value.length > 4) {
          return value.substring(0, 4) + '\n' + value.substring(4)
        } else {
          return value
        }
      }
    },
    data: ['公开邀请竞争性谈判', '公开招标', '邀请招标', '单一来源谈判', '邀请竞争性谈判', '框架公开招标', '框架邀请招标', '公开询价', '邀请询价']
  }
],
yAxis: [
    {
      type: 'value',
      name: '单位（%）',
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
      name: '2022年标段数',
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
        barWidth: 10,
      data: [2.0, 4.9, 7.0, 8.2, 7.5, 5.6, 5.7, 7.5, 8.9]
    },
    {
      name: '2021年标段数',
      type: 'bar',
      barWidth: 10,
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
      yAxisIndex: 0,
      data: [2.0, 4.9, 7.0, 8.2, 7.5, 5.6, 5.7, 7.5, 8.9]
    },
    {
        name: '同比增长',
        type: 'line',
        yAxisIndex: 1,
        data: [40, 45, 60, 70, 50, 60, 70, 50, 60],
        smooth: true,
        lineStyle: {
      color: '#B95F5B' // 将线条颜色设置为红色
    },
    itemStyle: {
      color: '#B95F5B' // 设置节点在高亮状态下的颜色为绿色
    },
    symbol: 'none'
    }
  ]
}
option && myChart.setOption(option)
},
  drawline2 () {
    const myChart2 = this.$echarts.init(document.getElementById('chartleft2'))
      var option
option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: [
    {
        data: ['2022年标段数'],
        icon: 'roundRect',
    textStyle: {
      fontSize: 12,
      color: '#FFFF'
    },
     left: 196
    },
    {
        data: ['2021年标段数'],
        icon: 'roundRect',
    textStyle: {
      fontSize: 12,
      color: '#FFFF'
    },
        left: 320
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
    axisLabel: {
      interval: 0
      },
    data: ['鄞州', '慈溪', '余姚', '镇海', '北仑', '奉化', '宁海', '象山', '甬城配网', '送变电', '永耀集团', '新胜', '永耀信息']
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
  }
],
  series: [
  {
      name: '2022年标段数',
      type: 'line',
      symbol: 'none',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310, 120, 340, 540, 120, 470, 510],
      areaStyle: {
        color: 'rgb(127,255,0,0.3)'
      }
    },
    {
      name: '2021年标段数',
      type: 'line',
      stack: 'Total',
      symbol: 'none',
      data: [120, 132, 101, 134, 90, 230, 210, 100, 100, 120, 123, 140, 131],
      areaStyle: {
        color: 'rgb(30,144,255,0.3)'
      }
    }
  ]
}

option && myChart2.setOption(option)
},
drawline3 () {
      const myChart = this.$echarts.init(document.getElementById('chartleft3'))
      var option
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
     right: 2,
     left: 45,
     bottom: 20
  },
  legend: [
    {
        data: ['19年金额'],
        left: 196,
        textStyle: {
        color: '#FFFFFF',
        fontSize: 12
       }
    },
    {
        data: ['20年金额'],
        left: 320,
        textStyle: {
        color: '#FFFFFF',
        fontSize: 12
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
    axisLabel: {
      interval: 0
    },
    data: ['鄞州', '慈溪', '余姚', '镇海', '北仑', '奉化', '宁海', '象山', '甬城配网', '送变电', '永耀集团', '新胜', '永耀信息']
  }
],
yAxis: [
    {
      type: 'value',
      name: '单位（万元）',
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
    }
  ],
  series: [
    {
      name: '19年金额',
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
 ])
},
        barWidth: 10,
      data: [2.0, 4.9, 7.0, 8.2, 7.5, 5.6, 5.7, 7.5, 8.9, 2.0, 4.9, 7.0, 8.2]
    },
    {
      name: '20年金额',
      type: 'bar',
      barWidth: 10,
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
])
 },
      data: [2.0, 4.9, 7.0, 8.2, 7.5, 5.6, 5.7, 7.5, 8.9, 2.0, 4.9, 7.0, 8.2]
    }
  ]
}
option && myChart.setOption(option)
}
}
}
</script>
<style scoped>
.form1{
    background-image:url('../assets/image/image3/right-form.png');
    position:absolute;
    top:110px;
    left:32px;
    width:603px;
    height:294px;
    background-repeat:no-repeat ;
    text-align: left;
    background-size: 100% 100%;
}
#chartleft1{
    width:596.5px;
    height:260px;
    position: absolute;
    top:32.5px;
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
.a9991{
    background-image: url('../assets/image/image3/right-rectangular.png');
    position:absolute;
    width:111px;
    height:36px;
    background-size:100% 100%;
    top:105px;
    left:527px;
}
.font1{
    width: 43px;
    height: 14px;
    font-size: 14px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #FFFFFF;
    position:absolute;
    left:25px;
    top:11px;
}
.rectangle1{
    background-image: url('../assets/image/image3/triangle.png');
    position:absolute;
    width:11px;
    height:7px;
    background-size:100% 100%;
    top:15px;
    left:80px;
}
.form2{
    background-image:url('../assets/image/image3/right-form.png');
    position:absolute;
    top:432px;
    left:32px;
    width:603px;
    height:294px;
    background-repeat:no-repeat ;
    text-align: left;
    background-size: 100% 100%;
}
#chartleft2{
  position: absolute;
  top:32.5px;
  width:596.5px;
  height:260px;
}
.a9992{
    background-image: url('../assets/image/image3/right-rectangular.png');
    position:absolute;
    width:111px;
    height:36px;
    background-size:100% 100%;
    top:432.4px;
    left:527px;
}
.form3{
    background-image:url('../assets/image/image3/right-form.png');
    position:absolute;
    top:753.9px;
    left:32px;
    width:603px;
    height:294px;
    background-repeat:no-repeat ;
    text-align: left;
    background-size: 100% 100%;
}
#chartleft3{
  position: absolute;
  top:32.5px;
  width:596.5px;
  height:260px;
}
.a9993{
    background-image: url('../assets/image/image3/right-rectangular.png');
    position:absolute;
    width:100px;
    height:25.6px;
    background-size:100% 100%;
    top:755.4px;
    left:527px;
}
.a9993.el-input__inner{
  background-image: url('../assets/image/image3/right-rectangular.png');
  width:100px;
    height:25.6px;
}
.font3{
    width: 53px;
    height: 14px;
    font-size: 14px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #FFFFFF;
    position:absolute;
    left:15px;
    top:5.6px;
}
</style>
