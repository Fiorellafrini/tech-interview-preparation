//-----------------SOLUCIÓN DE FUERZA BRUTA-------------
function clockMinuteAdder (time, minutesToAdd) {
  // '12:30', 80

  const hours = time[0] + time[1]; // '12'
  const minutes = time[3] + time[4]; // '30'

  let totalMinutes = parseInt(minutes) + minutesToAdd; // 30 + 80 => 110
  let totalHours = parseInt(hours) + Math.floor(totalMinutes / 60); // 12 + 1 => 13

  totalMinutes = totalMinutes % 60; // 110 % 60 => 50
  totalHours = ((totalHours - 1) % 12) + 1; // ((13 - 1) % 12) + 1 => (12 % 12) + 1 => 1

  if(totalHours < 10) totalHours = '0' + totalHours; // '01'
  if(totalMinutes < 10) totalMinutes = '0' + totalMinutes;

  return `${totalHours}:${totalMinutes}` // '01:50'
}

//------------------REFACTOR-----------------------
function clockMinuteAdder(time, minutesToAdd){
  const [hours, minutes] = time.split(':');

  let totalMinutes = parseInt(minutes) + minutesToAdd;
  let totalHours = parseInt(hours) + Math.floor(totalMinutes / 60);

  totalMinutes %= 60;
  totalHours = ((totalHours - 1) % 12) + 1;

  if(totalHours < 10) totalHours = '0' + totalHours;
  if(totalMinutes < 10) totalMinutes = '0' + totalMinutes;

  return `${totalHours}:${totalMinutes}`
}






module.exports = clockMinuteAdder;