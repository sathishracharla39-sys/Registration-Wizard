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

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
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