import { Photo, Outter } from "./styles";
import { FormBookLesson } from "cmp/forms";

export const CoursesSection = () => (
  <Outter>
    <Photos />
  </Outter>
);

const Photos = () => (
  <Photo.Outter>
    <Photo.Container>
      <Photo.Header>Oferta</Photo.Header>
      <Photo.Wrapper>
        <Photo.Image>
          <img src="/static/course.jpg" alt="small image" />
          <Photo.Title>
            English for beginers
            <br />
            <Photo.Price> $45</Photo.Price>
          </Photo.Title>
        </Photo.Image>
        <Photo.Image>
          <img src="/static/course.jpg" alt="small image" />
          <Photo.Title>
            English for beginers
            <br />
            <Photo.Price> $45</Photo.Price>
          </Photo.Title>
        </Photo.Image>
        <Photo.Image>
          <img src="/static/course.jpg" alt="small image" />
          <Photo.Title>
            English for beginers
            <br />
            <Photo.Price> $45</Photo.Price>
          </Photo.Title>
        </Photo.Image>
        <Photo.Image>
          <img src="/static/course.jpg" alt="small image" />
          <Photo.Title>
            English for beginers
            <br />
            <Photo.Price> $45</Photo.Price>
          </Photo.Title>
        </Photo.Image>
      </Photo.Wrapper>
    </Photo.Container>
    <FormBookLesson />
  </Photo.Outter>
);
