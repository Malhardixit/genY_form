import React, { useState } from "react";

const Form = () => {
  const [radio, setRadio] = useState("");
  const [radio1, setRadio1] = useState("");
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone_number: "",
    linkedin: "",
    github: "",
  });

  console.log(details);

  console.log(radio);
  console.log(radio1);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className=" p-6 m-auto bg-none rounded-md lg:max-w-xl">
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="font-bold text-gray-900">Name</span>
              <input
                type="text"
                value={details.name}
                onChange={(e) => {
                  setDetails({ ...details, name: e.target.value });
                }}
                name="name"
                className="
            w-80
            border-2
            block px-2 py-1 mt-2
            border-genY-50
            rounded-md
            shadow-sm
          "
                placeholder="Ram Sharma"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="font-bold text-gray-900">Email</span>
              <input
                type="email"
                value={details.email}
                onChange={(e) => {
                  setDetails({ ...details, email: e.target.value });
                }}
                name="email"
                className="
            w-80
            border-2
            block  px-2 py-1 mt-2
            border-genY-50
            rounded-md
            shadow-sm
          "
                placeholder="example@gmail.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="font-bold text-gray-900">Phone Number</span>
              <input
                type="text"
                name="phone"
                maxLength={10}
                value={details.phone_number}
                onChange={(e) => {
                  setDetails({ ...details, phone_number: e.target.value });
                }}
                onInput={(e) => {
                  e.target.value = e.target.value
                    .replace(/[^0-9]/g, "")
                    .replace(/(\..*)\./g, "$1");
                }}
                className="
            w-80
            border-2
            block  px-2 py-1 mt-2
            border-genY-50
            rounded-md
            shadow-sm
          "
                placeholder="985601237"
                required
              />
            </label>
          </div>
          <div className="mb-2 mt-2">
            <label>
              <span className="font-bold text-gray-900">LinkedIn</span>
              <input
                type="text"
                name="linkedin"
                value={details.linkedin}
                onChange={(e) => {
                  setDetails({ ...details, linkedin: e.target.value });
                }}
                className="
            w-80
            border-2
            block  px-2 py-1 mt-2
            border-genY-50
            rounded-md
            shadow-sm
          "
                placeholder="example@linkedin.com"
                required
              />
            </label>
          </div>
          <div className="mb-2 mt-2">
            <label>
              <span className="font-bold text-gray-900">Github</span>
              <input
                type="text"
                name="github"
                value={details.github}
                onChange={(e) => {
                  setDetails({ ...details, github: e.target.value });
                }}
                className="
            w-80
            border-2
            block  px-2 py-1 mt-2
            border-genY-50
            rounded-md
            shadow-sm
          "
                placeholder="example@github.com"
                required
              />
            </label>
          </div>

          <div
            className="
          mb-2 mt-5         
          flex flex-col items-center
          "
          >
            <button
              type="submit"
              className="
          h-8
          px-2
          text-black-100
          font-bold
          rounded-lg
          focus:shadow-outline
          border-2
          border-genY-50  
          "
            >
              Upload Image
            </button>
          </div>

          <label>
            <span className="font-bold text-gray-900">Role</span>
          </label>

          <div className="flex flex-row justify-evenly">
            <div className="mb-2 mt-2">
              <input
                id="member-radio-1"
                type="radio"
                value="Member"
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
                checked={radio === "Member"}
                name="radio-button"
                class="w-4 h-3 focus:ring-slate-900 rounded"
              ></input>
              <label for="member-radio-1" class="ml-2 font-bold">
                Member
              </label>
            </div>
            <div className="mb-2 mt-2">
              <input
                id="alumini-radio-1"
                type="radio"
                value="Alumini"
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
                checked={radio === "Alumini"}
                name="radio-button"
                class="w-4 h-3 focus:ring-slate-900 rounded"
              ></input>
              <label for="alumini-radio-1" class="ml-2 font-bold">
                Alumini
              </label>
            </div>
          </div>

          {/* Alumini Details */}

          {radio === "Alumini" ? (
            <>
              <div className="mb-2 mt-2">
                <label>
                  <span className="font-bold text-gray-900">
                    Current Position
                  </span>
                  <input
                    type="text"
                    name="position"
                    className="
            w-80
            border-2
            block  px-2 py-1 mt-2
            border-red-600
            rounded-md
            shadow-sm
          "
                    placeholder="Tech Lead,SDE,etc"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 mt-2">
                <label>
                  <span className="font-bold text-gray-900">
                    Current Company
                  </span>
                  <input
                    type="text"
                    name="comapny"
                    className="
            w-80
            border-2
            block  px-2 py-1 mt-2
            border-red-600
            rounded-md
            shadow-sm
          "
                    placeholder="Bajaj,Amex,etc"
                    required
                  />
                </label>
              </div>
            </>
          ) : null}

          {/* Member Details */}
          {radio === "Member" ? (
            <div>
              <div className="mb-2 mt-2">
                <label>
                  <span className="font-bold text-gray-900">
                    Registration No
                  </span>
                  <input
                    type="text"
                    name="regNo"
                    className="
            w-80
            border-2
            block  px-2 py-1 mt-2
            border-red-600
            rounded-md
            shadow-sm
          "
                    placeholder="RA21110330100102"
                    required
                  />
                </label>
              </div>

              <label>
                <span className="font-bold text-gray-900">Domain</span>
              </label>

              {/* Domains */}
              <div className="flex flex-row justify-evenly">
                <div className="mb-2 mt-2">
                  <input
                    id="web-radio-1"
                    type="radio"
                    value="Web"
                    name="domain-radio"
                    onChange={(e) => {
                      setRadio1(e.target.value);
                    }}
                    checked={radio1 === "Web"}
                    class="w-4 h-3 focus:ring-slate-900 rounded"
                  ></input>
                  <label for="web-radio-1" class="ml-2 font-bold">
                    Web
                  </label>
                </div>
                <div className="mb-2 mt-2">
                  <input
                    id="app-radio-1"
                    type="radio"
                    value="App"
                    name="domain-radio"
                    onChange={(e) => {
                      setRadio1(e.target.value);
                    }}
                    checked={radio1 === "App"}
                    class="w-4 h-3 focus:ring-slate-900 rounded"
                  ></input>
                  <label for="app-radio-1" class="ml-2 font-bold">
                    App
                  </label>
                </div>
                <div className="mb-2 mt-2">
                  <input
                    id="dsMl-radio-1"
                    type="radio"
                    value="DSML"
                    onChange={(e) => {
                      setRadio1(e.target.value);
                    }}
                    checked={radio1 === "DSML"}
                    name="domain-radio"
                    class="w-4 h-3 focus:ring-slate-900 rounded"
                  ></input>
                  <label for="dsMl-radio-1" class="ml-2 font-bold">
                    DSML
                  </label>
                </div>
                <div className="mb-2 mt-2">
                  <input
                    id="creative-radio-1"
                    type="radio"
                    value="Creative"
                    onChange={(e) => {
                      setRadio1(e.target.value);
                    }}
                    checked={radio1 === "Creative"}
                    name="domain-radio"
                    class="w-4 h-3 focus:ring-slate-900 rounded"
                  ></input>
                  <label for="creative-radio-1" class="ml-2 font-bold">
                    Creative
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-evenly">
                <div className="mb-2 mt-2">
                  <input
                    id="corporate-radio-1"
                    type="radio"
                    value="Corporate"
                    onChange={(e) => {
                      setRadio1(e.target.value);
                    }}
                    checked={radio1 === "Corporate"}
                    name="domain-radio"
                    class="w-4 h-3 focus:ring-slate-900 rounded"
                  ></input>
                  <label for="corporate-radio-1" class="ml-2 font-bold">
                    Corporate
                  </label>
                </div>
                <div className="mb-2 mt-2">
                  <input
                    id="arVr-radio-1"
                    type="radio"
                    value="AR/VR"
                    name="domain-radio"
                    onChange={(e) => {
                      setRadio1(e.target.value);
                    }}
                    checked={radio1 === "AR/VR"}
                    class="w-4 h-3 focus:ring-slate-900 rounded"
                  ></input>
                  <label for="arVr-radio-1" class="ml-2 font-bold">
                    AR/VR
                  </label>
                </div>
              </div>

              {/* Position */}
              <label>
                <span className="font-bold text-gray-900">Position</span>
              </label>

              <div className="flex flex-row justify-evenly">
                <div className="mb-2 mt-2">
                  <input
                    id="core-radio-1"
                    type="radio"
                    value="Core"
                    onChange={(e) => {
                      setRadio1(e.target.value);
                    }}
                    checked={radio1 === "Core"}
                    name="radio-position"
                    class="w-4 h-3 focus:ring-slate-900 rounded"
                  ></input>
                  <label for="core-radio-1" class="ml-2 font-bold">
                    Core
                  </label>
                </div>
                <div className="mb-2 mt-2">
                  <input
                    id="lead-radio-1"
                    type="radio"
                    value="Lead"
                    onChange={(e) => {
                      setRadio1(e.target.value);
                    }}
                    checked={radio1 === "Lead"}
                    name="radio-position"
                    class="w-4 h-3 focus:ring-slate-900 rounded"
                  ></input>
                  <label for="lead-radio-1" class="ml-2 font-bold">
                    Lead
                  </label>
                </div>
                <div className="mb-2 mt-2">
                  <input
                    id="member-radio-1"
                    type="radio"
                    value="Member"
                    name="radio-position"
                    onChange={(e) => {
                      setRadio1(e.target.value);
                    }}
                    checked={radio1 === "Member"}
                    class="w-4 h-3 focus:ring-slate-900 rounded"
                  ></input>
                  <label for="member-radio-1" class="ml-2 font-bold">
                    Member
                  </label>
                </div>
              </div>
            </div>
          ) : null}

          <div class="mb-6 mt-2 flex flex-col items-center">
            <button
              type="submit"
              className="
            h-10
            px-8
            font-bold
            text-white
            bg-genY-50
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-bl-50
          "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
