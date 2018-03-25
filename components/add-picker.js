import React from "react";
import { Picker, Icon } from "native-base";

const { Item } = Picker;

export default class AddPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: undefined };
  }

  onValueChange(value) {
    this.setState({ selected: value });
  }

  render() {
    return (
      <Picker
        mode="dropdown"
        placeholder={<Icon name="ios-add" />}
        selectedValue={this.state.selected}
        onValueChange={this.onValueChange.bind(this)}
        headerBackButtonText="Cancel"
      >
        <Item label="Wallet" value="key0" />
        <Item label="ATM Card" value="key1" />
        <Item label="Debit Card" value="key2" />
        <Item label="Credit Card" value="key3" />
        <Item label="Net Banking" value="key4" />
      </Picker>
    );
  }
}
