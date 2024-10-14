const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ts(groups) {
  let res = [];

  for (let [s, t] of groups) {
    let ms = 0;
    
    let cl = 0; //cl-commonlength
    while (cl < s.length && cl < t.length && s[cl] === t[cl]) {
      cl++;
    }

    ms += cl;
    if (cl) ms++;
    ms += (s.length - cl) + (t.length - cl);

    res.push(ms);
  }

  return res;
}

function group(tss) {
  let groups = [];
  for (let i = 0; i < tss.length; i += 2) {
    groups.push([tss[i], tss[i + 1]]);
  }
  return groups;
}

let inp = [];

rl.on('line', (line) => inp.push(line));

rl.on('close', () => {
  const tss = inp.slice(1);
  const groups = group(tss);
  let res = ts(groups);
  res.forEach((r) => console.log(r));
});
