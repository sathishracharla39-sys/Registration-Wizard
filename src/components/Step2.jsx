import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../schemas/formSchema";

function Step2({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(step2Schema),
    defaultValues: {
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    },
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    }));

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>

        <input
          type="email"
          {...register("email")}
        />

        {errors.email && (
          <p className="error">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label>Password</label>

        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
        />

        {errors.password && (
          <p className="error">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label>Confirm Password</label>

        <input
          type={showPassword ? "text" : "password"}
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (
          <p className="error">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() =>
          setShowPassword((prev) => !prev)
        }
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button
          type="button"
          onClick={prevStep}
        >
          Back
        </button>

        <button
          type="submit"
          disabled={!isValid}
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default Step2;