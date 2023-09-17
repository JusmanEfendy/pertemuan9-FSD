const listBarang = document.querySelector('#list-barang')
const inputBarang = document.querySelector("input[name=barang]")

let barang = []

function showDatas() {
    
    // jika belum ada barang
    if(barang == 0) {
        listBarang.innerHTML = ''
        return listBarang.innerHTML += `<p>BARANG BELUM TERSEDIA !!!</p>`
    }

    listBarang.innerHTML = ''
    for (data in barang) {
        let edit =`<a href='#' onclick="editBarang(${data})">Edit</a>`
        let deleteBarang =`<a href='#' onclick="deleteBarang(${data})">Delete</a>`

        listBarang.innerHTML += `<li>${barang[data]} [${edit} | ${deleteBarang}]</li>`
    }
}

function addBarang() {
    for(data in barang) {

        // jika nama barang sudah tersedia di list barang
        if(barang[data] == inputBarang.value){
            listBarang.innerHTML = ''
            return listBarang.innerHTML += `<p>BARANG SUDAH ADA !!!</p>`
        }
    }

    // jika user memasukkan string kosong
    if (inputBarang.value == '') {
        listBarang.innerHTML = ''
        return listBarang.innerHTML += `<p>MASUKKAN BARANG !!!</p>`
    }

    barang.push(inputBarang.value)
    showDatas()
}

function editBarang(id) {
    let newBarang = prompt('Edit Nama barang ->', barang[id])

    // jika edit nama barang dengan nama yang sama
    if(barang[id] == newBarang){
        let samaBarang = prompt('Masukkan Nama Yang Lain')
        barang[id] = samaBarang
        return showDatas()
    }

    barang[id] = newBarang

    showDatas()
}

function deleteBarang(id) {
    barang.splice(id, 1)
    showDatas()
}