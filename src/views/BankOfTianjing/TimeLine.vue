<template>
  <div class="box-content">
    <img src="./img/timeline.png" alt="">
    <div class="wrapper">
      <div class="progress">
        <div class="progress-bar" :style="barStyle"></div>
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
  data() {
    return {
      timeIndex: 17,
      timeLineList: ['12.27 00:00', '12.27 18:00', '12.27 23:59', '12.28 18:00', '12.28 23:59', '12.29 16:00', '12.29 23:59', '12.30 18:00', '12.30 23:59', '12.31 00:00', '12.31 04:00', '12.31 08:00', '12.31 12:00', '12.31 16:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00', '12.31 20:00']
    }
  },
  computed: {
    barStyle() {
      const percentage = ((this.timeIndex + 1) / this.timeLineList.length) * 100
      return {
        width: `calc(${percentage}%)`
      }
    }
  },
  mounted () {
    // 请求数据
    this.fetchData();
  },
  methods: {
    // 根据自己的业务情况修改
    fetchData () {
      
    },
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
  position: relative;
  width: $box-width;
  height: $box-height;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateY(-50%);
  }
  .wrapper {
    position: relative;
    padding-top: 65px;
    z-index: 1;
  }
  .progress {
    height: 20px;
    background-color: #3D70DA;
    .progress-bar {
      position: relative;
      width: 100%;
      height: 100%;
      background: linear-gradient( 90deg, #4E9CE8 0%, #24FD91 100%);
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