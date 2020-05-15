import React from 'react';
import { Container, Row, Col, CardImg } from 'reactstrap';

export default function Home() {
  return (
    <>
      <div className="card text-center" style={{ background: '#6A14B9' }}>
        <div className="card-body" style={{ background: '#6A14B9' }}>
          <a
            href="#"
            className="btn btn-primary"
            style={{ background: '#6A14B9', border: 'none' }}
          >
            <CardImg
              src="https://image.prntscr.com/image/M7rTqMRMRnKl52LhxPPQew.png"
              alt="Card text-center"
            />
          </a>
        </div>
      </div>
      <Container>
        <Row style={{ margin: '10%' }}>
          <Col
            xs="col-12 col-sm-6 col-sm-2"
            style={{
              textAlign: 'center',
              background: '#9f1bd7',
              width: '300px',
              height: '100%',
              borderRadius: '30px',
              padding: '23px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
            }}
          >
            <p>
              VINTAGE ROLEPLAY <br />
              STAFF ATIVA PING BRASILEIRO SALÁRIO BALANCEADO{' '}
            </p>
          </Col>
          <Col
            xs="col-12 col-sm-6 col-sm-2"
            style={{
              textAlign: 'center',
              width: '300px',
              height: '100%',
              borderRadius: '30px',
              background: 'linear-gradient(to top, #8c66c2, #ffffff)',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h1>
              APROVEITE A PROMOÇÃO DE INAUGURAÇÃO, APÓS A INALGURAÇÃO VIPS
              VOLTARAM PARA O PREÇO ORIGINAL
            </h1>
            <p>vips terão direito a reservar uma facção com 4 amigos!</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
