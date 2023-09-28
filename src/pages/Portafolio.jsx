import Pokemon from "../assets/poke.png";
import Crud from "../assets/crud.png";
import Rick from "../assets/Rick.png";
import Wheat from '../assets/wheather.png'
import Gastos from '../assets/Gastos.png'
import Tv from'../assets/tvshow.png'
const Portafolio = () => {
  return (
    <main>
      <section className="main-section">  
        <article className="proyect">
          <section className="proyect-section">
            <img src={Pokemon} alt="" />
          </section>
          <section className="proyect-sectionDos">
            <h2>
              <span>
                <box-icon
                  name="react"
                  type="logo"
                  animation="flashing"
                  color="#1bbdd0"
                ></box-icon>
              </span>{" "}
              Poke App
            </h2>
            <p>
              Poke App es una página mucho más elaborada que permite interactuar
              por completo con todos los Pokémon existentes y que son consumidos
              desde la API oficial de Pokémon. En esta ocasión se hizo uso de
              React Router y su opción de rutas protegidas para forzar el
              registro virtual del usuario con su nombre. Además, esta página
              contiene una opción de búsqueda por nombre Pokémon con un campo de
              escritura. Pero también, la App cuenta con un filtro select que
              permite elegir entre los 20 tipos diferentes de Pokémon. Puedes
              también acceder a la información detallada de cada personaje. Es
              importante destacar el uso de Redux, React Router, useSelect y los
              hooks habituales useEffect y useState.
            </p>
          </section>
          <section className="proyect-sectionTres">
            <div>
              <a
                href="https://eloquent-vacherin-293888.netlify.app/"
                target="_blank"
              >
                <box-icon
                  name="up-arrow-circle"
                  animation="tada"
                  color="#ffffff"
                ></box-icon>
                Ir al Proyecto
              </a>
            </div>
            <div>
              <a href="https://github.com/FernandoJoseM/Pokedex"target="_blank">
                {" "}
                <box-icon
                  name="github"
                  type="logo"
                  animation="tada"
                  flip="horizontal"
                  color="#fffbfa"
                ></box-icon>
                Ir al GitHub
              </a>
            </div>
          </section>
        </article>
        <article className="proyect">
          <section className="proyect-section">
            <img src={Crud} alt="" />
          </section>
          <section className="proyect-sectionDos">
            <h2>
              <span>
                <box-icon
                  name="react"
                  type="logo"
                  animation="flashing"
                  color="#1bbdd0"
                ></box-icon>
              </span>
              Crud de usuarios
            </h2>
            <p>
              Users CRUD Control es un CRUD muy sencillo que simula un centro de
              control de usuarios. Este permite la visualización de la
              información consumida desde una API. Además, es posible crear,
              actualizar y eliminar cualquier usuario de la lista. La aplicación
              fue desarrollada con React, haciendo uso de useForm y también como
              es costumbre, dos hooks más usados en React, useState y useEffect.
            </p>
          </section>
          <section className="proyect-sectionTres">
            <div>
              <a
                href="https://fascinating-lokum-b09538.netlify.app/"
                target="_blank"
              >
                <box-icon
                  name="up-arrow-circle"
                  animation="tada"
                  color="#ffffff"
                ></box-icon>
                Ir al Proyecto
              </a>
            </div>
            <div>
              <a href="https://github.com/FernandoJoseM/Crud-usuarios"target="_blank">
                {" "}
                <box-icon
                  name="github"
                  type="logo"
                  animation="tada"
                  flip="horizontal"
                  color="#fffbfa"
                ></box-icon>
                Ir al GitHub
              </a>
            </div>
          </section>
        </article>
        <article className="proyect">
          <section className="proyect-section">
            <img src={Rick} alt="" />
          </section>
          <section className="proyect-sectionDos">
            <h2>
              <span>
                <box-icon
                  name="react"
                  type="logo"
                  animation="flashing"
                  color="#1bbdd0"
                ></box-icon>
              </span>
              Rick & Morty
            </h2>
            <p>
              Permite explorar los diferentes universos de la serie. Es una
              página que consume la API de Rick and Morty. La idea es poder ver
              las 126 dimensiones por las cuales viajan estos dos personajes. La
              app fue construida haciendo uso de Vite con React. Además se hizo
              uso de hooks, customhooks y componentes para darle estructura y
              orden. También, es importante decir que las peticiones son
              realizadas con axios.
            </p>
          </section>
          <section className="proyect-sectionTres">
            <div>
              <a
                href="https://iridescent-maamoul-5a75f5.netlify.app/"
                target="_blank"
              >
                <box-icon
                  name="up-arrow-circle"
                  animation="tada"
                  color="#ffffff"
                ></box-icon>
                Ir al Proyecto
              </a>
            </div>
            <div>
              <a href="https://github.com/FernandoJoseM/Buscador-Rick-morty" target="_blank">
                {" "}
                <box-icon
                  name="github"
                  type="logo"
                  animation="tada"
                  flip="horizontal"
                  color="#fffbfa"
                ></box-icon>
                Ir al GitHub
              </a>
            </div>
          </section>
        </article>
        <article className="proyect">
          <section className="proyect-section">
            <img src={Wheat} alt="" />
          </section>
          <section className="proyect-sectionDos">
            <h2>
              <span>
                <box-icon
                  name="react"
                  type="logo"
                  animation="flashing"
                  color="#1bbdd0"
                ></box-icon>
              </span>
              wheather App
            </h2>
            <p>
            Esta pequeña App del tiempo fue realizada con React y sus principales Hooks como useState y useEffect. La App está conectada a una API que detecta automáticamente nuestra ubicación. Por supuesto, esta App ofrece información relevante como los vientos, la presión atmosférica y también ofrece la posibilidad de alternar entre grados F° o C°.
            </p>
          </section>
          <section className="proyect-sectionTres">
            <div>
              <a
                href="https://tranquil-caramel-85848d.netlify.app/"
                target="_blank"
              >
                <box-icon
                  name="up-arrow-circle"
                  animation="tada"
                  color="#ffffff"
                ></box-icon>
                Ir al Proyecto
              </a>
            </div>
            <div>
              <a href="https://github.com/FernandoJoseM/api-clima" target="_blank">
                {" "}
                <box-icon
                  name="github"
                  type="logo"
                  animation="tada"
                  flip="horizontal"
                  color="#fffbfa"
                ></box-icon>
                Ir al GitHub
              </a>
            </div>
          </section>
        </article>
        <article className="proyect">
          <section className="proyect-section">
            <img src={Gastos} alt="" />
          </section>
          <section className="proyect-sectionDos">
            <h2>
              <span>
                <box-icon
                  name="react"
                  type="logo"
                  animation="flashing"
                  color="#1bbdd0"
                ></box-icon>
              </span>
              Planificador de Gastos
            </h2>
            <p>
            Esta App fue diseñado con la finalidad de poder tener un control en cuanto al presupuesto se coloca un presupuesto apartir de eso podemos agregar ciertos gastos que hagamos cuenta con un progressbar la cual me ayudara a ver el porcentaje consumido un formulario para agegar nuevos gastos me permite editar o eliminar los gastos y cuenta con un filtro para traer diferentes gastos dependiendo de la categoria.
            </p>
          </section>
          <section className="proyect-sectionTres">
            <div>
              <a
                href="https://glittery-mooncake-4793b3.netlify.app/"
                target="_blank"
              >
                <box-icon
                  name="up-arrow-circle"
                  animation="tada"
                  color="#ffffff"
                ></box-icon>
                Ir al Proyecto
              </a>
            </div>
            <div>
              <a href="https://github.com/FernandoJoseM/Planificador-gastos"target="_blank">
                {" "}
                <box-icon
                  name="github"
                  type="logo"
                  animation="tada"
                  flip="horizontal"
                  color="#fffbfa"
                ></box-icon>
                Ir al GitHub
              </a>
            </div>
          </section>
        </article>
        <article className="proyect">
          <section className="proyect-section">
            <img src={Tv} alt="" />
          </section>
          <section className="proyect-sectionDos">
            <h2>
              <span>
              <box-icon name='javascript' type='logo' animation='flashing' color='#ddfb16' ></box-icon>
              </span>
              Shows TV
            </h2>
            <p>
              En esta app lo que se hice es consumir con javascript una Api la cual me brinda imformacion de todas las series existentes como en que año se lanzo cuando emitio su ultimo episodio etc.
            </p>
          </section>
          <section className="proyect-sectionTres">
            <div>
              <a
                href="https://eloquent-conkies-7c0c79.netlify.app/"
                target="_blank"
              >
                <box-icon
                  name="up-arrow-circle"
                  animation="tada"
                  color="#ffffff"
                ></box-icon>
                Ir al Proyecto
              </a>
            </div>
            <div>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
};

export default Portafolio;
