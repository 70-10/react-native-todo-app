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
  Text,
  Form,
  Item,
  Input,
  Label
} from "native-base";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  changeTodoText(text) {
    this.setState({ todo: text });
  }

  addTodo() {
    const { todo } = this.state;
    if (!todo) {
      return;
    }
    this.props.addTodo(this.state.todo);
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
          <Form style={{ margin: 10 }}>
            <Item floatingLabel>
              <Label>Todo Task</Label>
              <Input
                value={this.state.todo}
                onChangeText={text => this.changeTodoText(text)}
              />
            </Item>
          </Form>
          <Button block onPress={() => this.addTodo()} style={{ margin: 10 }}>
            <Text>Add</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
