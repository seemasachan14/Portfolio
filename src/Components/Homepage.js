import React from "react";
import "../CSS/Homepage.css";

import HomepageSidebar from "./HomepageSidebar";
import Introcard from "./Introcard";
import Information from "./Information";

export default function Homepage(z) {
  return (
    <>
      <div className=" d-flex">
        <HomepageSidebar />
        <div>
          <Introcard />
          <Information />
        </div>
      </div>
    </>
  );
}
