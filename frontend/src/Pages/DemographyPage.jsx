import React from "react";
import React, { useState } from "react";

const DemographyPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section>
      <div
        className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg"
        style={{ backgroundColor: "#bad9ff" }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Robotic Knee Joint Replacement Study
        </h2>
        <form onSubmit={""} className="space-y-8">
          {/* Step 1: Patient Details */}
          {currentStep === 1 && (
            <section>
              <h3 className="text-xl font-semibold mb-4">
                DEMOGRAPHIC INFORMATION
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="todayDate"
                    className="block  text-gray-700 font-semibold mt-4"
                  >
                    1. Today Date
                  </label>
                  <input
                    type="date"
                    id="todayDate"
                    name="todayDate"
                    onChange={handleChange}
                    className="input-field"
                    min={new Date().toISOString().split("T")[0]} // Restricts to today and future dates
                  />
                  {errors.weight && (
                    <div className="alert alert-danger p-2 bg-red-200 text-red-600 rounded-lg mt-2">
                      {errors.weight}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="today Date"
                    className="block  text-gray-700 font-semibold mt-4"
                  >
                    2. Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="today Date"
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block  text-gray-700 font-semibold mt-4"
                  >
                    3. Height
                  </label>
                  <input
                    type="Number"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block  text-gray-700 font-semibold mt-4"
                  >
                    4. Weight
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className="block  text-gray-700 font-semibold mt-4"
                  >
                    5. Sex
                  </label>
                  <select
                    type="text"
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select Gender</option>
                    <option value=""> Male</option>
                    <option value="">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block  text-gray-700 font-semibold mt-4">
                    6. Side of this (symptomatic) knee
                  </label>
                  <div className="flex items-center space-x-4 mt-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="admissionSide"
                        value="Right"
                        onChange={handleChange}
                        className="input-field-radio"
                        id="admission-side-right"
                      />
                      <span>Right</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="admissionSide"
                        value="Left"
                        onChange={handleChange}
                        className="input-field-radio"
                        id="admission-side-left"
                      />
                      <span>Left</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block  text-gray-700 font-semibold mt-4">
                    7. Ethnicity Types
                  </label>
                  <div className="flex flex-col md:flex-row md:flex-wrap items-left space-y-2 md:space-y-0 md:space-x-4 mt-3 ">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="ethnicity"
                        value="Asian"
                        onChange={handleChange}
                        className="input-field-radio"
                        id="ethnicity-asian"
                      />
                      <span>Asian</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="ethnicity"
                        value="Black"
                        onChange={handleChange}
                        className="input-field-radio"
                        id="ethnicity-black"
                      />
                      <span>Black</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="indian"
                        value="Black"
                        onChange={handleChange}
                        className="input-field-radio"
                        id="ethnicity-black"
                      />
                      <span>Indian</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="ethnicity"
                        value="Hispanic"
                        onChange={handleChange}
                        className="input-field-radio"
                        id="ethnicity-hispanic"
                      />
                      <span>Hispanic</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="ethnicity"
                        value="White"
                        onChange={handleChange}
                        className="input-field-radio"
                        id="ethnicity-white"
                      />
                      <span>White</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="ethnicity"
                        value="Other"
                        onChange={handleChange}
                        className="input-field-radio"
                        id="ethnicity-other"
                      />
                      <span>Other</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="surgeryDate"
                    className="block  text-gray-700 font-semibold mt-4"
                  >
                    8.Please indicate the expected date and surgeon for your
                    knee replacement operation
                  </label>
                  <input
                    type="date"
                    id="surgeryDate"
                    name="surgeryDate"
                    onChange={handleChange}
                    className="input-field"
                  />
                  <div>
                    <label
                      htmlFor="preOpROM"
                      className="block  text-gray-700 font-semibold mt-4"
                    >
                      Name Of Surgeon
                    </label>
                    <input
                      type="text"
                      id="preOpROM"
                      name="preOpROM"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <label className="flex items-center space-x-2">
                    <label> Will this be a primary</label>
                    <input
                      type="radio"
                      name="admissionSide"
                      value="Right"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="admission-side-right"
                    />
                    <span>Right</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="admissionSide"
                      value="Left"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="admission-side-left"
                    />
                    <span>Left</span>
                  </label>
                </div>
              </div>
            </section>
          )}
        </form>
      </div>
      ;
    </section>
  );
};

export default DemographyPage;
