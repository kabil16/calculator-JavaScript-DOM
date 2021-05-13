let table = document.createElement('table');
//table.setAttribute('border',1)
document.querySelector('body').appendChild(table);
//1st raw td
let tr = document.createElement('tr');
table.appendChild(tr);
let td = document.createElement('td');
td.className='display tdinput';
td.setAttribute('colspan',"3");
tr.appendChild(td);

// raw1 1 2 3

let tr1 = document.createElement('tr');
table.appendChild(tr1);

let td1 = document.createElement('td');
td1.className='display num';
td1.id ='one';
td1.setAttribute('type','button');
let one = document.createTextNode('1');
td1.appendChild(one)
tr1.appendChild(td1);

let td2 = document.createElement('td');
td2.className='display';
td2.id = 'two';
td2.setAttribute('type','button');
let two = document.createTextNode('2');
td2.appendChild(two)
tr1.appendChild(td2);

let td3 = document.createElement('td');
td3.className='display';
td3.id='three'
td3.setAttribute('type','button');
let three = document.createTextNode('3');
td3.appendChild(three)
tr1.appendChild(td3);

//3rd raw 4,5,6
let tr2 = document.createElement('tr');
table.appendChild(tr2);

let td4 = document.createElement('td');
td4.className='display';
td4.id='four';
td4.setAttribute('type','button');
let four = document.createTextNode('4');
td4.appendChild(four)
tr2.appendChild(td4);

let td5 = document.createElement('td');
td5.className='display';
td5.id='five';
td5.setAttribute('type','button');
let five = document.createTextNode('5');
td5.appendChild(five)
tr2.appendChild(td5);

let td6 = document.createElement('td');
td6.className='display';
td6.id='six';
td6.setAttribute('type','button');
let six = document.createTextNode('6');
td6.appendChild(six)
tr2.appendChild(td6);

//4th raw 7,8,9
let tr3 = document.createElement('tr');
table.appendChild(tr3);

let td7 = document.createElement('td');
td7.className='display';
td7.id='seven';
td7.setAttribute('type','button');
let seven = document.createTextNode('7');
td7.appendChild(seven)
tr3.appendChild(td7);

let td8 = document.createElement('td');
td8.className='display';
td8.id='eight';
td8.setAttribute('type','button');
let eight = document.createTextNode('8');
td8.appendChild(eight)
tr3.appendChild(td8);

let td9 = document.createElement('td');
td9.className='display';
td9.id='nine';
td9.setAttribute('type','button');
let nine = document.createTextNode('9');
td9.appendChild(nine)
tr3.appendChild(td9);

//5th raw 0 , . , +
let tr4 = document.createElement('tr');
table.appendChild(tr4);

let tdz = document.createElement('td');
tdz.className='display';
tdz.id='zero';
tdz.setAttribute('type','button');
let zero = document.createTextNode('0');
tdz.appendChild(zero)
tr4.appendChild(tdz);

let tdd = document.createElement('td');
tdd.className='display';
tdd.id='dot';
tdd.setAttribute('type','button');
let dot = document.createTextNode('.');
tdd.appendChild(dot)
tr4.appendChild(tdd);

let tdp = document.createElement('td');
tdp.className='display';
tdp.id='plus';
tdp.setAttribute('type','button');
let plus = document.createTextNode('+');
tdp.appendChild(plus)
tr4.appendChild(tdp);


//6th raw  - / %
let tr5 = document.createElement('tr');
table.appendChild(tr5);

let tdm = document.createElement('td');
tdm.className='display';
tdm.id='minus';
tdm.setAttribute('type','button');
let minus = document.createTextNode('-');
tdm.appendChild(minus)
tr5.appendChild(tdm);

let tdx = document.createElement('td');
tdx.className='display';
tdx.id='division';
tdx.setAttribute('type','button');
let division = document.createTextNode('/');
tdx.appendChild(division)
tr5.appendChild(tdx);

let tdo = document.createElement('td');
tdo.className='display';
tdo.id='odd';
tdo.setAttribute('type','button');
let odd = document.createTextNode('%');
tdo.appendChild(odd)
tr5.appendChild(tdo);

//7th raw log , #, = two rows
let tr6 = document.createElement('tr');
table.appendChild(tr6);

let log = document.createElement('td');
log.className='display';
log.id='log';
log.setAttribute('type','button');
let logdata = document.createTextNode('log');
log.appendChild(logdata);
tr6.appendChild(log);

let radic = document.createElement('td');
radic.className='display';
radic.id='radic';
radic.setAttribute('type','button');
let radicdata = document.createTextNode('√');
radic.appendChild(radicdata);
tr6.appendChild(radic);

let equall = document.createElement('td');
equall.className='display';
equall.id='equal';
equall.setAttribute('type','button');
equall.setAttribute('rowspan','2');
let equaldata = document.createTextNode('=');
equall.appendChild(equaldata);
tr6.appendChild(equall);

//8th raw AC two coloumns
let tr7 = document.createElement('tr');
table.appendChild(tr7);

let ac = document.createElement('td');
ac.className='display'
ac.id='ac';
ac.setAttribute('type','button');
ac.setAttribute('colspan','2');
let acdata = document.createTextNode('AC');
ac.appendChild(acdata);
tr7.appendChild(ac);



