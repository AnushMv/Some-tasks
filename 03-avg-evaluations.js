const evaluations = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 60
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 60
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 25
  }
];

console.log(getAvgPerCourse(evaluations));

function getAvgPerCourse(evaluations) {
  const res = {};

  for (let evalutaion of evaluations) {
    const id = evalutaion.courseId;

    if (res[id]) {
      res[id].scores.push(evalutaion.score);
    } else {
      res[id] = {
        id: evalutaion.courseId,
        name: evalutaion.courseName,
        scores: [evalutaion.score]
      };
    }
  }

  for (let key in res) {
    const item = res[key];
    let sum = 0;

    for (let i = 0; i < item.scores.length; i++) {
      sum += item.scores[i];
    }

    item.avg = sum / item.scores.length;
    delete item.scores;
  }

  return res;
}
