import React from "react";

const FormApplication = () => {
  return (
    <form>
      <div>
        <h1>Testing this one</h1>
        <h3>Testing this Three</h3>
        <h6>Testing this Four</h6>
        <p>All Fields Are Mandatory</p>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
      </div>

      <label htmlFor="bio">Bio</label>
      <textarea id="bio" name="textarea" />

      {/* This is used for get by display value*/}

      <div>
        <input
          type="text"
          onChange={() => {}}
          value="naveen"
          placeholder="displayvalue"
        />
      </div>

      {/* <div>
  <label htmlFor="Testing">Testing</label>
  <input type="text" name="Testing" id="Testing" />
</div> */}
{/* Get by all the text queri using the image alt*/}
<div>
  <img src='https://hellomentor.in/_next/image?url=https%3A%2F%2Fs3-example-hello-mentor.s3.ap-south-1.amazonaws.com%2Fblog%2F7d08787c-2e12-419d-b744-9b1dec5a4a1f.png&w=1920&q=75' alt='image' />
</div>
      <div>
        <label>PlaceHolder</label>
        <input type="text" placeholder="yourname" />
      </div>

      {/* Get by the Title*/}
      <div>
        <span title="title">Span</span>
      </div>

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
          <input type="checkbox" name="acceptedTerms" />I accept the Terms and
          Conditions
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormApplication;
