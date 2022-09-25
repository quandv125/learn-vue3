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

export function onInvalidSubmit() {
  // Ex: function onInvalidSubmit({ values, errors, results }) {
  //   console.log(values) // current form values
  //   console.log(errors) // a map of field names and their first error message
  //   console.log(results) // a detailed map of field names and their validation results
  let submitClass = 'invalid'
  setTimeout(() => {
    submitClass = ''
  }, 1000)

  return {
    submitClass,
  }
}
