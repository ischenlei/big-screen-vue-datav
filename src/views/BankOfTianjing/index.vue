<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div class="body-box">
        <div class="main-box">
          <main-left :loading.sync="loading1"></main-left>
          <main-center :loading.sync="loading2"></main-center>
          <main-right :loading.sync="loading3"></main-right>
        </div>
        <div class="flow-box">
          <div class="flow-box__title">
            <img src="./img/title3.png" alt="">
            <div class="flow-box__subtitle">
              <div>
                <img src="./img/task-icon1.png" alt="">
                <span>异常任务</span>
              </div>
              <div>
                <img src="./img/task-icon2.png" alt="">
                <span>已完成任务</span>
              </div>
              <div>
                <img src="./img/task-icon3.png" alt="">
                <span>进行中任务</span>
              </div>
              <div>
                <img src="./img/task-icon4.png" alt="">
                <span>未开始任务</span>
              </div>
            </div>
          </div>
          <task-flow :loading.sync="loading4"></task-flow>
        </div>
        <div class="bottom-box">
          <time-line :loading.sync="loading5"></time-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "@/utils/drawMixin";
import MainLeft from "./MainLeft.vue";
import MainCenter from './MainCenter.vue';
import MainRight from './MainRight.vue';
import TaskFlow from "./TaskFlow.vue";
import TimeLine from './TimeLine.vue';

export default {
  mixins: [ drawMixin ],
  data() {
    return {
      // * 设计稿尺寸（px）
      baseWidth: 4900,
      baseHeight: 1620,
      // * 定时函数
      timing: null,
      loading1: true,
      loading2: true,
      loading3: true,
      loading4: true,
      loading5: true,
    }
  },
  computed: {
    loading() {
      return this.loading1 || this.loading2 || this.loading3 || this.loading4 || this.loading5
    }
  },
  components: {
    MainLeft,
    MainCenter,
    MainRight,
    TaskFlow,
    TimeLine
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
