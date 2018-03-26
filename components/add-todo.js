import React from "react";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Button,
  Text
} from "native-base";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.props.closeModal}>
              <Text>Cancel</Text>
            </Button>
          </Left>
          <Body>
            <Title>Add Todo</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button onPress={() => this.props.addTodo("sample")}>
            <Text>Add</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
