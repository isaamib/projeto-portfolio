import "../styles/Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzdveqp");

  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section">
        <h2 className="contact">Contato</h2>
        <div className="form-container">
          <p className="Spam">
            Obrigada por entrar em contato! Responderei em breve.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact">Contato</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Seu Nome"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Seu Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Sua Mensagem"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
