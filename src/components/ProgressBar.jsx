function ProgressBar({ currentStep }) {
  const progress = (currentStep / 3) * 100;

  return (
    <div className="progress-wrapper">
      <p>Step {currentStep} of 3</p>

      <div className="progress-container">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;