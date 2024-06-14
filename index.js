function knightMoves(start, end) {
  let noOfMoves = 0;
  const startingPoint = new PotentialMove(start, noOfMoves, []);
  const queue = [startingPoint];
  const explored = [start];
  if (start[0] > 7 || start[0] < 0 || end[0] > 7 || end[0] < 0) {
    return "Please input valid chess coordinates";
  } else if (start[0] === end[0] && start[1] === end[1]) {
    return `You made it in ${noOfMoves}! Here's your path:\n [${start}]\n [${end}]`;
  } else {
    move(queue, end, explored);
    return;
  }
}

function nestedArrayNotContains(array, a, b) {
  return array.every(([val1, val2]) => !(a === val1 && b === val2));
}

function move(queue, end, explored) {
  if (queue.length === 0) return;
  const lastMove = queue[0].move;
  const [a, b] = queue[0].move;
  const previous = queue[0].previous;
  const noOfMoves = queue[0].noOfMoves;
  explored.push(queue[0].move);
  queue.shift();

  const aPlus2 = a + 2;
  const aPlus1 = a + 1;
  const aMinus1 = a - 1;
  const aMinus2 = a - 2;
  const bPlus2 = b + 2;
  const bPlus1 = b + 1;
  const bMinus1 = b - 1;
  const bMinus2 = b - 2;

  previous.push(lastMove);

  const potentialMoves = [
    [aPlus2, bPlus1],
    [aPlus2, bMinus1],
    [aPlus1, bPlus2],
    [aPlus1, bMinus2],
    [aMinus2, bPlus1],
    [aMinus2, bMinus1],
    [aMinus1, bPlus2],
    [aMinus1, bMinus2],
  ];

  for (const [newA, newB] of potentialMoves) {
    if (
      newA >= 0 &&
      newA < 8 &&
      newB >= 0 &&
      newB < 8 &&
      nestedArrayNotContains(explored, newA, newB)
    ) {
      const newMove = new PotentialMove([newA, newB], noOfMoves + 1, [
        ...previous,
      ]);

      if (newMove.move[0] === end[0] && newMove.move[1] === end[1]) {
        finishUp(newMove);
        return;
      }
      queue.push(newMove);
    }
  }
  move(queue, end, explored);
}

function finishUp(finalMove) {
  console.log(`You made it in ${finalMove.noOfMoves} moves! Here's your path:`);
  console.log([...finalMove.previous, finalMove.move]);
}

class PotentialMove {
  constructor(coords, noOfMoves, previous) {
    this.move = coords;
    this.previous = previous;
    this.noOfMoves = noOfMoves;
  }
}

console.log(knightMoves([-1, 7], [2, 1]));
