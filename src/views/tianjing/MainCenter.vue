<template>
  <div class="box-content">
    <div>
      <div class="box-task">
        <img class="icon" :src="icon.taskIcon" alt="">
        <div>
          <div class="fs-sub-title">总任务</div>
          <div class="font-DINAlternate fs-sub-num shadow">{{ totalTask }}</div>
        </div>
      </div>
      <div class="box-task">
        <img class="icon" :src="icon.taskIcon" alt="">
        <div>
          <div class="fs-sub-title">已完成任务</div>
          <div class="font-DINAlternate fs-sub-num colorGrass">{{ doneTask }}</div>
        </div>
      </div>
    </div>
    <div class="box-task__center">
      <img :src="icon.taskBg" alt="">
      <div class="text-center text-white">
        <div class="font-DINAlternate fs-center-num">{{ stateTask }}</div>
        <div class="fs-center-title mt-5">任务执行情况</div>
      </div>
    </div>
    <div>
      <div class="box-task">
        <img class="icon" :src="icon.taskIcon" alt="">
        <div>
          <div class="fs-sub-title">剩余任务</div>
          <div class="font-DINAlternate fs-sub-num text-blue shadow">{{ overTask }}</div>
        </div>
      </div>
      <div class="box-task">
        <img class="icon" :src="icon.taskIcon" alt="">
        <div>
          <div class="fs-sub-title">异常任务</div>
          <div class="font-DINAlternate fs-sub-num text-yellow">{{ abnormalTask }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import taskIcon from './img/task-icon.png'
import taskBg from './img/task-bg.png'
export default {
  data () {
    return {
      icon: {
        taskIcon,
        taskBg
      },
      totalTask: 365,
      doneTask: 289,
      stateTask: '85%',
      overTask: 346,
      abnormalTask: 3
    };
  },
  computed: {

  },
  components: {

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
.fs-sub-title {
  font-size: 28px;
  line-height: 1;
}
.fs-sub-num {
  font-size: 34px;
  line-height: 1;
}
.fs-center-title {
  font-size: 36px;
  line-height: 1;
}
.fs-center-num {
  font-size: 80px;
  line-height: 1;
}
.shadow {
  text-shadow: 2px 4px 3px #193b69;
}

.box-content {
  height: $box-height;
  width: $box-width;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 30px;
  .box-task {
    width: 385px;
    height: 135px;
    position: relative;
    margin-top: 70px;
    display: flex;
    .icon {
      width: 121px;
      height: 135px;
    }
    & > div {
      flex: 1;
      margin: 5px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px 0;
      padding-left: 30px;
      background: linear-gradient(to right, 
        transparent,
        #1d3b5e 50%, /* 中间颜色 */
        transparent);
      border-width: 2px 0; /* 只设置上下边框宽度 */
      border-style: solid;
      border-image: linear-gradient(to right, 
        transparent,
        #214777 50%, /* 中间颜色 */
        transparent) 1; 
    }
    
  }
  .box-task__center {
    position: relative;
    align-self: center;
    img {
      display: flex;
      width: 661px;
      height: 359px;
      margin: auto;
    }
    & > div {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>