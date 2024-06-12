function knightMoves(start, end) {
  let noMoves;
  let output = `You made it in ${noMoves}! Here's your path:`;
  if (start[0] === end[0] && start[1] === end[0]) {
    noMoves = 0;
    return `${output}\n [${start}]\n [${end}]`;
  }
}

console.log(knightMoves([0, 0], [0, 0]));
