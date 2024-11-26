<template>
  <div class="box-content">
    <img src="./img/timeline.png" alt="">
    <div class="wrapper">
      <div class="progress">
        <div class="progress-bar-wrapper" :style="barStyle">
          <!-- <div class="progress-bar"></div>     -->
          <svg class="progress-bar" width="100%" height="100%">
            <defs>
              <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#4E9CE8" />
                <stop offset="100%" stop-color="#24FD91" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#linear-gradient)" rx="5">
              <animate
                attributeName="width"
                from="0"
                to="100%"
                dur="3s"
                fill="freeze"
                begin="0s;endAnimation.end+4s"
                id="endAnimation"
              />
            </rect>
            
            <defs>
              <linearGradient id="circle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#CDF422" />
                <stop offset="100%" stop-color="#FFFFFF" />
              </linearGradient>
            </defs>
            <defs>
              <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
                <!-- 模糊光晕，stdDeviation决定光晕的大小 -->
                <feGaussianBlur stdDeviation="10" result="blur"/>
                <!-- 光晕的颜色 -->
                <feFlood flood-color="rgba(206, 245, 36)" result="flood"/>
                <feComposite in2="blur" operator="in" result="composite"/>
                <!-- 合并光晕与原图形 -->
                <feMerge>
                  <feMergeNode in="composite"/> <!-- 光晕 -->
                  <feMergeNode in="SourceGraphic"/> <!-- 原图形 -->
                </feMerge>
              </filter>
            </defs>
            <circle cx="100%" cy="50%" r="15" fill="url(#circle-gradient)" filter="url(#glow-effect)">
              <animate 
                attributeName="cx" 
                from="0" 
                to="100%" 
                dur="3s" 
                fill="freeze"
                begin="0s;circleAnimation.end+4s"
                id="circleAnimation" />
            </circle>
            <circle cx="100%" cy="50%" r="25" fill="#CDF4224d">
              <animate 
                attributeName="cx" 
                from="0" 
                to="100%" 
                dur="3s" 
                fill="freeze"
                begin="0s;circleAnimation.end+4s"
                id="circleAnimation" />
              <animate
                attributeName="r" 
                from="19"
                to="25"
                dur="2s"
                fill="freeze"
                begin="0s"
                repeatCount="indefinite"
                keyTimes="0;0.5;1"
                values="19;25;19"
                keySplines="ease-in"
              />
            </circle>
          </svg>
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
    .progress-bar-wrapper {
      width: 100%;
      height: 100%;
    }
    .progress-bar {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: visible;
      // background: linear-gradient( 90deg, #4E9CE8 0%, #24FD91 100%);
      // animation: progressAnimation 5s linear forwards 10s infinite;
      // animation-play-state: running;
      // animation-fill-mode: forwards;
      // &::after {
      //   content: '';
      //   position: absolute;
      //   top: -5px;
      //   right: -5px;
      //   width: 30px;
      //   height: 30px;
      //   border-radius: 50%;
      //   display: inline-block;
        // background: linear-gradient( 45deg, #CDF422 0%, #FFFFFF 100%);
        // box-shadow: 0 0 4px 10px rgba(206, 245, 36, 0.5);
      // }
    }
    // @keyframes progressAnimation {
    //   from {
    //     width: 0;
    //   }
    //   to {
    //     width: 100%;
    //   }
    // }
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