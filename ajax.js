function showList(str, typeSearch) {
  if (str == "") {
    document.getElementById('txtHint').innerHTML = "";
    return;
  }else {
      if (window.XMLHttRequest) {

      }
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(typeSearch == "list"){
            printArray(this.responseText);
          } else {
            console.log(this.responseText);
            parseJson(this.responseText);
          }
        }
      }
      xmlhttp.open("GET", "ajax.php?q=" + str + "&type=" + typeSearch, true);
      xmlhttp.send();
  }
};

function printArray(arr) {
  let landen = JSON.parse(arr);
  let txt = "";
  for (var i = 0; i < landen.length; i++) {
    txt += "<p onclick=land(" + landen[i+1] + ")>" + landen[i] + "</p><br>";
    i += 1;
  }
  txtHint.innerHTML = txt;
};

function parseJson(result) {
  let result = JSON.parse(result);
  let text = "";
  text += "<h1>" + result[1] + "</h1>";
  text += "<p>Code: " + result[0] + "</p>";
  text += "<p>Name: " + result[1] + "</p>";
  text += "<p>Region: " + result[2] + "</p>";
  text += "<p>SurfaceArea: " + result[3] + "</p>";
  text += "<p>IndepYear: " + result[4] + "</p>";
  text += "<p>Population: " + result[5] + "</p>";
  text += "<p>LifeExpectancy: " + result[6] + "</p>";
  text += "<p>GNP: " + result[7] + "</p>";
  text += "<p>GNPOld: " + result[8] + "</p>";
  text += "<p>LocalName: " + result[9] + "</p>";
  text += "<p>GovernmentForm: " + result[10] + "</p>";
  text += "<p>HeadOfState: " + result[11] + "</p>";
  text += "<p>Capital: " + result[12] + "</p>";
  text += "<p>Code2: " + result[13] + "</p>";

  txtHint.innerHTML = text;
};

function land(land){
  showList(land,'answer');
}
