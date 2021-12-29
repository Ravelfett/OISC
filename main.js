function p(m, s) {
    while (s >= 0) {
        let a = m[s];
        let b = m[s + 1];
        let c = m[s + 2];
        if (a < 0 || b < 0) {
            s = -1;
        } else {
            m[b] = m[b] - m[a];
            if (m[b] <= 0) {
                s = c;
            } else {
                s += 3;
            }
        }
    }
    return m
}

function showHelp() {
    let help = document.getElementById("help");
    help.style.display = help.style.display == "none" ? "block" : "none";
}

const progs = {
    "subtracts x and y": [
        ["x", "y", 1, 0, 5, -1], 2
    ],
    "adds x and y": [
        ["x", "y", 0, 1, 2, 6, 2, 0, 9, -1], 3
    ],
    "swaps x and y": [
        ["x", "y", 0, 0, 0, 2, 7, 1, 3, 10, 0, 0, 13, 1, 1, 16, 3, 0, 19, 2, 1, 22, -1], 4
    ],
    "max(x, y)": [
        ["x", "y", 0, 0, 0, 2, 7, 1, 0, 17, 0, 0, 13, 2, 0, 16, -1, 0, 0, 20, 1, 3, 23, 3, 0, 26, -1], 4
    ],
    "x * y": [
        ["x", "y", 2, -1, 0, 1, 2, 8, 0, 4, 11, 4, 0, 14, 3, 2, 11, -1], 5
    ],
    "sum of n element after K": [
        ["K", 0, 0, -1, 0, 0, 1, 8, 1, 11, 11, 0, 2, 14, 1, 29, 17, 1, 36, 20, 2, 36, 23, 3, 2, 26, 3, 29, 29, 0, 4, 32, 3, 2, 26, 4, 1, 38, -1, "n", "x", "x", "x", "x", 0], 5
    ]
}
let x = document.getElementById("select");
for (const p in progs) {
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
    if (!prog.every(e => !isNaN(e))) {
        document.getElementById("result").innerHTML = "Error while analysing"
        alert("all values should be numbers");
    } else {
        document.getElementById("result").innerHTML = p(prog, Number(document.getElementById("start").value)).join(" ");
    }
}