<template>
  <div class="box-content">
    <img src="./img/timeline.png" alt="">
    <div class="wrapper">
      <div class="progress">
        <div class="progress-bar-wrapper" :style="barStyle">
          <div class="progress-bar"></div>    
        </div>
      </div>
      <ul class="timeline">
        <li class="timeline-item" v-for="(time, index) in timeLineList" :key="index">
          <span :class="timeIndex >= index ? '' : 'color-grey'">
            {{time}}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    loading: Boolean
  },
  data() {
    return {
      timeIndex: 19,
      timeLineList: ['12.27 00:00', '12.27 18:00', '12.27 23:59', '12.28 18:00', '12.28 23:59', '12.29 16:00', '12.29 23:59', '12.30 18:00', '12.30 23:59', '12.31 00:00', '12.31 04:00', '12.31 08:00', '12.31 12:00', '12.31 16:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00']
    }
  },
  computed: {
    percentage() {
      let percentage = ((this.timeIndex + 1) / this.timeLineList.length) * 100
      if (this.timeIndex >= 22) {
        percentage = 100
      }
      if (this.timeIndex < 0) {
        percentage = 0
      }
      return parseInt(percentage)
    },
    barStyle() {
      return {
        width: `calc(${this.percentage}%)`
      }
    } 
  },
  mounted () {
    this.setAnimationDur()
    // 请求数据
    this.fetchData()
    setInterval(() => {
      this.setAnimationDur()
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
    setAnimationDur() {
      let duration = 4
      let durationBar = 4
      let value = this.percentage
      switch (true) {
        case value < 20:
          duration = 1
          durationBar = 2
          break;
        case value < 40:
          duration = 2
          durationBar = 4
          break;
        case value < 60:
          duration = 3
          durationBar = 6
          break;
        case value < 80:
          duration = 4
          durationBar = 8
          break;
        case value <= 100:
          duration = 5
          durationBar = 10
          break
        default:
          break;
      }
      this.$el.style.setProperty('--animation-duration', `${duration}s`);
      this.$el.style.setProperty('--animation-bar-duration', `${durationBar}s`);
    }
  }
}

</script>

<style lang="scss" scoped>
$box-width: 100%;
$box-height: 266px;
.color-grey {
  color: #818EA2;
}

.box-content {
  --animation-duration: 4s; /* 初始动画时长 */
  --animation-bar-duration: 4s; /* 初始动画时长 */
  position: relative;
  width: $box-width;
  height: $box-height;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateY(-55%);
  }
  .wrapper {
    position: relative;
    padding-top: 52px;
    z-index: 1;
  }
  .progress {
    height: 20px;
    background-color: #3D70DA;
    .progress-bar-wrapper {
      width: 100%;
      height: 100%;
    }
    .progress-bar {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: visible;
      background: repeating-linear-gradient( 45deg, #4E9CE8 0%, #24FD91 100%);
      animation: progressAnimation var(--animation-duration) linear;
      
      &::after {
        content: '';
        position: absolute;
        top: -5px;
        right: -5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-block;
        background: linear-gradient( 45deg, #CDF422 0%, #FFFFFF 100%);
        box-shadow: 0 0 4px 10px rgba(206, 245, 36, 0.5);
        animation: move 2s infinite
      }
      @keyframes move {
        from {
          box-shadow: 0 0 4px 8px rgba(206, 245, 36, 0.5);
        }
        50% {
          box-shadow: 0 0 4px 10px rgba(206, 245, 36, 0.5);
        }
        to {
          box-shadow: 0 0 4px 8px rgba(206, 245, 36, 0.5);
        }
      }

      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(120deg, transparent 0%, transparent 6rem, white 11rem, transparent 11.15rem, transparent 15rem, transparent 20rem, transparent 25rem, transparent 27rem, transparent 32rem, transparent 33rem, transparent 33.15rem, transparent 38rem, transparent 40rem, transparent 45rem, transparent 50rem, transparent 100%);
        background-size: 150% 100%;
        background-position: 500% 0;
        background-repeat: no-repeat;
        animation: shine var(--animation-bar-duration) infinite linear;
      }
      @keyframes shine {
        0% {
          background-position: 100% 0;
        }
        100% {
          background-position: -190% 0;
        }
      }
      @keyframes progressAnimation {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
    }
  }
  .timeline {
    width: 100%;
    display: inline-block;
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    font-size: 20px;
    color: #D5DAE1;
    line-height: 1;
    padding-top: 25px;
    .timeline-item {
      display: inline-block;
    }
  }
}
</style>