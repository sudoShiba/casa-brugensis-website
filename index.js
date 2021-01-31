function copyToClipboard(id) {
  var from = document.getElementById(id);
  var range = document.createRange();
  window.getSelection().removeAllRanges();
  range.selectNode(from);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

const date = new Date();
const year = date.getFullYear();
const span = document.getElementById("year");
span.innerHTML = year;