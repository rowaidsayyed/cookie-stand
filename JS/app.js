'use strict';

//Global variables
var workingTime =  ['06am','07am','08am','09am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm'];
var loca = [];


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
  var cookiesPurchasedEqu = Math.floor(this.avgCookie * this.numCus);
  this.cookiesPurchased.push(cookiesPurchasedEqu);
  this.total += cookiesPurchasedEqu;
};

Branch.prototype.render = function(){
  for(var i =0; i<workingTime.length;i++ ){
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


var mainEl = document.getElementById('tableDiv');
var table =document.createElement('table');
mainEl.appendChild(table);

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


function bodycont(){
  var totalLocation = 0;
  var rowTable =document.createElement('tr');
  var bodyTable = document.createElement('tbody');
  bodyTable.appendChild(rowTable);
  table.appendChild(bodyTable);
  for(var q=0;q<loca.length;q++){
    rowTable =document.createElement('tr');
    bodyTable.appendChild(rowTable);
    var dataTable =document.createElement('td');
    rowTable.appendChild(dataTable);
    dataTable.textContent = loca[q].location;
    for(var k=0;k<workingTime.length;k++){
      dataTable =document.createElement('td');
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
  var dataTable =document.createElement('td');
  rowTable.appendChild(dataTable);
  dataTable.textContent = 'Total';
  for(var q=0;q<workingTime.length;q++){
    for(var k=0;k<loca.length;k++){
      totalHour += loca[k].cookiesPurchased[q];
    }
    dataTable =document.createElement('td');
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

//map(); // to show names of the branches below the map at index.html page


function randomCus(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function map(){
  var mapEl = document.getElementsByClassName('classmap');
  console.log(mapEl);
  for(var y=0; y<loca.length;y++){
    var liEl = document.createElement('li');
    liEl.className = 'noli';
    console.log(liEl);
    liEl.textContent = loca[y].location;
    mapEl.appendChild(liEl);
  }
}



