module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement;
  enhancement > 0 && enhancement < 20 ? (enhancement += 1): enhancement
  return { ...item, enhancement: enhancement};
}


function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if(enhancement < 15) {
    durability -= 5
  } else if(enhancement >= 15 ) {
    durability -= 10
  } else if(enhancement > 16 ) {
    enhancement -= 1
  }
  return { ...item, durability: durability , enhancement: enhancement };
}

function repair(item) {
  return { ...item , durability: 100 };
}

function get(item) {
  return { ...item };
}
