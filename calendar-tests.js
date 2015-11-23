const calendar = new Calendar();

// sample dates for test.
const _weekDays = [
  moment([ 1983,9,23 ]),
  moment([ 1983,9,24 ]),
  moment([ 1983,9,25 ]),
  moment([ 1983,9,26 ]),
  moment([ 1983,9,27 ]),
  moment([ 1983,9,28 ]),
  moment([ 1983,9,29 ])
];

const _weekDaysCrossMonths = [
  moment([ 1983,0,30 ]),
  moment([ 1983,0,31 ]),
  moment([ 1983,1,1 ]),
  moment([ 1983,1,2 ]),
  moment([ 1983,1,3 ]),
  moment([ 1983,1,4 ]),
  moment([ 1983,1,5 ])
];

const _monthDays = [
  [
    null,
    null,
    null,
    null,
    null,
    null,
    moment([ 1983,9,1 ])
  ],
  [
    moment([ 1983,9,2 ]),
    moment([ 1983,9,3 ]),
    moment([ 1983,9,4 ]),
    moment([ 1983,9,5 ]),
    moment([ 1983,9,6 ]),
    moment([ 1983,9,7 ]),
    moment([ 1983,9,8 ])
  ],
  [
    moment([ 1983,9,9 ]),
    moment([ 1983,9,10 ]),
    moment([ 1983,9,11 ]),
    moment([ 1983,9,12 ]),
    moment([ 1983,9,13 ]),
    moment([ 1983,9,14 ]),
    moment([ 1983,9,15 ])
  ],
  [
    moment([ 1983,9,16 ]),
    moment([ 1983,9,17 ]),
    moment([ 1983,9,18 ]),
    moment([ 1983,9,19 ]),
    moment([ 1983,9,20 ]),
    moment([ 1983,9,21 ]),
    moment([ 1983,9,22 ])
  ],
  [
    moment([ 1983,9,23 ]),
    moment([ 1983,9,24 ]),
    moment([ 1983,9,25 ]),
    moment([ 1983,9,26 ]),
    moment([ 1983,9,27 ]),
    moment([ 1983,9,28 ]),
    moment([ 1983,9,29 ])
  ],
  [
    moment([ 1983,9,30 ]),
    moment([ 1983,9,31 ]),
    null,
    null,
    null,
    null,
    null
  ]
];

const _monthDaysWithAdjacentDays = [
  [
    moment([ 1983,8,25 ]),
    moment([ 1983,8,26 ]),
    moment([ 1983,8,27 ]),
    moment([ 1983,8,28 ]),
    moment([ 1983,8,29 ]),
    moment([ 1983,8,30 ]),
    moment([ 1983,9,1 ])
  ],
  [
    moment([ 1983,9,2 ]),
    moment([ 1983,9,3 ]),
    moment([ 1983,9,4 ]),
    moment([ 1983,9,5 ]),
    moment([ 1983,9,6 ]),
    moment([ 1983,9,7 ]),
    moment([ 1983,9,8 ])
  ],
  [
    moment([ 1983,9,9 ]),
    moment([ 1983,9,10 ]),
    moment([ 1983,9,11 ]),
    moment([ 1983,9,12 ]),
    moment([ 1983,9,13 ]),
    moment([ 1983,9,14 ]),
    moment([ 1983,9,15 ])
  ],
  [
    moment([ 1983,9,16 ]),
    moment([ 1983,9,17 ]),
    moment([ 1983,9,18 ]),
    moment([ 1983,9,19 ]),
    moment([ 1983,9,20 ]),
    moment([ 1983,9,21 ]),
    moment([ 1983,9,22 ])
  ],
  [
    moment([ 1983,9,23 ]),
    moment([ 1983,9,24 ]),
    moment([ 1983,9,25 ]),
    moment([ 1983,9,26 ]),
    moment([ 1983,9,27 ]),
    moment([ 1983,9,28 ]),
    moment([ 1983,9,29 ])
  ],
  [
    moment([ 1983,9,30 ]),
    moment([ 1983,9,31 ]),
    moment([ 1983,10,1 ]),
    moment([ 1983,10,2 ]),
    moment([ 1983,10,3 ]),
    moment([ 1983,10,4 ]),
    moment([ 1983,10,5 ])
  ]
];


Tinytest.add('Calendar should return 7 days of the week', function (test) {
  const _week = calendar.weeklyDays(moment('1983-10-25', 'YYYY-MM-DD'));
  test.equal(_week.length, 7);
  test.equal(_week, _weekDays);
});

Tinytest.add('Calendar should return 7 days of the week even cross two months', function (test) {
  const _weekCrossMonths = calendar.weeklyDays(moment('1983-2-2', 'YYYY-MM-DD'));
  test.equal(_weekCrossMonths.length, 7);
  test.equal(_weekCrossMonths, _weekDaysCrossMonths);
});

Tinytest.add('Calendar should return weekly days of the month', function (test) {
  const _month = calendar.monthWeeklyDays(moment('1983-10-25', 'YYYY-MM-DD'));
  test.equal(_month.length, 6);
  test.equal(_month, _monthDays);
});

Tinytest.add('Calendar should return weekly days of the month with adjacnet days', function (test) {
  const _monthWithAdjacentDays = calendar.monthWeeklyDays(moment('1983-10-25', 'YYYY-MM-DD'), true);
  test.equal(_monthWithAdjacentDays.length, 6);
  test.equal(_monthWithAdjacentDays, _monthDaysWithAdjacentDays);
});


Tinytest.add('Calendar should have default daysOfTheWeek', function(test) {
  const _daysOfTheWeek = calendar.daysOfTheWeek();
  test.equal(_daysOfTheWeek, ['S','M','T','W','T','F','S',]);
});

Tinytest.add('Calendar should have custom daysOfTheWeek', function(test) {
  const _daysOfTheWeek = calendar.daysOfTheWeek('en', 'dd', 2);
  test.equal(_daysOfTheWeek, ['Su','Mo','Tu','We','Th','Fr','Sa',]);
});
