import React from "react";
import { NavLink } from "react-router-dom";
import {
  Modal,
  ModalBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const list = [
  {
    icon: "fas fa-tachometer-alt",
    name: "Dashboard",
    pathname: "/dashboard",
  },
  {
    icon: "fas fa-hand-holding-usd",
    name: "New Loans",
    pathname: "/new-loan",
  },
  {
    icon: "fas fa-file-signature",
    name: "Active Loan",
    pathname: "/active-loan",
  },
  {
    icon: "far fa-file-alt",
    name: "Repayment Details",
    pathname: "/repayment-details",
  },
  {
    icon: "fas fa-inbox",
    name: "Indox",
    pathname: "/indox",
  },
  {
    icon: "far fa-file-alt",
    name: "Submitted Documents",
    pathname: "/submitted-documents",
  },
  {
    icon: "far fa-comment-alt",
    name: "Feedback / Rating",
    pathname: "/feedback-rating",
  },
  {
    icon: "far fa-newspaper",
    name: "Directors Information",
    pathname: "/directors-information",
  },
];

const SidebarNavigation = () => {
  return (
    <div className="sidebar-navigation">
      {list.map((item, inx) => {
        return (
          <NavLink to={item.pathname} className={`navigation-item`} key={inx}>
            <Row className="add-border justify-content-center">
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              {item.name}
            </Row>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SidebarNavigation;
