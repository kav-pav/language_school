import { Logo, MSection, Outter, TBar } from "./styles";

export const LandingSection = () => (
  <Outter>
    <TopBar />
    <MainSection />
  </Outter>
);

const TopBar = () => (
  <TBar.Outter>
    <Logo>
      <img src="/static/logo.png" alt="logo" />
    </Logo>
    <TBar.RightSection>
      <TBar.Item>
        <TBar.Icon>
          <img src="/static/icons/placeholder.svg" alt="icon" />
        </TBar.Icon>
        <TBar.Text>os. Poniatowskiego 17A, 64-980 Trzcianka</TBar.Text>
      </TBar.Item>
      <TBar.Item>
        <TBar.Icon>
          <img src="/static/icons/phone.svg" alt="icon" />
        </TBar.Icon>
        <TBar.Text>500-540-034</TBar.Text>
      </TBar.Item>
    </TBar.RightSection>
  </TBar.Outter>
);

const MainSection = () => (
  <MSection.Outter>
    <MSection.BackgroundImage>
      <img src="/static/1920x1080.jpg" alt="background" />
      <MSection.Layer />
      {/* <MSection.Person>
        <img src="/static/images/Agata-transparent.png" />
      </MSection.Person> */}
    </MSection.BackgroundImage>
    <MSection.Container>
      <MSection.QuoteContainer>
        <MSection.QuoteIcon>
          <img src="/static/icons/quote.svg" alt="quote marks" />
        </MSection.QuoteIcon>
        <MSection.Quote>
          Nasza szkoła oferuje lekcje grupowe i indywidualne w aż 4 różnych
          językach bezwzględu na wiek oraz nabytą już wiedzę.
        </MSection.Quote>
      </MSection.QuoteContainer>
      <MSection.Header>
        NAUCZ SIĘ <span> WYMARZONEGO </span> JĘZYKA
      </MSection.Header>
    </MSection.Container>
    <MSection.Agata>
      <img src="/static/images/agata.png" />
    </MSection.Agata>
  </MSection.Outter>
);
