import BaseRequest from '@/repositories/BaseRequest'

export default class PostRequest extends BaseRequest {
  getData(url = '/users') {
    return this.get(`${url}`)
  }
}
