import React, { useMemo, useState } from "react";
import  "./form.css";
const totalLocationData = ["1-20", "21-50", "51-200", "201-500", "500+"];

 const Form = () => {
  const [totalLocation, setTotalLocation] = useState(1);

  const handleAddLocation = (el, event) => {
    event.preventDefault();
    setTotalLocation(el);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault()

    // console.log("APPPLE");
  };

  return (
    <div className={"main_container"}>
      <div className={"background_main_container"}>
        <div className={"background_container_left"}></div>
        <div className={"background_container_right"}></div>
      </div>
      <div className={"card_main_container"}>
        <div className={"logo"}>
          <img
            style={{ width: "160px" }}
            src="https://wobot.ai/wobot_logo_blue.svg"
            alt="wobot logo"
          />
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className={"card_container"}>
            <div className={"logo_group"}>
              <img style={{ width: "52px" }} src={"https://zenprospect-production.s3.amazonaws.com/uploads/pictures/64b12cd14c00290001df4e9c/picture"} alt="logo" />
              </div>
              <div className="text_center">
              <p style={{ fontSize: "26px", fontWeight: "500" }}>
                It's a delight to have you onboard
              </p>
              <p>Help us known you better.</p>
              <p style={{ fontSize: "14px" }}>
                (This is how we optimize 
                <br/>
                Wobot as per your business needs)
              </p>
              </div>
            
            <div className={"input_group"}>
              <label htmlFor="input-address">Your name</label>
              <input type="text" placeholder="e.g. John Smith" />
            </div>
            <div className={"input_group"}>
              <label htmlFor="input-address">Company name</label>
              <input type="text" placeholder="e.g. Alpha Inc." />
            </div>
            <div className={"input_group"}>
              <label htmlFor="input-address">Industry</label>
              {/* <input type="text" placeholder="e.g. John Smith" /> */}
              <select name="" id="">
                <option value="" hidden>
                  Select
                </option>
                <option value="">Soft ware</option>
                <option value="">Auto Mobile</option>.
                <option value="">Engineering</option>
                <option value="">leather</option>

              </select>
            </div>
            <div className={"input_group"}>
              <label htmlFor="input-address">Number of locations</label>
              <div className={"number_location"}>
                {totalLocationData?.map((el, i) => (
                  <button
                    className={
                      el == totalLocation
                        ? "button_click"
                        : "button_not"
                    }
                    onClick={(event) => handleAddLocation(`${el}`, event)}
                    key={i}
                  >
                    {el}
                  </button>
                ))}
              </div>
            </div>
            <button className={"button"} type="submit">
              Get Started
            </button>
          </div>
        </form>

        <div className={"privacy_policy"}>
          <p>Terms of use | Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Form