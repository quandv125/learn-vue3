import axiosClient from '@/utils/config/axios'

const endpoint = '/posts'

export default {
  find(id: number) {
    return axiosClient.get(endpoint, { params: { id } })
  },
  list() {
    return axiosClient.get(endpoint)
  },
}
