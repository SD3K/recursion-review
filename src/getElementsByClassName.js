// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


//input = string
//output = "array"


var getElementsByClassName = function(className) {
  var returnValue = [];
  var body = document.body;

  // take 2
  var insideFunction = function (element) {
    if (element.classList !== undefined && element.classList.contains(className)) {
      returnValue.push(element);
    }
    for (var i = 0; i < element.childNodes.length; i++) {
      insideFunction(element.childNodes[i]);
    }
  };
  insideFunction(body);
  return returnValue;
};

// iterate through document body to see if element.classList contains search parameter
// for (var i = 0; i < body.childNodes.length; i++) {
//   var current = body.childNodes[i];
//   // if current element has child node then run function recursively on child node
//   if (current.childNodes) {
//     current.forEach(getElementsByClassName(className));
//   }
//   if (current.classList && current.classList.contains(className)) {
//     returnValue.push(current);
//   }
// }

// return returnValue;