'use client';
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEnvelopeFill, BsTelephone, BsInstagram } from 'react-icons/bs';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Show the toast notification immediately
        toast.success('Email envoyé !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light", // Default theme set to light
        });

        emailjs.sendForm('service_qaggn0i', 'template_f3ul5tq', form.current, 'SPdoern9JLwWLz_FV')
            .then((result) => {
                console.log('Email successfully sent!');
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id="contact" className="bg-white mt-20">
            <ToastContainer />
            <div className="px-5 lg:px-20">
                <h3 className='text-3xl py-10 flex justify-center text-center font-bold'>Contactez-nous</h3>
                <div className="flex flex-col gap-10 py-5 lg:flex-row lg:flex-wrap">
                    <div className='flex flex-col text-center basis-1/8 flex-1 gap-10 leading-7'>
                        <article className="flex flex-col shadow-lg rounded-lg py-5 hover:scale-110 transition duration-500">
                            <BsEnvelopeFill className='mx-auto text-3xl' />
                            <h4>Email</h4>
                            <h5 className='text-sm text-gray-500'>bonjour@lesbellesbranches.fr</h5>
                            <a href="mailto:bonjour@lesbellesbranches.fr" target='_blank' rel='noopener noreferrer'>Envoyer un message</a>
                        </article>
                        <article className="flex flex-col shadow-lg rounded-lg py-5 hover:scale-110 transition duration-500">
                            <BsTelephone className='mx-auto text-3xl' />
                            <h4>Téléphone</h4>
                            <h5 className='text-sm text-gray-500'>05 62 71 23 26</h5>
                            <a href="tel:+33562712326" target='_blank' rel='noopener noreferrer'>Appeler</a>
                        </article>
                        <article className="flex flex-col shadow-lg rounded-lg py-5 hover:scale-110 transition duration-500">
                            <BsInstagram className='mx-auto text-3xl' />
                            <h4>Instagram</h4>
                            <h5 className='text-sm text-gray-500'>@lesbellesbranches</h5>
                            <a href="https://www.instagram.com/lesbellesbranches/" target='_blank' rel='noopener noreferrer'>Envoyer un message</a>
                        </article>
                    </div>
                    <div className='flex flex-col text-center basis-1/3 flex-1'>
                        <form className='flex flex-col gap-5 py-5' ref={form} onSubmit={sendEmail}>
                            <input className='border-b-2 border-solid border-black bg-transparent rounded-t-lg p-5 text-black focus:outline-black' type="text" name='name' placeholder='Nom et prénom' required />
                            <input className='border-b-2 border-solid border-black bg-transparent p-5 text-black focus:outline-black' type="email" name='email' placeholder='Votre adresse Email' required />
                            <textarea className='border-b-2 border-solid border-black bg-transparent p-5 text-black focus:outline-black' name="message" rows="7" placeholder='Votre message' required></textarea>
                            <button className='bg-mustard text-white rounded-lg p-5 hover:scale-105 transition duration-300 ease-in-out lg:w-1/3' type='submit'>ENVOYER</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}