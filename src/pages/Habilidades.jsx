import programacion from'../assets/programacion.png'
const Habilidades = () => {
  return (
    <article className="article-skills">
      <div className="article-skills-contain">
        <div><box-icon name='html5' type='logo' animation='flashing' color='#fb490a' ></box-icon><span>HTML</span></div>
        <div><box-icon name='css3' type='logo' animation='flashing' color='#169ffb' ></box-icon><span>CSS</span></div>
        <div><box-icon name='javascript' type='logo' animation='flashing' color='#ddfb16' ></box-icon><span>Javascript</span></div>
        <div><box-icon name='react' type='logo' animation='flashing' color='#1bbdd0' ></box-icon><span>React</span></div>
        <div><box-icon name='redux' type='logo' animation='flashing' color='#1bbdd0' ></box-icon><span>Redux</span></div>
        <div><box-icon name='git' type='logo' animation='flashing' color='#fb1616' ></box-icon><span>Git</span></div>
        <div><box-icon name='github' type='logo' animation='flashing' color='#101010' ></box-icon><span>GitHub</span></div>
        <div><box-icon name='terminal' type='solid' animation='flashing' color='#0e0e0e' ></box-icon><span>Terminal</span></div>
      </div>
      <div className='skills-img'>
      <img src={programacion}/>
      </div>
    </article>
  )
}

export default Habilidades