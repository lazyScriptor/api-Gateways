import * as React from "react";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function ShiftDateCalendar() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleChange = (e) => {
    setSelectedDate(e);
    console.log(dayjs(e).format("YYYY-MM-DD"));
  };

  const disablePastDates = (date) => {
    return dayjs(date).isBefore(dayjs(), "day");
  };

  const handlePrevDay = () => {
    const newDate = dayjs(selectedDate).subtract(1, "day");
    if (!disablePastDates(newDate)) {
      // Check if the new date is valid
      setSelectedDate(newDate);
      console.log(newDate.format("YYYY-MM-DD")); // Log the new date
    }
  };

  const handleNextDay = () => {
    const newDate = dayjs(selectedDate).add(1, "day");
    setSelectedDate(newDate);
    console.log(newDate.format("YYYY-MM-DD")); // Log the new date
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        onChange={handleChange}
        views={["year", "month", "day"]}
        shouldDisableDate={disablePastDates}
      />
      <div className="p-4 flex gap-4 justify-center">
        <button
          onClick={handlePrevDay}
          className=" bg-gray-100 hover:bg-gray-300 transition-colors duration-200  p-4 rounded-full"
        >
          <GrPrevious />
        </button>
        <button
          onClick={handleNextDay}
          className="  bg-gray-100 hover:bg-gray-300 transition-colors duration-200  p-4 rounded-full"
        >
          <GrNext />
        </button>
      </div>
    </LocalizationProvider>
  );
}
