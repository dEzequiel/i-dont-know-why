// 5.- strOrdenaMajor Crea un codi JS que ordeni un Array de Strings alfabèticament sort()
let users = [
    {
      name: "John Doe",
      age: 17
    },
    {
      name: "Elon Doe",
      age: 27
    },
    {
      name: "Alex Doe",
      age: 14
    }
  ];

  users.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  console.log(users);