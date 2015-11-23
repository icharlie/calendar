// Write your package code here!
Calendar = () => {};

Calendar.prototype.weeklyDays = function(
  m = moment(): moment
) {
  const days = [];
  let start, end;

  start = m.subtract(m.weekday(), 'd');
  end = start.clone().add(7, 'd');
  return this.generateWeekly(start, end).shift();
};

Calendar.prototype.monthWeeklyDays = function(
  m = moment(),
  isFillAdjacentDate = false
) {
  const year = m.year();
  const month = m.month();
  const start = moment([year, month, 1]);
  const end = moment([year, month + 1, 1]);

  return this.generateWeekly(start, end, isFillAdjacentDate);
}

Calendar.prototype.generateWeekly = function (
  index: moment,
  endMoment: moment,
  isFillAdjacentDate = false: bool
) {
  const weeks = [];
  let weekDays = [];
  const year = index.year();

  /**
  * If we need adjacent days, we move the index
  * Otherwise, we fill null into week.
  */
  if (isFillAdjacentDate) {
    let date = index.date();
    const weekday = index.weekday();
    index.subtract(weekday, 'd');
  } else {
    for (let i = 0, end = index.weekday(); i < end; i++) {
      weekDays.push(null);
    }
  }

  /**
  * Start generate weeks
  */
  while(index.isBefore(endMoment)) {
    if (weekDays.length === 7 ) {
      weeks.push(weekDays);
      weekDays = [];
    }
    weekDays.push(moment([index.year(), index.month(), index.date()]));
    index.add(1, 'd');
  }

  /**
  * If we need adjacent days, we generate adjacent days
  * and put them into the last week.
  * Otherwise, we fill null into last week.
  */
  if (weekDays.length && weekDays.length < 7) {
    if (isFillAdjacentDate) {
      for (let i = index.weekday(); i < 7; i++) {
        weekDays.push(moment([year, index.month(), index.date()]));
        index.add(1, 'd');
      }
    } else {
      for (var i = index.weekday(); i < 7; i++) {
        weekDays.push(null);
      }
    }
  }

  if (weekDays.length === 7) {
    weeks.push(weekDays);
  }
  return weeks;
}

Calendar.prototype.daysOfTheWeek = function (
  lang = 'en': string,
  format = 'dd': string,
  displayLength = 1: number
) {
  moment.locale(lang);

  let daysOfTheWeek = [];

  for(var i = 0; i < 7; i++) {
    daysOfTheWeek.push(moment().weekday(i).format(format));
  }

  if (displayLength > 0) {
    daysOfTheWeek = daysOfTheWeek.map(function(day) {
      return day.substr(0, displayLength);
    });
  }

  return daysOfTheWeek;
}
