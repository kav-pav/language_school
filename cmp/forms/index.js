import React, { useState } from "react";
import { Book, Contact, Message } from "./styles";
import { sendMail } from "lib/rest-api";
import { checkResponse } from "lib/normalizers";
import { Spinner } from "ui/spinner";

export class FormBookLesson extends React.PureComponent {
  state = {
    messageStatus: false,
    messageType: null,
    message: "",
    loading: false,
    input: {
      name: "",
      phone: "",
      email: ""
    }
  };

  updateField = evt => {
    this.setState({
      input: {
        ...this.state.input,
        [evt.target.id]: evt.target.value
      }
    });
  };

  delay = time =>
    setTimeout(() => {
      this.setState({ messageStatus: false });
    }, time);

  handleSubmit = async evt => {
    evt.preventDefault();
    const { input } = this.state;
    this.setState({ loading: true });
    const mailResponse = await sendMail(input);
    this.setState({
      loading: false,
      input: { name: "", phone: "", email: "" }
    });
    const message = checkResponse(mailResponse.success);
    this.setState({
      message: message.message,
      messageType: message.messageType,
      messageStatus: true
    });
    this.delay(5000);
  };

  render() {
    const { loading, message, messageStatus, messageType } = this.state;
    const answer = { messageType, message, messageStatus };
    return (
      <Book.Outter>
        <Book.HeaderContainer>
          <Book.Header>SKONTAKTUJ SIĘ Z NAMI!</Book.Header>
          <Book.Icon>
            <img src="/static/icons/edit.svg" alt="icon" />
          </Book.Icon>
        </Book.HeaderContainer>
        <Book.Form>
          <Book.InputContainer>
            <Book.Icon input>
              <img src="/static/icons/avatar.svg" alt="icon" />
            </Book.Icon>
            <Book.Input
              id="name"
              placeholder="Imię"
              onChange={evt => this.updateField(evt)}
            ></Book.Input>
          </Book.InputContainer>
          <Book.InputContainer>
            <Book.Icon input>
              <img src="/static/icons/phone.svg" alt="icon" />
            </Book.Icon>
            <Book.Input
              id="phone"
              placeholder="Numer telefonu"
              onChange={evt => this.updateField(evt)}
            ></Book.Input>
          </Book.InputContainer>
          <Book.InputContainer>
            <Book.Icon envelope>
              <img src="/static/icons/envelope.svg" alt="icon" />
            </Book.Icon>
            <Book.Input
              id="email"
              placeholder="E-mail"
              onChange={evt => this.updateField(evt)}
            ></Book.Input>
          </Book.InputContainer>
          <Book.SendButton onClick={this.handleSubmit}>
            {loading ? <Spinner /> : "WYŚLIJ!"}
          </Book.SendButton>
        </Book.Form>
        <MessageBack {...answer} />
      </Book.Outter>
    );
  }
}

const MessageBack = props => {
  return (
    <Message.Outer answer={props.messageType} show={props.messageStatus}>
      <Message.Inner answer={props.messageType}>{props.message}</Message.Inner>
    </Message.Outer>
  );
};

export class FormContact extends React.PureComponent {
  render() {
    return (
      <Contact.Outter>
        <Contact.Form>
          <Contact.Container>
            <Contact.InputContainer smallcont>
              <Contact.Icon>
                <img src="/static/icons/avatar.svg" alt="icon" />
              </Contact.Icon>
              <Contact.Input small placeholder="Imię"></Contact.Input>
            </Contact.InputContainer>
            <Contact.InputContainer rightcont>
              <Contact.Icon className="envelope">
                <img src="/static/icons/envelope.svg" alt="icon" />
              </Contact.Icon>
              <Contact.Input small placeholder="E-mail"></Contact.Input>
            </Contact.InputContainer>
          </Contact.Container>
          <Contact.Container>
            <Contact.InputContainer>
              <Contact.Icon className="envelope">
                <img src="/static/icons/envelope.svg" alt="icon" />
              </Contact.Icon>
              <Contact.TextArea placeholder="Wiadomość"></Contact.TextArea>
            </Contact.InputContainer>
          </Contact.Container>
          <Contact.SendButton>WYŚLIJ!</Contact.SendButton>
        </Contact.Form>
      </Contact.Outter>
    );
  }
}
