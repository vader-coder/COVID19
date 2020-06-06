var totalCasesArr = [
  ['Days Since December 31, 2020', 'Cases'],
  ['0', 0], ['1', 0], ['2', 0], ['3', 0], ['4', 0], ['5', 0], ['6', 0], ['7', 0], ['8', 0], ['9', 0], ['10', 0],
 ['11', 0], ['12', 0], ['13', 0], ['14', 0], ['15', 0], ['16', 0], ['17', 0], ['18', 0], ['19', 0], ['20', 0],
 ['21', 1], ['22', 1], ['23', 1], ['24', 1], ['25', 2], ['26', 2], ['27', 5], ['28', 5], ['29', 5], ['30', 5],
 ['31', 6], ['32', 7], ['33', 8], ['34', 11], ['35', 11], ['36', 11], ['37', 12], ['38', 12], ['39', 12], ['40', 12],
 ['41', 12], ['42', 13], ['43', 13], ['44', 14], ['45', 15], ['46', 15], ['47', 15], ['48', 15], ['49', 15], ['50', 15],
 ['51', 15], ['52', 16], ['53', 35], ['54', 35], ['55', 35], ['56', 53], ['57', 53], ['58', 59], ['59', 60], ['60', 66],
 ['61', 69], ['62', 89], ['63', 103], ['64', 125], ['65', 159], ['66', 233], ['67', 338], ['68', 433], ['69', 554], ['70', 754],
 ['71', 1025], ['72', 1312], ['73', 1663], ['74', 2174], ['75', 2951], ['76', 3774], ['77', 4661], ['78', 6427], ['79', 9415],
 ['80', 14250], ['81', 19624], ['82', 26747], ['83', 35206], ['84', 46442], ['85', 55231], ['86', 69194], ['87', 85991],
 ['88', 104686], ['89', 124665], ['90', 143025], ['91', 164620], ['92', 189618], ['93', 216721], ['94', 245540],
 ['95', 277965], ['96', 312237], ['97', 337635], ['98', 368196], ['99', 398809], ['100', 432132], ['101', 466033],
 ['102', 501560], ['103', 529951], ['104', 557571], ['105', 582594], ['106', 609516], ['107', 639664], ['108', 671331],
 ['109', 702164], ['110', 735086], ['111', 759687], ['112', 787752], ['113', 825041], ['114', 842629], ['115', 869172],
 ['116', 890524], ['117', 939053], ['118', 965910], ['119', 988451], ['120', 1012583], ['121', 1039909], ['122', 1069826],
 ['123', 1103781], ['124', 1133069], ['125', 1158041], ['126', 1180634], ['127', 1204475], ['128', 1228603], ['129', 1256972],
 ['130', 1283929], ['131', 1309541], ['132', 1329799], ['133', 1347916], ['134', 1369964], ['135', 1390746], ['136', 1417889],
 ['136', 1443397], ['137', 1467884], ['138', 1486757], ['139', 1508598], ['140', 1528568], ['141', 1551853], ['142', 1577287],
 ['143', 1601434], ['144', 1622670], ['145', 1643238], ['146', 1662302], ['147', 1681212], ['148', 1699933], ['149', 1721750],
 ['150', 1747087]
];

var newCasesArr = [
            ['Days Since December 31, 2020', 'New Cases'],
  ['0', 0], ['1', 0], ['2', 0], ['3', 0], ['4', 0], ['5', 0], ['6', 0], ['7', 0], ['8', 0], ['9', 0],
['10', 0], ['11', 0], ['12', 0], ['13', 0], ['14', 0], ['15', 0], ['16', 0], ['17', 0], ['18', 0], ['19', 0],
['20', 0], ['21', 1], ['22', 0], ['23', 0], ['24', 0], ['25', 1], ['26', 0], ['27', 3], ['28', 0], ['29', 0],
['30', 0], ['31', 1], ['32', 1], ['33', 1], ['34', 3], ['35', 0], ['36', 0], ['37', 1], ['38', 0], ['39', 0],
['40', 0], ['41', 0], ['42', 1], ['43', 0], ['44', 1], ['45', 1], ['46', 0], ['47', 0], ['48', 0], ['49', 0],
['50', 0], ['51', 0], ['52', 1], ['53', 19], ['54', 0], ['55', 0], ['56', 18], ['57', 0], ['58', 6], ['59', 1],
['60', 6], ['61', 3], ['62', 20], ['63', 14], ['64', 22], ['65', 34], ['66', 74], ['67', 105], ['68', 95], ['69', 121],
['70', 200], ['71', 271], ['72', 287], ['73', 351], ['74', 511], ['75', 777], ['76', 823], ['77', 887], ['78', 1766], ['79', 2988],
['80', 4835], ['81', 5374], ['82', 7123], ['83', 8459], ['84', 11236], ['85', 8789], ['86', 13963], ['87', 16797], ['88', 18695], ['89', 19979],
['90', 18360], ['91', 21595], ['92', 24998], ['93', 27103], ['94', 28819], ['95', 32425], ['96', 34272], ['97', 25398], ['98', 30561], ['99', 30613],
['100', 33323], ['101', 33901], ['102', 35527], ['103', 28391], ['104', 27620], ['105', 25023], ['106', 26922], ['107', 30148], ['108', 31667], ['109', 30833],
['110', 32922], ['111', 24601], ['112', 28065], ['113', 37289], ['114', 17588], ['115', 26543], ['116', 21352], ['117', 48529], ['118', 26857], ['119', 22541],
['120', 24132], ['121', 27326], ['122', 29917], ['123', 33955], ['124', 29288], ['125', 24972], ['126', 22593], ['127', 23841], ['128', 24128], ['129', 28369],
['130', 25612], ['131', 20258], ['132', 18117], ['133', 22048], ['134', 20782], ['135', 27143], ['136', 25508], ['137', 24487], ['138', 18873], ['139', 21841],
['140', 19970], ['141', 23285], ['142', 25434], ['143', 24147], ['144', 21236], ['145', 20568], ['146', 19064], ['147', 18910], ['148', 18721], ['149', 21817],
['150', 25337]];//doulbe check at some point.
//return total cases from beginning to 'len'
function retTotal(len) {
  if (len == "all") {
    return totalCasesArr;//return all of array
  }
  else {
    return totalCasesArr.slice(0, len+2); //only return a part of it.
    //+1 is to include the title.
  }
}
//return new cases from beginning to 'len'
function retNew(len) {
  if (len == "all") {
    return newCasesArr;//return all of array
  }
  else {
    return newCasesArr.slice(0, len+2); //only return a part of it.
  }
}
function start() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawTotal);
  google.charts.setOnLoadCallback(drawNew);
}
function drawTotal(info) {//info will give a date #.
  if (info == null) {
    var data = google.visualization.arrayToDataTable(retTotal("all"));
  }
  else {
    //var showDates = document.getElementById('showDates').checked;
    var data = google.visualization.arrayToDataTable(retTotal(info));
  }
  var options = {
    title: 'Total U.S. COVID-19 cases',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('total_cases'));
  chart.draw(data, options);
}
function drawNew(info) {
  if (info == null) {
    var ndata = google.visualization.arrayToDataTable(retNew("all"));
  }
  else {
    var ndata = google.visualization.arrayToDataTable(retNew(info));
  }
  var noptions = {
   title: 'New U.S. COVID-19 cases',
   curveType: 'function',
   legend: { position: 'bottom' }
  };
  var nchart = new google.visualization.LineChart(document.getElementById('new_cases'));
  nchart.draw(ndata, noptions);
}

