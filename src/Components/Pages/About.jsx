import React, { useState } from 'react';
import './About.css';

const faqs = [
    {
        question: 'What are Nike shoes made of?',
        answer: 'Nike shoes are made of a variety of materials including synthetic fibers, leather, and foam cushioning for comfort and durability.',
    },
    {
        question: 'How do I choose the right size for Nike shoes?',
        answer: 'It is best to measure your feet and refer to Nike\'s size chart. Nike shoes generally fit true to size, but it\'s always good to try them on if possible.',
    },
    {
        question: 'Can Nike shoes be returned or exchanged?',
        answer: 'Yes, Nike offers a return and exchange policy. You can return or exchange your Nike shoes within 30 days of purchase, provided they are in original condition.',
    },
    {
        question: 'How do I care for my Nike shoes?',
        answer: 'To care for your Nike shoes, clean them regularly with a soft brush and mild detergent. Avoid soaking them in water and allow them to air dry naturally.',
    },
];

const About = () => {
    const [show, setShow] = useState(null);

    const handleFaq = (index) => {
        setShow(show === index ? null : index);
    };

    return (
        <div className='faq-accordion'>
            <p className='title'>FAQ Accordian</p>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`faq-item ${show === index ? 'show' : ''}`}
                >
                    <div className='faq-question' onClick={() => handleFaq(index)}>
                        <p>{faq.question}</p>
                        <button className='faq-toggle-button'>{show === index ? '-' : '+'}</button>
                    </div>
                    <div className='faq-answer'>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default About;
