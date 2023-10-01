<template>
    <div>
    <div class="text-left1">
        <div class="text11">总标段数量</div>
        <div class="text12">14,459</div>
    </div>
    <div class="text-left2">
        <div class="text21">各金额</div>
        <div class="text22">23,089</div>
    </div>
    <div class="middle-image">
        <div class="middle2">物资</div>
    </div>
    <div class="text-right2">
        <div class="text41">总中标服务费</div>
        <div class="text42">15,542</div>
    </div>
    <div class="end-form1">
        <span class="text1">按金额分类</span>
        <div id="chartright1"></div>
    </div>
    <div class="a9991"><span class="font1">标段数</span><span class=tangle1></span></div>
    <div class="end-form2">
        <span class="text1">中标服务费</span>
        <div id="chartright2"></div>
    </div>
    <div class="a9992"><span class="font2">2022</span> <span class="diary"></span></div>
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
      const myChart = this.$echarts.init(document.getElementById('chartright1'))
      var option

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
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
    right: '4%',
    top: '12%',
    bottom: '1%',
    containLabel: true
  },
  xAxis: {
  show: false // 隐藏 x 轴
},
yAxis: {
  type: 'category',
  axisLine: { show: false }, // 隐藏 y 轴线
  axisTick: { show: false }, // 隐藏 y 轴刻度线
  axisLabel: { show: false }, // 隐藏 y 轴标签
  data: ['5000万元以上', '1000万元--5000万元', '500万元--1000万元', '100万元--500万元', '100万元及以下']
},
series: [
  {
    name: '2022年标段数',
    type: 'bar',
    itemStyle: {
        borderRadius: [50, 50, 50, 50],
        color: '#00FDD1'
    },
    backgroundStyle: {
        borderRadius: [50, 50, 50, 50] // 设置背景的圆角边框
      },
    showBackground: true,
    barWidth: 10,
    data: [18203, 23489, 29034, 104970, 131744],
    label: { // 设置标签样式
      show: true,
      position: [5, -15],
      distance: 3,
      textStyle: {
      fontSize: 12,
      color: '#DEEBFF'
    },
      formatter: '{b}' // 显示数据项名称
    }
  },
  {
    name: '2021年标段数',
    type: 'bar',
    distance: 3,
    showBackground: true,
    align: 'left',
    itemStyle: {
      borderRadius: [50, 50, 50, 50],
      color: '#FAEE65'
    },
    backgroundStyle: {
        borderRadius: [50, 50, 50, 50] // 设置背景的圆角边框
      },
    barWidth: 10,
    textStyle: {
      fontSize: 12,
      color: '#DEEBFF'
    },
    data: [19325, 23438, 31000, 121594, 134141],
    label: { // 设置标签样式
      show: false
    }
  }
]
}
option && myChart.setOption(option)
    },
    drawline2 () {
    const myChart2 = this.$echarts.init(document.getElementById('chartright2'))
      var option
option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: [
    {
        data: ['总金额'],
        icon: 'roundRect',
    textStyle: {
      fontSize: 12,
      color: '#FFFF'
    },
     left: 196,
     top: 10
    },
    {
        data: ['中标服务费'],
        icon: 'roundRect',
    textStyle: {
      fontSize: 12,
      color: '#FFFF'
    },
        left: 320,
        top: 10
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
    data: ['鄞州', '慈溪', '余姚', '镇海', '北仑', '奉化', '宁海', '象山', '甬城配网', '送变电', '永耀集团', '新胜', '永耀信息']
  },
  yAxis: [{
    name: '单位（万元）',
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
      name: '总金额',
      type: 'line',
      symbol: 'none',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310, 120, 340, 540, 120, 470, 510],
      areaStyle: {
        color: 'rgb(47, 134, 226,0.3)'
      },
      color: '#09DDF5',
      smooth: true
    },
    {
      name: '中标服务费',
      type: 'line',
      stack: 'Total',
      symbol: 'none',
      data: [120, 132, 101, 134, 90, 230, 210, 100, 100, 120, 123, 140, 131],
      areaStyle: {
        color: 'rgb(199, 179, 72,0.3)'
      },
      color: 'rgb(199, 179, 72)',
      smooth: true
    }
  ]
}

