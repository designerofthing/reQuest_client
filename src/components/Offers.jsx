import React from "react";

const Offers = ({ request }) => {
  const offers = request.offers.map((offer) => (
    <div id={"offer-" + offer.id}>
      <p id={"offer-email"}>{offer.helper.email}</p>
      <p id={"offer-message"}>{offer.message}</p>
    </div>
  ));
  return <div>{offers}</div>;
};

export default Offers;
