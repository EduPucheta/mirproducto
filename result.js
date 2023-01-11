//Estas funciones las obtuve de Stackoverflow y sirven para aplicar el formato de $$ en los inputs del form

// Jquery Dependency
$("input[data-type='currency']").on({
  keyup: function () {
    formatCurrency($(this));
  },
  blur: function () {
    formatCurrency($(this), "blur");
  },
});

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.

  // get input value
  let input_val = input.val();

  // don't validate empty input
  if (input_val === "") {
    return;
  }

  // original length
  let original_len = input_val.length;

  // initial caret position
  let caret_pos = input.prop("selectionStart");

  // check for decimal
  if (input_val.indexOf(".") >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    let decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    let left_side = input_val.substring(0, decimal_pos);
    let right_side = input_val.substring(decimal_pos);

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
  let updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

//

// Create our number formatter.
let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

//// EXTRACCION DE PARAMETROS DESDE LA URL

const url = window.location.href; // Gets current URL

const searchParams = new URL(url).searchParams;
// Extracts parameters from URL

const urlSearchParams = new URLSearchParams(searchParams);

const res = Array.from(urlSearchParams.entries());

cantidaddecuotas = urlSearchParams.get("cuotasOp1");
valordelacuota4 = urlSearchParams.get("valOp1");
cantidaddecuotasOp2 = urlSearchParams.get("cuotasOp2");
valordelacuota4Op2 = urlSearchParams.get("valOp2");
anualInflation = urlSearchParams.get("inf");
impuestoAlSello = urlSearchParams.get("impsell");

// MODAL DE BIENVENIDA EN PRIMERA SESIÓN

let visits = Number(localStorage.getItem("visitCount"));
let current = Boolean(sessionStorage.getItem("session"));

if (!current) {
  visits += 1;
}

document.addEventListener(
  "DOMContentLoaded",
  localStorage.setItem("visitCount", visits)
);
document.addEventListener(
  "DOMContentLoaded",
  sessionStorage.setItem("session", true)
);


// FUNCION MODAL 
function displaymodal() {
  md = document.createElement("div");
  md.id = "myModal";
  md.classList.add("modal");
  document.querySelector("nav").append(md);  
  md.style.display = "block"; 
  md.innerHTML = `            <!-- Modal content -->
  <div class="modal-content animate__animated animate__fadeInUpBig">
      <span class="close">&times;</span>
      <p class="modal-content__title">Bienvenido a Mangos! 👋🏼</p>
      <p>
          Compará entre dos opciones de financiación y descubrí como te
          conviene pagar tu compra teniendo en cuenta la inflación y la forma
          de pago que elijas.
      </p>
      <p>
          Para cada opción elegí en cuantas cuotas podés pagar y el valor de
          cada cuota.
      </p>
      <p>
          A demás del plan en cuotas podés elegir como opción pagar en contado
          eligiendo la forma de pago "Contado" e ingresando el valor total de
          la compra.
      </p>
      <p>
          La mejor opción de financiación será la que genere el menor valor
          ajustado por inflación más impuestos.
      </p>
      <p>
          Ejemplo: no sabés si te conviene, comprar en 3 cuotas de 500$ o en 6 cuotas de 250$.
      </p>
      <p>
          Ingresar de la siguiente forma: en primera opción elegir 3 cuotas, valor de cada cuota 500$. <br>
          En la segúnda opción: 6 cuotas, valor de cada cuota 250$. <br>
          Darle click en calcular y te dirá la mejor opción.  
      </p>
      <button class="modal-content__start__button">Empezar! 😎</button>
  </div>`;
  //let cross = document.getElementsByClassName("close")[0];
  let modal = document.getElementById("myModal");
document.getElementsByClassName("close")[0].onclick = function () {
  document.querySelector(".modal-content").classList.remove("animate__fadeInUpBig");
  document.querySelector(".modal-content").classList.add("animate__fadeOutDownBig");
  setTimeout(function(){ modal.remove(); }, 500);
};
document.querySelector(".modal-content__start__button").onclick = function () {
  document.querySelector(".modal-content").classList.remove("animate__fadeInUpBig");
  document.querySelector(".modal-content").classList.add("animate__fadeOutDownBig");
  setTimeout(function(){ modal.remove(); }, 500);
};

// Cerrar cuando se hace click fuera del modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
};


let btnModal = document.getElementById("myBtn");
btnModal.addEventListener("click", displaymodal); 





// Muestra el modal de bienvenida si es la primera sesión
if (localStorage.getItem("visitCount") < 2) {
  displaymodal(); 
}

//BOTON COPIAR
$(".share").on("click", function () {
  navigator.clipboard.writeText(window.location.href);
});

// FUNCION PARA COPIAR URL
function copiedToClipboard() {
  document.querySelector(".share a").textContent ="Link copiado" 
    setTimeout(function () {
      document.querySelector(".share a").textContent ="Copiar de nuevo" 
              'Copiar de nuevo';
    }, 3000);
  }

//// FUNCION PARA RESULTADOS

function myFunction2(e) {
  g = document.createElement("div");
  g.setAttribute("id", "resultados");
  document.querySelector(".results__page").prepend(g);
  document.querySelector("#resultados").style.display = "flex";
  if (cantidaddecuotas > 0) {
    paymentsSum$Op1txt = formatter.format(
      parseFloat(valordelacuota4) * parseFloat(cantidaddecuotas)
    );
  } else {
    paymentsSum$Op1txt = formatter.format(valordelacuota4);
  }
  if (cantidaddecuotasOp2 > 0) {
    paymentsSum$Op2txt = formatter.format(
      parseFloat(valordelacuota4Op2) * parseFloat(cantidaddecuotasOp2)
    );
  } else {
    paymentsSum$Op2txt = formatter.format(valordelacuota4Op2);
  }
  // Cálculo de la tasa efectiva mensual a partir de la anual
  rate = (Math.pow(1 + anualInflation / 100, 1 / 12) - 1) * 100;
  rate2 = parseFloat(rate) / 100.0;
  //const valoractual = valordelacuota4 / rate * (1 - Math.pow(1 + rate2, cantidaddecuotas));
  let valoractualresult2 = 0;
  const valoractualDeCadaCuota = [];
  const numeroDeCadaCuota = [];
  // Acá se calcula el valor actual de la suma de las cuotas//
  if (cantidaddecuotas != 0) {
    for (let i = 0; i < cantidaddecuotas; i += 1) {
      valoractualresult =
        (valordelacuota4 / Math.pow(1 + rate2, i + 1)) * (1 - impuestoAlSello);
      valoractualresult2 += valoractualresult;
      valoractualDeCadaCuota.push(valoractualresult);
      numeroDeCadaCuota.push("Cuota Nº " + (i + 1));
    }
  } else {
    valoractualresult = valordelacuota4;
    valoractualresult2 = valordelacuota4;
    valoractualDeCadaCuota.push(valoractualresult);
    numeroDeCadaCuota.push("Cuota Nº 0");
  }
  const arr1 = numeroDeCadaCuota;
  const arr2 = valoractualDeCadaCuota;

  // OPCION 2
  let valoractualresult2op2 = 0;
  const valoractualDeCadaCuotaop2 = [];
  const numeroDeCadaCuotaop2 = [];

  if (cantidaddecuotasOp2 != 0) {
    for (let i = 0; i < cantidaddecuotasOp2; i += 1) {
      valoractualresultop2 =
        (valordelacuota4Op2 / Math.pow(1 + rate2, i + 1)) *
        (1 - impuestoAlSello);
      valoractualresult2op2 += valoractualresultop2;
      valoractualDeCadaCuotaop2.push(valoractualresultop2);
      numeroDeCadaCuotaop2.push("Cuota Nº " + (i + 1));
    }
  } else {
    valoractualresultop2 = valordelacuota4Op2;
    valoractualresult2op2 = valordelacuota4Op2;
    valoractualDeCadaCuotaop2.push(valoractualresult2op2);
    numeroDeCadaCuotaop2.push("Cuota Nº 0");
  }
  const arr1Op2 = numeroDeCadaCuotaop2;
  const arr2Op2 = valoractualDeCadaCuotaop2;

  actualValue$Resulttxt = formatter.format(valoractualresult2);
  actualValue$ResultOp2txt = formatter.format(valoractualresult2op2);

  firstResultMessage = document.createElement("span");
  firstResultMessage.setAttribute("id", "mensajederesultado3");
  document.getElementById("resultados").appendChild(firstResultMessage);

  // CONDICIONALES
  if (valoractualresult2op2 > valoractualresult2) {
    firstResultMessage.innerHTML =
      "Te conviene la <span class = 'firstoption'>primera opción</span> de financiación: pagar tu compra en " +
      cantidaddecuotas +
      " cuotas de " +
      formatter.format(valordelacuota4) +
      " cada una.";
  }
  if (valoractualresult2op2 < valoractualresult2) {
    firstResultMessage.innerHTML =
      "Te conviene la <span class = 'secondoption'>segunda opción</span> de financiación: pagar tu compra en " +
      cantidaddecuotas +
      " cuotas de " +
      formatter.format(valordelacuota4) +
      " cada una.";
  }
  if (valoractualresult2op2 == valoractualresult2) {
    firstResultMessage.innerHTML =
      "Ambas opciones de financiación son indiferetes.";
  }

  // CHART 1
  if (cantidaddecuotas > 1) {
    chartCard = document.createElement("span");
    chartCard.setAttribute("id", "chartCard");
    document.querySelector("#resultados").appendChild(chartCard);

    titleChart = document.createElement("span");
    titleChart.setAttribute("id", "title_grafica");
    document.querySelector("#chartCard").appendChild(titleChart);
    titleChart.textContent =
      "Cuotas ajustadas al valor de hoy de la primera opción de financiación";

    chart = document.createElement("canvas");
    chart.setAttribute("id", "grafica");
    document.querySelector("#chartCard").appendChild(chart);

    const $grafica = chart;
    // Las etiquetas son las que van en el eje X.

    const etiquetas = arr1;

   

  

    const datosVentas2020 = {
      data: arr2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
      backgroundColor: "rgba(0, 156, 189, 1)", // Color de fondo
      borderColor: "rgba(0, 156, 189, 1)", // Color del borde
      borderWidth: 0, // Ancho del borde
    };

    new Chart($grafica, {
      type: "bar", // Tipo de gráfica
      data: {
        labels: etiquetas,
        datasets: [
          datosVentas2020,
          // Aquí más datos...
        ],
      },
      options: {
        legend: {
          display: false
       },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
                          gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            },
          ],
                 xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }], 
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return formatter.format(tooltipItems.yLabel.toString());
            },
          },
        },
      },
    });
  }

  // CHART 2
  if (cantidaddecuotasOp2 > 1) {
    chartCard2 = document.createElement("span");
    chartCard2.setAttribute("id", "chartCard2");
    document.querySelector("#resultados").appendChild(chartCard2);

    titleChart2 = document.createElement("span");
    titleChart2.setAttribute("id", "title_grafica2");
    document.querySelector("#chartCard2").appendChild(titleChart2);
    titleChart2.textContent =
      "Cuotas ajustadas al valor de hoy de la segunda opción de financiación";

    chart2 = document.createElement("canvas");
    chart2.setAttribute("id", "grafica2");
    document.querySelector("#chartCard2").appendChild(chart2);

    const $grafica2 = chart2;
    const etiquetas2 = arr1Op2;

    const datosVentas20202 = {
      label: "Cuota al valor de hoy",
      data: arr2Op2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
      backgroundColor: "#F04E98", // Color de fondo
      borderColor: "rgba(0, 156, 189, 1)", // Color del borde
      borderWidth: 0, // Ancho del borde
    };
    new Chart($grafica2, {
      type: "bar", // Tipo de gráfica
      data: {
        labels: etiquetas2,
        datasets: [
          datosVentas20202,
          // Aquí más datos...
        ],
      },
      options: {
        legend: {
          display: false
       },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
                          gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            },
          ],
                 xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }], 
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return formatter.format(tooltipItems.yLabel.toString());
            },
          },
        },
      },
    });
  }

  // IMPUESTO AL SELLO
  impuestoAlSelloOp1 =
    parseFloat(valordelacuota4) *
    parseFloat(cantidaddecuotas) *
    impuestoAlSello;
  impuestoAlSelloOp2 =
    parseFloat(valordelacuota4Op2) *
    parseFloat(cantidaddecuotasOp2) *
    impuestoAlSello;

  // TABLA

  myTable = document.createElement("span");
  myTable.setAttribute("id", "table");
  document.querySelector("#resultados").appendChild(myTable);

  let employees = [
    {
      cant: "Cantidad de cuotas",
      Cantidaddecuotas: cantidaddecuotas,
      Cantidaddecuot: cantidaddecuotasOp2,
    },
    {
      cant: "Valor de cada cuota",
      Val1: formatter.format(valordelacuota4),
      val1: formatter.format(valordelacuota4Op2),
    },
    {
      val: "Suma total de las cuotas",
      sum1: paymentsSum$Op1txt,
      sum2: paymentsSum$Op2txt,
    },
    {
      val: "Impuesto al pago con tarjeta",
      val1: formatter.format(impuestoAlSelloOp1),
      val2: formatter.format(impuestoAlSelloOp2),
    },
    {
      val: "Suma ajustada por inflación más impuestos",
      val1: actualValue$Resulttxt,
      val2: actualValue$ResultOp2txt,
    },
  ];

  let headers = ["", "1º Opción", "2º Opción"];

  let table = document.createElement("table");
  let headerRow = document.createElement("tr");

  headers.forEach((headerText) => {
    let header = document.createElement("th");
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  employees.forEach((emp) => {
    let row = document.createElement("tr");

    Object.values(emp).forEach((text) => {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  myTable.appendChild(table);
  if (valoractualresult2op2 > valoractualresult2) {
    document.querySelector(
      "#table > table > tr:nth-child(6) > td:nth-child(2)"
    ).style.color = "#008744";
  }
  if (valoractualresult2op2 < valoractualresult2) {
    document.querySelector(
      "#table > table > tr:nth-child(6) > td:nth-child(3)"
    ).style.color = "#008744";
  }

  myTableDetail = document.createElement("span");
  myTableDetail.setAttribute("id", "tableDetail");
  document.querySelector("#table").appendChild(myTableDetail);
  myTableDetail.textContent =
    "La inflación anual considerada  en el cálculo es de " +
    String(anualInflation) +
    "%." +
    " Bajo el supuesto de que los ingresos aumenten  mes a mes a la par de la inflación el ahorro de elegir la mejor opción sobre la alternativa es de: ";
  if (valoractualresult2op2 > valoractualresult2) {
    myTableDetail.textContent +=
      formatter.format(valoractualresult2op2 - valoractualresult2) + ".";
  }
  if (valoractualresult2op2 < valoractualresult2) {
    myTableDetail.textContent +=
      formatter.format(valoractualresult2 - valoractualresult2op2) + ".";
  }
  myTableDetail.textContent +=
    " La tasa del impuesto al sello utilizada es de " +
    impuestoAlSello * 100 +
    "%.";

// Inversión en Naranja X
let urlJson = "datos.json";

const fetchJsonNaranjaX = fetch(urlJson)
  .then((response) => response.json())
  .then((response) => {
    return response.RendimientoAnual__NaranjaX;
  })
  .catch((error) => {
    console.log("error fetch");
  });

const updateRendimientosFetchNaranjaX = async () => {
  const rendimientoAnualNaranjaX = await fetchJsonNaranjaX;
  rendimientoMensual__NaranjaX = (Math.pow(1 + parseFloat(rendimientoAnualNaranjaX.replace("%","")) / 100, 1 / 12) - 1) ;
  // Opción 1 
  let rendimientosNaranjaX = [];
  ValorTotalDeLasCuotas = valordelacuota4 * cantidaddecuotas;
  for (let i = 0; i < cantidaddecuotas; i+=1) {
    rendimientosNaranjaX.push((ValorTotalDeLasCuotas-valordelacuota4*i)*rendimientoMensual__NaranjaX)
  }
  function sumArray(array) {
    let sum = 0; 
    array.forEach(item => {
      sum += item;
    });
      return sum;
  }
  
  rentNx__Title = document.createElement("h4"); 
  rentNx__Title.setAttribute("class", "NaranjaX__Title");
  rentNx__Title.textContent = "Inversión en Naranja X";
  document.querySelector(".Investments__content__option1").append(rentNx__Title);   

  rentNx = document.createElement("span");
  rentNx.setAttribute("class", "NaranjaX");
  document.querySelector(".Investments__content__option1").append(rentNx);  
  rentNx.textContent = "Si en lugar de pagar en contado mantenés tu plata en una cuenta de Naranja X a un rendimiento del " + rendimientoAnualNaranjaX + " anual, y mes a mes vas sacando la plata para pagar la tarjeta vas a ganar unos "  + formatter.format(sumArray(rendimientosNaranjaX)) +  " adicionales (Sin actualizar por inflación)."
  
  // Opción 2

  let rendimientosNaranjaX2 = [];
  ValorTotalDeLasCuotas2 = valordelacuota4Op2 * cantidaddecuotasOp2; 
  for (let i = 0; i < cantidaddecuotasOp2; i+=1) {
    rendimientosNaranjaX2.push((ValorTotalDeLasCuotas2-valordelacuota4Op2*i)*rendimientoMensual__NaranjaX)
  }

  rentNx__Title2 = document.createElement("h4");
  rentNx__Title2.setAttribute("class", "NaranjaX__Title2");
  rentNx__Title2.textContent = "Inversión en Naranja X";
  document.querySelector(".Investments__content__option2").append(rentNx__Title2);

  rentNx2 = document.createElement("span");
  rentNx2.setAttribute("class", "NaranjaX2");
  document.querySelector(".Investments__content__option2").append(rentNx2);
  rentNx2.textContent = "Si en lugar de pagar en contado mantenés tu plata en una cuenta de Naranja X a un rendimiento del " + rendimientoAnualNaranjaX + " anual, y mes a mes vas sacando la plata para pagar la tarjeta vas a ganar unos "  + formatter.format(sumArray(rendimientosNaranjaX2)) +  " adicionales (Sin actualizar por inflación)."
}; 
updateRendimientosFetchNaranjaX();

// Fetch Mercado Pago

const fetchJsonMercadoPago= fetch(urlJson)
  .then((response) => response.json())
  .then((response) => {
    return response.RendimientoAnual__MercadoPago;
  })
  .catch((error) => {
    console.log("error fetch");
  });

const updateRendimientosFetchMercadoPago= async () => {
  const rendimientoAnualMercadoPago= await fetchJsonMercadoPago;
  rendimientoMensual__MercadoPago= (Math.pow(1 + parseFloat(rendimientoAnualMercadoPago.replace("%","")) / 100, 1 / 12) - 1) ;
    // Opción 1 
  let rendimientosMercadoPago = [];
  ValorTotalDeLasCuotas = valordelacuota4 * cantidaddecuotas;
  for (let i = 0; i < cantidaddecuotas; i+=1) {
    rendimientosMercadoPago.push((ValorTotalDeLasCuotas-valordelacuota4*i)*rendimientoMensual__MercadoPago)
  }
  function sumArray(array) {
    let sum = 0; 
    array.forEach(item => {
      sum += item;
    });
      return sum;
  }
  
  rentMp__Title = document.createElement("h4"); 
  rentMp__Title.setAttribute("class", "MP__Title");
  rentMp__Title.textContent = "Inversión en Mercado Pago";
  document.querySelector(".Investments__content__option1").append(rentMp__Title);   

  rentMP = document.createElement("span");
  rentMP.setAttribute("class", "MercadoPago");
  document.querySelector(".Investments__content__option1").append(rentMP); 

  rentMP.textContent = "Si en lugar de pagar en contado mantenés tu plata en una cuenta de Mercado Pago a un rendimiento del " + rendimientoAnualMercadoPago + " anual, y mes a mes vas sacando la plata para pagar la tarjeta vas a ganar unos "  + formatter.format(sumArray(rendimientosMercadoPago)) +  " adicionales (Sin actualizar por inflación)."
  // Opción 2

  let rendimientosMercadoPago2 = [];
  ValorTotalDeLasCuotas2 = valordelacuota4Op2 * cantidaddecuotasOp2;
  for (let i = 0; i < cantidaddecuotasOp2; i+=1) {
    rendimientosMercadoPago2.push((ValorTotalDeLasCuotas2-valordelacuota4Op2*i)*rendimientoMensual__MercadoPago)
  }
  rentMp2__Title = document.createElement("h4");
  rentMp2__Title.setAttribute("class", "MP__Title2");
  rentMp2__Title.textContent = "Inversión en Mercado Pago";
  document.querySelector(".Investments__content__option2").append(rentMp2__Title);

  rentMP2 = document.createElement("span");
  rentMP2.setAttribute("class", "MercadoPago2");
  document.querySelector(".Investments__content__option2").append(rentMP2);
  rentMP2.textContent = "Si en lugar de pagar en contado mantenés tu plata en una cuenta de Mercado Pago a un rendimiento del " + rendimientoAnualMercadoPago + " anual, y mes a mes vas sacando la plata para pagar la tarjeta vas a ganar unos "  + formatter.format(sumArray(rendimientosMercadoPago2)) +  " adicionales (Sin actualizar por inflación)."
}; 
updateRendimientosFetchMercadoPago();

}

document.addEventListener("DOMContentLoaded", myFunction2())







