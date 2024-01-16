require('dotenv').config();
const mongoose = require('mongoose')
// connecting mongoose
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
// create person schema
let Person;
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name:{type:String, required:true},
  age:Number,
  favoriteFoods:[String]
})
// store model in variable called Person
Person = mongoose.model("Person",personSchema)
const createAndSavePerson = (done) => {
  let kyle = new Person({
    name:'Kyle',
    age:50,
    favoriteFoods:['burger','chicken']
  })
  kyle.save((err,data)=>{
    if(err){
      console.log('you fucked up')
    }
    else{
      done(null,data)
    }
  })
};

// create an array of people that confirm the types from Person Model
const arrayOfPeople = [
  {name: "Kyle Zu",age: 22,favoriteFoods:["hamburger","salad"]},
  {name: "Sally Ho",age: 30,favoriteFoods:["salmon","watermelon","chicken"]},
  {name: "Mike Gains",age: 42,favoriteFoods:["duck","ham","spinach"]}
]

// create many people
const createManyPeople = (arrayOfPeople,done) => {
  Person.create(arrayOfPeople,(err,initiateCreation)=>{
    return err ? console.log(err) : done(null,initiateCreation)
  })
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
