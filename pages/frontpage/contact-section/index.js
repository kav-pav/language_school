import { Contact } from "./styles";
import { FormContact } from "cmp/forms";

export const ContactSection = () => (
  <Contact.Outter>
    <Contact.Container>
      <Contact.FormSection>
        <Contact.Header>Skontaktuj się z nami!</Contact.Header>
        <FormContact />
      </Contact.FormSection>
      <Contact.TeacherSection>
        <Contact.Header>Nasi Prowadzacy</Contact.Header>

        <Contact.Teachers>
          <Contact.Teacher>
            <Contact.Image>
              <img src="/static/images/Agata.jpg" alt="teacher" />
            </Contact.Image>
            <Contact.Wrapper>
              <Contact.Title>Nauczyciel angielskiego</Contact.Title>
              <Contact.Name>SAM JOHNSON</Contact.Name>
            </Contact.Wrapper>
          </Contact.Teacher>
          <Contact.Teacher>
            <Contact.Image>
              <img src="/static/images/Agata.jpg" alt="teacher" />
            </Contact.Image>
            <Contact.Wrapper>
              <Contact.Title>Nauczyciel angielskiego</Contact.Title>
              <Contact.Name>SAM JOHNSON</Contact.Name>
            </Contact.Wrapper>
          </Contact.Teacher>
        </Contact.Teachers>
        <Contact.Data>
          <Contact.Phone>
            <Contact.Icon>
              <img src="/static/icons/placeholder2.svg" alt="icon" />
            </Contact.Icon>
            <Contact.Street>
              os. Poniatowskiego 17A, 64-980 Trzcianka
            </Contact.Street>
          </Contact.Phone>
          <Contact.Phone>
            <Contact.Icon>
              <img src="/static/icons/phone2.svg" alt="icon" />
            </Contact.Icon>
            <Contact.Number>500-540-034</Contact.Number>
          </Contact.Phone>
        </Contact.Data>
      </Contact.TeacherSection>
    </Contact.Container>
  </Contact.Outter>
);
