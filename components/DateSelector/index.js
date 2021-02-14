import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from 'moment';
import "react-dates/lib/css/_datepicker.css";

export default function DateSelector() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const isDayBlocked = (day) => {
    console.log(day);
    //TODO: compute disabled days. load them from backend intially, cache in state, lazy load more as user toggles months
    return false;
  };

  console.log(moment().startOf('day'));
  
  return (
      <DateRangePicker
        startDate={startDate}
        startDateId="tata-start-date"
        endDate={endDate}
        endDateId="tata-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        hideKeyboardShortcutsPanel={true}
        // isOutsideRange={isDayBlocked} // greys out date number
        isDayBlocked={isDayBlocked} // adds grey background to date box
      />
  );
}
