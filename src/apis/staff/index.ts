import axiosClient from '../axiosClient'

class Staff {
  getAll = () => {
    const url = `/pokemon`
    return axiosClient
      .get(url)
      .then((res) => res.data.results)
      .catch((err) => err)
  }
}

export const StaffApi = new Staff()
