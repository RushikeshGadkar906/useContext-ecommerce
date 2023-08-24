import React from "react";
import { FiCodesandbox } from "react-icons/fi";

const Services = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4 ">
          <div className="serviceBox-wraaper">
            <div className="serviceBox">
              <span><FiCodesandbox /></span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div className="col-4 ">
          <div className="row">
            <div className="col-12 ">
              <div className="serviceBox-wraaper">
                <div className="serviceBox">
                  <span><FiCodesandbox /></span>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="serviceBox-wraaper">
                <div className="serviceBox">
                  <span><FiCodesandbox /></span>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 ">
          <div className="serviceBox-wraaper">
            <div className="serviceBox">
              <span><FiCodesandbox /></span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
