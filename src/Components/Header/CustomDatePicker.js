import React from 'react';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

const CustomDatePicker = ({ field, form }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  const handleDateChange = (date) => {
    const formattedDate = `${date.day}-${date.month}-${date.year}`;
    console.log(formattedDate, "insdie sutom")
    setSelectedDay(formattedDate)
    setFieldValue(field.name, formattedDate);
  };

  return (
    <DatePicker
      inputPlaceholder="Select a date"
      calendarClassName="custom-calendar" // Add any custom class for styling
      // Add any other props or configurations you need
      selected={field.value}
      onChange={handleDateChange}
      onBlur={field.onBlur}
      value={selectedDay}
                              name="date"
                              disabledDays={disabledDays}
                              renderInput={renderCustomInput} // render a custom input
                              calendarPopperPosition="bottom"                              
                              minimumDate={utils().getToday()}
                              shouldHighlightWeekends
    />
  );
};

export default CustomDatePicker;
