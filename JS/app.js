'use strict';

//Global variables
var workingTime =  ['06am','07am','08am','09am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm'];
var loca = [];
var mainEl = document.getElementById('tableDiv');
var table =document.createElement('table');
mainEl.appendChild(table);
var bodyTable = document.createElement('tbody');
var rowTable =document.createElement('tr');

// Branch object using construction notation
function Branch(location,minCus,maxCus,avgCookie){
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookie = avgCookie;
  this.numCus = 0;
  this.total = 0;
  this.cookiesPurchased=[];
  loca.push(this);
  this.purchaseCookies();
}
Branch.prototype.purchaseCookies = function(){
  for(var i = 0;i<workingTime.length;i++){
    this.numCus = randomCus(this.minCus,this.maxCus);
    var cookiesPurchasedEqu = Math.floor(this.avgCookie * this.numCus);
    this.cookiesPurchased.push(cookiesPurchasedEqu);
    this.total += cookiesPurchasedEqu;
  }
};

Branch.prototype.render = function(){
  // eslint-disable-next-line no-unused-vars
  var totalLocation = 0;
  var rowTable =document.createElement('tr');
  bodyTable.appendChild(rowTable);
  table.appendChild(bodyTable);
  var dataTable =document.createElement('td');
  rowTable.appendChild(dataTable);
  dataTable.textContent = this.location;
  for(var k=0;k<workingTime.length;k++){
    dataTable =document.createElement('td');
    rowTable.appendChild(dataTable);
    dataTable.textContent = this.cookiesPurchased[k];
  }
  dataTable =document.createElement('td');
  rowTable.appendChild(dataTable);
  dataTable.textContent = this.total;
  totalLocation += this.total;
  // console.log(totalLocation);
};
/***********************************New objects and display to table ************************************************* */

//make instance from branch object
new Branch('Seattle',23,65,6.3);
new Branch('Tokyo',3,24,1.2);
new Branch('Dubai',11,38,3.7);
new Branch('Paris',20,38,2.3);
new Branch('Lima',2,16,4.6);


headerhour();

// call render method for each object
for(var i = 0;i<loca.length;i++){
  loca[i].render();
}

footerTable(rowTable);

/************************************ADD Branch Form***************************** */
var branchForm = document.getElementById('branchForm');
branchForm.addEventListener('submit',updateTable);

function updateTable(e){
  e.preventDefault();
  var branchName = e.target.name.value;
  var minNum = e.target.min.value;
  var maxNum = e.target.max.value;
  var avgNum = e.target.avg.value;
  var newBranch = new Branch(branchName,minNum,maxNum,avgNum);
  newBranch.render();
  table.removeChild(rowTable);
  rowTable =document.createElement('tr');
  footerTable(rowTable);
  alert('your branch is submitted'); // task for me :change it to friendly UI
  // var imageEl = document.createElement('img');
  // mainEl.appendChild(imageEl);
  // imageEl.className = 'pop';
  // imageEl.src='https://freesvg.org/img/liakad_piranha.png';

}

/************************************End of ADD Branch Form *************************** */


/*********************stretch goal************************ */
var changeForm = document.getElementById('changeForm');
changeForm.addEventListener('submit',modifyTable);

function modifyTable(e){
  e.preventDefault();
  var modifyBranchName = e.target.modifyname.value;
  var modifyHour = e.target.modifyhour.value;
  var newData =  parseInt(e.target.modifydata.value);
  var cell = document.getElementsByTagName('td');
  for(var i = 0;i<loca.length;i++){
    for(var j=0;j<workingTime.length;j++){
      if(modifyBranchName === loca[i].location){
        if(modifyHour === workingTime[j]){
          cell[(i*(workingTime.length+2)+(j+1))].textContent = newData;
          loca[i].cookiesPurchased[j]=newData;
          loca[i].total =0;
          for(var q = 0;q<workingTime.length;q++){
            loca[i].total += loca[i].cookiesPurchased[q];
          }
          cell[(i*(workingTime.length+2)+(j+((workingTime.length+1)-j)))].textContent=loca[i].total;
        }
      }
    }
    table.removeChild(rowTable);
    rowTable =document.createElement('tr');
    footerTable(rowTable);
  }
}


/********************* functions*********************** */


//Display Data to the Table
function headerhour(){
  var headerTable = document.createElement('thead');
  var rowTable =document.createElement('tr');
  table.appendChild(headerTable);
  headerTable.appendChild(rowTable);
  var headTable =document.createElement('th');
  rowTable.appendChild(headTable);
  headTable.textContent = '';
  for(var i=0;i<workingTime.length;i++){
    headTable =document.createElement('th');
    rowTable.appendChild(headTable);
    headTable.textContent = workingTime[i];
  }
  headTable =document.createElement('th');
  rowTable.appendChild(headTable);
  headTable.textContent = 'Location Total';
}


function footerTable(x){
  var totalHour = 0;
  var totalAll = 0 ;
  table.appendChild(x);
  var dataTable =document.createElement('td');
  x.appendChild(dataTable);
  dataTable.textContent = 'Total';
  for(var q=0;q<workingTime.length;q++){
    for(var k=0;k<loca.length;k++){
      totalHour += loca[k].cookiesPurchased[q];
    }
    dataTable =document.createElement('td');
    x.appendChild(dataTable);
    dataTable.textContent = totalHour;
    totalAll = totalHour + totalAll;
    totalHour = 0;
  }
  dataTable =document.createElement('td');
  x.appendChild(dataTable);
  dataTable.textContent = totalAll;
}


function randomCus(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
