import { createContext } from "react";
import LocalYoutube from "../api/localYoutube";
import RealYoutube from "../api/realYoutube";

export const YoutubeAPIContext = createContext()

export const YoutubeAPIProvider = ({children}) => {
  const youtube = new LocalYoutube()
  // const youtube = new RealYoutube()

  return (
    <YoutubeAPIContext.Provider value={youtube}>
      {children}
    </YoutubeAPIContext.Provider>
  )
}
