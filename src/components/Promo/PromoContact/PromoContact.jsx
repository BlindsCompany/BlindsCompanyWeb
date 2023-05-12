import React from "react";
import { Container } from "../SharedStyles";
import { Card, CreamButton } from "./PromoContactStyles";
import { BlackButton } from "./PromoContactStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const PromoContact = ({ product }) => {

  console.log(product);

  return (
    <Container style={{ marginTop: '60px', marginBottom: '80px' }}>
      <div style={{ textAlign: 'center', fontSize: '32px', marginTop: '70px', color:'#292b2c' }}>
        CONTACTANOS
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '50px', marginTop: '30px' }}>
        <Card style={{ width: '50%' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '40px', color:'#292b2c' }}>{product.contactPrompt}</h3>
          <BlackButton style={{ marginBottom: '30px', marginRight:'24px' }}>
            <FontAwesomeIcon icon={faPhone}style={{marginRight:'10px'}} /> 809-535-2954
          </BlackButton>
          <CreamButton style={{ marginBottom: '30px' }}>
            <FontAwesomeIcon icon={faPhone}style={{marginRight:'10px'}} /> 829-904-0007
          </CreamButton>
        </Card>

        <Card style={{ width: '50%' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '40px', color:'#292b2c' }}>QUIERES VER NUESTROS PRODUCTOS?</h3>
          <p>
          Visitanos para ver telas, mecanismos y productos terminados.
          </p>
        </Card>
      </div>
    </Container>
  )

}

export default PromoContact