import { useState } from "react";
import "./App.css";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container">
      <h1>Registration Wizard</h1>

      <ProgressBar currentStep={currentStep} />

      {submitted ? (
  <div className="success-box">
    <h2>Registration Successful 🎉</h2>

    <p>
      Your registration has been completed
      successfully.
    </p>
  </div>
) : (
        <>
          {currentStep === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              nextStep={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              nextStep={() => setCurrentStep(3)}
              prevStep={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <Step3
              formData={formData}
              prevStep={() => setCurrentStep(2)}
              setSubmitted={setSubmitted}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;