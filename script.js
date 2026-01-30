/* Version 0.1 by Chris Simmons */

function calculator() {
  var unsatunit = document.getElementById('unsatunitweight').valueAsNumber;
  var satunit = document.getElementById('satunitweight').valueAsNumber;
  var watertable = document.getElementById('tabledepth').valueAsNumber;
  var analysis = document.getElementById('planedepth').valueAsNumber;
  
  if(analysis>watertable) {
  var totalstress = (unsatunit*watertable)+(satunit*(analysis-watertable));
  var porepressure = 9.81*(analysis-watertable);
  var effectivestress = totalstress-porepressure;
  }
  else if (analysis<=watertable) {
    var totalstress = (unsatunit*watertable);
  var porepressure = 0;
  var effectivestress = totalstress;
  }
  
  document.getElementById("totalResults").value = totalstress;
  document.getElementById("poreResults").value = porepressure;
  document.getElementById("calcResults").value = effectivestress;
  
};