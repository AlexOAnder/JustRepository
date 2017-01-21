// Created by AlexOAnder

// Very useful function, when we need copy all values and fields from object to object 
// and have ability to change them separately

function cloneObject(obj) {
  var key, clone = {};
  for (key in obj)
    if (obj.hasOwnProperty(key)) clone[key] = obj[key];
  return clone;
}

// Here is example of usage 
// Here we trying to change left click of mouse to middle one
// But it's only a illusion because event have neccessary field which indicates about middle button, but behavior not changed at all
$(".SomeJajaButton").on("click", function(e) {
  var newE = cloneObject(e);
  // create copy of mouse event
  e.preventDefault();
  newE.button = 1;
  newE.which = 2;
  newE.originalEvent.button = 1;
  newE.originalEvent.which = 2;
  newE.originalEvent.defaultPrevented = false;
  newE.isDefaultPrevented = false;
  // try to change mouse click from left to middle one
  // and that will not affect original event (e)

  console.log("newE:" + newE.button);
  console.log("e:" + e.button);
  console.log(newE.button === e.button);

  e = new MouseEvent("click", newE);
  console.log("Click! And now its a middle mouse button");
  logMouse(e); // тут евент будет уже с другими значениями button и which, но все остальные поля будут сохранены благодаря копированию объекта
  return false;
});
// show in console about mouse event
function logMouse(e) {
  var evt = e.type;
  // why 11 - because we need only mouse eventTypes
  while (evt.length < 11) evt += ' ';
  console.log(evt + " which=" + e.which + " button=" + e.button);
  return false;
}
