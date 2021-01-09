#CRUD operation in MongoDB

#Inserting data in mongo db - tut81

use shadyKart
db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name: "Moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 598}, {name: "Realme 80s", price: 129000, rating: 2.5, qty: 633, sold: 98, isBig: true}])


#Searching for data in mongo db - tut82
use shadyKart

##This query will return all the objects with rating equal to 3.5

db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})
db.items.find({rating: {$gt: 3.5}})

##And operator

db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

##OR operator

db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 
})

##only returns one column rating

db.items.find({rating: {$gt: 3.5}}, {rating: 1})

##this will just return 2 column rating and qty

db.items.find({rating: {$gt: 3.5}}, {rating: 1, qty:1})

#Deletion - tut83

show dbs 
use shadyKart
show collections

db.items.find({price: 22000})

##Deleting items from the Mongo Database

db.items.deleteOne({price: 22000})

##deleteOne will delete the matching document entry and will delete the first entry in case of multi document match

db.items.deleteMany({price: 129000})

#Updation - tut84

show dbs 
use shadyKart
show collections

db.items.find()
db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})
db.items.find()
db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})
