import BaseRequest from '@/utils/repositories/request/BaseRequest'

export default class PostRequest extends BaseRequest {
  getData(url = '/users') {
    return this.get(`${url}`)
  }
}
