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
export default {
  props: {
    loading: Boolean
  },
  data () {
    return {
      tableData: [
        ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30'],
        ['蓟州行网点上缴所有登记簿、印章、印鉴卡片', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconBlue'>运行中</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30'],
        ['蓟州行网点按天津银行要求设立各登…', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrey'>未运行</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30'],
        ['蓟州行网点T-1日现金全部缴存同业处理', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30'],
        ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30'],
        ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30'],
        ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrass'>已完成</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30'],
        ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconBlue'>运行中</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30'],
        ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconBlue'>运行中</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30'],
        ['蓟州行网点下载检查报表', '蓟州行', '蓟州行停业&各业务系统T-1日批处理', "<span class='iconGrey'>未运行</span>", '负责人', '2022.12.31 08:30', '2022.12.31 08:30']
      ]
    };
  },
  computed: {
    config() {
      return {
        header: ['任务名称', '所属系统', '任务阶段', '任务状态', '负责人', '开始时间', '结束时间'],
        data: this.tableData || [],
        rowNum: 6, //表格行数
        headerHeight: 60,
        headerBGC: '#071637', //表头
        oddRowBGC: '#04102A', //奇数行
        evenRowBGC: '#04102A', //偶数行
        // index: true,
        columnWidth: [420, 150, 400, 150, 150, 200, 200],
        hoverPause: false
        // align: ['center']
      }
    }
  },
  mounted () {
    // 请求数据
    this.fetchData()
    setInterval(() => {
      // 请求数据
      this.fetchData()
    }, 60000)
  },
  methods: {
    fetchData() {
      // 添加loading
      this.$emit('update:loading', true)
      this.$axios({
        url: '/api/mock',
        method: 'post',
        data: {

        }
      }).then(data => {
        console.log(data);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        // 取消loading
        this.$emit('update:loading', false)
      })
    }
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
  justify-content: space-between;
  .box-title {
    margin-top: 10px;
    img {
      // width: 828px;
      height: 46px;
    }
  }
  .body-box {
    overflow: hidden;
    width: 100%;
    ::v-deep .dv-scr-board {
      height: 420px;
      border-bottom: 1px solid #313F5F;
      .header {
        font-size: 20px;
        border: 2px solid #313F5F;
      }
      .rows {
        border-left: 1px solid #313F5F;
        border-right: 1px solid #313F5F;
        .row-item {
          border-bottom: 1px solid #313F5F;
          font-size: 18px;
          color: #A1AABF;
          &:nth-child(4) {
            background: #04102A;
            box-shadow: inset 0px -10px 20px 0px rgba(0,116,255,0.5);
            border: 2px solid;
            border-image: linear-gradient(0deg, rgba(44, 185, 255, 1), rgba(49, 63, 95, 1)) 2 2;
          }
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