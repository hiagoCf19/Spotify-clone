import { useState } from "react"

export const FollowButton = () => {
  //posteriormente virá de um estado
  const [follow, setFollow] = useState(false)
  return (
    <button
      onClick={() => !follow ? setFollow(true) : setFollow(false)}
      className="border p-2 px-3 rounded-[14px] h-min text-xs text-zinc-50 hover:scale-105 cursor-pointer"
    >
      {!follow ? <p>Seguir</p> : <p>Seguindo</p>}

    </button>

  )
}