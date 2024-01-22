//speed limit 70kmh
//less the or equal to 70 kmh it message should be ok
// if the speed is greater then 70 add points by 5kmh

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    return "ok";
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points > 12) {
      return "license suspended!";
    }
    return points;
  }
}

console.log(checkSpeed(135));
