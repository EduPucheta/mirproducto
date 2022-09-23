
console.log("lalo")
// console.log(precioencontado3)

const valordelacuota = document.querySelectorAll('#valordelacuota').value;

//const cantidaddecuotas = document.querySelectorAll('#cantidaddecuotas').value;



//alert("El valor total de las cuotas es: " + valorencuotas())


// const Evalordelacuota = document.querySelectorAll('#valordelacuota')[0];
// Evalordelacuota.addEventListener('userInput');


//var ele = document.querySelectorAll("#submitbutton");
//function myFunction(){
//if(ele.addEventListener){
  //  ele.addEventListener("submit", callback, false);  //Modern browsers
//}else if(ele.attachEvent){
  //  ele.attachEvent('onsubmit', callback);            //Old IE
//} 
//alert("El valor total de las cuotas es: " + valorencuotas())
// }


//function myFunction(){
//    var ele = document.querySelectorAll("#submitbutton");
//    ele.addEventListener("submit", callback, false);
//    alert("El valor total de las cuotas es: " + valorencuotas())
//}


function myFunction(e) {
    const cantidaddecuotas = document.getElementById('cantidaddecuotas').value;
    const valordelacuota = document.getElementById('valordelacuota').value;
    const valordelacuota2 = valordelacuota.replace('$', '');
    const valordelacuota4 = valordelacuota2.replace(',', '');
    // cantidaddecuotas.replace('$', '');
    document.getElementById('mensajederesultado').textContent =  "El valor total en cuotas es: "
    document.getElementById('spanResult').textContent = parseFloat(valordelacuota4) * parseFloat(cantidaddecuotas);
    event.preventDefault();
    PV();
  }

  const rate = 7
  function PV() {
    cantidaddecuotas = document.getElementById('cantidaddecuotas').value;
    cantidaddecuotas.replace('$', '');
    console.log("Cantidad de cuotas: " + cantidaddecuotas);
    const valordelacuota = document.getElementById('valordelacuota').value;
    const valordelacuota2 = valordelacuota.replace('$', '');
    const valordelacuota4 = valordelacuota2.replace(',', '');
    console.log("Valor de la cuota: " + valordelacuota4);
    console.log("Rate: " + rate);
    rate2 = parseFloat(rate) / 100.0;
    const valoractual = valordelacuota4 / rate * (1 - Math.pow(1 + rate2, cantidaddecuotas));
    console.log("Valor actual de la cuota: " + valoractual);
    var valoractualresult2 = 0;
    for(var i = 0; i <= cantidaddecuotas; i++){
      valoractualresult = valordelacuota4 / Math.pow(1+rate2,cantidaddecuotas);
      valoractualresult2 = valoractualresult2 + valoractualresult ;
    }
    console.log("valoractualresult: " + valoractualresult2);
    document.getElementById('mensajederesultado2').textContent =  "El valor actual de las cuotas es: "
    document.getElementById('spanResult2').textContent = valoractualresult2;
    const precioencontado3 = document.getElementById('precioencontado').value;
    const precioencontado2 = precioencontado3.replace('$', '');
    const precioencontado = precioencontado2.replace(',', '');
    if(precioencontado>valoractualresult2){
      document.getElementById('mensajederesultado3').textContent =  "Te conviene pagar en cuotas."
    }
    console.log(precioencontado)
  }



  


cantidaddecuotas = document.getElementById('cantidaddecuotas').value;
cantidaddecuotas.replace('$', '');








// Jquery Dependency

$("input[data-type='currency']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  blur: function() { 
    formatCurrency($(this), "blur");
  }
});


function formatNumber(n) {
// format number 1000000 to 1,234,567
return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
// appends $ to value, validates decimal side
// and puts cursor back in right position.

// get input value
var input_val = input.val();

// don't validate empty input
if (input_val === "") { return; }

// original length
var original_len = input_val.length;

// initial caret position 
var caret_pos = input.prop("selectionStart");
  
// check for decimal
if (input_val.indexOf(".") >= 0) {

  // get position of first decimal
  // this prevents multiple decimals from
  // being entered
  var decimal_pos = input_val.indexOf(".");

  // split number by decimal point
  var left_side = input_val.substring(0, decimal_pos);
  var right_side = input_val.substring(decimal_pos);

  // add commas to left side of number
  left_side = formatNumber(left_side);

  // validate right side
  right_side = formatNumber(right_side);
  
  // On blur make sure 2 numbers after decimal
  if (blur === "blur") {
    right_side += "00";
  }
  
  // Limit decimal to only 2 digits
  right_side = right_side.substring(0, 2);

  // join number by .
  input_val = "$" + left_side + "." + right_side;

} else {
  // no decimal entered
  // add commas to number
  // remove all non-digits
  input_val = formatNumber(input_val);
  input_val = "$" + input_val;
  
}

// send updated string to input
input.val(input_val);

// put caret back in the right position
var updated_len = input_val.length;
caret_pos = updated_len - original_len + caret_pos;
input[0].setSelectionRange(caret_pos, caret_pos);
}

