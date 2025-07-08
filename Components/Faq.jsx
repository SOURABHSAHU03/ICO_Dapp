import React, { useState } from "react";

const faqData = [
  {
    question: "What is a token presale?",
    answer:
      "A token presale is an early stage investment opportunity where investors buy tokens before they are publicly available, often at a discounted rate.",
  },
  {
    question: "How do I participate?",
    answer:
      "To participate, connect your MetaMask wallet and follow the instructions on the presale dashboard.",
  },
  {
    question: "Is there a minimum investment amount?",
    answer:
      "Yes, typically there's a minimum and maximum investment range mentioned on the presale page.",
  },
  {
    question: "What currencies are accepted?",
    answer:
      "You can usually participate using MATIC, ETH, or BNB depending on the blockchain.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq pos-rel pt-140 pb-105" style={{ backgroundColor: "#0f172a", color: "#fff" }}>
      <div className="container">
        <div className="sec-title text-center mb-5">
          <h5 style={{ color: "#38bdf8", fontWeight: 600 }}>FAQ</h5>
          <h2 style={{ fontWeight: 700 }}>Frequently Asked Questions</h2>
        </div>

        <div className="faq__wrap" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ul className="faq-list" style={{ listStyle: "none", padding: 0 }}>
            {faqData.map((item, index) => (
              <li
                key={index}
                className="faq-item"
                style={{
                  border: "1px solid #1f2937",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  overflow: "hidden",
                  background: "#1e293b",
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "grey",
                    border: "none",
                    color: "#031F14",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {item.question}
                </button>
                {activeIndex === index && (
                  <div style={{ padding: "16px", background: "#334155", color: "#e2e8f0" }}>
                    <p style={{ margin: 0 }}>{item.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