option && myChart2.setOption(option)
}
}
}
</script>
<style scoped>
.text-left1{
    background-image:url('../assets/image/image3/left-method.png') ;
    text-align:left;
    position:absolute;
    top:222px;
    left:654px;
    width:318px;
    height: 114px;
    background-size:100% 100% ;
}
.text11{
    width: 128px;
    height: 24px;
    font-size: 24px;
    font-family: SourceHanSansCN;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 32px;
    position:absolute;
    top:23px;
    left:100px;
    white-space: nowrap;
    overflow-wrap:break-word;
}
.text12{
    width: 116px;
    height: 29px;
    font-size: 36px;
    font-family: PangMenZhengDao;
    font-weight: 400;
    color: #00FFB9;
    line-height: 34px;
    position:absolute;
    top:60px;
    left:108px;
    white-space: nowrap;
    overflow-wrap:break-word;
}
.text-left2{
    background-image:url('../assets/image/image3/left-price.png') ;
    text-align: left;
    position:absolute;
    top:474px;
    left:654px;
    width:318px;
    height:113px;
    background-size:100% 100% ;
}
.text21{
    width: 76px;
    height: 24px;
    font-size: 24px;
    line-height: 32px;
    font-family: SourceHanSansCN;
    font-weight: 500;
    color: #FFFFFF;
    position:absolute;
    left:148px;
    top:21px;
    white-space: nowrap;
    overflow-wrap:break-word;
}
.text22{
    width: 129px;
    height: 29px;
    font-size: 36px;
    font-family: PangMenZhengDao;
    font-weight: 400;
    color: #00FFB9;
    line-height: 34px;
    position:absolute;
    top:58px;
    left:109px;
    white-space: nowrap;
    overflow-wrap:break-word;
}
.middle-image{
    background-image: url('../assets/image/image3/left-number.png');
    text-align: left;
    position:absolute;
    top:203px;
    left:1014px;
    width:499px;
    height:450px;
    background-size: 100% 100%;
}
.middle2{
  width: 98px;
height: 30px;
font-size: 42px;
font-family: PangMenZhengDao;
font-weight: 400;
color: #04FCBE;
    position:absolute;
    top:206px;
    left:197px;
    line-height: 35px;
    text-align: center;
}
.text41{
    white-space: nowrap;
    overflow-wrap:break-word;
    width: 154px;
    height: 24px;
    font-size: 24px;
    font-family: SourceHanSansCN;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 32px;
    position:absolute;
    top:32px;
    left:94px;
}
.text42{
    white-space: nowrap;
    overflow-wrap:break-word;
    width: 113px;
    height: 29px;
    font-size: 36px;
    font-family: PangMenZhengDao;
    font-weight: 400;
    color: #00FFB9;
    line-height: 34px;
    position: absolute;
    top:69px;
    left:95px;
}
.text-right2{
    background-image:url('../assets/image/image3/left-serve.png');
    text-align: left;
    position: absolute;
    top:341px;
    left:1552px;
    width:318px;
    height:127px;
    background-size: 100% 100%;
}
.end-form1{
    background-image: url('../assets/image/image3/left-form.png');
    position:absolute;
    top:753px;
    left:656px;
    width:603px;
    height:294px;
    background-size: 100% 100%;
}
.a9991{
    background-image: url('../assets/image/image3/right-rectangular.png');
    width:100px;
    height: 25.6px;
    position:absolute;
    top:752.4px;
    left:1154px;
    background-size: 100% 100%;
}
.tangle1{
    background-image: url('../assets/image/image3/triangle.png');
    width:11px;
    height:7px;
    background-size: 100% 100%;
    position: absolute;
    top:9.6px;
    left:76px;
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
.font1{
    width: 43px;
    height: 13px;
    font-size: 14px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #FFFFFF;
    position:absolute;
    left:23px;
    top:6.6px;
}
.end-form2{
    background-image: url('../assets/image/image3/left-form.png');
    position:absolute;
    top:753px;
    left:1290px;
    width:603px;
    height:294px;
    background-size: 100% 100%;
}
.a9992{
    background-image: url('../assets/image/image3/right-rectangular.png');
    width:100px;
    height: 25.6px;
    position:absolute;
    top:752.4px;
    left:1782px;
    background-size: 100% 100%;
}
.diary{
    background-image: url('../assets/image/image3/diary.png');
    width:14px;
    height:14px;
    position:absolute;
    top:6px;
    left:14px;
    background-size: 100% 100%;
}
.font2{
    width:32px;
    height:12px;
    font-size: 14px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #FFFFFF;
    position:absolute;
    left:35px;
    top:6px;
}
#chartright1{
  width:596.5px;
  height:260px;
  position: absolute;
  top:32.5px;
}
#chartright2{
  width:596.5px;
  height:260px;
  position: absolute;
  top:32.5px;
}
</style>
