/*
Forbidden methods:
.map
.foreach
.source
.filter
*/

// use for loops instead for this exercise


///////////////Menu Items (MVP)///////////////////
console.log("---------------#1 Menu: Add Items---------------");
const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, price, category){
    return {name, price, category};
}


/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

console.log(createMenuItem("Tacos", 11, "Lunch"));
console.log(createMenuItem("Fruit Cup", 3, "Snacks"));
console.log(createMenuItem("Curry", 10, "Dinner"));

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 

Your method should accept: 

(1) A string (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/
console.log("---------------#2 Menu: Specials---------------");


//burger = {name: "Burger", price: 18, category: "Lunch"};

function discount(buyer){
  if(buyer === "teacher"){
    burger.price = 13.5;
  }else if(buyer === "public"){
    burger.price = 16.2;
  }else{
    burger.price = 18;
  }
  console.log(burger);
}

discount("teacher");




///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: ""},
]

/* Task 3: Console.log just Julius' feedback */
console.log("---------------#3 Reviews: Julius---------------");

//     console.log(reviews.indexOf("name"));



function findReview(reviewsArray,reviewerName){
  let foundReviews = []; 
  for(let i = 0; i < reviewsArray.length; i++){
        if(reviewsArray[i].name.includes(reviewerName)){
          foundReviews.push(reviewsArray[i]);
        }
    }
    console.log(foundReviews[0]);
}


findReview(reviews,"Julius");



/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
console.log("---------------#4 Reviews: Add New---------------");

function addReview(reviewsArray, name, rating, feedback){
    const newReview = {name, rating, feedback};
    //console.log(newReview);

    reviewsArray.push(newReview);
    console.log(reviewsArray);

  }

addReview(reviews, "Stephan", "5", "Excellent chicken nuggets!");






/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"*/


console.log("---------------#5 Reviews: Update feedback---------------");


function updateFeedback(reviewsArray,reviewerName,newFeedback){

  for(let i = 0; i < reviewsArray.length; i++){
    if(reviewsArray[i].name === reviewerName){
      
      reviewsArray[i].feedback = reviewsArray[i].feedback + " " + newFeedback;
      
    }
  }

  console.log(reviewsArray);
}

updateFeedback(reviews,"Reyna","this place is chill with really cool people, great for getting work done on weekdays");





/*  Task 6: Write a function to return a review based on the index of the review in the array.

 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/

console.log("---------------#6 Reviews: getReviewByIndex---------------");



function getReviewByIndex(reviewsArray, index) {
 
//  reviewsArray[index]

//console.log(reviewsArray[index]);

console.log(`${reviewsArray[index].name} gave the restaurant a ${reviewsArray[index].rating} star review and their feedback was: ${reviewsArray[index].feedback}`);
      
}
  
getReviewByIndex(reviews, 0);



/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/

console.log("---------------#7 Reviews: getLastReview---------------");


function getLastReview(reviewsArray) {
    const recentReview = reviewsArray[reviewsArray.length-1];
    //console.log(recentReview);

    console.log(`${recentReview.name} gave the restaurant a ${recentReview.rating} star review and their feedback was: ${recentReview.feedback}`);

  } 

  getLastReview(reviews);

///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

console.log("---------------Stretch 1: getReviewByRating---------------");


 function getReviewByRating(reviewsArray,rating) {
    let gotRatings = [];
    for(let i = 0; i < reviewsArray.length; i++){
        if (
          reviewsArray[i].rating >= rating
          &&
          reviewsArray[i].rating < Math.floor(rating+1)
        ){
          gotRatings.push(reviewsArray[i]);
        }
    }

    console.log(gotRatings);
  }

 getReviewByRating(reviews,4); 

/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/

console.log("---------------Stretch 2: getLongestReviews---------------");

  function getLongestReviews(reviewsArray) {
    let longReviews = [];

    // console.log(reviewsArray);
    for(let i = 0; i < reviewsArray.length; i++){

      
      let feedbackLength = reviewsArray[i].feedback.split(" ").length;
      if(feedbackLength > 15){
        longReviews.push(reviewsArray[i]);
      }

      /*
      // if feedback is longer than 15 words
      reviewsArray[i].feedback.split(" ").length > 15
      longReviews.push(reviewsArray[i]);
      */


    }
    console.log(longReviews);

  }
  
  getLongestReviews(reviews);

/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/

console.log("---------------Stretch 3: carMaker---------------");


function carMaker() {
    
    
}
