var test = require('tape');
var todoFunctions = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});


var state = [
  { id: -3, description: 'first todo' },
  { id: -2, description: 'second todo' },
  { id: -1, description: 'third todo' },
];

// AddToDo
test('Test', function(t) {
  var actual = todoFunctions.addTodo(state, 1);
  var expected = 1;
  t.equal(actual, expected, 'should return array of objects');
  t.end();
});

test('Example test', function(t) {
  t.pass();
  t.end();
});


// DeleteToDo
test('Example test', function(t) {
  t.pass();
  t.end();
});

test('Example test', function(t) {
  t.pass();
  t.end();
});