import React from "react";
import { Outter, Photo, Why, Price, LightWrapper } from "./styles";
import { prices } from "./priceList";
import Carousel, { Modal, ModalGateway } from "react-images";

export const GalerySection = () => (
  <Outter>
    <Photos />
  </Outter>
);

const images = [
  { src: "/static/galery/IMG_1.jpg" },
  { src: "/static/galery/IMG_2.jpg" },
  { src: "/static/galery/IMG_3.jpg" },
  { src: "/static/galery/IMG_4.jpg" }
];

class Photos extends React.Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;
    let modal = null;
    if (modalIsOpen) {
      modal = (
        <ModalGateway>
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        </ModalGateway>
      );
    }
    return (
      <Photo.Outter>
        <Photo.Container>
          <Photo.Header>Galeria</Photo.Header>
          <Photo.Wrapper>
            <Photo.BigPhoto onClick={this.toggleModal}>
              <img
                className="photo-a"
                src="/static/galery/IMG_1.jpg"
                alt="big image"
              />
            </Photo.BigPhoto>
            <Photo.SmallCell notgallery>
              <PriceList />
            </Photo.SmallCell>
            {modal}
            <Photo.SmallCell onClick={this.toggleModal}>
              <img
                className="photo-a"
                src="/static/galery/IMG_3.jpg"
                alt="small image"
              />
            </Photo.SmallCell>
            <Photo.SmallCell onClick={this.toggleModal}>
              <img
                className="photo-a"
                src="/static/galery/IMG_4.jpg"
                alt="small image"
              />
            </Photo.SmallCell>
            <Photo.SmallCell notgallery>
              <WhyUs />
            </Photo.SmallCell>
          </Photo.Wrapper>
        </Photo.Container>
      </Photo.Outter>
    );
  }
}

const WhyUs = () => (
  <Why.Outter>
    <Why.Element first>
      <Why.Icon results>
        <img src="/static/icons/heart.svg" alt="icon" />
      </Why.Icon>
      <Why.Container first>
        <Why.Title>Pasja</Why.Title>
        <Why.Description>Wszystko robimy z pasją.</Why.Description>
      </Why.Container>
    </Why.Element>
    <Why.Element>
      <Why.Icon piggy>
        <img src="/static/icons/piggy.svg" alt="icon" />
      </Why.Icon>
      <Why.Container>
        <Why.Title>Oszczędność</Why.Title>
        <Why.Description>Konkurencyjne ceny na lokalnym rynku.</Why.Description>
      </Why.Container>
    </Why.Element>
    <Why.Element>
      <Why.Icon support>
        <img src="/static/icons/message.svg" alt="icon" />
      </Why.Icon>
      <Why.Container>
        <Why.Title>Online</Why.Title>
        <Why.Description>Prowadzimy lekcje online na Skype.</Why.Description>
      </Why.Container>
    </Why.Element>
  </Why.Outter>
);

export const PriceList = () => (
  <Price.Outter>
    <Price.List>
      {prices.map(k => (
        <li>
          <Price.Ele>{k.name}</Price.Ele>
          <Price.Ele>{k.price}</Price.Ele>
        </li>
      ))}
    </Price.List>
  </Price.Outter>
);
