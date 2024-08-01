const button = document.getElementById('button');
const input = document.getElementById('input');
const k = document.getElementById('k');
const f = document.getElementById('f');
const p = document.getElementById('p');
button.onclick = function(){
    let a = input.value;
    a = parseInt(a);
    if(isNaN(a)){
        alert('please enter a valid number.')
    }
    else{
        if(k.checked){
            a = (a + 273) + "K";
        }
        else if(f.checked){
            a = ((9/5)*a + 32).toFixed(2) + "F";
        }
        else{
            alert('please select  value.')
        }
    }
    p.textContent = 'value: ' + a;
}