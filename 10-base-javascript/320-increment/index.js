function createIncrement(incBy) {
  let val = 0;

  function increment() {
    val += incBy;
    console.log(val);
  }

  const message = `Current val is ${val}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement(1);

increment(); //
increment(); //
increment(); //

log(); //
