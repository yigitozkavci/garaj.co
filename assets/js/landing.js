(function() {
  $("#calendar").fullCalendar({
    eventSources: [
      {
        events: [
          {
            title: 'CrowdUp',
            start: '2016-04-16',
            end: '2016-04-20'
          }, {
            title: 'Example Event 1',
            start: '2016-03-16',
            end: '2016-03-17'
          }, {
            title: 'Example Event 2',
            start: '2016-03-21',
            end: '2016-03-23'
          }
        ],
        color: '#f05f40',
        textColor: '#FAEEEB'
      }
    ]
  });

}).call(this);
