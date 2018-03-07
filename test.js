var test = require('tape');
var todoFunctions = require('./logic');


test('Example test', function(t) {
  t.pass();
  t.end();
});


// AddToDo
test('Test if pushes new number to array', function(t) {
  var actual = todoFunctions.addTodo([1, 2, 4], 1).length;
  var expected = 4;
  t.equal(actual, expected, 'should return array with added value');
  t.end();
});

test('Test if pushes new object to array', function(t) {
  var actual = todoFunctions.addTodo([1, 2, 4], {}).length;
  var expected = 4;
  t.equal(actual, expected, 'should return array with added object');
  t.end();
});

test('Test if description is added to todo entry', function(t) {
  var actual = todoFunctions.addTodo([], 'buy eggs')[0].description;
  var expected = 'buy eggs';
  t.deepEqual(actual, expected, 'should return description of new object');
  t.end();
});

test('Test if id is added to todo entry', function(t) {
  var actual = todoFunctions.addTodo([], 'buy eggs')[0].hasOwnProperty('id');
  var expected = true;
  t.equal(actual, expected, 'should return true');
  t.end();
});

test('Test if done is added to todo entry', function(t) {
  var actual = todoFunctions.addTodo([], 'buy eggs')[0].done;
  var expected = false;
  t.deepEqual(actual, expected, 'should return a boolean');
  t.end();
});


// DeleteToDo
test('Function returns clone of array', function(t){ 
  var actual = todoFunctions.deleteTodo([1,2], 5); 
  var expected = [1,2]; 
  t.deepEqual(actual, expected, 'should return a clone of array');
  t.end();
});

test('Function returns clone of array of objects', function(t){ 
  var actual = todoFunctions.deleteTodo([{1: "test"}, {2: "test2"}], 5); 
  var expected =  [{1: "test"}, {2: "test2"}]; 
  t.deepEqual(actual, expected, 'should return a clone of array of objects');
  t.end();
});

test('Function returns filtered array of objects', function(t){ 
  var actual = todoFunctions.deleteTodo([{id:1, description:"test"}, {id:2, description:"test2"}], 1); 
  var expected = [{id:2, description:"test2"}];    
  t.deepEqual(actual, expected, 'should returns filtered array of objects');
  t.end();
});

var z = [{id:1, description:"test"}, {id:2, description:"test2"}];
test('Function returns filtered array of objects', function(t){ 
  var actual = todoFunctions.deleteTodo(z, 1); 
  var expected = [{id:2, description:"test2"}];    
  t.deepEqual(actual, expected, 'should returns filtered array of objects');
  t.deepEqual(z, [{id:1, description:"test"}, {id:2, description:"test2"}], 'check that original array is unchanged'); 
  t.end();
});

//MarkToDo
test('Function returns an array of objects where obj with id = idToMark has done value toggled', function(t){ 
  var actual = todoFunctions.markTodo([{id:1, description:"test", done: false}, {id:2, description:"test2", done: false;}], 1); 
  var expected = [{id:1, description:"test", done: true}, {id:2, description:"test2", done: false;}];    
  t.deepEqual(actual, expected, 'should return array with obj with different done value');
  t.end();
});
