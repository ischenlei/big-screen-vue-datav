<template>
  <div class="box-content">
    <div class="box-title">
      <img src="./img/title2.png" alt="">
    </div>
    <div class="d-flex jc-center body-box">
      <dv-scroll-board class="dv-scr-board" :config="config" />
    </div>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      config: {
        header: ['任务名称', '所属系统', '任务阶段', '任务状态', '开始时间', '结束时间'],
        data: [
          ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '2022.12.31 08:30', '2022.12.31 08:30'],
          ['蓟州行网点上缴所有登记簿、印章、印鉴卡片', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconBlue'>运行中</span>", '2022.12.31 08:30', '2022.12.31 08:30'],
          ['蓟州行网点按天津银行要求设立各登…', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrey'>未运行</span>", '2022.12.31 08:30', '2022.12.31 08:30'],
          ['蓟州行网点T-1日现金全部缴存同业处理', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '2022.12.31 08:30', '2022.12.31 08:30'],
          ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '2022.12.31 08:30', '2022.12.31 08:30'],
          ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '2022.12.31 08:30', '2022.12.31 08:30'],
          ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '2022.12.31 08:30', '2022.12.31 08:30'],
          ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconBlue'>运行中</span>", '2022.12.31 08:30', '2022.12.31 08:30'],
          ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconBlue'>运行中</span>", '2022.12.31 08:30', '2022.12.31 08:30'],
          ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrey'>未运行</span>", '2022.12.31 08:30', '2022.12.31 08:30']
        ],
        rowNum: 4, //表格行数
        headerHeight: 60,
        headerBGC: 'transparent', //表头
        oddRowBGC: '#0A1225', //奇数行
        evenRowBGC: '#0A1225', //偶数行
        // index: true,
        columnWidth: [400, 200, 400, 200, 200, 200],
        // align: ['center']
      }
    };
  },
  computed: {

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
  justify-content: flex-end;
  .box-title {
    img {
      width: 828px;
      height: 46px;
    }
  }
  .body-box {
    // border-radius: 10px;
    overflow: hidden;
    width: 100%;
    margin-top: 30px;
    ::v-deep .dv-scr-board {
      height: 360px;
      .header {
        font-size: 20px;
        background-image: linear-gradient( 0deg, rgba(31,50,97,0.89) 0%, rgba(44,72,145,0) 100%);
        border-width: 0 0 2px 0;
        border-style: solid;
        border-image: linear-gradient(to right, rgba(108, 149, 246, 0.34) ,#7BA2FF 50%, rgba(108, 149, 246, 0.31)) 1; 
      }
      .rows {
        .row-item {
          font-size: 20px;
          color: #999;
        }
      }
      .iconGrass::before, .iconBlue::before, .iconGrey::before {
        content: '';
        display: inline-block;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        margin-right: 20px;
      }

      .iconGrass::before {
        background: #53B30F;
        box-shadow: 0 0 2px 6px #53b30f4d;
      }
      .iconBlue::before {
        background: #48AFFF;
        box-shadow: 0 0 2px 6px #48AFFF4d;
      }
      .iconGrey::before {
        background: #909090;
        box-shadow: 0 0 2px 6px #9090904d;
      }
    }
  }
}
</style>