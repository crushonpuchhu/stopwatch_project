const d = document;
const btn = d.querySelectorAll("button");
const ps = d.querySelectorAll(".clock_area p");
const area = d.querySelector(".omm2");
const regem = d.querySelector(".clock_area");
let time1;
let time2;
let time3;
let secure = 1;
btn[0].addEventListener("click", () => {
    if (secure === 1) {
        let a = 1, b = 1, c = 1;
        time1 = setInterval(() => {
            if (a !== 60)
                ps[0].innerHTML = a++;
            else {
                ps[0].innerHTML = a++;
                a = 1;
            }
        }, 60000);
        time2 = setInterval(() => {
            if (b !== 60)
                ps[1].innerHTML = b++;
            else {
                ps[1].innerHTML = b++;
                b = 1;
            }

        }, 1000);
        time3 = setInterval(() => {
            if (c !== 60)
                ps[2].innerHTML = c++;
            else {

                ps[2].innerHTML = c++;
                c = 1;
            }
        }, 100);

        btn[0].classList.add("btnv");
        btn[1].classList.add("btne");
        d.querySelector(".abo").classList.add("mover");


    }
    secure++;

})




btn[1].addEventListener("click", () => {
    location.reload();
})
let i = 1;
regem.addEventListener("click", () => {

    if (Number(ps[2].innerHTML) !== 0) {
        const div = d.createElement("div");
        div.classList = "lap";
        const p1 = d.createElement("p");
        p1.className = "lap1";
        p1.innerHTML = "LAP" + i++;
        const p2 = d.createElement("p");
        p2.className = "lap2";
        p2.innerHTML = ps[0].innerHTML + ":" + ps[1].innerHTML + ":" + ps[2].innerHTML;

        div.append(p1, p2);
        area.append(div);

    }
    else {
        alert("First start your clock");
    }



})

btn[2].addEventListener("click", () => {

    clearInterval(time1);
    clearInterval(time2);
    clearInterval(time3);

    d.querySelector(".abo").classList.remove("mover");
})