import{useSpring,animated}from'react-spring'
const Texto = () => {
    const props=useSpring({
        from:{
            opacity:0,
            transform:'translateY(-40px)'
        },
        to:{
            opacity:1,
            transform:'translateY(0)'
        }
    })
  return (
    <animated.div style={props}>
    <p className="intro-text">
            Hi!
            <br />
            I'm Fernando Mayorga
            <br />
            Frontend Developer
            <br />
        </p>
        </animated.div>
  )
}

export default Texto