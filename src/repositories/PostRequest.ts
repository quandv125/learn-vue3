import BaseRequest from '@/utils/repositories/BaseRequest'

export default class PostRequest extends BaseRequest {
  getData(url = '/users') {
    return this.get(`${url}`)
  }
}
