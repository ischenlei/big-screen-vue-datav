<template>
  <div class="box-content">
    <div class="box-title">
      <img src="./img/title1.png" alt="">
    </div>
    <div class="task-bar">
      <div v-for="(item, index) in barData" class="task-bar__card">
        <div class="task-bar__card-left">
          <div class="column-bg">
            <div class="column-inner-warpper">
              <div v-if="item.rate > 0" class="column-inner" :style="{ height: calcHeight(item.rate) + '%'}"></div>
            </div>
          </div>
        </div>
        <div class="task-bar__card-right">
          <div class="title">{{ item.text }}</div>
          <div class="content">
            <div>
              <div class="statis">
                <span>{{ item.rate }}</span>
                <span class="sign">%</span>
              </div>
              <div class="text">当前进度</div>
            </div>
            <div>
              <div class="statis statis--blue">{{ item.totalNum }}</div>
              <div class="text">任务总数</div>
            </div>
          </div>
        </div>
      </div>
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
      barData: [
        {
          text: "投产前准备",
          totalNum: 7,
          rate: 120
        }, {
          text: "蓟州行停业&各业务系统T-1日批处理",
          totalNum: 78,
          rate: 12
        }, {
          text: "行内改造系统应用部署",
          totalNum: 7,
          rate: 100
        }, {
          text: "数据迁移",
          totalNum: 7,
          rate: 34
        }, {
          text: "迁移系统绿灯验证&T日批处理",
          totalNum: 7,
          rate: 67
        }, {
          text: "试营业&Ｔ+1日批处理",
          totalNum: 7,
          rate: 0
        }
      ]
    };
  },
  computed: {

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
    // 根据自己的业务情况修改
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
    },
    calcHeight(rate) {
      const rateNum = parseInt(rate)
      if (rateNum <= 0) {
        return 0
      } else if(rateNum >= 100) {
        return 100
      } else {
        return rateNum
      }
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
  .box-title {
    img {
      // width: 840px;
      // height: 46px;
    }
  }
  .task-bar {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 411px 411px 411px;
    grid-template-rows: 171px 171px;
    column-gap: 36px;
    row-gap: 53px;
    .task-bar__card {
      width: 100%;
      height: 100%;
      background-image: url('./img/cardBg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      padding: 0 20px;
      .task-bar__card-left {
        padding-right: 20px;
        padding-left: 10px;
        .column-bg {
          position: relative;
          width: 50px;
          height: 132px;
          border-radius: 100% / 12% 12% 12% 12%;
          background: linear-gradient( 90deg, rgba(26,46,156,0.6) 0%, rgba(80,102,221,0.64) 16%, rgba(121,140,241,0.66) 31%, rgba(80,102,221,0.53) 51%, rgba(26,46,156,0.5) 100%);
          // z-index: 1;
          &::before{
            position: absolute;
            content: '';
            display: block;
            height: 12px;
            width: 100%;
            border-radius: 50%;
            top: 0px;
            // z-index: 1;
            background: rgba(61, 74, 110, 0.65);
          }
        }
        .column-inner-warpper {
          position: absolute;
          height:90%;
          width: 100%;
          display: flex;
          justify-content: center;
          bottom: 0;
        }
        $innerBg: linear-gradient( 90deg, #365bbd 0%,#6d9def 30%, #365bbd 100%);
        .column-inner {
          position: absolute;
          bottom: 5px;
          width: 80%;
          background: $innerBg;
          &::before {
            position: absolute;
            content: '';
            display: block;
            height: 10px;
            width: 100%;
            background: #6999e5;
            border-radius: 50%;
            top: -3.5px;
          }
          &::after {
            position: absolute;
            content: '';
            display: block;
            height: 6px;
            width: 100%;
            border-radius: 50% / 0 0 100% 100%;
            background: $innerBg;
            bottom: -5px;
          }
        }
      }
      .task-bar__card-right {
        flex: 1;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        .title {
          font-weight: 600;
          font-size: 16px;
          color: #F4F8FF;
          padding: 10px 0px;
          border-bottom: 1px dashed #647DA5;
        }
        .content {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          .text{
            color: #A2B7E3;
            font-size: 14px;
            line-height: 1;
            margin-top: 10px;
          }
          .statis {
            color: #FFFFFF;
            font-size: 36px;
            line-height: 1;
            &--blue {
              color: #C4DAFF;
            }
          }
          .sign {
            font-size: 20px;
          }
        }
      }
    }
  }
  
}
</style>