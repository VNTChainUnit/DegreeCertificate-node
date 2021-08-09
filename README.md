# DegreeCertificate-Node

项目为[DegreeCertificate2.0](https://github.com/VNTChainUnit/DegreeCertificate2.0)的Node端。详细请看项目[主页](https://github.com/VNTChainUnit/DegreeCertificate2.0)
## 项目简介

基于区块链的学位核验管理平台，Node端。

采用Daze.js+Vnt.js+Dubbo-provider打造Node的证书与链交互相关的微服务。



为什么要制作NodeJs端作为provider？

> *因为VNTChain官方目前只有Node的SDK，能力有限开发不出来JavaSDK（但是在努力了，一直卡在合约部分没研究透）*

因为比赛没有进行完，目前没有LICENSE

## 运行条件

- Node.js v8.11.2
- Linux OS（Ubuntu18.04测试无误）
- 准备一个vnt的账号（并具有一定vnt币）

## 运行说明

- 下载/clone源码
- 配置private.js(example(example).js)，注意修改合约地址
- Blockchain/ownaccount存放你的vnt账户
- 执行 npm install
- npm start 启动 

## 技术架构

系统底层采用VNTChain智能合约，交互采用Vnt.js，框架使用[Daze.js](https://github.com/dazejs/daze)，使用感觉和Spring很像也很香，服务提供端使用[dubbo-provider](https://github.com/dazejs/dubbo-provider)

## 感谢

特别感谢Daze.js和@dazejs/dadubbo-provider，node端的微服务完美解决。

感谢VNTChain提供区块链平台，感谢Nodejs提供高效的js运行容器。
