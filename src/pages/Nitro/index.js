import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardImg,
} from 'reactstrap';

const items = [
  {
    src:
      'https://cdn.discordapp.com/attachments/688723557240668220/710093261448151131/5b697c94f40e022522a125d042ffa449.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/688723557240668220/710091249406705704/d1bfb8-271590_2015-08-14_00017.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src:
      'https://cdn.discordapp.com/attachments/688723557240668220/710092524739362946/4ad977ab603e89414c1cc57b0e081289x.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];

const Nitro = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className=""
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ marginLeft: '10%', width: '80%', height: '80%' }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

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
        <Row style={{ margin: '10px' }}>
          <Col
            xs="col-12 col-sm-6 col-sm-2"
            style={{
              textAlign: 'center',
              background: '#8C66C2',
              height: '100%',
              borderRadius: '30px',
            }}
          >
            <p>
              Extremamente proibido a venda de Veículos VIP para qualquer outro
              player, o carro deverá ser apenas do comprador.
            </p>
          </Col>
          <Col
            xs="col-12 col-sm-6 col-sm-2"
            style={{
              textAlign: 'center',
              background: '#F1E2F6',
              height: '100%',
              borderRadius: '30px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
              padding: '18px',
            }}
          >
            {' '}
            <h1>SERVER BOOST 1 MÊS 1 CARRO VIP BÔNUS DE 500K</h1>
          </Col>
        </Row>
      </Container>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="fotoVIRAVI"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
};
export default Nitro;
