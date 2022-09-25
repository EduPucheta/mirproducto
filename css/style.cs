/* 
npm init
sass --watch scss/style.scss css/style.css 
*/
.input {
  top: 16px;
  left: 16px;
  width: 249px;
  height: 66px;
  background: rgba(255, 255, 255, 0);
}

#state_default__required_no {
  top: 16px;
  left: 16px;
  width: 249px;
  height: 66px;
  background: rgba(255, 255, 255, 0);
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(97, 186, 255) 0%, rgb(166, 239, 253) 90.1%);
}
html body form {
  display: flex;
  flex-direction: column;
}
html body form label {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 25px;
  font-weight: bold;
}
html body form input2 {
  display: block;
  width: 100%;
  border: 2px solid #343050;
  padding: 0.5rem;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.4s ease;
}
html body form input2::before {
  content: "$";
}
html body form button {
  width: 100%;
}
html .currencys::before {
  content: "$";
}

/*# sourceMappingURL=style.cs.map */
