import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-side">
        <h2 id="faq-heading">FAQ</h2>

        <details>
          <summary>What makes STPL different?</summary>
          <p>STPL provides secure, fast messaging and customized support.</p>
        </details>

        <details>
          <summary>How secure are my conversations?</summary>
          <p>We offer end-to-end encryption and strict privacy protocols.</p>
        </details>

        <details>
          <summary>Can I personalize my experience?</summary>
          <p>Customize features and interface to suit your needs.</p>
        </details>

        <details>
          <summary>What group features are available?</summary>
          <p>Advanced group management and broadcast tools.</p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
