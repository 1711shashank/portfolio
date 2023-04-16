import React from 'react'
import './Contact.css'
import TelegramIcon from '@mui/icons-material/Telegram';

const Contact = () => {

    return (
        <>
            <div className='contact comp-head'>
                <h4 className="head-text">Let's work together</h4>
                <h2 className="main-head">Contact Me</h2>

                <div className='contact-body'>
                    <div className='contact-left'>
                        <div className="contact-head">

                            <h4 className="contact-head-h4">Mail :</h4>
                            <h5 className="contact-head-h5">
                                <a href="mailto:1711shashank@gmail.com?Subject=Hello"> 1711shashank@gmail.com </a>
                            </h5>
                            
                            <h4 className="contact-head-h4">Phone :</h4>
                            <h5 className="contact-head-h5">
                                <a href="tel:8340767018"> +91 8340767018 </a>
                            </h5>

                            <h4 className="contact-head-h4">Address :</h4>
                            <h5 className="contact-head-h5"> Garia, Kolkata - 700152</h5>
                        </div>
                    </div>

                    <div className='contact-right'>
                        <div className='card'>
                            <form className='card-form'>
                                <label className="grey-text"> Your name </label>
                                <input type="text" className="form-control" />

                                <br />

                                <label className="grey-text"> Your email </label>
                                <input type="email" className="form-control" />

                                <br />

                                <label className="grey-text"> Your message </label>
                                <textarea type="text" className="form-control" />

                                <div className='contact-button'>
                                    <button> SEND <TelegramIcon style={{ fontSize: '3rem', marginLeft: '5px' }} /> </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