//ex '01/13/2020'
function dateArrFromStr(dateStr) {
  var arr = [];
  arr.push(parseInt(dateStr.slice(0,2), 10));
  arr.push(parseInt(dateStr.slice(3,5), 10));
  arr.push(parseInt(dateStr.slice(6,10), 10));
  return arr;
}
function days_since_start (month, date, year) {//all ints 1-12, 1-31, 2019->
  var days = 0;
  month--;//decrement by 1 so from 0-11 instead of 1-12
  let dPM20 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]//days per month
  if (year > 2020) {
    var years_btw = year - 2020;
    days = years_btw*365;
  }
  if (year >= 2020) {
    for (var i = 0; i<month; i++) {//looping throgh months that aren't ours
      days+=dPM20[i];//add days in months past.
    }
    days+=date;//add date in current month, which is days into current month
  }
  if (year <= 2019 && month != 12 && date != 31) {
    return "Invalid";
  }
  //if year > 2020
  return days;
}
function findDate (daysSinceStart) {
  //5/13/2020
  daysSinceStart = parseInt(daysSinceStart, 10);
  let dPM20 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]//days per month
  let days = daysSinceStart;
  if (days <= 365 && days > 0) {
    let i = 0;
    while (days>dPM20[i]) {
      days-=dPM20[i];
      i++;
    }
    var month = i+1;//+1 corrects for index.
    if (month < 10) {
      var monthStr = '0'+month.toString();
    }
    else {
      var monthStr = month.toString();
    }//-30+31+1 = 2? why not
    var dayOfMonth = days;//w/0 +1, is a day behind.
    var year = 2020;
    var dateStr = monthStr + '/' + dayOfMonth.toString() + '/' + '2020'
    return dateStr;
  }
  else if (days == 0) {
    return '12/31/2020';
  }
  //days - 30 = num.
  //days - dPM20[i-1] = (new) days. (-)
  // days+dPM20[i-1] = day of month.
}
function showDates (daySince) {//0 at december 31, 134 for May 13.
  var arr = [['Days Since December 31, 2020', 'Total Cases']];
  var narr = [['Days Since December 31, 2020', 'NewCases']]
  for (let i=1; i<daySince; i++) {//+1 or not
    arr.push([findDate(totalCasesArr[i][0]), totalCasesArr[i][1]]);
    narr.push([findDate(newCasesArr[i][0]), newCasesArr[i][1]]);
  }
  return [arr, narr];
}

function makeArr() {
  var data = showDates(150);
  var total = data[0];
  var fs = require('fs');
  var content = "var totalCasesArr = [ ['Days Since December 31, 2020', 'total Cases'],";
  //for (let i=1; i<totalCasesArr.length; i++) {
    content = content+"\n" +total[0].toString();
  //}
  document.getElementById('arr').innerHTML = content;
}
//makeArr();
//function that executes when submit button is pressed.
//uses other functions to convert date to 'days since start' & uses that to graph new date.
function onSubmit() {
  //makeArr();
  var date = document.getElementById('date').value;
  date = dateArrFromStr(date);//convert string to date array.
  var daySince = days_since_start(date[0], date[1], date[2]);
  drawTotal(daySince);
  drawNew(daySince);
}

/*
for (let i=0; i<arr.length; i++) {
  writeFile('test.txt', '[' + arr[i][0] + ', ' + arr[i][1].toString() + )
}*/
