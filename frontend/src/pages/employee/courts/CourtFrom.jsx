import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputCustomized from "../../../reusableComponents/InputCustomized";

// Yup validation schema
const courtSchema = yup.object().shape({
  courtName: yup.string().required("Court name is required"),
  courtType: yup.string().required("Court type is required"),
  startTime: yup.string().required("Start time is required"),
  endTime: yup.string().required("End time is required"),
  noOfAreas: yup
    .number()
    .typeError("Must be a number")
    .required("Number of areas is required")
    .min(1, "Must have at least 1 area"),
});

function CourtForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(courtSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container shadow-lg rounded-xl">
      <div className="p-4 ">
        <h2 className="text-xl">Create Court type</h2>
      </div>
      <div>
        <form className="flex flex-col p-2 gap-2" onSubmit={handleSubmit(onSubmit)}>
          {/* Court Name */}
          <div>
            <label>Court name</label>
            <InputCustomized
              type="text"
              name="courtName"
              register={register}
            />
            {errors.courtName && (
              <p className="text-red-500 h-6">{errors.courtName.message}</p>
            )}
          </div>

          {/* Court Type */}
          <div>
            <label>Court type</label>
            <InputCustomized
              type="text"
              name="courtType"
              register={register}
            />
            {errors.courtType && (
              <p className="text-red-500">{errors.courtType.message}</p>
            )}
          </div>

          {/* Time Selectors */}
          <div className="flex justify-center p-4 gap-4 items-center">
            <label>Start Time</label>
            <InputCustomized
              type="time"
              name="startTime"
              register={register}
            />
            {errors.startTime && (
              <p className="text-red-500">{errors.startTime.message}</p>
            )}

            <label>End Time</label>
            <InputCustomized
              type="time"
              name="endTime"
              register={register}
            />
            {errors.endTime && (
              <p className="text-red-500">{errors.endTime.message}</p>
            )}
          </div>

          {/* Number of Areas */}
          <div>
            <label>No of areas</label>
            <InputCustomized
              type="number"
              name="noOfAreas"
              register={register}
            />
            {errors.noOfAreas && (
              <p className="text-red-500">{errors.noOfAreas.message}</p>
            )}
          </div>

          {/* Submit and Reset Buttons */}
          <div className="flex p-4 gap-4 self-center">
            <button
              className="bg-brandBlue-400 p-2 rounded-lg text-white hover:bg-brandBlue-500 self-center"
              type="submit"
            >
              Submit
            </button>
            <button
              onClick={() => reset()}
              className="bg-primary/80 p-2 rounded-lg text-white hover:bg-primary self-center"
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourtForm;
