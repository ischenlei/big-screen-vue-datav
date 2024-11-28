<template>
  <div class="box-content">
    <div class="animation" ref="animationRef"></div>
    <div class="box-bg">
      <div>
        <div class="box-task-left">
          <div>
            <div class="fs-sub-title">总任务</div>
            <div class="fs-sub-num shadow">{{ totalTask }}</div>
          </div>
        </div>
        <div class="box-task-left" style="margin-top: 110px;">
          <div>
            <div class="fs-sub-title">已完成</div>
            <div class="fs-sub-num shadow">{{ doneTask }}</div>
          </div>
        </div>
      </div>
      <div class="box-task__center">
        <div class="text-center text-white">
          <div class="fs-center-num">{{ stateTask }}</div>
          <div class="fs-center-title">任务执行情况</div>
        </div>
      </div>
      <div>
        <div class="box-task-right">
          <div>
            <div class="fs-sub-title">异常任务</div>
            <div class="fs-sub-num shadow">{{ abnormalTask }}</div>
          </div>
        </div>
        <div class="box-task-right" style="margin-top: 110px;">
          <div>
            <div class="fs-sub-title">剩余任务</div>
            <div class="fs-sub-num shadow">{{ overTask }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from "lottie-web"
import animationData from "./animation/data.js";
export default {
  props: {
    loading: Boolean
  },
  data () {
    return {
      icon: {

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
    // 请求数据
    this.fetchData()
    setInterval(() => {
      // 请求数据
      this.fetchData()
    }, 60000)
    this.loadAnimate()
  },
  methods: {
    loadAnimate() {
      const params = {
        container: this.$refs.animationRef,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
      }
      lottie.loadAnimation(params)
    },
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
        this.$emit('update:loading', false)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$box-height: 500px;
$box-width: 100%;
.fs-sub-title {
  font-size: 24px;
  line-height: 1;
}
.fs-sub-num {
  font-size: 55px;
  line-height: 1;
}
.fs-center-title {
  font-size: 40px;
  line-height: 1;
}
.fs-center-num {
  font-size: 85px;
  line-height: 1;
}
.shadow {
  text-shadow: 2px 4px 3px #193b69;
}

.box-content {
  height: $box-height;
  width: $box-width;
  padding-top: 60px;
  padding-left: 30px;
  padding-right: 40px;
  position: relative;
  .box-bg {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .animation {
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    padding-top: 60px;
    padding-left: 30px;
    padding-right: 40px;
  }
  .box-task-left, .box-task-right {
    width: 385px;
    height: 105px;
    position: relative;
    margin-top: 70px;
    display: flex;
    left: 230px;
    & > div {
      flex: 1;
      margin: 5px 0;
      display: flex;
      // justify-content: space-evenly;
      align-items: center;
      padding: 10px 0;
      padding-left: 30px;
    }
    .fs-sub-title {
      padding-right: 40px;
    }
  }
  .box-task-right {
    left: 200px;
  }
  .box-task__center {
    position: relative;
    // align-self: center;
    top: 30%;
    white-space: nowrap;
    .fs-center-title {
      margin-top: 20px;
      color: rgba(235, 243, 250, 1);
    }
    & > div {
      position: absolute;
      // top: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>