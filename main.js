var rate = 7
var rate3 = document.getElementById("inflacion__number");
console.log(rate3);


function formula(){
  return rate = rate3.value/12;
}

function myFunction(e) {
    const cantidaddecuotas = document.getElementById('cantidaddecuotas').value;
    const valordelacuota = document.getElementById('valordelacuota').value;
    const valordelacuota2 = valordelacuota.replace('$', '');
    const valordelacuota4 = valordelacuota2.replace(',', '');
    // cantidaddecuotas.replace('$', '');
    document.getElementById('mensajederesultado').textContent =  "La suma de las cuotas es: "
    document.getElementById('spanResult').textContent = formatter.format(parseFloat(valordelacuota4) * parseFloat(cantidaddecuotas)) ;
    event.preventDefault();
    PV();
  }


  function PV() {
    cantidaddecuotas = document.getElementById('cantidaddecuotas').value;
    cantidaddecuotas.replace('$', '');
    const valordelacuota = document.getElementById('valordelacuota').value;
    const valordelacuota2 = valordelacuota.replace('$', '');
    const valordelacuota4 = valordelacuota2.replace(',', '');
    rate2 = parseFloat(rate) / 100.0;
    const valoractual = valordelacuota4 / rate * (1 - Math.pow(1 + rate2, cantidaddecuotas));
    var valoractualresult2 = 0;
    for(var i = 0; i <= cantidaddecuotas; i++){
      valoractualresult = valordelacuota4 / Math.pow(1+rate2,cantidaddecuotas);
      valoractualresult2 = valoractualresult2 + valoractualresult ;
    }
    document.getElementById('mensajederesultado2').textContent =  "El valor actual de las cuotas es: "
    document.getElementById('spanResult2').textContent = formatter.format(valoractualresult2) ;
    const precioencontado3 = document.getElementById('precioencontado').value;
    const precioencontado2 = precioencontado3.replace('$', '');
    const precioencontado = precioencontado2.replace(',', '');

    if(precioencontado>valoractualresult2){
      const ahorro = precioencontado - valoractualresult2;
      document.getElementById('mensajederesultado3').textContent =  "Te conviene pagar en cuotas. Te estás ahorando " + formatter.format(ahorro) + " gracias a  la inflación."
    }
    if(precioencontado<valoractualresult2){
      document.getElementById('mensajederesultado4').textContent =  "Te conviene en contado."
    }
    console.log(precioencontado)
    document.getElementById('resultado__detalle').textContent =  "El cálculo asume que los ingresos mensuales aumentan a la par que la inflación. " + "La inflación estimada mensual para este cálculo es " + rate +"%.";

  }


cantidaddecuotas = document.getElementById('cantidaddecuotas').value;
cantidaddecuotas.replace('$', '');

function showoptions3(){
  var element = document.getElementsByClassName('detalle');
  console.log(element.getComputedStyle.display );
  element.style = 'block';
  for (var i=0;i<element.length;i+=1){
    element[i].style.display = 'block';
  }
}


function showoptions() {
  var x = document.getElementById('detalle');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function showoptions2() {
  var x = document.getElementById('impuestosellos');
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    }
  }









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

//

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

formatter.format(2500); /* $2,500.00 */


console.log(formatter.format(2500))