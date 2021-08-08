
import {
  http, BaseController, controller
} from '@dazejs/framework';

@controller()
export default class Hello extends BaseController {
  @http.get()
  index() {
    return "Server start successfully!"
  }


}