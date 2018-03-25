import React from "react";
import {
  Container,
  Header,
  Content,
  Button,
  List,
  ListItem,
  Text,
  Footer,
  FooterTab
} from "native-base";

import AddPicker from "./components/add-picker";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <AddPicker />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
