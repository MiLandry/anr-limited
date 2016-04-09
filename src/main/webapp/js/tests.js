module("ok assertions ")
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "a passing test", function( assert ) {
	  assert.ok( true, "passning test passed" );
	});


QUnit.test( "a passing test", function( assert ) {
	  assert.ok(true, "passing test passed" );
	});


QUnit.test( "a failing test", function( assert ) {
	  assert.ok( false, "failing test failed" );
	});


module("equal assertions");

test("equal pass", function() {
	equal( 1 + 1, 2, "equal pass");
});

test("equal fail", function() {
	equal( 1 + 1, 3, "equal fail");
});

module("deep equal assertions");

test("deep equal pass", function() {
	deepEqual([1,2], [1,2]);
});


test("deep equal fail", function() {
	deepEqual([1,2], [1,4]);
});

module("other");
test("multiple assertions", function() {
	equal( 1 + 1, 2, "equal pass");
	equal( 2 + 2, 4, "equal pass");
	equal( 1 + 1, 3, "FAIL!!!!");
});
