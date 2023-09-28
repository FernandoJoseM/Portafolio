import video from "../assets/programing.mp4";
import IntroModal from "./IntroModal";
const FirstModal = ({setFirstModal,animarModal,setAnimarModal}) => {
    const handleIntroModal=()=>{
        setAnimarModal(false)
        setTimeout(() => {
            setFirstModal(false)
        }, 700);  
    }
  return (
    <div className="video-container">
      <video autoPlay loop src={video}></video>
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