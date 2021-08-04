let instructor = {
  firstName: "Sung",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// Shows firstName, isInstructor, favoriteNumber as an array
Object.keys(instructor);

// Shows values
Object.values(instructor);

// Shows entries. Both keys and values in an array [array(2), array(2), array(2)]
Object.entries(instructor);

// insert a key in the parameter to check if it exists. Boolean return
instructor.hasOwnProperty("firstName");
