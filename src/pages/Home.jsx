import "boxicons";
const Home = () => {
  return (
    <article className="article">
      <div className="article-img"></div>
      <div className="article-texto">
        <h1>¡Hola a todos!</h1>
        <p>
          Soy Fernándo Mayorga, Frontend Developer, te doy la bienvenida oficial
          a mi portafolio.
        </p>
        <div className="article-redes">
          <div>
            <a href="https://www.linkedin.com/in/fernando-mayorga-47b572210/"target="_blank"><box-icon
              name="linkedin"
              type="logo"
              flip="horizontal"
              animation="tada"
              color="#fffbfa"
            ></box-icon></a>
          </div>
          <div>
           <a href="https://github.com/FernandoJoseM"target="_blank"> <box-icon
              name="github"
              type="logo"
              animation="tada"
              flip="horizontal"
              color="#fffbfa"
            ></box-icon></a>
          </div>
        </div>
      </div>

      <button className="article-btn">
        <a href="https://drive.google.com/file/d/1sk9j8r4sNnLCWeFI1tkRCzjzEf7f4I1g/view?usp=sharing"target="_blank">
        <box-icon name='file-pdf' type='solid' animation='tada' flip='horizontal' color='#23414d' ></box-icon>
        Descargar C.V
        </a>
      </button>
    </article>
  );
};

export default Home;
