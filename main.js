var like1 = document.getElementById("like1")
var like2 = document.getElementById("like2")
var like3 = document.getElementById("like3")
var delete1 = document.getElementById("delete1")
var delete2 = document.getElementById("delete2")
var delete3 = document.getElementById("delete3")
const count1 = document.getElementById('count1');
const price1 = document.getElementById('price1');
const count2 = document.getElementById('count2');
const price2 = document.getElementById('price2');
const count3 = document.getElementById('count3');
const price3 = document.getElementById('price3');
const priceT = document.getElementById('priceT');
function Supp1() {
    var parent = delete1.parentElement.parentElement
    parent.style.display = "none"
};
function Supp2() {
    var parent = delete2.parentElement.parentElement
    parent.style.display = "none"
};
function Supp3() {
    var parent = delete3.parentElement.parentElement
    parent.style.display = "none"
};
delete1.addEventListener('click', Supp1);
delete2.addEventListener('click', Supp2);
delete3.addEventListener('click', Supp3);
like1.addEventListener('click', function (e) {
    e.target.style.color === "red" ? e.target.style.color = "black" : e.target.style.color = "red"
})
like2.addEventListener('click', function (e) {
    e.target.style.color === "red" ? e.target.style.color = "black" : e.target.style.color = "red"
})
like3.addEventListener('click', function (e) {
    e.target.style.color === "red" ? e.target.style.color = "black" : e.target.style.color = "red"
})
function increment1() {
    count1.innerHTML = +count1.innerHTML + 1
    price1.innerHTML = +price1.innerHTML + 80
    priceT.innerHTML = +priceT.innerHTML + 80
}
function increment2() {
    count2.innerHTML = +count2.innerHTML + 1
    price2.innerHTML = +price2.innerHTML + 270
    priceT.innerHTML = +priceT.innerHTML + 270
}
function increment3() {
    count3.innerHTML = +count3.innerHTML + 1
    price3.innerHTML = +price3.innerHTML + 200
    priceT.innerHTML = +priceT.innerHTML + 200
}
butplus1.addEventListener('click', increment1);
butplus2.addEventListener('click', increment2);
butplus3.addEventListener('click', increment3);



function decrement1() {
    if (count1.innerHTML > 0) {
        count1.innerHTML = +count1.innerHTML - 1
        price1.innerHTML = +price1.innerHTML - 80
        priceT.innerHTML = +priceT.innerHTML - 80
    }
}

function decrement2() {
    if (count2.innerHTML > 0) {
        count2.innerHTML = +count2.innerHTML - 1
        price2.innerHTML = +price2.innerHTML - 270
        priceT.innerHTML = +priceT.innerHTML - 270
    }
}

function decrement3() {
    if (count3.innerHTML > 0) {
        count3.innerHTML = +count3.innerHTML - 1
        price3.innerHTML = +price3.innerHTML - 200
        priceT.innerHTML = +priceT.innerHTML - 200
    }
}




butminus2.addEventListener('click', decrement2);
butminus1.addEventListener('click', decrement1);
butminus3.addEventListener('click', decrement3);