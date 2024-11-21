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
      loading: true,
      // * 定时函数
      timing: null,
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
    this.fetchData()
    this.timing = setInterval(() => {
      // 请求数据
      this.fetchData()
    }, 60000)
  },
  beforeDestroy() {
    clearInterval(this.timing)
  },
  methods: {
    // 根据自己的业务情况修改
    fetchData() {
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
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
