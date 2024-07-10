import React from 'react'
import './Contact.css'
import logo from '../../assets/email.png';


const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "277a7406-b306-476b-8a15-000dfc62fb1b");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                alert("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
                alert("Message not sent: " + data.message);
            }
        } catch (error) {
            console.log("Error", error);
            setResult("An error occurred");
            alert("An error occurred while sending the message.");
        }
    };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch📩</h1>
        </div>
        <div className="contact-section">
            <form onSubmit={onSubmit} action="" className="contact-right">
                <label htmlFor="text">Your name<span> *</span></label>
                <input id='text' type="text" placeholder='Enter your name' name='name' required />
                <label htmlFor="email">Your email<span> *</span></label>
                <input id='email' type="email" placeholder='Enter your email' name='email' required />
                <label htmlFor="message">Write your message here<span> *</span></label>
                <textarea id='message' name="message" rows="5" placeholder='Enter your message' required ></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>


    </div>
  )
}

export default Contact