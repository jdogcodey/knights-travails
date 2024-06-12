function knightMoves(start, end) {
  const [a, b] = start;
  const [y, z] = end;
  let noOfMoves = 0;
  const queue = [];
  const previouslyExplored = [];
  let output = `You made it in ${noOfMoves}! Here's your path:`;
  if (start[0] === end[0] && start[1] === end[1]) {
    noMoves = 0;
    return `${output}\n [${start}]\n [${end}]`;
  } else {
    move(queue, a, b, y, z, [a, b], noOfMoves, previouslyExplored);
    console.log(queue);
  }
}

function move(
  queue,
  a,
  b,
  y,
  z,
  previous,
  previousList,
  noOfMoves,
  previouslyExplored
) {
  if (a + 2 < 8 && b + 1 < 8 && !previouslyExplored.includes([a + 2, b + 1])) {
    queue.push(
      new PotentialMove(a + 2, b + 1, [a, b], previousList, noOfMoves)
    );
  }
}

function haveIBeenHere(space) {}

class PotentialMove {
  constructor(c, d, previous, previousList, noOfMoves) {
    this.move = [c, d];
    this.previous = `[${previousList}]\n[${previous}]`;
    this.noMoves = noOfMoves;
  }
}

const testArrayNew = [1, 2];

console.log(testArrayNew.includes(1));

console.log(knightMoves([1, 0], [0, 0]));
