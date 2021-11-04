db.people.find()
db.people.count()
db.people.find( {state: "Arizona"})
db.people.find( {$and:[{state: "Arizona"}, {gender: 'Male'}]})
db.people.find( {$or:[{state: "Arizona"}, {state: 'New Mexico'}]})
db.people.find({age: {$lte: 40}})
db.people.find({$and:[{state: "Florida"}, {gender: "Female"}, {age: {$gte: 40}}, {age: {$lte: 45}}]})
db.people.find({first_name: /^H/})
db.people.find({state: "Michigan"}).sort({first_name: 1});
db.people.find({$or:[{state: "Virginia"}, {first_name: "Virginia"}]})
db.people.find({age: {$lte: 30}}, {email: 0, gender: false, age: false, state: false, children: false}, {first_name:1, last_name:1})
db.people.find({state: "Montana"},{first_name: 1, last_name: 1, gender: 1, children: 1}, {age:0})
db.people.find({email: /edu$/}, {first_name: false, last_name: false, gender: false, age: false, state: false, children: false})


Challenges:

14. db.people.count({ 'children.age': { $lte: 3} } ) or db.people.count({children: {$elemMatch: {age: {$lte: 3}}}})

15. db.people.count({"children": { $size: 0}})

16. db.people.count({ 'children.age': { $gt: 0} } )


Part 2:

1.db.people.insertOne({ first_name:"Alfie", last_name:"Vader", email:"AlfieAndMe@nick.com", gender:"Non-binary", age:32, state:"Montana", children:[]})

2.db.people.insertOne({ first_name:"Renee", last_name:"Meyers", email:"MyTwoKids@life.com", gender:"Female", age:40, state:"Maine", children:[{"name":"Bryan","age":13},{"name":"Kurt","age":12}]})

3. db.people.updateOne ({ first_name: "Clarence"}, {$set: { state: "South Dakota"}})

4. db.people.updateOne ( { first_name: "Rebecca"}, {$unset: { email: 1}})

5. db.people.updateMany( {state: "Missouri"}, {$inc: { age: 1}})

6.db.people.replaceOne( { first_name: "Jerry", last_name: "Baker-Mendez", email:
"jerry@classic.ly", gender:"Male", age: 28, state: "Vermont",
"children": [ {name: "Alan", age: 18}, { name: "Jenny", age: 3 }] })

7. db.orders.deleteOne( { "_id" : ObjectId("617b4c28ec714d2a8c60cdf6") } );

8. db.orders.deleteMany( { "email" : null } );

9. db.submissions.insertMany([
{"title": "The River Bend", "upvotes": 10, "downvotes": 2, "artist": "617b4c28ec714d2a8c60cd9f"},
{"title": "Nine Lives", "upvotes": 7, "downvotes": 0, "artist": "617b4c28ec714d2a8c60cdcd"},
{"title": "Star Bright", "upvotes": 19, "downvotes": 3, "artist": "617b4c28ec714d2a8c60ce50"},
{"title": "Why Like This?", "upvotes": 1, "downvotes": 5, "artist": "617b4c28ec714d2a8c60cdd6"},
{"title": "Non Sequitur", "upvotes": 11, "downvotes": 1, "artist": "617b4c28ec714d2a8c60cd9d"}])

10. db.submissions.updateOne( { "_id" : ObjectId("61809e4caec9fa41f5d21ce0")}, {$inc: { upvotes: 2}})

11. db.submissions.aggregate([{$match: {upvotes: {$gte: 10}}}, { $addFields: { round2:  "true" }}])	

12. db.people.updateOne({first_name: "Helen", last_name: "Clark"}. {$push: {children: {name: "Tom", age: 0}}})

13. dp.people.updateOne({first_name: "Joan", last_name: "Bishop", "children.3.name":"Cathrine"}, {$set: {"children.3.name": "Cat"}, $inc: {"children.3.age":1}})

14. db.submissions.find({ $expr: { $gt: [ "$downvotes" , "$upvotes" ] } });

