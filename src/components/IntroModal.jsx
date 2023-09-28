import Texto from "./Texto"
const IntroModal = ({animarModal}) => {
  return (
    <div className={`intro-container ${animarModal?"animar":"cerrar"} `}>
        <div className="contain-img"></div>
        <Texto/>
      </div>
  )
}

export default IntroModal