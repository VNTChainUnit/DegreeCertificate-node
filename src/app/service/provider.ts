import { DubboProvider, dubbo } from '@dazejs/dubbo-provider';
 
@dubbo.registry('default')
@dubbo.interface('com.laoluoli.dubbolearn.service.HelloService')
export default class extends DubboProvider {
  @dubbo.method()
  hello(name: string) {
    return `Hello ${name}`;
  }
}