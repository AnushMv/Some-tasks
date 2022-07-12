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

function groupBy(collection, key) {
  const result = {};

  collection.forEach((item) => {
    const objKey = item[key];

    if (result[objKey]) {
      result[objKey].push(Object.assign({}, item));
    } else {
      result[objKey] = [Object.assign({}, item)];
    }
  });

  return result;
}

function calcAvg(arr, toFIxed = 2) {
  return (
    arr.reduce((acm, current) => {
      return acm + current;
    }, 0) / arr.length
  ).toFixed(toFIxed);
}

function getAvgScores(evaluations) {
  const grouped = groupBy(evaluations, "courseId");
  const result = [];

  for (let key in grouped) {
    const group = grouped[key];
    const courseId = group[0].courseId;
    const courseName = group[0].courseName;
    const scores = group.map((item) => item.score);
    const avg = calcAvg(scores, 1);

    result.push({ id: courseId, name: courseName, avg: avg });
  }

  return result;
}

console.log(getAvgScores(evaluations));
