import React from "react";
import { List } from "semantic-ui-react";

const OfferList = (props) => {
  let offerlist = props.offer.status === "pending" && (
    <List.Item id={"offer-" + props.offer.id} key={props.offer.id}>
      <List.Content>
        <List.Header
          onClick={props.onHelperClick}
          className={"helper-email-" + props.offer.id}
          id={props.index}
        >
          {props.offer.email}
        </List.Header>
      </List.Content>
    </List.Item>
  );
  return offerlist;
};
export default OfferList;
