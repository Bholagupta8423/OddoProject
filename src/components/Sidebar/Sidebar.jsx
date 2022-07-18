import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdList } from "react-icons/md";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <div className="container">
        <ul className="sidebar">
          
            <span className="sp">{<MdList/>}<span className="sp1">PRODUCT CATEGORY</span></span>
        
          <li>
          <div className="all"><span>All</span></div>
          </li>
          <li>
            <level>Assets</level> <span> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            </span>
          </li>
          <li>
          <level>BATTERY</level>  <span> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            </span>
          </li>
          <li>
          <level>Electricle</level>  <span> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            </span>
          </li>
          <li>
          <level>Filters</level>   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          </li>
          <li>
          <level>GR</level>   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          </li>
          <li>
          <level>Machanical</level>   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          </li>
        </ul>

        
      </div>
    </div>
  );
};

export default Sidebar;
