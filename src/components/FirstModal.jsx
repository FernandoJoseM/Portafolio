import video from "../assets/programing.mp4";
import IntroModal from "./IntroModal";
import code from '../assets/codigo.jpg'
const FirstModal = ({setFirstModal,animarModal,setAnimarModal}) => {
    const handleIntroModal=()=>{
        setAnimarModal(false)
        setTimeout(() => {
            setFirstModal(false)
        }, 700);  
    }
  return (
    <div className="video-container">
      <img src={code}></img>
      <IntroModal
      animarModal={animarModal}
      />
      <div className="contain-btn-firstModal">
            <button onClick={handleIntroModal}>let's go</button>
        </div>
    </div>
  );
};

export default FirstModal;
