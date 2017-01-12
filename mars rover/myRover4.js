var myRover  = {
  face: "W",
  position: [0,0],
  command: ["r","l","f","f","l"]
}

var checkFace = function(rover){  /*function checking the NWSE direction, and
                                  return the right function
                                  for each compass point*/
  if (rover.face === "N"){
    return northFace(rover)
  }else if
    (rover.face === "W"){
    return westFace(rover)
  }else if
    (rover.face === "S"){
    return southFace(rover)
  }else if
    (rover.face === "E"){
    return eastFace(rover)
};
};

var northFace = function(rover){
  for(i=0; i < rover.command.length; i++){
    var x = rover.command[i];
    switch(x){
      case "r" : rover.position[0]++
        break;
      case "l" : rover.position[0]--
        break;
      case "b" : rover.position[1]--
        break;
      case "f" : rover.position[1]++
        break;
            }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
}
var southFace = function(rover){
  for(i=0; i < rover.command.length; i++){
    var x = rover.command[i];
    switch(x){
      case "f": rover.position[0]--
          break;
        case "b": rover.position[0]++
          break;
        case "r": rover.position[1]--
          break;
        case "l": rover.position[1]++
          break;
            }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
}
var eastFace = function(rover){
  for(i=0; i < rover.command.length; i++){
    var x = rover.command[i];
    switch(x){
      case "f": rover.position[1]++
          break;
        case "b": rover.position[1]--
          break;
        case "r": rover.position[0]--
          break;
        case "l": rover.position[0]++
          break;
            }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
}
var westFace = function(rover){
  for(i=0; i < rover.command.length; i++){
    var x = rover.command[i];
    switch(x){
      case "f": rover.position[1]--
          break;
        case "b": rover.position[1]++
          break;
        case "r": rover.position[0]++
          break;
        case "l": rover.position[0]--
          break;
            }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
}

checkFace(myRover)
