import React from "react";
import { List, ListItem, Left, Right, Body, Text, Icon } from "native-base";

export default props => {
  const renderItem = item => (
    <ListItem button>
      <Body>
        <Text>{item}</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );

  return <List dataArray={props.items} renderRow={renderItem} />;
};
