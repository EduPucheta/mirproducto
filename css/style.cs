/* 
npm init
sass --watch scss/style.scss css/style.css 
*/
.input {
  /* Button */
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  color: black;
  width: 100%;
  height: 44px;
  /* Grey/Grey-100 */
  background: #F2F2F2;
  /* Grey/Grey-200 */
  border: 2px solid #E6E6E6;
  border-radius: 10px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.input:active {
  /* Frame 1 */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;
}
.input:invalid {
  border: 2px solid #CC3535;
  /* Alert-Shadow */
  box-shadow: 0px 0px 0px 3px #FAEBEB;
  border-radius: 10px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

* {
  margin: 0;
  padding: 0;
}

html {
  min-height: 100%;
}
html body {
  margin: 25px;
  max-height: 70%;
  font-family: "Inter";
  background-color: #F1F1FA;
}
html body h2 {
  margin-bottom: 10px;
}
@media (min-width: 1025px) {
  html body {
    /* big landscape tablets, laptops, and desktops */
    background-color: #4535CC;
  }
}
@media (min-width: 1025px) {
  html body .cuotas__app {
    /* big landscape tablets, laptops, and desktops */
    max-width: 1000px;
    margin-top: 50px;
    margin-left: 25%;
    margin-right: 25%;
    background-color: #F1F1FA;
    padding: 5%;
  }
}
html body .cuotas__app form {
  display: flex;
  flex-direction: column;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  /* The switch - the box around the slider */
  /* Hide default HTML checkbox */
  /* The slider */
  /* Rounded sliders */
}
html body .cuotas__app form .label {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
}
html body .cuotas__app form .label > * {
  margin: 10px 0;
}
html body .cuotas__app form .advaced_options__withoptions .advaced_options {
  text-align: left;
  font-size: 12px;
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
}
html body .cuotas__app form .advaced_options__withoptions .advaced_options p {
  align-self: center;
  margin-left: 5px;
}
html body .cuotas__app form #impuestosellos {
  display: none;
  flex-direction: row;
  justify-items: baseline;
  margin-bottom: 5px;
}
html body .cuotas__app form #impuestosellos #detalle {
  font-size: small;
  margin-left: 5px;
}
html body .cuotas__app form .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
html body .cuotas__app form .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
html body .cuotas__app form .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
html body .cuotas__app form .slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
html body .cuotas__app form input:checked + .slider {
  background-color: #2196F3;
}
html body .cuotas__app form input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
html body .cuotas__app form input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
html body .cuotas__app form .slider.round {
  border-radius: 34px;
}
html body .cuotas__app form .slider.round:before {
  border-radius: 50%;
}
html body .cuotas__app form button {
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  width: 100%;
  height: 44px;
  left: 16px;
  top: 16px;
  /* Primary */
  background: #4535CC;
  /* Primary */
  border: 2px solid #4535CC;
  border-radius: 10px;
  color: #FFFFFF;
  cursor: pointer;
}
html body .cuotas__app form button:disabled {
  box-sizing: border-box;
  /* Auto layout */
  /* Primary Dark */
  background: #372AA3;
  opacity: 0.4;
  /* Primary Dark */
  border: 2px solid #372AA3;
  border-radius: 10px;
}
html body .cuotas__app #resultados {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
html body .cuotas__app #resultados #mensajederesultado3 {
  color: green;
}
html body .cuotas__app #resultados #mensajederesultado4 {
  color: red;
}
html body .cuotas__app #resultados #resultado__detalle {
  font-size: small;
}

/*# sourceMappingURL=style.cs.map */
