import { useState } from "react";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: "",
  });

  const handleInput = (event) => {
    const { name, value, checked, type } = event.target;
    setInputData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-data">
        <br />
        <label htmlFor="firstname" className="labels">
          First Name
        </label>
        <br></br>
        <input
          type="text"
          placeholder="Shalini"
          value={inputData.firstname}
          onChange={handleInput}
          name="firstname"
          className="input-data"
          id="firstname"
          size="100"
        ></input>
        <br />
        <br />
        <label htmlFor="lastname" className="labels">
          Last Name
        </label>
        <br></br>
        <input
          type="text"
          placeholder="Sirothiya"
          value={inputData.lastname}
          onChange={handleInput}
          name="lastname"
          id="lastname"
          className="input-data"
          size="100"
        ></input>
        <br />
        <br />
        <label htmlFor="email" className="labels">
          Email Address
        </label>
        <br />
        <input
          type="email"
          placeholder="shalini21sirothiya@gmail.com"
          value={inputData.email}
          onChange={handleInput}
          name="email"
          id="email"
          className="input-data"
          size="100"
        ></input>
        <br />
        <br></br>
        <label htmlFor="Country">Country</label>
        <br></br>
        <select
          id="Country"
          name="Country"
          value={FormData.country}
          onChange={handleInput}
        >
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br />
        <br></br>
        <label htmlFor="streetAddress" className="labels">
          Street Address
        </label>
        <br></br>
        <input
          type="text"
          placeholder="Seetanagar ,Damoh"
          value={inputData.streetAddress}
          onChange={handleInput}
          name="streetAddress"
          className="input-data"
          id="streetAddress"
          size="100"
        ></input>
        <br />
        <br></br>
        <label htmlFor="city" className="labels">
          City
        </label>
        <br></br>
        <input
          type="text"
          placeholder="Damoh"
          value={inputData.city}
          onChange={handleInput}
          name="city"
          className="input-data"
          id="city"
          size="100"
        ></input>
        <br />
        <br></br>
        <label htmlFor="state" className="labels">
          State
        </label>
        <br></br>
        <input
          type="text"
          placeholder="Madhya Pradesh"
          value={inputData.state}
          onChange={handleInput}
          name="state"
          className="input-data"
          id="state"
          size="100"
        ></input>
        <br />
        <br></br>
        <label htmlFor="postalCode" className="labels">
          Postal Code
        </label>
        <br></br>
        <input
          type="text"
          placeholder="470675"
          value={inputData.postalCode}
          onChange={handleInput}
          name="postalCode"
          className="input-data"
          id="postalCode"
          size="100"
        ></input>

        <br />
        <br></br>

        <fieldset>
          <legend>By Email</legend>
          <div className="checkbox-div">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={inputData.comments}
              onChange={handleInput}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <br></br>
              <p>Get notified when someones posts a comment on a posting. </p>
            </div>
          </div>
          <div className="checkbox-div">
            <input
              type="checkbox"
              id="candidate"
              name="candidate"
              checked={inputData.candidate}
              onChange={handleInput}
            />
            <div>
              <label htmlFor="candidate">Candidate</label>
              <br></br>
              <p>Get notified when a candidate applies for a job. </p>
            </div>
          </div>
          <div className="checkbox-div">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={inputData.offers}
              onChange={handleInput}
            />
            <div>
              <label htmlFor="offers">offers</label>
              <br></br>
              <p>Get notified when a candidate accepts or rejects an offer. </p>
            </div>
          </div>
          <br></br>
        </fieldset>
        <br></br>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMA to your mobile phone.</p>

          <input
            type="radio"
            id="pusheverything"
            name="pushNotification"
            value="Everything"
            onChange={handleInput}
          ></input>
          <label htmlFor="pusheverything">Push Everything</label>
          <br></br>

          <input
            type="radio"
            id="pushemail"
            name="pushNotification"
            value="Same as email"
            onChange={handleInput}
          ></input>
          <label htmlFor="pushemail">Same as email</label>

          <br></br>

          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="Push Nothing"
            onChange={handleInput}
          ></input>
          <label htmlFor="pushnothing">Push Nothing</label>
          <br></br>
        </fieldset>
        <br></br>
        <button className="save-btn">Save</button>
      </form>
    </div>
  );
}

export default App;
