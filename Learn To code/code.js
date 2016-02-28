(function() {
  var app = angular.module('app', []);
  var courses = [
    {
      name: 'HTML',
      description: 'HTML is the building block of the web. It describes the way data is organized in websites.',
      link: './lessons/html.html'
    },
    {
      name: 'CSS',
      description: 'CSS determines how websites look. It consists of identifiers and rules, or how certain styles applied.',
      link: './lessons/css.html'
    },
    {
      name: 'JavaScript',
      description: 'JavaScript allows you to build actual programmatic functionality and interactivity into your websites.',
      link: './lessons/javascript.html'
    },
    {
      name: 'JQuery',
      description: 'JQuery is a powerful JavaScript library that makes it easier to modify the HTML that you actually see.',
      link: './lessons/jquery.html'
    },
    {
      name: 'AngularJS',
      description: 'AngularJS is a way to organize your code so you can build web applications.',
      link: './lessons/angular.html'
    },
    {
      name: 'NodeJS',
      description: 'NodeJS is like JavaScript for servers. It adds a lot of functionality in the form of modules.',
      link: './lessons/node.html'
    },
    {
      name: 'Python',
      description: 'Python is a great language that teaches the fundamentals of programming to beginners, and it is increasingly used in other fields such as data science.',
      link: './lessons/python.html'
    },
    {
      name: 'SQL',
      description: 'SQL is the way programmers interact with databases.',
      link: './lessons/sql.html'
    },
    {
      name: 'C',
      description: 'C is the father of all programming languages. It is extremely old, and has many useful features like pointers. (Although they can be a pain in the neck.)',
      link: './lessons/c.html'
    }
  ];
  app.controller('appCtrl', function() {
    this.courses = courses;
  });
  var JS = angular.module('JavascriptLesson', [ ]);
  JS.controller('JavascriptController', function () {
    this.lessons = javascriptLessons;
  })

  var javascriptLessons = [
    {
      name: 'Basics',
      id:'JSbasics',
      contents: [
        {
          name: 'Variables',
          description: '',
        },
      ],
    },
  ]
}());
