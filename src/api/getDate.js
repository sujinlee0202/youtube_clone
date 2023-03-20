export const getDate = (postDate) => {
  const now = new Date()
  const post = new Date(postDate)
  let compareSecond = now.getTime() - post.getTime()

  let monthDiff = Math.floor(compareSecond / (1000 * 60 * 60 * 24 * 31))
  let dateDiff = Math.floor(compareSecond / (1000 * 60 * 60 * 24))
  let hourDiff = Math.floor(compareSecond / (1000 * 60 * 60))
  let minuteDiff = Math.floor(compareSecond / (1000 * 60))

  if (0 < compareSecond && compareSecond < 1000 * 60 * 60) {
    return minuteDiff + ' minutes ago'
  } else if (1000 * 60 * 60 < compareSecond && compareSecond <= 1000 * 60 * 60 * 24) {
    return hourDiff + ' hours ago'
  } else if (1000 * 60 * 60 * 24 < compareSecond && compareSecond <= 1000 * 60 * 60 * 24 * 31) {
    return dateDiff + ' days ago'
  } else if (1000 * 60 * 60 * 24 * 31 < compareSecond && compareSecond <= 1000 * 60 * 60 * 24 * 31 * 12) {
    return monthDiff + ' months ago'
  } else {
    return `${post.getFullYear()} year ${post.getMonth() + 1} month`
  }
}