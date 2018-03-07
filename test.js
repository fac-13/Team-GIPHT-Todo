var test = require('tape');
var todoFunctions = require('./logic');


test('Example test', function(t) {
  t.pass();
  t.end();
});


// AddToDo


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





