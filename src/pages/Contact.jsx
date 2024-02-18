import { useState } from "react";
import axios from 'axios';
import DOMPurify from 'dompurify';
import Cookies from 'js-cookie';

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

function isValidEmail(email) {

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
  
export default function Contact  () {

    const cookieExists = Cookies.get('contacted');
    const [IfMailSend, setIfMailSend] = useState(false);
    const [mailResponse, setMailResponse] = useState(null);
    const [ifError, setIfError] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [replyTo, setReplyTo] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!replyTo || !name || !text || !subject || !firstname ) {
            setMailResponse("Veuillez remplir tous les champs.");
            setIfMailSend(true);
            setIfError(true);
            return;
        }
        if (!isValidEmail(replyTo)) {
            setMailResponse("Veuillez saisir une adresse email valide");
            setIfMailSend(true);
            setIfError(true);
            return;
        }

        if (cookieExists) {
            setMailResponse('Vous nous avez deja contacter, essayer plus tard.');
            setIfMailSend(true);
            setIfError(true);
            return;
        }

        const sanitizeFirstname = DOMPurify.sanitize(firstname);
        const sanitizeName = DOMPurify.sanitize(name);
        const sanitizeSubject = DOMPurify.sanitize(subject);
        const sanitizeText = DOMPurify.sanitize(text);
        const sanitizeReplyTo = DOMPurify.sanitize(replyTo);
        const sanitizePhone = DOMPurify.sanitize(phone);

        const data = {
        firstname: sanitizeFirstname,
        name: sanitizeName,
        subject: sanitizeSubject,
        text: sanitizeText,
        replyTo: sanitizeReplyTo,
        phone: sanitizePhone
        };

        try {
        const response = await axios.post('https://email.api.kevinlebot.com/api/sendEmail', data, {
            headers: {
            'authorization': AUTH_TOKEN,
            'dest': "kevin.lebot@gmail.com",
            }
        });
        setIfError(false);
        setIfMailSend(true)
        setMailResponse(response.data)
        Cookies.set('contacted', true, { expires: 1 });
        } catch (error) {
        console.error(error);

        }
    };

    function HandleFirstnameChange(e) {
        setFirstname(e.target.value);
    }
    function HandleNameChange(e) {
        setName(e.target.value);
    }
    function HandleEmailChange(e) {
        setReplyTo(e.target.value);
    }
    function HandleSubjectChange(e) {
        setSubject(e.target.value);
    }
    function HandleMessageChange(e) {
        setText(e.target.value);
    }
    function HandlePhoneChange(e) {
        setPhone(e.target.value);
    }


    return <section className="contact">
                <h1 className="text-6xl lg:ml-24 mt-12 text-center">Contactez-moi pour toute demande :</h1>
                <div className="flex justify-center items-center flex-col lg:flex-row">
                    <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-4/5 lg:w-3/5 mx-auto px-5 py-6 lg:px-24 lg:py-12">
                        <div className="m-5 flex justify-between">
                            <input onChange={HandleNameChange} className="w-1/2 block border-0 py-2" type="texte" name="name" placeholder=" nom" />
                            <input onChange={HandleFirstnameChange} className="w-1/2 ml-5 block border-0 py-2" type="texte" name="firstname" placeholder=" prénom" />
                        </div>
                        <input onChange={HandleEmailChange} className="m-5 block border-0 py-2" type="email" name="email" placeholder="email@email.com" />
                        <input onChange={HandlePhoneChange} className="m-5 block border-0 py-2" type="tel" name="phone" placeholder="téléphone (optionnel)" />
                        <select defaultValue={"placeholder"} onChange={HandleSubjectChange} className="m-5 block border-0 py-2" id="choix" name="choix">
                            <option value="placeholder" disabled>Choisissez une option</option>
                            <option value="Entretien">Entretien</option>
                            <option value="Parcours commenté">Parcours commenté</option>
                            <option value="contact simple">contact simple</option>
                        </select>
                        <textarea onChange={HandleMessageChange} className="m-5 block border-0 py-2" name="message" id="textarea" placeholder="Ton message" ></textarea>
                        {IfMailSend ? <p className={`text-2xl m-7 text-center h-9 ${ifError ? "text-red-500" : "text-green-500"}`}>{mailResponse}</p> : <p className="h-9 m-7"></p>}
                        <button type="submit" className="w-1/3 mx-auto my-6 rounded-md px-6 py-3 text-lg font-semibold text-white shadow-sm">Envoyer</button>
                    </form>
                </div>
            </section>
}