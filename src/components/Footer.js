import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <label>Subscribe to our Newsletter</label>
      <br></br>
      <input
        type="text"
        placeholder="Email"
        style={{ margin: "20px auto", textAlign: "center" }}
      />
      <button>Subscribe</button>
      <div className="footerContent">
      <div className="horizontal-section">
          <div className="headings">Home</div>
        </div>
        <div className="horizontal-section">
          <div className="headings">Our Company</div>
          <div className="vertical-section">
            {/* Replace anchor tag with Link */}
            <Link to="/about">About Us</Link>
          </div>
        </div>

        <div className="horizontal-section">
          <div className="headings">Contact Us</div>
          <div className="vertical-section">
            {/* Replace anchor tag with Link */}
            <Link to="/contactus">Contact Info</Link>
          </div>
        </div>
        <div className="horizontal-section">
          <div className="headings">Feedback</div>
        </div>
        <div className="horizontal-section">
          <div className="headings">Follow Us</div>
          <div className="vertical-section">
            <img
              className="XNo5Ab"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABOFBMVEVHcExxF/13F/1zFf2AFv2MCu+iBOmyAuLEAd7SANraBMzwHpedI+XeANfmANHmAr+PF/6fD/vxAL7qArV7GP21FvnRVurnZ+P2Z9roQeDzGtXzB8v7AqvWiPn+7fn////7ftv/A7z0BKH3v/H+3fT+ruj+AJr/9/r/RcD/bMDKFff/Bo3iG+r8GrX/AIH+H5r/yeP+BHj/t9n/V5r+Am7+H37+BGT/ssX/Imz/RXv/ucz+e4z+JFT/XI3/MGL+LUf/u7f/yc7/Alr+OUf+MSz+QzT+R0T+iHD+SRj+VzH+WQX+AkL+c2L/0sT+aCX+cBL/7+j+aQL+eRv/oUX/fwL+iBD/wXz+jgD/3rr/1rn+dgz+nAP9FpT+lw7+qgH+tQD+vQD/w1f9kwf/xAD9PFn9ogj/ywD9uAfgLZLBAAAAaHRSTlMAW9H+////////xEsC///N////zFz/////////////////uP////7///////////7////////////////////////////////////////////////////////F/7VQ///+/87/vsj/uqL0GQwAAAHcSURBVHgBRMlFehwxEEDhV1VS04yZ7U04m+AmcBjfLLscJ4xLHyA0YGqSlJ7P9MT6BRC52EEQuDjlFITx2eWvXJsDQWYIKgJj4VQW5gBJAg75K5vTgZDTFUEu/kUEzqGaiC6DMBbhpqQyoyKTNYD1Hp+Ui6J0ZH1HhXNA0RfzyRIZl5WprroK3BZwwvx0aUGdB87HCIN5VBUVP9i468ZLxWLv+pg6vJmDaSiSW2eyIRNg84/HxfVJmTD3DxFWGmWjrosRpxMNGr3iIqYbG7IGK5lKvZE3jVuTynsDzHRoD3xpxaTQvIKumGBWgCouM9bPKEisJg0VTV4X0aBqQEuXQ2kGlmVmZCtgCoxBJfeAz0b8NQbWI7wOAKCZMgbn9E6tItG1HFTKRQ4jgSYpiiPu6BFJW1fW9J7oDFWWgpf0MH09YnB6yIEYnIJhLhqkpw3aC4OuUJ4QlDzX55/Um5m4Ue6dmXr59LwkBM0xy/ieVNV7zSSTZMU3fs8UNBomr+v3jQx5X1XmB7tdgnNu1JqDl+0nbnp+HpLp+WM5bB0mIMJFc/ouSgjd+U99O1qYONOhFEMonPcZCZ6eGp9eRcSwhWkSRCIxKnfeIMBh1WRcFOhTaENo/096OTA7AACDzKODDThakgAAAABJRU5ErkJggg=="
              style={{ height: "30px", width: "30px" }}
              alt=""
              data-csiid="9"
              data-atf="1"
            />
          </div>
          <div className="vertical-section">
            <img
              className="XNo5Ab"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABOFBMVEVHcExxF/13F/1zFf2AFv2MCu+iBOmyAuLEAd7SANraBMzwHpedI+XeANfmANHmAr+PF/6fD/vxAL7qArV7GP21FvnRVurnZ+P2Z9roQeDzGtXzB8v7AqvWiPn+7fn////7ftv/A7z0BKH3v/H+3fT+ruj+AJr/9/r/RcD/bMDKFff/Bo3iG+r8GrX/AIH+H5r/yeP+BHj/t9n/V5r+Am7+H37+BGT/ssX/Imz/RXv/ucz+e4z+JFT/XI3/MGL+LUf/u7f/yc7/Alr+OUf+MSz+QzT+R0T+iHD+SRj+VzH+WQX+AkL+c2L/0sT+aCX+cBL/7+j+aQL+eRv/oUX/fwL+iBD/wXz+jgD/3rr/1rn+dgz+nAP9FpT+lw7+qgH+tQD+vQD/w1f9kwf/xAD9PFn9ogj/ywD9uAfgLZLBAAAAaHRSTlMAW9H+////////xEsC///N////zFz/////////////////uP////7///////////7////////////////////////////////////////////////////////F/7VQ///+/87/vsj/uqL0GQwAAAHcSURBVHgBRMlFehwxEEDhV1VS04yZ7U04m+AmcBjfLLscJ4xLHyA0YGqSlJ7P9MT6BRC52EEQuDjlFITx2eWvXJsDQWYIKgJj4VQW5gBJAg75K5vTgZDTFUEu/kUEzqGaiC6DMBbhpqQyoyKTNYD1Hp+Ui6J0ZH1HhXNA0RfzyRIZl5WprroK3BZwwvx0aUGdB87HCIN5VBUVP9i468ZLxWLv+pg6vJmDaSiSW2eyIRNg84/HxfVJmTD3DxFWGmWjrosRpxMNGr3iIqYbG7IGK5lKvZE3jVuTynsDzHRoD3xpxaTQvIKumGBWgCouM9bPKEisJg0VTV4X0aBqQEuXQ2kGlmVmZCtgCoxBJfeAz0b8NQbWI7wOAKCZMgbn9E6tItG1HFTKRQ4jgSYpiiPu6BFJW1fW9J7oDFWWgpf0MH09YnB6yIEYnIJhLhqkpw3aC4OuUJ4QlDzX55/Um5m4Ue6dmXr59LwkBM0xy/ieVNV7zSSTZMU3fs8UNBomr+v3jQx5X1XmB7tdgnNu1JqDl+0nbnp+HpLp+WM5bB0mIMJFc/ouSgjd+U99O1qYONOhFEMonPcZCZ6eGp9eRcSwhWkSRCIxKnfeIMBh1WRcFOhTaENo/096OTA7AACDzKODDThakgAAAABJRU5ErkJggg=="
              style={{ height: "30px", width: "30px" }}
              alt=""
              data-csiid="9"
              data-atf="1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
