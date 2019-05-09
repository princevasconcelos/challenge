import datefns from 'date-fns';
import pt from 'date-fns/locale/pt';

const format = (date, token) => datefns.format(date, token, { locale: pt });

const isToday = (date, today) => date.getDay() === today.getDay();

const getTableDates = () => {
  const dayRange = 3;
  const today = new Date();
  const calendar = datefns.eachDay(
    datefns.subDays(today, dayRange),
    datefns.addDays(today, dayRange),
  );

  return calendar.map(date => ({
    week: isToday(date, today) ? 'HOJE' : format(date, 'dddd').split('-')[0],
    month: format(date, 'DD MMMM'),
  }));
};

export default getTableDates;
