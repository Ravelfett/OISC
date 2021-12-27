function p(m, s){
    let a = m[s];
    let b = m[s+1];
    let c = m[s+2];
    while(a>=0 && b>=0 && c>=0){
        m[b] = m[b] - m[a];
        if (m[b] <= 0){
            s = c;
        } else {
            s += 3;
        }
        a = m[s];
        b = m[s+1];
        c = m[s+2];
    }
    return m
}


const progs = {
  "subtracts x and y": [["x", "y", 1, 0, 5, -1], 2],
  "adds x and y":      [["x", "y", 0, 1, 2, 6, 2, 0, 9, -1], 3],
  "swaps x and y":     [["x", "y", 0, 0, 0, 0, 2, 8, 1, 3, 11, 2, 1, 14, 3, 4, 17, 4, 1, 20, 1, 0, 23, 3, 0, 26, -1], 5],
  "max(x, y)":         [["x", "y", 0, 0, 0, 0, 2, 8, 1, 0, 18, 1, 3, 14, 3, 0, 17, -1, 2, 3, 21, 3, 0, 24, 1, 4, 27, 4, 0, 30, 4, 0, 17], 5],
  "x * y":             [["x", "y", 2, -1, 0, 1, 2, 8, 0, 4, 11, 4, 0, 14, 3, 2, 11, -1], 5]
}

let x = document.getElementById("select");
for(const p in progs){
  let e = document.createElement("option");
  let t = document.createTextNode(p);
  e.appendChild(t);
  x.appendChild(e);
}

x.onchange = (e) => {
  document.getElementById("program").value = progs[x.value][0].join(" ");
  document.getElementById("start").value = progs[x.value][1];
}

document.getElementById("run").onclick = (e) => {

  let text = document.getElementById("program").value;
  let prog = text.replace(/\s+|\n/g, ' ').split(" ").map(Number);
  if (!prog.every( e  => !isNaN(e))) {
    document.getElementById("result").innerHTML = "all values should be numbers"
  }else {
    document.getElementById("result").innerHTML = p(prog, Number(document.getElementById("start").value)).join(" ");
  }
}
