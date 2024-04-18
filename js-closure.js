const NEG_INF = -1000000;
function createPop(givenArray, item) {
  const title = document.createElement('h3');
  let currIndex = NEG_INF;
  let check = false;
  function find(array, givenItem){
    array.forEach((element,index) => {
      if(element==givenItem){
        currIndex=index;
        check = true;
      }
    });
  }
  return function(){
    find(givenArray,item);
    let index = currIndex;
    let isPresent = check;
    if(isPresent){
      document.getElementById('root').append(title);
      title.innerHTML+=`The item is present and is at index ${index}`;
    }
    else{
      document.getElementById('root').append(title);
      title.innerHTML+=`The item is not present and is at index ${index}`;
    }
  };
}
const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;
const pop = createPop(arrayOfNumbers,itemToSearch);
pop();