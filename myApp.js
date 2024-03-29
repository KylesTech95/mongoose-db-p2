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
  Person.find({name:personName},(err,personFound)=>{
    return err ? console.log(err) : done(null,personFound)
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},(err,data)=>{
    return err ? console.log(err) : done(null,data)
  })
};

const findPersonById = (personId, done) => {
  let findId = {_id:personId};
  Person.findById(findId,(err,found)=>{
    return err ? console.log(err) : done(null,found)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({_id:personId},(err,personFound)=>{
    if(err){
      console.log(err)
    }
    else{
      personFound.favoriteFoods.push(foodToAdd)
      personFound.save((err,saved)=>{
        return err ? console.log(err) : done(null,saved);
      })
      
    }
  })
};

const findAndUpdate = (personName, done) => {
  const options = { new: true }
  const ageToSet = 20;
  Person.findOneAndUpdate({name:personName},{age:ageToSet},options,(err,updated)=>{
    return err ? console.log(err) : done(null,updated)
  },) 
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove({_id:personId},(err,removed)=>{
    return err ? console.log(err) : done(null,removed)
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name:nameToRemove},(err,personDeleted)=>{
    return err ? console.log(err) : done(null,personDeleted)
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods:foodToSearch})
        .sort({name: 1})
        .limit(2)
        .select({age:0})
        .exec(function(err,chained){
          return err ? console.log(err) : done(null,chained)
        })
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
