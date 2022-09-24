import rf from '@/repositories'

export function usePostHelper() {
  const getItinerary = _fetchData
  return {
    getItinerary,
    isEstimating,
  }
}

async function _fetchData() {
  return await rf.getRequest('PostRequest').getData()
}

// const fetchData = async () => {
//   return await rf.getRequest('PostRequest').getData()
// }

function isEstimating() {
  return 'ok123'
}
