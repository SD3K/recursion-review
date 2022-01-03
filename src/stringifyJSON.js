// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//contains object brackets in string
//double quotes for key value
//functions/undefined = null
//input: object
//output: string

var stringifyJSON = function(obj) {
  // your code goes here
  var returnValue = '';
  if (typeof obj === 'undefined' || typeof obj === 'function' || obj === null) {
    returnValue += 'null';
  }
  if (typeof obj === 'string') {
    returnValue += '\"' + obj + '\"';
  }
  if (typeof obj === 'number') {
    returnValue += obj;
  }
  if (typeof obj === 'boolean') {
    if (obj) {
      returnValue += 'true';
    } else {
      returnValue += 'false';
    }
  }
  if (Array.isArray(obj)) {
    returnValue += '[';
    for (var i = 0; i < obj.length; i++) {
      returnValue += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        returnValue += ',';
      }
    }
    returnValue += ']';
  } else if (typeof obj === 'object' && obj !== null) {
    if (Object.keys(obj).length === 0) {
      returnValue += '{}';
    } else {
      returnValue += '{';
      for (var key in obj) {
        if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
          continue;
        }
        returnValue += stringifyJSON(key);
        returnValue += ':';
        returnValue += stringifyJSON(obj[key]);
        returnValue += ',';
      }
      returnValue = returnValue.slice(0, returnValue.length - 1);
      returnValue += '}';
    }
  }
  if (returnValue === '}') {
    returnValue = '{}';
  }
  return returnValue;
};
