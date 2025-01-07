import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "How do I place an order?",
      answer: "To place an order, simply add items to your cart and proceed to checkout. You'll be prompted to enter your shipping and payment details to complete the order."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and other secure payment gateways."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order is shipped, you'll receive a tracking number via email. You can use this number to track your order on our website."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping fees and delivery times vary depending on the destination."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. To initiate a return, please contact our customer support team with your order number and reason for return."
    }
  ];
  

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq-wrapper'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
          <h2 className="common-text">Frequently Asked Questions</h2>
            <ul className='faq'>
              {faqData.map((item, index) => (
                <li key={index}>
                  <button
                      onClick={() => toggleAnswer(index)}
                      className={`${
                        activeIndex === index ? 'active-class' : ''
                      } rounded-md transition-all duration-300`}
                    >
                    {item.question}
                  </button>
                  {activeIndex === index && (
                    <p style={{ marginTop: '5px', color:'#5e5e5e', fontSize:'15px', fontWeight:'400', transition:'all .5s' }}>{item.answer}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
