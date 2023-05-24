const list = new Array(60000).join('1.1').split('.');
let index = 0;
 
function removeItemsFromList() {
  var item = list.pop();
  console.log(index);
  index++;

  if (item) {
    setTimeout(removeItemsFromList, 0);
  }
};
removeItemsFromList();