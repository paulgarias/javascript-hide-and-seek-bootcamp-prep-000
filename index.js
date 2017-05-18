function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target")
}

function deepestChild() {
  var allDivs = document.querySelectorAll("div");
  return allDivs[allDivs.length-1]
}

function increaseRankBy(n) {
  var listItems = document.querySelectorAll(".ranked-list");
  var firstList = listItems[0].children;
  var secondList = listItems[1].children;
  for (var i=0; i<firstList.length;i++){
	   firstList[i].innerHTML = (parseInt(firstList[i].innerHTML)+n).toString();
  }
  for (var i=0; i<secondList.length;i++){
	   secondList[i].innerHTML = (parseInt(secondList[i].innerHTML)+n).toString();
  }
}
