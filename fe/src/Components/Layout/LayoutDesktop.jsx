import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function LayoutDesktop(props) {
  let { Component } = props;
  return (
    <div>
      <Header />
      <div>{<Component />}</div>
      <Footer />
    </div>
  );
}
