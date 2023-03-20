import axios from "axios"

export const fetchPopular = async () => {
  console.log('popular fetching...')
  return axios.get(`data/popular.json`)
  .then(res => res.data.items)
}