import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState("Adinath");
    const [email, setEmail] = useState("adimahangare914@gmail.com");
    const [text, setText] = useState("Add your opinion about this page");

    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }
    return (
    <section className = {styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text = "VIA SUPPORT CHAT"  icon = { <MdMessage/> } />
                <Button text = "VIA CALL" icon = { <FaPhoneAlt /> } />
            </div>
                <Button isOutline = {true} text = "VIA MAIL" icon = { <HiMail /> } />
                    <form onSubmit = {onSubmit}>
                        <div className={styles.form_control}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name = "name" />
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" name = "email" />
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor="text">Text</label>
                            <textarea name = "text" rows = "8"/>
                        </div>
                        <div style={{
                        display: 'flex',
                        justifyContent: 'end'
                        }}>
                            <Button text = "SUBMIT BUTTON" />
                        </div>
                        
                    </form>
                    <div>{name + " " + email + " " + text}</div>
        
        </div>

        <div className={styles.contact_image}>
            <img src="/images/contact.svg" alt="contact image" />
        </div>
        
    </section>
    );
};

export default ContactForm;