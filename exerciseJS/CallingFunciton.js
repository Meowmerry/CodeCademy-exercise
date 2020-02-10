function sayThanks(){
    console.log("Thank you for your purchase! We appreciate your business." )
}
sayThanks(); //Thank you for your purchase! We appreciate your business.

//========================================================

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');  //Thank you for your purchase Cole! We appreciate your business.

//========================================================
  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
  makeShoppingList();
// Remember to buy milk
// Remember to buy bread
// Remember to buy eggs

//========================================================
function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }
  console.log(rectangleArea(10, 20)) // 200

  // ============================================
  function monitorCount(rows, columns){
    return rows * columns
  }
  const numOfMonitors = monitorCount(5,4)
  console.log(numOfMonitors) //20