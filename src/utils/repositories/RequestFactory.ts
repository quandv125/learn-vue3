const instances: any = {}
export default class RequestFactory {
  static getRequest(classname: any) {
    const RequestClass = requestMap[classname]
    if (!RequestClass) {
      throw new Error('Invalid request class name: ' + classname)
    }
    let requestInstance = instances[classname]
    if (!requestInstance) {
      requestInstance = new RequestClass()
      instances[classname] = requestInstance
    }
    return requestInstance
  }
}

import PostRequest from '@/utils/repositories/PostRequest'

const requestMap: any = {
    PostRequest
}
