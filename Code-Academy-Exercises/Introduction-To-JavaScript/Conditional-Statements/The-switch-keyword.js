





let athleteFinalPosition = 'first place';

switch( athleteFinalPosition) {
  case 'first place' :
    console.log('You get the gold medal!');
    break;

  case 'second place':
    console.log('You get the silver medal!');
    break;

  case 'third place' :
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.')
    break;
}



/*else if statements are a great tool if we need to check multiple conditions.*/
/*Without the break keyword at the end of each case, the program would execute the code for all matching cases and the default code as well. */
