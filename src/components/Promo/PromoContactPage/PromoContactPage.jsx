import React, { Fragment } from "react";
import { Container } from "../SharedStyles";
import PromoFooter from "../PromoFooter/PromoFooter";
import PromoHeader from "../promoHeader/PromoHeader"
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ContactTextField from './ContactTextField';
import ContactTextArea from './ContactTextArea';
import { BlackButton } from "./PromoContactPageStyles";
import { useState } from "react";
import PromoPhoneAction from "../../Promo/PromoActionButtons/PromoWhatsappAction";

const PromoContactPage = ({bannerText, bannerGatsbyImageData}) => {

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    province: '',
    notes: ''
  })

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        
        contactIcons {
          name
          icon {
            publicURL
          }
        }
      }
    }
  `);

  const mailButtonHandler = (e) => {
    const recipient = 'ventas@blindscompanyrd.com';
    const subject = 'SOLICITUD DE MEDICIÓN PROFESIONAL';
    const body = `
      Correo: ${formData.email}
      Teléfono: ${formData.phone}
      Nombre: ${formData.firstName}
      Apellido: ${formData.lastName}
      Dirección: ${formData.address}
      Apartamento: ${formData.apartment}
      Provincia: ${formData.province}
      Notas: ${formData.notes}
    `;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <PromoPhoneAction/>
      <PromoHeader />

      <Container>
        <div style={{ position: 'relative', width: '100%', marginBottom: '30px', }}>
          <GatsbyImage
            image={bannerGatsbyImageData}
            style={{ width: '100%', height:'1025px' }}
            alt="banner"
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '10px' }}>
            <h2 style={{ fontSize: '60px', color: '#fff' }}>{bannerText}</h2>
          </div>
        </div>
        

        <div style={{ display: 'flex', flexDirection: 'row', gap: '50px', marginBottom:'20px'}}>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '32px' }}>SOLICITA MEDICIÓN PROFESIONAL</h2>
            <p style={{ fontSize: '18px' }}>
              Si no tienes las medidas, completa este formulario y te
              llamaremos para agendar la cita para tus medidas. ¿Las medidas
              son fuera de Santo Domingo? No hay problema, solo un pequeño cargo adicional.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px', flex:'1' }}>

              <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>

                <ContactTextField inputHandler={handleInputChange} tag="Correo" name="email" />

                <ContactTextField inputHandler={handleInputChange} tag="Teléfono" name="phone" />

              </div>

              <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>

                <ContactTextField inputHandler={handleInputChange} tag="Nombre" name="firstName" />

                <ContactTextField inputHandler={handleInputChange} tag="Apellido" name="lastName" />

              </div>

              <ContactTextField inputHandler={handleInputChange} tag="Dirección" name="address" />

              <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>

                <ContactTextField inputHandler={handleInputChange} tag="Apartamento" name="apartment" />

                <ContactTextField inputHandler={handleInputChange} tag="Provincia" name="province" />

              </div>

              <ContactTextArea inputHandler={handleInputChange} tag="Notas - ¿Alguna preferencia en la vía de contacto?" name="notes" />

          
              <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop:'auto', paddingBottom:'10px'}}>
                <BlackButton onClick={mailButtonHandler}>SOLICITAR MEDIDAS GRATIS</BlackButton>
              </div>

            </div>
          </div>


          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <h2 style={{ fontSize: '32px' }}>FELICES DE AYUDARTE</h2>
            <p style={{ fontSize: '18px' }}>
              Elige tus productos y proporciona tus medidas. Al aprobar, rectificamos
              tus medidas y detalles de instalación. Comunícate con nosotros en cualquiera
              de las siguientes vías y te ayudaremos a elegir tu producto perfecto.
            </p>


            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '5px' }}>

              {
                data.promoJson.contactIcons.map(item => {

                  return (
                    <div style={{ padding: '10px', width: '50%', aspectRatio:'1/1', display: 'flex' , justifyContent:'center', alignItems:'center' }}>
                      <div style={{
                        border: '1px solid rgba(0,0,0,.125)',
                        borderRadius: '0.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent:'center',
                        gap: '10px',
                        height:'300px',
                        width:'300px'

                      }}>
                        <img src={item.icon.publicURL} alt={item.name} style={{ width: '80px' }} />
                        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{item.name}</div>
                      </div>
                    </div>

                  )

                })
              }

            </div>
          </div>
        </div>
      </Container>

      <PromoFooter />
    </Fragment>
  );
};

export default PromoContactPage;
