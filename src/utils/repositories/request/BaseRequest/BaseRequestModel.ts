import BaseRequest from '@/utils/repositories/request/BaseRequest'

export default class BaseModelRequest extends BaseRequest {
  getModelName() {
    throw new Error('This method should be implemented in derived method.')
  }

  getOne(id: number, params: object) {
    const url = '/' + this.getModelName() + '/' + id
    return this.get(url, params)
  }

  getList(params: object) {
    const url = '/admin/api/' + this.getModelName()
    return this.get(url, params)
  }

  createANewOne(params: object) {
    const url = '/' + this.getModelName()
    return this.post(url, params)
  }

  updateOne(id: number, params: object) {
    const url = '/' + this.getModelName() + '/' + id
    return this.put(url, params)
  }

  removeOne(id: number) {
    const url = '/' + this.getModelName() + '/' + id
    return this.del(url)
  }
}
