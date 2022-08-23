const instances = {}
export default class RequestFactory {
  static getRequest(classname: string) {
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

import PostRequest from './request/PostRequest'

const requestMap = {
  PostRequest,
}
