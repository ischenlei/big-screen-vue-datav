<template>
  <div class="box-content">
    <!-- 1、投产前准备 -->
    <div class="flow-block">
      <div class="flow-block__title">
        <img :src="icon.title3" alt="">
      </div>
      <div class="flow-block__content">
        <div class="flow-block__content--flow1">
          <div v-for="item in flow1Info" :class="{'flow--disabled': item.disabled}">
            <img class="icon-task" :src="icon[item.icon]" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow1Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
        </svg>
      </div>
    </div>
    <!-- 2、蓟州行停业&各业务系统T-1日批处理 -->
    <div class="flow-block">
      <div class="flow-block__title">
        <img :src="icon.title4" alt="">
      </div>
      <div class="flow-block__content">
        <div class="flow-block__content--flow2">
          <div v-for="item in flow2Info" :class="{'flow--disabled': item.disabled}">
            <img class="icon-task" :src="icon[item.icon]" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow2Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
        </svg>
      </div>
    </div>
    <!-- 3、行内改造系统应用部署 -->
    <div class="flow-block">
      <div class="flow-block__title">
        <img :src="icon.title5" alt="">
      </div>
      <div class="flow-block__content">
        <div class="flow-block__content--flow3">
          <div v-for="item in flow3Info" :class="{'flow--disabled': item.disabled}">
            <img class="icon-task" :src="icon[item.icon]" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow3Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
        </svg>
      </div>
    </div>
    <!-- 4、数据迁移 -->
    <div class="flow-block">
      <div class="flow-block__title">
        <img :src="icon.title6" alt="">
      </div>
      <div class="flow-block__content">
        <div class="flow-block__content--flow4">
          <div v-for="item in flow4Info" :class="{'flow--disabled': item.disabled}">
            <img class="icon-task" :src="icon[item.icon]" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow4Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
        </svg>
      </div>
    </div>
    <!-- 5、迁移系统绿灯验证&T日批处理 -->
    <div class="flow-block">
      <div class="flow-block__title">
        <img :src="icon.title7" alt="">
      </div>
      <div class="flow-block__content">
        <div class="flow-block__content--flow5">
          <div v-for="item in flow5Info" :class="{'flow--disabled': item.disabled}">
            <img class="icon-task" :src="icon[item.icon]" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow5Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
        </svg>
      </div>
    </div>
    <!-- 6、试营业&Ｔ+1日批处理 -->
    <div class="flow-block">
      <div class="flow-block__title">
        <img :src="icon.title8" alt="">
      </div>
      <div class="flow-block__content">
        <div class="flow-block__content--flow6">
          <div v-for="item in flow6Info" :class="{'flow--disabled': item.disabled}">
            <img class="icon-task" :src="icon[item.icon]" alt="">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <svg style="position: absolute; overflow: visible" width="100%" height="100%">
          <!-- 线 -->
          <line v-for="item in flow6Point" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" :stroke="lineColor" :stroke-width="lineWidth" />
        </svg>
      </div>
    </div>

    <!-- 高光动画 -->
    <svg style="position: absolute; bottom: 0; overflow: visible" width="100%" height="600px">
      <path id="path1" d="M 212 172, 468 172, 468, 287, 468 302, 694 302" fill="transparent"/>
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

      <path id="path2" d="M 695 302, 695 172, 1220 172, 1220 431" fill="transparent"/>
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

      <path id="path3" d="M 695 302, 695 431, 1220 431" fill="transparent"/>
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

      <path id="path4" d="M 1220 302, 2650 302" fill="transparent"/>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path4"/>
        </animateMotion>
      </image>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion begin="3s" dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path4"/>
        </animateMotion>
      </image>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion begin="6s" dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path4"/>
        </animateMotion>
      </image>

      <path id="path5" d="M 2195 302, 2195 100, 2620 100, 2620 476, 2195 476 Z" fill="transparent"/>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path5"/>
        </animateMotion>
      </image>

      <path id="path6" d="M 2660 302, 2660 172, 3470 172, 3470 302" fill="transparent"/>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path6"/>
        </animateMotion>
      </image>

      <path id="path7" d="M 2660 302, 2660 431, 3470 431, 3470 302, 3695 302" fill="transparent"/>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path7"/>
        </animateMotion>
      </image>

      <path id="path8" d="M 3695 302, 3695 172, 4380 172, 4380 302, 4480 302" fill="transparent"/>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path8"/>
        </animateMotion>
      </image>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion begin="3s" dur="11s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path8"/>
        </animateMotion>
      </image>

      <path id="path9" d="M 3695 302, 3695 431, 4380 431, 4380 302" fill="transparent"/>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path9"/>
        </animateMotion>
      </image>
      <image :href="icon.light" x="-30" y="-15" width="60" height="30">
        <animateMotion begin="3s" dur="11s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path9"/>
        </animateMotion>
      </image>

    </svg>
  </div>
</template>

<script>
import task1 from './img/task1.png'
import task2 from './img/task2.png'
import title3 from './img/title3.png'
import title4 from './img/title4.png'
import title5 from './img/title5.png'
import title6 from './img/title6.png'
import title7 from './img/title7.png'
import title8 from './img/title8.png'
import light from './img/light.png'

