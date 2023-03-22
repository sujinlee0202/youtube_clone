import axios from "axios"

/**
 * class로 실제 youtube api 구현
 */
export default class RealYoutube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_KEY }
    })
  }

  channel = async (id) => {
    return this.httpClient.get('channels', {
      params: {
        part: 'snippet',
        id: id
      }
    })
    .then(res => res.data.items[0].snippet)
  }

  search = async (keyword) => {
    return this.httpClient.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword
      }
    })
    .then(res => res.data.items)
  }

  popular = async () => {
    return this.httpClient.get('videos', {
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular'
      }
    })
    .then(res => res.data.items)
  }

  relate = async (id) => {
    return this.httpClient.get('search', {
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