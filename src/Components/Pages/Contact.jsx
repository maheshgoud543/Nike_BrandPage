import React, { useState } from 'react';
import linkeinLogo from './linkedin.svg';
import githubLogo from './github.svg';
import './Contact.css'; 

const Contact = () => {
    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name", name);
        console.log("Email", Email);
        console.log("Comment", comment);
        setName("");
        setEmail("");
        setComment("");
    };

    return (
        <div className="contact-container">
            <p>Contact Me</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='email'
                    placeholder='Enter Your Email'
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder='Leave a comment'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>

            <p>Follow Me</p>
            <div className="social-media">
                <a href='https://www.linkedin.com/in/kancharla-mahesh-a0a985199/'>
                    <img src={linkeinLogo} alt='LinkedIn' />
                </a>
                <a href='https://github.com/maheshgoud543'>
                    <img src={githubLogo} alt='GitHub' />
                </a>
            </div>
        </div>
    );
};

export default Contact;
