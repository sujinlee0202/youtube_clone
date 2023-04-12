import { createContext } from "react";
import RealYoutube from "../api/realYoutube";

export const YoutubeAPIContext = createContext()

/**
 * 유튜브 api를 local, real로 쉽게 바꿀 수 있게 작성한 context
 */
export const YoutubeAPIProvider = ({children}) => {
  // const youtube = new LocalYoutube()
  const youtube = new RealYoutube()

  return (
    <YoutubeAPIContext.Provider value={youtube}>
      {children}
    </YoutubeAPIContext.Provider>
  )
}
