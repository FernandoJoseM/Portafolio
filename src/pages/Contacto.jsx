import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contacto = () => {
  const refForm = useRef();
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    const serviceId = "service_og8ntth";
    const templateId = "template_agg5ijf";

    const apiKey = "LqiRokmXXuZExOwES";
    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((res) => {
        console.log(res.text)
        resetForm()
        setIsLoading(false);
      })
      .catch((err) =>{
         console.log(err)
         setIsLoading(false);
        });
      
  };
  const resetForm=()=>{
    refForm.current.reset();
  }
  return (
    <article className="article-form">
      <form
        ref={refForm}
        onSubmit={handleSubmit}
        action=""
        className="formulario"
      >
          <legend>Contáctame</legend>
          <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Agregue su nombre"name="username"id="name"required/>
          </div>
          <div>
          <label htmlFor="email"name='email'>Email</label>
          <input type="email"placeholder="Agrega tu Email"name="email"id="email"/>
          </div>
          <div>
            <label htmlFor="asunto">Asunto</label>
          <textarea maxLength='500'placeholder="Asunto"name="message"id="asunto"cols='30'rows='5'></textarea>
          </div>
          {
            isLoading ?(
              <h2>Enviando...</h2>
            ):(
              <button>Enviar</button>
            )
          }
          
    
      </form>
    </article>
  );
};

export default Contacto;
