import axios from "axios"

export const fetchSearch = async () => {
  console.log('search fetching...')
  return await axios.get(`/data/search.json`)
  .then(res => res.data.items)
}