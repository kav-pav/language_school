import { Foot, Get, Opin } from "./styles";
import { PriceList } from "pages/frontpage/galery-section";

export const Footer = () => (
  <Foot.Outter>
    <Foot.Container>
      <Opinions />
      <Foot.PriceList>
        <Foot.Header>POPULARNE WYBORY</Foot.Header>
        <PriceList />
      </Foot.PriceList>
      {/* <GetInTouch /> */}
    </Foot.Container>
  </Foot.Outter>
);

const GetInTouch = () => (
  <Get.Outter>
    <Get.Header>GET IN TOUCH</Get.Header>
    <Get.Link></Get.Link>
    <Get.Link></Get.Link>
    <Get.Link></Get.Link>
    <Get.IconSection>
      <Get.Icon></Get.Icon>
      <Get.Icon></Get.Icon>
      <Get.Icon></Get.Icon>
    </Get.IconSection>
  </Get.Outter>
);

const Opinions = () => (
  <Opin.Outter>
    <Opin.Logo>
      <img src="/static/logo.png" alt="logo" />
    </Opin.Logo>
    <Opin.Title>100+ zadowolonych klientów</Opin.Title>
    <Opin.Main>
      <Opin.Container>
        <Opin.Icon>
          <img src="/static/icons/quote1.svg" alt="quotes mark" />
        </Opin.Icon>
        <Opin.Opinion>
          I like that it has a busy atmosphere but it’s never stressful.
          Everyone is very nice and you can ask anything at any time.
          <span>
            <Opin.Name>Kate Winson</Opin.Name>
          </span>
        </Opin.Opinion>
      </Opin.Container>
      {/* <Opin.ArrowBack>
        <img src="/static/40x40.png" alt="quotes mark" />
      </Opin.ArrowBack>
      <Opin.Divider>
        <img src="/static/40x40.png" alt="quotes mark" />
      </Opin.Divider>
      <Opin.ArrowForward>
        <img src="/static/40x40.png" alt="quotes mark" />
      </Opin.ArrowForward> */}
    </Opin.Main>
  </Opin.Outter>
);
