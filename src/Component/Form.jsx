import React from "react";

const FormApplication = () => {
  return (
    <form>

      <div>
        <h1>Testing this one</h1>
        <h3>Testing this Three</h3>
        <h6>Testing this Four</h6>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
      </div>

  
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="textarea" />
  

     {/* <div>
  <label htmlFor="Testing">Testing</label>
  <input type="text" name="Testing" id="Testing" />
</div> */}

      <div>
        <label htmlFor="location">Job Location:</label>
        <select id="location" name="location">
          <option value="UK">UK</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
        </select>
      </div>

      <div>
        <label>
          <input type="checkbox" name="acceptedTerms" />
          I accept the Terms and Conditions
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormApplication;
