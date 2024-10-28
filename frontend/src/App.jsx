import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    order_wise_date: "",
    dob: "",
    height: "",
    weight: "",
    sex: "",
    symptomatic: "",
    ethnicity: "",
    replacement_operation_date: "",
    surgeon_name: "",
    knee_replacement: "",
    functional_classification: "",
    anatomic_alignment: "",
    measured_in_full_extension: "",
    measured_at_90_degrees: "",
    range_of_motion: "",
    flexion_contracture: "",
    extensor_lag: "",
    pain_with_level_walking: "",
    pain_with_stairs_or_inclines: "",
    knee_feel: "",
    satisfied_pain_level: "",
    satisfied_knee_while_lying: "",
    satisfied_knee_function_getting_out_of_bed: "",
    satisfied_knee_function_light_household_duties: "",
    satisfied_recreational_activities: "",
    knee_pain: "",
    normal_activities: "",
    recreational_or_sports_activities: "",
    without_aids: "",
    following_aids: "",
    use_these_aids: "",
    knee_discomfort: "",
    before_stopping_due_to_knee_discomfort: "",
    uneven_surface: "",
    pivoting: "",
    climbing_up: "",
    without_arms: "",
    out_of_car: "",
    moving_laterally: "",
    stool: "",
    bag_for_a_block: "",
    squatting: "",
    kneeling: "",
    running: "",
    knee_activities: "",
    activity1: "",
    activity2: "",
    activity3: "",
  });

  const [customSide, setCustomSide] = useState("");
  const handleCustomChange = (e) => {
    setCustomSide(e.target.value);
  };
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrevious = () => setCurrentStep(currentStep - 1);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const missingFields = Object.entries(formData).filter(
      ([key, value]) => !value
    );

    if (missingFields.length > 0) {
      const fieldNames = missingFields.map(([key]) => key).join(", ");
      alert(`Please fill out all required fields: ${fieldNames}`);
      return; // Stop submission if there are missing fields
    }

    // Proceed with form submission if all fields are filled
    console.log("Form submitted successfully!");
  };

  return (
    <div
      className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg"
      style={{ backgroundColor: "#a7bedb" }}
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Robotic Knee Joint Replacement Study
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
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
                  id="order_wise_date"
                  name="order_wise_date"
                  onChange={handleChange}
                  className="input-field"
                  min={new Date().toISOString().split("T")[0]} // Restricts to today and future dates
                />
              </div>

              <div>
                <label
                  htmlFor="Date Of Birth"
                  className="block  text-gray-700 font-semibold mt-4"
                >
                  2. Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label
                  htmlFor="height"
                  className="block  text-gray-700 font-semibold mt-4"
                >
                  3. Height
                </label>
                <input
                  type="Number"
                  id="height"
                  name="height"
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label
                  htmlFor="weight"
                  className="block  text-gray-700 font-semibold mt-4"
                >
                  4. Weight
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
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
                  id="sex"
                  name="sex"
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
                      name="symptomatic"
                      value="Right"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="symptomatic"
                    />
                    <span>Right</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="symptomatic"
                      value="Left"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="symptomatic"
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
                      name="ethnicity"
                      value="Indian"
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
                  8.Please indicate the expected date and surgeon for your knee
                  replacement operation
                </label>
                <input
                  type="date"
                  id="replacement_operation_date"
                  name="replacement_operation_date"
                  onChange={handleChange}
                  className="input-field"
                />
                <div>
                  <label
                    htmlFor="surgeon_name"
                    className="block  text-gray-700 font-semibold mt-4"
                  >
                    Name Of Surgeon
                  </label>
                  <input
                    type="text"
                    id="surgeon_name"
                    name="surgeon_name"
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <label>
                    Will this be a primary or revision knee replacement?
                  </label>
                  <input
                    type="radio"
                    name="knee_replacement"
                    value="Primary"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="admission-side-right"
                  />
                  <span>Primary</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="knee_replacement"
                    value="Revision"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="admission-side-left"
                  />
                  <span>Revision</span>
                </label>
              </div>
              <br />
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <label> Charnley Functional Classification</label>
                  <input
                    type="radio"
                    name="functional_classification"
                    value="A Unilateral Knee Arthritis"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="admission-side-right"
                  />
                  <span>A Unilateral Knee Arthritis</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="functional_classification"
                    value=" C1TKR, but remote arthritis affecting ambulation"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="admission-side-left"
                  />
                  <span> C1TKR, but remote arthritis affecting ambulation</span>
                </label>
              </div>
            </div>
          </section>
        )}

        {/* Step 2: CPAK Classification Section */}
        {currentStep === 2 && (
          <section className="mt-6">
            <h3 className="text-xl font-semibold mb-4">ALIGNMENT</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {/* Alignment on X-ray */}
              <div>
                <label className="block  text-gray-700 font-semibold mt-4">
                  1. measured on AP standing X-ray
                </label>
                <select
                  id="anatomic_alignment"
                  name="anatomic_alignment"
                  onChange={handleChange}
                  className="input-field mt-2 w-full"
                >
                  <option value="">
                    Neutral: 2-10 degrees valgus (25 pts)
                  </option>
                  <option value="">
                    Varus: 2 &lt; degrees valgus (-10 pts)
                  </option>
                  <option value="">
                    Valgus: 10 &gt; degrees valgus (-10 pts)
                  </option>
                </select>
              </div>

              {/* Medial/Lateral Instability */}
              <div>
                <label className="block  text-gray-700 font-semibold mt-4">
                  2. Medial / Lateral Instability: measured in full extension
                </label>
                <select
                  id="measured_in_full_extension"
                  name="measured_in_full_extension"
                  onChange={handleChange}
                  className="input-field mt-2 w-full"
                >
                  <option value="">None (15 pts)</option>
                  <option value="">Little or &lt; 5 mm (10 pts)</option>
                  <option value="">Moderate or 5 mm (5 pts)</option>
                  <option value="">Severe or &lt; 5 mm (0 pts)</option>
                </select>
              </div>

              {/* Anterior/Posterior Instability */}
              <div>
                <label className="block  text-gray-700 font-semibold mt-4">
                  3. Anterior / Posterior Instability: measured at 90 degrees
                </label>
                <select
                  id="measured_at_90_degrees"
                  name="measured_at_90_degrees"
                  onChange={handleChange}
                  className="input-field mt-2 w-full"
                >
                  <option value="">None (10 pts)</option>
                  <option value="">Moderate &lt; (5 pts)</option>
                  <option value="">Severe &lt; 5 mm (0 pts)</option>
                </select>
              </div>

              {/* Range of Motion */}
              <div>
                <label className="block  text-gray-700 font-semibold mt-4">
                  4. Range of motion (1 point for each 5 degrees)
                </label>
                <select
                  id="range_of_motion"
                  name="range_of_motion"
                  onChange={handleChange}
                  className="input-field mt-2 w-full"
                >
                  <option value="">1-5 degrees (-2 pts)</option>
                  <option value="">6-10 degrees (-5 pts)</option>
                  <option value="">11-15 degrees (-10 pts)</option>
                  <option value="">&lt; 15 degrees (-15 pts)</option>
                </select>
              </div>

              {/* Pain with level walking */}
              <div>
                <label className="block  text-gray-700 font-semibold mt-4">
                  5. Pain with level walking
                </label>
                <input
                  type="number"
                  id="flexion_contracture"
                  name="flexion_contracture"
                  onChange={handleChange}
                  className="input-field mt-2 w-full"
                />
              </div>

              {/* Pain with stairs or inclines */}
              <div>
                <label className="block  text-gray-700 font-semibold mt-4">
                  6. Pain with stairs or inclines
                </label>
                <input
                  type="number"
                  id="extensor_lag"
                  name="extensor_lag"
                  onChange={handleChange}
                  className="input-field mt-2 w-full"
                />
              </div>

              {/* Normal Knee Feel */}
              <div className="col-span-1 md:col-span-2 mt-4">
                <label className="block  text-gray-700 font-semibold mb-5">
                  Does this knee feel "normal" to you?
                </label>
                <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="pain_with_level_walking"
                      value="Always"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelAlways"
                    />
                    <span>Always</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="pain_with_level_walking"
                      value="Sometimes"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSometimes"
                    />
                    <span>Sometimes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="pain_with_level_walking"
                      value="Never"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelNever"
                    />
                    <span>Never</span>
                  </label>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 3: Radiography Section */}
        {currentStep === 3 && (
          <section>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Radiography
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4 sm:p-6">
              <h5 className="text-sm sm:text-base md:text-lg font-semibold">
                1. Currently, how satisfied are you with the pain level of your
                knee while sitting?
              </h5>
              <div className="flex flex-wrap items-center mt-2 space-x-1 sm:space-x-2">
                {[
                  "Very Satisfied",
                  "Satisfied",
                  "Neutral",
                  "Dissatisfied",
                  "Very Dissatisfied",
                ].map((label, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-1 sm:space-x-2 mb-2"
                  >
                    <input
                      type="radio"
                      name="satisfied_pain_level"
                      value={label}
                      onChange={handleChange}
                      className="input-field-radio"
                    />
                    <span className="text-xs sm:text-sm">{label}</span>
                  </label>
                ))}
              </div>

              <h5 className="text-sm sm:text-base md:text-lg font-semibold">
                2. Currently, how satisfied are you with the pain level of your
                knee while lying in bed?
              </h5>
              <div className="flex flex-wrap items-center mt-2 space-x-1 sm:space-x-2">
                {[
                  "Very Satisfied",
                  "Satisfied",
                  "Neutral",
                  "Dissatisfied",
                  "Very Dissatisfied",
                ].map((label, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-1 sm:space-x-2 mb-2"
                  >
                    <input
                      type="radio"
                      name="satisfied_knee_while_lying"
                      value={label}
                      onChange={handleChange}
                      className="input-field-radio"
                    />
                    <span className="text-xs sm:text-sm">{label}</span>
                  </label>
                ))}
              </div>

              <h5 className="text-sm sm:text-base md:text-lg font-semibold">
                3. Currently, how satisfied are you with your knee function
                while getting out of bed?
              </h5>
              <div className="flex flex-wrap items-center mt-2 space-x-1 sm:space-x-2">
                {[
                  "Very Satisfied",
                  "Satisfied",
                  "Neutral",
                  "Dissatisfied",
                  "Very Dissatisfied",
                ].map((label, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-1 sm:space-x-2 mb-2"
                  >
                    <input
                      type="radio"
                      name="satisfied_knee_function_getting_out_of_bed"
                      value={label}
                      onChange={handleChange}
                      className="input-field-radio"
                    />
                    <span className="text-xs sm:text-sm">{label}</span>
                  </label>
                ))}
              </div>

              <h5 className="text-sm sm:text-base md:text-lg font-semibold">
                4. Currently, how satisfied are you with the pain level of your
                knee while standing?
              </h5>
              <div className="flex flex-wrap items-center mt-2 space-x-1 sm:space-x-2">
                {[
                  "Very Satisfied",
                  "Satisfied",
                  "Neutral",
                  "Dissatisfied",
                  "Very Dissatisfied",
                ].map((label, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-1 sm:space-x-2 mb-2"
                  >
                    <input
                      type="radio"
                      name="satisfied_knee_function_light_household_duties"
                      value={label}
                      onChange={handleChange}
                      className="input-field-radio"
                    />
                    <span className="text-xs sm:text-sm">{label}</span>
                  </label>
                ))}
              </div>

              <h5 className="text-sm sm:text-base md:text-lg font-semibold">
                5. Currently, how satisfied are you with your knee function
                while walking?
              </h5>
              <div className="flex flex-wrap items-center mt-2 space-x-1 sm:space-x-2">
                {[
                  "Very Satisfied",
                  "Satisfied",
                  "Neutral",
                  "Dissatisfied",
                  "Very Dissatisfied",
                ].map((label, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-1 sm:space-x-2 mb-2"
                  >
                    <input
                      type="radio"
                      name="satisfied_recreational_activities"
                      value={label}
                      onChange={handleChange}
                      className="input-field-radio"
                    />
                    <span className="text-xs sm:text-sm">{label}</span>
                  </label>
                ))}
              </div>
              <div className="mt-4">
                <h5 className="text-lg font-medium">
                  1. Do you expect your knee joint replacement surgery will
                  relieve your knee pain?
                </h5>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_pain"
                      value="No, not at all (1 pt)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-1"
                    />
                    <span>No, not at all (1 pt)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_pain"
                      value="Yes, a little bit (2 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-2"
                    />
                    <span>Yes, a little bit (2 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_pain"
                      value="Yes, somewhat (3 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-3"
                    />
                    <span>Yes, somewhat (3 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_pain"
                      value="Yes, a moderate amount (4 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-4"
                    />
                    <span>Yes, a moderate amount (4 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_pain"
                      value="Yes, a lot (5 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-5"
                    />
                    <span>Yes, a lot (5 pts)</span>
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-medium">
                  2. Do you expect your surgery will help you carry out your
                  normal activities of daily living?
                </h5>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="normal_activities"
                      value="No, not at all (1 pt)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-1"
                    />
                    <span>No, not at all (1 pt)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="normal_activities"
                      value="Yes, a little bit (2 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-2"
                    />
                    <span>Yes, a little bit (2 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="normal_activities"
                      value="Yes, somewhat (3 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-3"
                    />
                    <span>Yes, somewhat (3 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="normal_activities"
                      value="Yes, a moderate amount (4 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-4"
                    />
                    <span>Yes, a moderate amount (4 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="normal_activities"
                      value="Yes, a lot (5 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-5"
                    />
                    <span>Yes, a lot (5 pts)</span>
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-medium">
                  3. Do you expect your surgery will help you perform leisure,
                  recreational, or sports activities?
                </h5>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="recreational_or_sports_activities"
                      value="No, not at all (1 pt)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-1"
                    />
                    <span>No, not at all (1 pt)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="recreational_or_sports_activities"
                      value="Yes, a little bit (2 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-2"
                    />
                    <span>Yes, a little bit (2 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="recreational_or_sports_activities"
                      value="Yes, somewhat (3 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-3"
                    />
                    <span>Yes, somewhat (3 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="recreational_or_sports_activities"
                      value="Yes, a moderate amount (4 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-4"
                    />
                    <span>Yes, a moderate amount (4 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="recreational_or_sports_activities"
                      value="Yes, a lot (5 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneePain-5"
                    />
                    <span>Yes, a lot (5 pts)</span>
                  </label>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 4: Researcher/Surgeon Details */}
        {currentStep === 4 && (
          <section>
            <h3 className="text-xl font-semibold mb-4">
              Researcher/Surgeon Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1 - Can you walk without any aids (such as a cane, crutches or
                  wheelchair)
                </label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="without_aids"
                      value="Always"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelAlways"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="without_aids"
                      value="Sometimes"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSometimes"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <h5 className="text-lg font-medium">
                  3. Do you expect your surgery will help you perform leisure,
                  recreational, or sports activities?
                </h5>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="following_aids"
                      value="wheelchair (-10 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-1"
                    />
                    <span>wheelchair (-10 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="following_aids"
                      value="walker (-8 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-2"
                    />
                    <span>walker (-8 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="following_aids"
                      value="crutches (-8 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-3"
                    />
                    <span>crutches (-8 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="following_aids"
                      value="two canes (-6 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-4"
                    />
                    <span>two canes (-6 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="following_aids"
                      value="one crutch (-4 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-5"
                    />
                    <span>one crutch (-4 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="following_aids"
                      value="5"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-5"
                    />
                    <span>one cane (-4 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="following_aids"
                      value="knee sleeve / brace (-2 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-5"
                    />
                    <span>knee sleeve / brace (-2 pts)</span>
                  </label>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  3. Do you use these aid(s) because of your knees?
                </label>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="use_these_aids"
                      value="Always"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelAlways"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="use_these_aids"
                      value="Sometimes"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSometimes"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <h5 className="text-lg font-medium">
                  4 - For how long can you stand (with or without aid) before
                  sitting due to knee discomfort?
                </h5>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_discomfort"
                      value="cannot stand (0 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-1"
                    />
                    <span>cannot stand (0 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_discomfort"
                      value="0-5 minutes (3 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-2"
                    />
                    <span>0-5 minutes (3 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_discomfort"
                      value="6-15 minutes (6 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-3"
                    />
                    <span>6-15 minutes (6 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_discomfort"
                      value="16-30 minutes (9 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-4"
                    />
                    <span>16-30 minutes (9 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_discomfort"
                      value="31-60 minutes (12 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-5"
                    />
                    <span>31-60 minutes (12 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_discomfort"
                      value="more than an hour (15 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-5"
                    />
                    <span>more than an hour (15 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="knee_discomfort"
                      value="knee sleeve / brace (-2 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-5"
                    />
                    <span>knee sleeve / brace (-2 pts)</span>
                  </label>
                </div>
              </div>
              <br />
              <div className="mt-6">
                <h5 className="text-lg font-medium">
                  5 - For how long can you walk (with or without aid) before
                  stopping due to knee discomfort?
                </h5>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="before_stopping_due_to_knee_discomfort"
                      value="cannot stand (0 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-1"
                    />
                    <span>cannot stand (0 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="before_stopping_due_to_knee_discomfort"
                      value="0-5 minutes (3 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-2"
                    />
                    <span>0-5 minutes (3 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="before_stopping_due_to_knee_discomfort"
                      value="6-15 minutes (6 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-3"
                    />
                    <span>6-15 minutes (6 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="before_stopping_due_to_knee_discomfort"
                      value="16-30 minutes (9 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-4"
                    />
                    <span>16-30 minutes (9 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="before_stopping_due_to_knee_discomfort"
                      value="31-60 minutes (12 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-5"
                    />
                    <span>31-60 minutes (12 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="before_stopping_due_to_knee_discomfort"
                      value="more than an hour (15 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-5"
                    />
                    <span>more than an hour (15 pts)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="before_stopping_due_to_knee_discomfort"
                      value="knee sleeve / brace (-2 pts)"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="leisure-5"
                    />
                    <span>knee sleeve / brace (-2 pts)</span>
                  </label>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 5: Researcher/Surgeon Details */}
        {currentStep === 5 && (
          <section>
            <h3 className="text-xl font-semibold mb-4">Researcher</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1. Walking on an uneven surface
                </label>
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="uneven_surface"
                      value="no bother"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelAlways1"
                    />
                    <span className="m-2"> no bother (5)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="uneven_surface"
                      value="slight"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSometimes1"
                    />
                    <span className="m-2">slight (4)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="uneven_surface"
                      value="moderate"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelModerate1"
                    />
                    <span className="m-2">moderate (3)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="uneven_surface"
                      value="severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSevere1"
                    />
                    <span className="m-2">severe (2)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="uneven_surface"
                      value="very severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelVerySevere1"
                    />
                    <span className="m-2">very severe (1)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="uneven_surface"
                      value="I never do this"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelNever1"
                    />
                    <span className="m-2">I never do this (0)</span>
                  </label>
                </div>
              </div>

              {/* Repeat similar structure for other questions */}
              <div className="col-span-1 md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  2. Turning or pivoting on your leg
                </label>
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="pivoting"
                      value="no bother"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelAlways1"
                    />
                    <span className="m-2"> no bother (5)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="pivoting"
                      value="slight"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSometimes1"
                    />
                    <span className="m-2">slight (4)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="pivoting"
                      value="moderate"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelModerate1"
                    />
                    <span className="m-2">moderate (3)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="pivoting"
                      value="severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSevere1"
                    />
                    <span className="m-2">severe (2)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="pivoting"
                      value="very severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelVerySevere1"
                    />
                    <span className="m-2">very severe (1)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="pivoting"
                      value="I never do this"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelNever1"
                    />
                    <span className="m-2"> I never do this (0)</span>
                  </label>
                  {/* Radio options for question 2 */}
                  {/* Follow the same structure as question 1 */}
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  3. Climbing up or down a flight of stairs
                </label>
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="climbing_up"
                      value="no bother"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelAlways1"
                    />
                    <span className="m-2"> no bother (5)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="climbing_up"
                      value="slight"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSometimes1"
                    />
                    <span className="m-2">slight (4)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="climbing_up"
                      value="moderate"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelModerate1"
                    />
                    <span className="m-2">moderate (3)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="climbing_up"
                      value="severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSevere1"
                    />
                    <span className="m-2">severe (2)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="climbing_up"
                      value="very severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelVerySevere1"
                    />
                    <span className="m-2">very severe (1)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="climbing_up"
                      value="I never do this"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelNever1"
                    />
                    <span className="m-2">I never do this (0)</span>
                  </label>
                  {/* Radio options for question 3 */}
                  {/* Follow the same structure as question 1 */}
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  4. Getting up from a low couch or a chair without arms
                </label>
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="without_arms"
                      value="no bother"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelAlways1"
                    />
                    <span className="m-2"> no bother (5)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="without_arms"
                      value="slight"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSometimes1"
                    />
                    <span className="m-2">slight (4)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="without_arms"
                      value="moderate"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelModerate1"
                    />
                    <span className="m-2">moderate (3)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="without_arms"
                      value="severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSevere1"
                    />
                    <span className="m-2"> severe (2)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="without_arms"
                      value="very severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelVerySevere1"
                    />
                    <span className="m-2">very severe (1)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="without_arms"
                      value="I never do this"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelNever1"
                    />
                    <span className="m-2">I never do this (0)</span>
                  </label>
                  {/* Radio options for question 4 */}
                  {/* Follow the same structure as question 1 */}
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  5. Getting into or out of a car
                </label>
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="out_of_car"
                      value="no bother"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelAlways1"
                    />
                    <span className="m-2"> no bother (5)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="out_of_car"
                      value="slight"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSometimes1"
                    />
                    <span className="m-2">slight (4)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="out_of_car"
                      value="moderate"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelModerate1"
                    />
                    <span className="m-2">moderate (3)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="out_of_car"
                      value="severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSevere1"
                    />
                    <span className="m-2">severe (2)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="out_of_car"
                      value="very severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelVerySevere1"
                    />
                    <span className="m-2">very severe (1)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="out_of_car"
                      value="I never do this"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelNever1"
                    />
                    <span className="m-2">I never do this (0)</span>
                  </label>
                  {/* Radio options for question 5 */}
                  {/* Follow the same structure as question 1 */}
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  6. Moving laterally (stepping to the side)
                </label>
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="moving_laterally"
                      value="no bother"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelAlways1"
                    />
                    <span className="m-2"> no bother (5)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="moving_laterally"
                      value="slight"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSometimes1"
                    />
                    <span className="m-2">slight (4)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="moving_laterally"
                      value="moderate"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelModerate1"
                    />
                    <span className="m-2">moderate (3)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="moving_laterally"
                      value="severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelSevere1"
                    />
                    <span className="m-2">severe (2)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="moving_laterally"
                      value="very severe"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelVerySevere1"
                    />
                    <span className="m-2">very severe (1)</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="moving_laterally"
                      value="I never do this"
                      onChange={handleChange}
                      className="input-field-radio"
                      id="kneeFeelNever1"
                    />
                    <span className="m-2"> I never do this (0)</span>
                  </label>
                  {/* Radio options for question 6 */}
                  {/* Follow the same structure as question 1 */}
                </div>
              </div>
            </div>

            <br />
            <h1 className=" text align-center">
              ADVANCED ACTIVITIES (25 points)
            </h1>
            <div className="col-span-1 md:col-span-2 mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1 - Climbing a ladder or step stool
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="stool"
                    value="Always"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelAlways"
                  />
                  <span>(5)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="stool"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(4)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="stool"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(3)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="stool"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(2)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="stool"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(1)</span>
                </label>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1 - Climbing a ladder or step stool
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="bag_for_a_block"
                    value="Always"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelAlways"
                  />
                  <span>(5)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="bag_for_a_block"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(4)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="bag_for_a_block"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(3)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="bag_for_a_block"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(2)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="bag_for_a_block"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(1)</span>
                </label>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1 - Climbing a ladder or step stool
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="squatting"
                    value="Always"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelAlways"
                  />
                  <span>(5)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="squatting"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(4)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="squatting"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(3)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="squatting"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(2)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="squatting"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(1)</span>
                </label>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1 - Climbing a ladder or step stool
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="kneeling"
                    value="Always"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelAlways"
                  />
                  <span>(5)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="kneeling"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(4)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="kneeling"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(3)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="kneeling"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(2)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="kneeling"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(1)</span>
                </label>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1 - Climbing a ladder or step stool
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="running"
                    value="Always"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelAlways"
                  />
                  <span>(5)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="running"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(4)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="running"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(3)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="running"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(2)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="running"
                    value="Sometimes"
                    onChange={handleChange}
                    className="input-field-radio"
                    id="kneeFeelSometimes"
                  />
                  <span>(1)</span>
                </label>
              </div>
            </div>
          </section>
        )}

        {/* Step 6: Researcher/Surgeon Details */}
        {currentStep === 6 && (
          <section>
            <h3 className="text-xl font-semibold mb-4">Researcher</h3>
            <div className="container mx-auto p-4">
              {/* Section for checkbox options */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Activities (Select any):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Swimming",
                    "Golfing (18 holes)",
                    "Road Cycling (>30mins)",
                    "Gardening",
                    "Bowling",
                    "Racquet Sports (Tennis, Racquetball, etc.)",
                    "Distance Walking",
                    "Dancing / Ballet",
                    "Stretching Exercises (stretching out your muscles)",
                    "Weight-lifting",
                    "Leg Extensions",
                    "Stair-Climber",
                    "Stationary Biking / Spinning",
                    "Leg Press",
                    "Jogging",
                  ].map((activity, i) => (
                    <label key={i} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="knee_activities"
                        value={activity}
                        onChange={handleChange}
                        className="input-field-checkbox"
                      />
                      <span>{activity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="age"
                className="block  text-gray-700 font-semibold mt-4"
              >
                1. Activity
              </label>
              <input
                type="text"
                id="activity1"
                name="activity1"
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block  text-gray-700 font-semibold mt-4"
              >
                2. Activity
              </label>
              <input
                type="text"
                id="activity2"
                name="activity2"
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block  text-gray-700 font-semibold mt-4"
              >
                3. Activity
              </label>
              <input
                type="text"
                id="activity3"
                name="activity3"
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <br />
          </section>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Previous
            </button>
          )}
          {currentStep < 6 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
