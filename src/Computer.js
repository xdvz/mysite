import React from "react"
import { Desktop, Button } from "react95"
import BlueScreen from "./assets/img/bluescreen.png"
import ClassicButton from "./ClassicButton"

const Computer = () => {
  const [on, off] = React.useState(false)

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "30vw",
        marginTop: "30vh",
        background: "teal",
      }}
    >
      <Desktop backgroundStyles={{ background: "blue" }}>
        <img src={BlueScreen} width="157" height="117" alt="Blue Screen" />
      </Desktop>
      <Button>Включить</Button>
    </div>
  )
}

export default Computer
