import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../schemas/formSchema";

function Step1({ formData, setFormData, nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(step1Schema),
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
    },
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob,
    }));

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>

        <input
          type="text"
          {...register("firstName")}
        />

        {errors.firstName && (
          <p className="error">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <label>Last Name</label>

        <input
          type="text"
          {...register("lastName")}
        />

        {errors.lastName && (
          <p className="error">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div>
        <label>Date of Birth</label>

        <input
          type="date"
          {...register("dob")}
        />

        {errors.dob && (
          <p className="error">
            {errors.dob.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid}
      >
        Next
      </button>
    </form>
  );
}

export default Step1;