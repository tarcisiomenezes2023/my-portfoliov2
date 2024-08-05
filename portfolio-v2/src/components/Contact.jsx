import { useRef, useState, useEffect } from 'react';
import "./Contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const options = {
      publicKey: 'xTZ1oDxi9tNvfX-oj',
      from_name: formData.get('from_name'),
      message: formData.get('message'),
    };

    emailjs
      .sendForm('service_fqy110g', 'template_cablvxf', formRef.current, options)
      .then(
        (response) => {
          console.log('Email sent:', response.status);
          setSuccess(true);
        },
        (error) => {
          console.error('Email error:', error);
          setError(true);
        }
      );
  };

  useEffect(() => {
    const inputs = formRef.current?.querySelectorAll('input, textarea');
    inputs?.forEach(input => {
      input.addEventListener('focus', (e) => e.preventDefault());
    });
  }, []);

  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
      <motion.div className='textContainer' variants={variants}>
        <h1>Let's work together!</h1>
        <motion.div className='item'>
          <h2>Mail</h2>
          <span>tarcisiomenezes2019@outlook.com</span>
        </motion.div>
        <motion.div variants={variants} className='item'>
          <h2>Phone</h2>
          <span>+36 20 317 3408</span>
        </motion.div>
        <motion.div className='links' variants={variants}>
        </motion.div>
      </motion.div>
      <motion.div variants={variants} className='formContainer'>
        <motion.form variants={variants} ref={formRef} onSubmit={sendEmail}>
          <input type='text' name='from_name' required placeholder='Name' />
          <input type='email' name='email' required placeholder='Email' />
          <textarea name='message' rows={8} placeholder='Message' />
          <button type='submit'>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;