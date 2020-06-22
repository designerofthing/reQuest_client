import React, { useState } from "react";
import MyListComponent from "./MyListComponent";
import { Button } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Offers from "./Offers";
import { Link, Redirect } from "react-router-dom";

const MyRequestsPage = () => {
  const mySelectedRequest = useSelector(
    (state) => state.requests.mySelectedRequest
  );
  const [selectedStatus, setSelectedStatus] = useState("pending");
  const authenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  const showMyRequests = (status) => {
    setSelectedStatus(status);
  };

  const activeMenuItem = (menuItem) => {
    if (menuItem === selectedStatus) {
      return { backgroundColor: "#88a65e", color: "whitesmoke" };
    }
  };

  return (
    <div id="page-container">
      {!authenticated ? (
        <Redirect to="/login" />
      ) : (
        <>
          <div id="leftmost-component">
            <div id="menu-container">
              <div id="vertical-line"></div>
              <div id="menu">
                <div
                  id="pending-link"
                  style={activeMenuItem("pending")}
                  onClick={() => showMyRequests("pending")}
                >
                  pending
                </div>
                <div
                  id="active-link"
                  style={activeMenuItem("active")}
                  onClick={() => showMyRequests("active")}
                >
                  active
                </div>
                <div
                  id="completed-link"
                  style={activeMenuItem("completed")}
                  onClick={() => showMyRequests("completed")}
                >
                  completed
                </div>
              </div>
            </div>
            <Link to="/myrequest/newrequest" id="create-request-link">
              <Button>Create new reQuest</Button>
            </Link>
          </div>
          <div id="middle-left-component" style={{ marginLeft: "30px" }}>
            <MyListComponent selectedStatus={selectedStatus} />
          </div>
          <div id="middle-right-component" style={{ marginLeft: "30px" }}>
            {mySelectedRequest && (
              <Offers
                request={mySelectedRequest}
                selectedStatus={selectedStatus}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MyRequestsPage;
