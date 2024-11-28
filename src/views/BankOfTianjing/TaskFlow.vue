<template>
  <div class="box-content">
    <!-- 1、投产前准备 -->
    <div class="flow-block1">
      <div class="flow-block__content">
        <div class="flow-block__content--flow1">
          <div v-for="item in flow1Info" :class="iconClass(item.status, item.iconType)">
            <img class="icon-task" :src="iconMap(item.status, item.iconType)" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow1Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
          <path id="path1" d="M 212 172, 515 172, 515 302, 730 302" fill="transparent"/>
          <!-- 高光图标 -->
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path1"/>
            </animateMotion>
          </image>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion begin="3s" dur="7s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path1"/>
            </animateMotion>
          </image>
        </svg>
      </div>
    </div>
    <!-- 2、蓟州行停业&各业务系统T-1日批处理 -->
    <div class="flow-block2">
      <div class="flow-block__content">
        <div class="flow-block__content--flow2">
          <div v-for="item in flow2Info" :class="iconClass(item.status, item.iconType)">
            <img class="icon-task" :src="iconMap(item.status, item.iconType)" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow2Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
          <path id="path2" d="M -30 302, -30 172, 515 172, 515 431" fill="transparent"/>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path2"/>
            </animateMotion>
          </image>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion begin="3s" dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path2"/>
            </animateMotion>
          </image>
          <path id="path3" d="M -30 302, -30 431, 515 431" fill="transparent"/>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path3"/>
            </animateMotion>
          </image>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion begin="3s" dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path3"/>
            </animateMotion>
          </image>
        </svg>
      </div>
    </div>
    <!-- 3、行内改造系统应用部署 -->
    <div class="flow-block3">
      <div class="flow-block__content">
        <div class="flow-block__content--flow3">
          <div v-for="item in flow3Info" :class="iconClass(item.status, item.iconType)">
            <img class="icon-task" :src="iconMap(item.status, item.iconType)" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow3Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
          <path id="path4" d="M -100 302, 730 302" fill="transparent"/>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path4"/>
            </animateMotion>
          </image>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion begin="3s" dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path4"/>
            </animateMotion>
          </image>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion begin="5s" dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path4"/>
            </animateMotion>
          </image>
        </svg>
      </div>
    </div>
    <!-- 4、数据迁移 -->
    <div class="flow-block4">
      <div class="flow-block__content">
        <div class="flow-block__content--flow4">
          <div v-for="item in flow4Info" :class="iconClass(item.status, item.iconType)">
            <img class="icon-task" :src="iconMap(item.status, item.iconType)" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow4Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
          <path id="path5" d="M -30 302, -30 100, 400 100, 400 476, -30 476 Z" fill="transparent"/>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path5"/>
            </animateMotion>
          </image>
          <path id="path52" d="M -30 302, 400 302" fill="transparent"/>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path52"/>
            </animateMotion>
          </image>
        </svg>
      </div>
    </div>
    <!-- 5、迁移系统绿灯验证&T日批处理 -->
    <div class="flow-block5">
      <div class="flow-block__content">
        <div class="flow-block__content--flow5">
          <div v-for="item in flow5Info" :class="iconClass(item.status, item.iconType)">
            <img class="icon-task" :src="iconMap(item.status, item.iconType)" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow5Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
          <path id="path6" d="M -20 302, -20 172, 820 172, 820 302" fill="transparent"/>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path6"/>
            </animateMotion>
          </image>
          <path id="path7" d="M -20 302, -20 431, 820 431, 820 302, 1030 302" fill="transparent"/>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path7"/>
            </animateMotion>
          </image>
        </svg>
      </div>
    </div>
    <!-- 6、试营业&Ｔ+1日批处理 -->
    <div class="flow-block6">
      <div class="flow-block__content">
        <div class="flow-block__content--flow6">
          <div v-for="item in flow6Info" :class="iconClass(item.status, item.iconType)">
            <img class="icon-task" :src="iconMap(item.status, item.iconType)" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow6Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
          <path id="path8" d="M -30 302, -30 172, 630 172, 630 302, 800 302" fill="transparent"/>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path8"/>
            </animateMotion>
          </image>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion begin="3s" dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path8"/>
            </animateMotion>
          </image>

          <path id="path9" d="M -30 302, -30 431, 630 431, 630 302" fill="transparent"/>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path9"/>
            </animateMotion>
          </image>
          <image :href="icon.light" x="-30" y="-15" width="60" height="30">
            <animateMotion begin="3s" dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path9"/>
            </animateMotion>
          </image>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import light from './img/light.png'
