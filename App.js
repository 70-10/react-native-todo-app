import React from "react";
import { Modal } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  List,
  ListItem,
  Text,
  Footer,
  FooterTab,
  Icon
} from "native-base";

import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-items";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      todoList: ["sample-todo"]
    };
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  addTodo(todo) {
    this.setState({
      todoList: this.state.todoList.concat([todo]),
      modalVisible: false
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <TodoList items={this.state.todoList} />
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.openModal()}>
              <Icon name="ios-add" />
            </Button>
          </FooterTab>
        </Footer>
        <Modal
          visible={this.state.modalVisible}
          animationType={"slide"}
          onRequestClose={() => this.closeModal()}
        >
          <AddTodo
            closeModal={this.closeModal.bind(this)}
            addTodo={this.addTodo.bind(this)}
          />
        </Modal>
      </Container>
    );
  }
}
