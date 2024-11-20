<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div class="body-box">
        <div class="main-box">
          <main-left></main-left>
          <main-center></main-center>
          <main-right></main-right>
        </div>
        <div class="flow-box">
          <task-flow></task-flow>
        </div>
        <div class="bottom-box">
          <time-line></time-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import drawMixin from "@/utils/drawMixin";
import MainLeft from "./MainLeft.vue";
import MainCenter from './MainCenter.vue';
import MainRight from './MainRight.vue';
import TaskFlow from "./TaskFlow.vue";
import TimeLine from './TimeLine.vue';

export default {
  // mixins: [ drawMixin ],
  data() {
    return {
      // * 设计稿尺寸（px）
      baseWidth: 4900,
      baseHeight: 1620,
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      decorationColor: ['#568aea', '#000000']
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
    this.cancelLoading()
  },
  beforeDestroy () {

  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
