// import Private from '../../private'
export default {
    default: { // 字段名即为注册中心命名
      type: 'zookeeper', // 注册中心类型，目前只支持 zookeeper
      // host: Private.dubbo.host, // zookeeper host地址，hostname+port
      host: '122.9.140.211:2181', // zookeeper host地址，hostname+port
      port: 20880,// 对外提供的 dubbo 服务端口
      // ip:'82.156.24.143' //对外提供dubbo服务ip，不填则为默认本机获取
    }
  };
