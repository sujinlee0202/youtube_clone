import axios from "axios"

/**
 * class로 local youtube api 구현
 */
export default class LocalYoutube {
  search = async () => {
    return await axios.get(`/data/search.json`)
    .then(res => res.data.items)
  }

  popular = async () => {
    return await axios.get(`/data/popular.json`)
    .then(res => res.data.items)
  }

  channel = async (id) => {
    return axios.get(`/data/channel.json`, {
      params: {
        part: 'snippet',
        id: id
      }
    })
    .then(res => res.data.items[0].snippet)
  }
}

/**
 * 모듈로 local youtube api 구현
 */

// export const fetchSearch = async (keyword) => {
//   return await axios.get(`/data/search.json`)
//   .then(res => res.data.items)
// }

// export const fetchPopular = async () => {
//   return await axios.get(`/data/popular.json`)
//   .then(res => res.data.items)
// }