

var total_array = []
const hitung_bmi=()=>{
    var berat = document.getElementById('id_berat').value
    var tinggi = document.getElementById('id_tinggi').value
    var tinggi_mtr = parseInt(tinggi)/100
    console.log(tinggi)
    console.log(tinggi_mtr)
    var hitung = berat / (tinggi_mtr * tinggi_mtr)
    if(hitung > 30 ){
        
        document.getElementById('hasil').innerHTML = hitung
        total_array.push(hitung)
    }else if ( hitung > 23 && hitung <29.9){
        
        total_array.push(hitung)
        document.getElementById('hasil').innerHTML = hitung
    }else if ( hitung > 18.5 && hitung < 22.9){
        
        total_array.push(hitung)
        document.getElementById('hasil').innerHTML = hitung
    }else if (  hitung < 18.5){
        
        total_array.push(hitung)
        document.getElementById('hasil').innerHTML = hitung
    }else {
        alert('masuk ke else')
    }
}


const simpan_bmi=()=>{
    var hasil = document.getElementById('hasil').value
    // console.log(document.getElementById('hasil'))
    // console.log(hasil,' ini hasil')
    // total_array.push(hasil)
    // console.log(total_array)
    total_array.map((val,index)=>{
        console.log(val,' ini val')
        var node = document.createElement("p");
        var textnode = document.createTextNode(val);
        node.appendChild(textnode);
        document.getElementById("inside_bmi_right").appendChild(node);
        
    })
}
