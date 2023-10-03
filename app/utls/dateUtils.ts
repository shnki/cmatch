import moment from "moment";

export const daysRangeArray = () => {
  const daysInMonth = (month: number, year: number) => {
    return moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
  };

  const getDateArray = (date: Date) => {
    const currentDate = moment(date);

    const currentYear = currentDate.year();
    const currentMonth = currentDate.month() + 1; // Moment.js months start from 0
    const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);

    const dateArray = [];
    for (let i = 1; i <= 7; i++) {
      let day;
      const days = [
        "اﻷحد",
        "اﻷثنين",
        "الثلاثاء",
        "اﻷربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
      ];

      const months = [
        "يناير",
        "فبراير",
        "مارس",
        "إبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ];
      if (i === 4) {
        day = {
          number: currentDate.date(),
          month: months[currentDate.month()],
          dayOfWeek: days[currentDate.day()],
          format: currentDate.format("DD/MM/YYYY"),
        };
      } else {
        let offset = i - 4;
        let newDate = currentDate.clone().add(offset, "days");
        if (newDate.date() > daysInCurrentMonth) {
          offset = daysInCurrentMonth - currentDate.date();
          newDate = currentDate.clone().add(offset, "days");
        }
        day = {
          number: newDate.date(),
          month: months[newDate.month()],
          dayOfWeek: days[newDate.day()],
          format: newDate.format("DD/MM/YYYY"),
        };
      }
      dateArray.push(day);
    }
    return dateArray;
  };
  return getDateArray(new Date());
};
