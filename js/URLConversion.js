var InputURL;

function URLConversion() {
  InputURL = Number(document.getElementById('inputURL').value);
  var a = InputURL.replace(/https:/ / www.dropbox.com / g, "https://dl.dropboxusercontent.com");

  var b = a.replace(/?dl=0/g, "");

  document.getElementById("inputURL").value = b;
}
