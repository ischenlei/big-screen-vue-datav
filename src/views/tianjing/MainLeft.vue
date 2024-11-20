<template>
  <div class="box-content">
    <div class="box-title">
      <img src="./img/title1.png" alt="">
    </div>
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="436px"
      width="1228px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      cdata: {
        category: [
          "投产前准备",
          "蓟州行停业&各业务系统T-1日批处理",
          "行内改造系统应用部署",
          "数据迁移",
          "迁移系统绿灯验证&T日批处理",
          "试营业&Ｔ+1日批处理",
        ],
        data: [7, 32, 16, 58, 46, 27],
        rate: [
          94,
          86,
          52,
          71,
          41,
          66,
        ]
      }
    };
  },
  computed: {
    options() {
      return {
        tooltip: {
          formatter:function(params){
            return `${params.name}: ${params.data}%`;
          }
        },
        grid: {
          left: '0%',
          right: '2%',
          bottom: '0%',
          top: '0%',
          containLabel: true
        },
        yAxis: [
          {
            type: 'category',
            data: this.cdata.category,
            inverse: true,
            axisLabel: {
              show: true,
              inside: true,
              color: '#E0ECF4',
              padding: [0, 0, 50, 0],
              interval: 0,
              fontSize: 16
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            splitLine: {
                show: false
            }
          },
          {
            type: 'category',
            data: this.cdata.data,
            inverse: true,
            axisLabel: {
              show: true,
              inside: false,
              color: '#CAD5E6',
              fontSize: 24,
              padding: [0, 0, 0, 20],
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            splitLine: {
                show: false
            }
          }
        ],
        xAxis: {
          type: 'value',
          splitLine: {//坐标轴在grid区域的分割线
            show: true,
            // interval: function (index, value) {
            //     let maxIndex = 5;
            //     return index !== 0 && index !== maxIndex;
            // },
            lineStyle: {
              type: 'dashed',
              color: 'rgba(176, 215, 255, 0.25)',
            }
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 20,
            showBackground: true,
            label: {
              show: true,
              position: 'insideRight',
              color: '#FFFFFF',
              fontSize: 30,
              padding: [0, 30, 0, 0],
              formatter:function(params){
                console.log(params);
                return params.data + '%';
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: [0, 50, 50, 0],
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: 'rgba(47,125,247,0.1)' },
                  { offset: 0.75, color: "#6468FD" },
                  { offset: 0.88, color: "#378CE4" },
                  { offset: 1, color: "#A4DDE5" }
                ])
              }
            },
            data: this.cdata.rate
          }
        ]
      }
    }
  },
  components: {
    Echart,
  },
  mounted () {
    this.setData();
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
      
    },
  }
}
</script>

<style lang="scss" scoped>
$box-height: 500px;
$box-width: 100%;

.box-content {
  height: $box-height;
  width: $box-width;
  display: flex;
  flex-direction: column;
  .box-title {
    img {
      width: 840px;
      height: 46px;
    }
  }
  #bottomLeftChart {
    margin-top: 30px;
  }
}
</style>