import axios from "axios"

export const fetchChannel = async () => {
  console.log('channel fetching...')
  return axios.get(`/data/channel.json`)
  .then(res => res.data.items[0])
}