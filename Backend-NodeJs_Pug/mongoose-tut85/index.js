// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shadyKart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we are connected successfully!")
});

const demoSchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()

demoSchema.methods.speak = function () {
  const greeting = this.name ? "My name is " + this.name : "I don't have a name";
  console.log(greeting);
}

const demo = mongoose.model('Tutorial', demoSchema);

const shade = new demo({ name: 'Shadab' });
console.log(shade.name); // 'Shadab'

shade.save(function (err, shade) {
  if (err) return console.error(err);
  shade.speak();
});
