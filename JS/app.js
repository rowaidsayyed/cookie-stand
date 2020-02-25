'use strict';

//Global variables
var workingTime =  ['06am','07am','08am','09am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm'];
var wrokinghours = workingTime.length;
var loca =[];


// Branch object using construction notation
function Branch(location,minCus,maxCus,avgCookie){
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookie = avgCookie;
  this.numCus = 0;
  this.total = 0;
  this.cookiesPurchased=[];
}
Branch.prototype.randCus = function(){
  this.numCus = randomCus(this.minCus,this.maxCus);
};
Branch.prototype.purchaseCookies = function(){
  var cookiesPurchasedEqu = Math.ceil(this.avgCookie * this.numCus);
  this.cookiesPurchased.push(cookiesPurchasedEqu);
  this.total += cookiesPurchasedEqu;
};

Branch.prototype.render = function(){
  for(var i =0; i<wrokinghours;i++ ){
    this.randCus();
    this.purchaseCookies();
  }loca.push(this);
};
/******************************************************************************************* */

//make instance from branch object
var seattle = new Branch('Seattle',23,65,6.3);
var tokyo = new Branch('Tokyo',3,24,1.2);
var dubai = new Branch('Dubai',11,38,3.7);
var paris = new Branch('Paris',20,38,2.3);
var lima = new Branch('Lima',2,16,4.6);
//var amman = new Branch('Amman',2,30,1.2);

// call render method for each object
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
//amman.render();

//var loca = [seattle,tokyo,dubai,paris,lima,amman];
var mainEl = document.getElementById('main');
var divEl = document.createElement('div');
mainEl.appendChild(divEl);
var table =document.createElement('table');
mainEl.appendChild(table);

//Display Data on the Table
function headerhour(){
  var rowTable =document.createElement('tr');
  table.appendChild(rowTable);
  var headerTable = document.createElement('thead');
  rowTable.appendChild(headerTable);
  var headTable =document.createElement('th');
  headerTable.appendChild(headTable);
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


function bodycont(){
  var totalLocation = 0;
  var rowTable =document.createElement('tr');
  table.appendChild(rowTable);
  for(var q=0;q<loca.length;q++){
    rowTable =document.createElement('tr');
    table.appendChild(rowTable);
    rowTable.textContent = loca[q].location;
    for(var k=0;k<workingTime.length;k++){
      var dataTable =document.createElement('td');
      rowTable.appendChild(dataTable);
      dataTable.textContent = loca[q].cookiesPurchased[k];
    }
    dataTable =document.createElement('td');
    rowTable.appendChild(dataTable);
    dataTable.textContent = loca[q].total;
    totalLocation += loca[q].total;
    console.log(totalLocation);
  }
}

function footerTable(){
  var totalHour = 0;
  var totalAll = 0 ;
  var rowTable =document.createElement('tr');
  table.appendChild(rowTable);
  rowTable.textContent = 'Total';
  for(var q=0;q<workingTime.length;q++){
    for(var k=0;k<loca.length;k++){
      totalHour += loca[k].cookiesPurchased[q];
    }
    var dataTable =document.createElement('td');
    rowTable.appendChild(dataTable);
    dataTable.textContent = totalHour;
    totalAll = totalHour + totalAll;
    totalHour = 0;
  }
  dataTable =document.createElement('td');
  rowTable.appendChild(dataTable);
  dataTable.textContent = totalAll;
}



headerhour();
bodycont();
footerTable();



function randomCus(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
