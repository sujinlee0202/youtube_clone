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
    return await axios.get(`/data/channel.json`, {
      params: {
        part: 'snippet',
        id: id
      }
    })
    .then(res => res.data.items[0].snippet)
  }

  relate = async (id) => {
    return await axios.get(`/data/related.json`, {
      params: {
        part: 'snippet',
        relatedToVideoId: id,
        type: 'video',
        maxResults: 25
      }
    })
    .then(res => res.data.items)
  }
}