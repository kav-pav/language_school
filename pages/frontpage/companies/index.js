import { Compa } from "./styles";

export const Companies = () => {
  return (
    <Compa.Outter>
      <Compa.Inner>
        <Compa.Image className="geo">
          <img src="/static/companies/national-geo.png" />
        </Compa.Image>
        <Compa.Image className="teddy">
          <img src="/static/companies/teddie-eddie-grey.png" />
        </Compa.Image>
      </Compa.Inner>
    </Compa.Outter>
  );
};
