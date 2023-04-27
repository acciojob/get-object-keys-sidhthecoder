//your JS code here. If required.
// Create an object called student with a name property
const student = {
  name: 'John Doe'
};

// Add a getKeys() method to the Object prototype
getkeys(){
  return Object.keys(this);
};

// Test the getKeys() method on the student object
console.log(student.getKeys()); // Output: ['name']