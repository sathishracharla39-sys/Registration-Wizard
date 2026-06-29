function Step3({
  formData,
  prevStep,
  setSubmitted,
}) {
  const handleSubmit = () => {
    console.log(formData);

    setSubmitted(true);
  };

  return (
    <div>
      <h2>Review Your Details</h2>

      <div>
        <p>
          <strong>First Name:</strong>{" "}
          {formData.firstName}
        </p>

        <p>
          <strong>Last Name:</strong>{" "}
          {formData.lastName}
        </p>

        <p>
          <strong>Date of Birth:</strong>{" "}
          {formData.dob}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {formData.email}
        </p>
      </div>

      <div className="button-group"     >
        <button
          type="button"
          onClick={prevStep}
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Step3;