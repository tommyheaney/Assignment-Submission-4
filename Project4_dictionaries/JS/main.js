
// Script for the answering questions Button

  function my_Dictionary() {
      var Animal = {
          Species:"Dog",
          Color:"Black",
          Breed:"Labrador",
          Age:5,
          Sound:"Bark!"
      };
      //The following code changes the text on the webpage from Click me! to Bark
      //However the delete code removes the function so you will recieve an error saying undefined
      delete Animal.Sound;
      document.getElementById("Dictionary").innerHTML = Animal.Sound;
  }

