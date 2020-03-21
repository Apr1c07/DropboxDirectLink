var InputURL;

function URLConversion() {
   alert('JavaScriptのアラート');
  InputURL = document.getElementById('inputURL').value;
  var a = InputURL.replace("https://www.dropbox.com", "https://dl.dropboxusercontent.com");

  var b = a.replace("?dl=0", "");

  document.getElementById("inputURL").value = b;
   document.getElementById("inputURL").value = "aaaaaaaaaaaaa";
}
