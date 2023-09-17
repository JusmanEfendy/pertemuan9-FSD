const showModalBtn = document.getElementById("showModalBtn");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");

const kata = document.querySelector("#input1")
const jumlah = document.querySelector("#input2")
const fillContent = document.querySelector("#fillContent")

showModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    
    // jika user menginputkan angka 0 dan lebih dari 15
    if(jumlah.value == 0 || jumlah.value > 15) {
        return fillContent.innerHTML += `<span style="color:red"><b><i>NOTE: </i></b>Masukkan Jumlah Perulangan Dari angka 1-15</span><br/>`
    }

    for (let i = 0+1; i <= jumlah.value; i++) {
        fillContent.innerHTML += `Mengulangi kata <span style="color: #9242e2"><b>${kata.value}</b></span> sebanyak <i>${i}</i> <br/><br/>`
    }
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    fillContent.innerHTML = ''
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        fillContent.innerHTML = ''
    }
});
