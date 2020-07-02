import React from "react";

const PageHeader = (props) => {
  const { url = "./assets/images/bg/bg-02.jpg" } = props;
  return (
    <header
      className="page-header"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(8, 100, 199, 0.2) 0%, rgba(8, 100, 199, 0.2) 100%), url('${url}')`,
      }}
    ></header>
  );
};

export default PageHeader;
