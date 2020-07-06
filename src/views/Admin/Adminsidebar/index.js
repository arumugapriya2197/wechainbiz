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
    pathname: "/admin/new-loan",
  },
  {
    icon: "fas fa-file-signature",
    name: "Active Loan",
    pathname: "/admin/active-loan",
  },
  {
    icon: "far fa-file-alt",
    name: "Repayment Details",
    pathname: "/admin/repayment-details",
  },
  {
    icon: "fas fa-inbox",
    name: "Indox",
    pathname: "/admin/indox",
  },
  {
    icon: "far fa-file-alt",
    name: "Submitted Documents",
    pathname: "/admin/submitted-documents",
  },
  {
    icon: "far fa-file-alt",
    name: "Product Information",
    pathname: "/admin/product-information",
  },
  {
    icon: "far fa-comment-alt",
    name: "Feedback / Rating",
    pathname: "/admin/feedback",
  },
  {
    icon: "far fa-newspaper",
    name: "System Configuration",
    pathname: "/admin/system-configuration",
  },
];

const Adminsidebar = () => {
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

export default Adminsidebar;
