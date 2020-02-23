'use strict';
var workingTime =  ['06am:','07am:','08am:','09am:','10am:','11am:','12pm:','01pm:','02pm:','03pm:','04pm:','05pm:','06pm:','07pm:'];
var wrokinghours = 14;

var seattle = {
  location : 'Seattle',
  minCus : 23,
  maxCus : 65,
  avgCookie : 6.3,
  numCus : 0,
  total : 0,
  cookiesPurchased  : [],
  randCus : function(){
    this.numCus = randomCus(this.minCus,this.maxCus);
  },
  purchaseCookies : function(){
    var cookiesPurchasedEqu = Math.ceil(this.avgCookie * this.numCus);
    this.cookiesPurchased.push(cookiesPurchasedEqu);
    this.total += cookiesPurchasedEqu;
  },
  render : function(){
    for(var i =0; i<wrokinghours;i++ ){
      console.log('i ',i);
      this.randCus();
      console.log('number of customers ', this.numCus);
      this.purchaseCookies();
      console.log('cookies Purchased ', this.cookiesPurchased);
      console.log('workingTime ', workingTime);
    }
    var mainEl = document.getElementById('main');
    console.log(mainEl);
    var h1El = document.createElement('h2');
    var divEl = document.createElement('div');
    console.log(divEl);
    var ulEl = document.createElement('ul');
    console.log(ulEl);
    mainEl.appendChild(h1El);
    h1El.textContent = `${this.location}`;
    mainEl.appendChild(divEl);
    divEl.appendChild(ulEl);
    for(var j=0; j<wrokinghours;j++){
      var liEl = document.createElement('li');
      liEl.textContent=`${workingTime[j]}  ${this.cookiesPurchased[j]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTEl = document.createElement('li');
    ulEl.appendChild(liTEl);
    liTEl.textContent=`Total: ${this.total} cookies`;
  }
};

var tokyo = {
  location : 'Tokyo',
  minCus : 3,
  maxCus : 24,
  avgCookie : 1.2,
  numCus : 0,
  total : 0,
  // wrokinghours: 14,
  cookiesPurchased  : [],
  // workingTime : ['06am:','07am:','08am:','09am:','10am:','11am:','12pm:','01pm:','02pm:','03pm:','04pm:','05pm:','06pm:','07pm:'],
  randCus : function(){
    this.numCus = randomCus(this.minCus,this.maxCus);
  },
  purchaseCookies : function(){
    var cookiesPurchasedEqu = Math.ceil(this.avgCookie * this.numCus);
    this.cookiesPurchased.push(cookiesPurchasedEqu);
    this.total += cookiesPurchasedEqu;
  },
  render : function(){
    for(var i =0; i<wrokinghours;i++ ){
      console.log('i ',i);
      this.randCus();
      console.log('number of customers ', this.numCus);
      this.purchaseCookies();
      console.log('cookies Purchased ', this.cookiesPurchased);
      console.log('workingTime ', workingTime);
    }
    var mainEl = document.getElementById('main');
    console.log(mainEl);
    var h1El = document.createElement('h2');
    var divEl = document.createElement('div');
    console.log(divEl);
    var ulEl = document.createElement('ul');
    console.log(ulEl);
    mainEl.appendChild(h1El);
    h1El.textContent = `${this.location}`;
    mainEl.appendChild(divEl);
    divEl.appendChild(ulEl);
    for(var j=0; j<wrokinghours;j++){
      var liEl = document.createElement('li');
      liEl.textContent=`${workingTime[j]}  ${this.cookiesPurchased[j]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTEl = document.createElement('li');
    ulEl.appendChild(liTEl);
    liTEl.textContent=`Total: ${this.total} cookies`;
  }
};

var dubai = {
  location : 'Dubai',
  minCus : 3,
  maxCus : 24,
  avgCookie : 1.2,
  numCus : 0,
  total : 0,
  //wrokinghours: 14,
  cookiesPurchased  : [],
  //workingTime : ['06am:','07am:','08am:','09am:','10am:','11am:','12pm:','01pm:','02pm:','03pm:','04pm:','05pm:','06pm:','07pm:'],
  randCus : function(){
    this.numCus = randomCus(this.minCus,this.maxCus);
  },
  purchaseCookies : function(){
    var cookiesPurchasedEqu = Math.ceil(this.avgCookie * this.numCus);
    this.cookiesPurchased.push(cookiesPurchasedEqu);
    this.total += cookiesPurchasedEqu;
  },
  render : function(){
    for(var i =0; i<wrokinghours;i++ ){
      console.log('i ',i);
      this.randCus();
      console.log('number of customers ', this.numCus);
      this.purchaseCookies();
      console.log('cookies Purchased ', this.cookiesPurchased);
      console.log('workingTime ', workingTime);
    }
    var mainEl = document.getElementById('main');
    console.log(mainEl);
    var h1El = document.createElement('h2');
    var divEl = document.createElement('div');
    console.log(divEl);
    var ulEl = document.createElement('ul');
    console.log(ulEl);
    mainEl.appendChild(h1El);
    h1El.textContent = `${this.location}`;
    mainEl.appendChild(divEl);
    divEl.appendChild(ulEl);
    for(var j=0; j<wrokinghours;j++){
      var liEl = document.createElement('li');
      liEl.textContent=`${workingTime[j]}  ${this.cookiesPurchased[j]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTEl = document.createElement('li');
    ulEl.appendChild(liTEl);
    liTEl.textContent=`Total: ${this.total} cookies`;
  }
};

var paris = {
  location : 'Paris',
  minCus : 3,
  maxCus : 24,
  avgCookie : 1.2,
  numCus : 0,
  total : 0,
  //wrokinghours: 14,
  cookiesPurchased  : [],
  //workingTime : ['06am:','07am:','08am:','09am:','10am:','11am:','12pm:','01pm:','02pm:','03pm:','04pm:','05pm:','06pm:','07pm:'],
  randCus : function(){
    this.numCus = randomCus(this.minCus,this.maxCus);
  },
  purchaseCookies : function(){
    var cookiesPurchasedEqu = Math.ceil(this.avgCookie * this.numCus);
    this.cookiesPurchased.push(cookiesPurchasedEqu);
    this.total += cookiesPurchasedEqu;
  },
  render : function(){
    for(var i =0; i<wrokinghours;i++ ){
      console.log('i ',i);
      this.randCus();
      console.log('number of customers ', this.numCus);
      this.purchaseCookies();
      console.log('cookies Purchased ', this.cookiesPurchased);
      console.log('workingTime ', workingTime);
    }
    var mainEl = document.getElementById('main');
    console.log(mainEl);
    var h1El = document.createElement('h2');
    var divEl = document.createElement('div');
    console.log(divEl);
    var ulEl = document.createElement('ul');
    console.log(ulEl);
    mainEl.appendChild(h1El);
    h1El.textContent = `${this.location}`;
    mainEl.appendChild(divEl);
    divEl.appendChild(ulEl);
    for(var j=0; j<wrokinghours;j++){
      var liEl = document.createElement('li');
      liEl.textContent=`${workingTime[j]}  ${this.cookiesPurchased[j]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTEl = document.createElement('li');
    ulEl.appendChild(liTEl);
    liTEl.textContent=`Total: ${this.total} cookies `;
  }
};

var lima = {
  location : 'Lima',
  minCus : 3,
  maxCus : 24,
  avgCookie : 1.2,
  numCus : 0,
  total : 0,
  //wrokinghours: 14,
  cookiesPurchased  : [],
  //workingTime : ['06am:','07am:','08am:','09am:','10am:','11am:','12pm:','01pm:','02pm:','03pm:','04pm:','05pm:','06pm:','07pm:'],
  randCus : function(){
    this.numCus = randomCus(this.minCus,this.maxCus);
  },
  purchaseCookies : function(){
    var cookiesPurchasedEqu = Math.ceil(this.avgCookie * this.numCus);
    this.cookiesPurchased.push(cookiesPurchasedEqu);
    this.total += cookiesPurchasedEqu;
  },
  render : function(){
    for(var i =0; i<wrokinghours;i++ ){
      console.log('i ',i);
      this.randCus();
      console.log('number of customers ', this.numCus);
      this.purchaseCookies();
      console.log('cookies Purchased ', this.cookiesPurchased);
      console.log('workingTime ', workingTime);
    }
    var mainEl = document.getElementById('main');
    console.log(mainEl);
    var h1El = document.createElement('h2');
    var divEl = document.createElement('div');
    console.log(divEl);
    var ulEl = document.createElement('ul');
    console.log(ulEl);
    mainEl.appendChild(h1El);
    h1El.textContent = `${this.location}`;
    mainEl.appendChild(divEl);
    divEl.appendChild(ulEl);
    for(var j=0; j<wrokinghours;j++){
      var liEl = document.createElement('li');
      liEl.textContent=`${workingTime[j]}  ${this.cookiesPurchased[j]} cookies`;
      ulEl.appendChild(liEl);
    }
    var liTEl = document.createElement('li');
    ulEl.appendChild(liTEl);
    liTEl.textContent=`Total: ${this.total} cookies`;
  }
};





function randomCus(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