import taskInit1 from './img/task-init1.png'
import taskInit2 from './img/task-init2.png'
import taskDoing1 from './img/task-doing1.png'
import taskDoing2 from './img/task-doing2.png'
import taskError1 from './img/task-error1.png'
import taskError2 from './img/task-error2.png'
import taskDone1 from './img/task-done1.png'
import taskDone2 from './img/task-done2.png'

const svgPoint = {
  flow1Point: [
    {x1: 212, y1: 172, x2: 515, y2: 172},
    {x1: 212, y1: 431, x2: 515, y2: 431},
    {x1: 515, y1: 172, x2: 515, y2: 431},
    {x1: 515, y1: 302, x2: 730, y2: 302},
  ],
  flow2Point: [
    {x1: -30, y1: 172, x2: -30, y2: 431},
    {x1: -30, y1: 172, x2: 515, y2: 172},
    {x1: -30, y1: 431, x2: 515, y2: 431},
    {x1: 515, y1: 172, x2: 515, y2: 431},
    {x1: 515, y1: 302, x2: 730, y2: 302},
  ],
  flow3Point: [
    {x1: -30, y1: 302, x2: 730, y2: 302},
  ],
  flow4Point: [
    {x1: -30, y1: 100, x2: -30, y2: 476},
    {x1: -30, y1: 100, x2: 400, y2: 100},
    {x1: -30, y1: 302, x2: 420, y2: 302},
    {x1: -30, y1: 476, x2: 400, y2: 476},
    {x1: 400, y1: 100, x2: 400, y2: 476},
  ],
  flow5Point: [
    {x1: -20, y1: 172, x2: -20, y2: 431},
    {x1: -20, y1: 172, x2: 820, y2: 172},
    {x1: -20, y1: 431, x2: 820, y2: 431},
    {x1: 820, y1: 172, x2: 820, y2: 431},
    {x1: 820, y1: 302, x2: 1030, y2: 302},
  ],
  flow6Point: [
    {x1: -30, y1: 172, x2: -30, y2: 431},
    {x1: -30, y1: 172, x2: 630, y2: 172},
    {x1: -30, y1: 431, x2: 630, y2: 431},
    {x1: 630, y1: 172, x2: 630, y2: 431},
    {x1: 630, y1: 302, x2: 800, y2: 302},
  ]
}
export default {
  props: {
    loading: Boolean
  },
  data() {
    return {
      icon: {
        taskInit1,
        taskInit2,
        taskDoing1,
        taskDoing2,
        taskError1,
        taskError2,
        taskDone1,
        taskDone2,
        light
      },
      ...svgPoint,
      lineColor: '#464E97',
      lineWidth: '3',
      // status: init | doing | done | error
      flow1Info: [
        {text: '蓟州行停业公告&报备', iconType: 'task1', status: 'init'},
        {text: '业务提前准备工作', iconType: 'task1', status: 'doing'},
        {text: '技术提前准备', iconType: 'task1', status: 'doing'},
        {text: '蓟州行业务提前停止', iconType: 'task1', status: 'doing'},
      ],
      flow2Info: [
        {text: '蓟州行网点T-1日 \n轧账&签退', iconType: 'task2', status: 'doing'},
        {text: '业务应急预案', iconType: 'task1', status: 'error'},
        {text: '决策点一', iconType: 'task1', status: 'done'},
        {text: '业务系统T-1日批处理', iconType: 'task1', status: 'init'},
      ],
      flow3Info: [
        {text: '行内改造业务系统 \n应用&参数部署', iconType: 'task2', status: 'init'},
        {text: '决策点二', iconType: 'task1', status: 'error'},
      ],
      flow4Info: [
        {text: '数据迁出', iconType: 'task1', status: 'init'},
        {text: '数据迁入', iconType: 'task1', status: 'init'},
        {text: '业务迁移报表核对', iconType: 'task1', status: 'init'},
      ],
      flow5Info: [
        {text: '迁移系统绿灯验证', iconType: 'task1', status: 'init'},
        {text: '决策点三', iconType: 'task1', status: 'doing'},
        {text: 'Ｔ日批处理后业务核对', iconType: 'task1', status: 'doing'},
        {text: 'T日批处理', iconType:'task1', status: 'doing'},
        {text: 'Ｔ日批处理后技术核对', iconType: 'task1', status: 'doing'},
      ],
      flow6Info: [
        {text: '蓟州支行新网点试营业', iconType: 'task1', status: 'init'},
        {text: '蓟州支行新网点T+1 \n轧账&签退', iconType: 'task2', status: 'done'},
        {text: '投产后处理', iconType: 'task1', status: 'init'},
        {text: 'Ｔ+1日批处理', iconType: 'task1', status: 'doing'},
        {text: '决策点四', iconType: 'task1', status: 'init'},
      ],
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
    iconMap(status, type) {
      if (type === 'task2') {
        if (status === 'init') {
          return this.icon.taskInit2
        } else if (status === 'doing') {
          return this.icon.taskDoing2
        } else if (status === 'error') {
          return this.icon.taskError2
        } else {
          return this.icon.taskDone2
        }
      } else {
        if (status === 'init') {
          return this.icon.taskInit1
        } else if (status === 'doing') {
          return this.icon.taskDoing1
        } else if (status === 'error') {
          return this.icon.taskError1
        } else {
          return this.icon.taskDone1
        }
      }
    },
    iconClass(status, type) {
      if (type === 'task2') {
        if (status === 'init') {
          return 'taskInit2'
        } else if (status === 'doing') {
          return 'taskDoing2'
        } else if (status === 'error') {
          return 'taskError2'
        } else {
          return 'taskDone2'
        }
      } else {
        if (status === 'init') {
          return 'taskInit1'
        } else if (status === 'doing') {
          return 'taskDoing1'
        } else if (status === 'error') {
          return 'taskError1'
        } else {
          return 'taskDone1'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// $box-height: 700px;
$box-width: 100%;

.box-content {
  position: relative;
  // height: $box-height;
  width: $box-width;
  padding-top: 30px;
  display: grid;
  grid-template-columns: 700px 700px 700px 380px 1000px 1000px;
  column-gap: 60px;
  .flow-block1,
  .flow-block2,
  .flow-block3,
  .flow-block4,
  .flow-block5,
  .flow-block6 {
    width: 100%;
    height: 650px;
    padding-top: 60px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .flow-block1 {
    background-image: url(./img/milestoneBg1.png);
  }
  .flow-block2 {
    background-image: url(./img/milestoneBg2.png);
  }
  .flow-block3 {
    background-image: url(./img/milestoneBg3.png);
  }
  .flow-block4 {
    background-image: url(./img/milestoneBg4.png);
  }
  .flow-block5 {
    background-image: url(./img/milestoneBg5.png);
  }
  .flow-block6 {
    background-image: url(./img/milestoneBg6.png);
  }
  
  .flow-block__content {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .flow-block__content--flow1, 
  .flow-block__content--flow2, 
  .flow-block__content--flow3,
  .flow-block__content--flow4,
  .flow-block__content--flow5,
  .flow-block__content--flow6 {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 60px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 1;
    justify-items: center;
    align-items: center;
    & > div {
      position: relative;
      display: flex;
      flex-direction: column;
      // width: 194px;
      // height: 194px;
      // &.flow--disabled {
      //   filter: brightness(55%);
      // }
      span {
        width: 100%;
        position: absolute;
        // bottom: 22px;
        top: 127px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        text-align: center;
        white-space: pre;
        margin: auto;
      }
      .icon-task {
        object-fit: contain;
        object-position: top;
      }

      &.taskInit1 {
        img {
          width: 194px;
          height: 210px;
        }
        span {
          top: 138px;
          color: #96ABCC;
        }
        transform: translateY(10px);
      }
      &.taskInit2 {
        img {
          width: 194px;
          height: 220px;
        }
        span {
          top: 140px;
          color: #96ABCC;
        }
        transform: translateY(10px);
      }
      &.taskDoing1 {
        img {
          width: 194px;
          height: 210px;
        }
        span {
          top: 160px
        }
        transform: translateY(-10px);
      }
      &.taskDoing2 {
        img {
          width: 194px;
          height: 220px;
        }
        span {
          top: 160px
        }
        transform: translateY(-5px);
      }
      &.taskDone1 {
        img {
          width: 194px;
          height: 212px;
          transform: translateY(-20px)
        }
        span {
          top: 150px;
        }
      }
      &.taskDone2 {
        img {
          width: 194px;
          height: 220px;
          transform: translateY(-20px)
        }
        span {
          top: 150px
        }
      }
      &.taskError1 {
        img {
          width: 194px;
          height: 212px;
          transform: translateY(-20px)
        }
        span {
          top: 150px
        }
      }
      &.taskError2 {
        img {
          width: 194px;
          height: 220px;
          transform: translateY(-20px)
        }
        span {
          top: 150px
        }
      }
    }
  }

  .flow-block__content--flow4 {
    grid-template-columns: 1fr;
    padding: 0px;
    & > div:nth-child(1) {
      // transform: translateY(-20px)
    }
    & > div:nth-child(2) {
      transform: translateY(-10px)
    }
    & > div:nth-child(3) {
      transform: translateY(-20px)
    }
  }
  .flow-block__content--flow5 {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .flow-block__content--flow6 {
    grid-template-columns: 1fr 1fr 1fr;
    & > div:nth-child(3) {
      grid-row: span 2;
    }
  }
}
</style>