const svgPoint = {
  flow1Point: [
    {x1: 212, y1: 172, x2: 468, y2: 172},
    {x1: 212, y1: 431, x2: 468, y2: 431},
    {x1: 468, y1: 172, x2: 468, y2: 431},
    {x1: 468, y1: 302, x2: 694, y2: 302},
  ],
  flow2Point: [
    {x1: -55, y1: 172, x2: -55, y2: 431},
    {x1: -55, y1: 172, x2: 468, y2: 172},
    {x1: -55, y1: 431, x2: 468, y2: 431},
    {x1: 468, y1: 172, x2: 468, y2: 431},
    {x1: 468, y1: 302, x2: 695, y2: 302},
  ],
  flow3Point: [
    {x1: -55, y1: 302, x2: 694, y2: 302},
  ],
  flow4Point: [
    {x1: -55, y1: 100, x2: -55, y2: 476},
    {x1: -55, y1: 100, x2: 370, y2: 100},
    {x1: -55, y1: 302, x2: 410, y2: 302},
    {x1: -55, y1: 476, x2: 370, y2: 476},
    {x1: 370, y1: 100, x2: 370, y2: 476},
  ],
  flow5Point: [
    {x1: -40, y1: 172, x2: -40, y2: 431},
    {x1: -40, y1: 172, x2: 768, y2: 172},
    {x1: -40, y1: 431, x2: 768, y2: 431},
    {x1: 768, y1: 172, x2: 768, y2: 431},
    {x1: 768, y1: 302, x2: 995, y2: 302},
  ],
  flow6Point: [
    {x1: -55, y1: 172, x2: -55, y2: 431},
    {x1: -55, y1: 172, x2: 630, y2: 172},
    {x1: -55, y1: 431, x2: 630, y2: 431},
    {x1: 630, y1: 172, x2: 630, y2: 431},
    {x1: 630, y1: 302, x2: 800, y2: 302},
  ]
}
export default {
  data() {
    return {
      icon: {
        task1,
        task2,
        title3,
        title4,
        title5,
        title6,
        title7,
        title8,
        light
      },
      ...svgPoint,
      lineColor: '#464E97',
      lineWidth: '3',
      flow1Info: [
        {text: '蓟州行停业公告&报备', icon: 'task1'},
        {text: '业务提前准备工作', icon: 'task1'},
        {text: '技术提前准备', icon: 'task1'},
        {text: '蓟州行业务提前停止', icon: 'task1'},
      ],
      flow2Info: [
        {text: '蓟州行网点T-1日 \n轧账&签退', icon: 'task2'},
        {text: '业务应急预案', icon: 'task1'},
        {text: '决策点一', icon: 'task1'},
        {text: '业务系统T-1日批处理', icon: 'task1'},
      ],
      flow3Info: [
        {text: '行内改造业务系统 \n应用&参数部署', icon: 'task2'},
        {text: '决策点二', icon: 'task1'},
      ],
      flow4Info: [
        {text: '数据迁出', icon: 'task1'},
        {text: '数据迁入', icon: 'task1'},
        {text: '业务迁移报表核对', icon: 'task1'},
      ],
      flow5Info: [
        {text: '迁移系统绿灯验证', icon: 'task1'},
        {text: '决策点三', icon: 'task1'},
        {text: 'Ｔ日批处理后业务核对', icon: 'task1'},
        {text: 'T日批处理', icon:'task1'},
        {text: 'Ｔ日批处理后技术核对', icon: 'task1'},
      ],
      // disabled 控制图标置灰状态
      flow6Info: [
        {text: '蓟州支行新网点试营业', icon: 'task1', disabled: true},
        {text: '蓟州支行新网点T+1 \n轧账&签退', icon: 'task2', disabled: true},
        {text: '投产后处理', icon: 'task1', disabled: true},
        {text: 'Ｔ+1日批处理', icon: 'task1', disabled: true},
        {text: '决策点四', icon: 'task1', disabled: true},
      ],
    };
  },
  computed: {

  },
  components: {

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
// $box-height: 700px;
$box-width: 100%;

.box-content {
  position: relative;
  // height: $box-height;
  width: $box-width;
  padding-top: 30px;
  display: grid;
  grid-template-columns: 640px 640px 640px 340px 940px 940px;
  column-gap: 110px;
  .flow-block {
    width: 100%;
  }
  .flow-block__title {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    img {
      height: 46px;
      margin: auto;
    }
  }
  .flow-block__content {
    position: relative;
    width: 100%;
    height: 600px;
    background: linear-gradient( 180deg, rgba(26,65,171,0.1) 0%, rgba(35,64,129,0.3) 25%, rgba(49,109,255,0.3) 100%);
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(120, 132, 208, 0.3), rgba(67, 76, 162, 0.5)) 1 1;
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
    padding: 40px 20px;
    z-index: 1;
    justify-items: center;
    align-items: center;
    & > div {
      position: relative;
      display: flex;
      width: 186px;
      height: 186px;
      &.flow--disabled {
        filter: brightness(55%);
      }
      .icon-task {
        width: 100%;
        height: 100%;
      }
      span {
        width: 100%;
        position: absolute;
        // bottom: 22px;
        top: 143px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        text-align: center;
        white-space: pre;
        margin: auto;
      }
    }
  }

  .flow-block__content--flow4 {
    grid-template-columns: 1fr;
    padding: 0;
    & > div:last-child {
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