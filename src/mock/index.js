import Mock from 'mockjs'
 
// 定义伪数据
Mock.mock("/api/mock",{
  code: 0,
  msg:"成功",
  data: {}
})
