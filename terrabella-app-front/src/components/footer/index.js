import { NavLink } from 'react-router-dom';


export const Footer = () => {
  return (
  
    <footer className="footer">
        <div className="container">
            <p>&copy; 2023 Guesthouse Terrabella. All rights reserved.</p>
            <p>For more information about our guesthouse and the services we offer, please visit our website or contact
                us
                directly.</p>
            <p>Thank you for considering us for your stay in Kyrgyzstan. We hope to see you soon!</p>
            <p>📧 <span className="span">Email:</span> <NavLink
                     to="mailto:terrabella@guesthouse.kg">terrabella@guesthouse.kg</NavLink>
            </p>
            <p>📞 <span className="span">Phone:</span> <NavLink className="phone-link" to="tel:+996774060992">+996 774 06 09 92</NavLink>
            </p>
            <p>📱 <span className="span">WhatsApp:</span>
                <NavLink className="phone-link " to="https://wa.me/+996774060992">+996 774 06 09 92</NavLink>
            </p>
            <p>🌍 <span className="span">Address:</span> 15 minutes from Bishkek, Kyrgyzstan <span
                    className="span">street:</span>
                Baichechkei 103, Arashan, <span className="span">district:</span>Alamedine, <span class="span">city:</span>
                Bishkek</p>
        </div>
    </footer>
  );
};