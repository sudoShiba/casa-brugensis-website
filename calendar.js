// Availability calendar, filled from availability.json (built from the iCal feed on deploy)
var calBooked = [];
var calLang = "en";
var calOffset = 0; // months from the current month

function isoDate(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function isBooked(iso) {
  // a day is booked when the night starting that day is taken
  return calBooked.some(function (range) {
    return iso >= range[0] && iso < range[1];
  });
}

function renderMonth(year, month) {
  var first = new Date(year, month, 1);
  var title = first.toLocaleDateString(calLang, { month: "long", year: "numeric" });
  var html = '<div class="calMonth"><h3>' + title + "</h3><table><thead><tr>";

  // week starts on Monday (1 Jan 2024 was a Monday)
  for (var i = 0; i < 7; i++) {
    html += "<th>" + new Date(2024, 0, 1 + i).toLocaleDateString(calLang, { weekday: "short" }) + "</th>";
  }
  html += "</tr></thead><tbody><tr>";

  var blanks = (first.getDay() + 6) % 7;
  for (var b = 0; b < blanks; b++) html += "<td></td>";

  var today = isoDate(new Date());
  var days = new Date(year, month + 1, 0).getDate();
  for (var day = 1; day <= days; day++) {
    var iso = isoDate(new Date(year, month, day));
    var cls = iso < today ? "past" : isBooked(iso) ? "booked" : "free";
    html += '<td class="' + cls + '">' + day + "</td>";
    if ((blanks + day) % 7 === 0 && day !== days) html += "</tr><tr>";
  }
  return html + "</tr></tbody></table></div>";
}

function renderCalendar(lang) {
  if (lang) calLang = lang;
  var now = new Date();
  var html = "";
  for (var m = 0; m < 2; m++) {
    var d = new Date(now.getFullYear(), now.getMonth() + calOffset + m, 1);
    html += renderMonth(d.getFullYear(), d.getMonth());
  }
  $("#calMonths").html(html);
  $("#calPrev").prop("disabled", calOffset === 0);
}

$("#calPrev").click(function () {
  if (calOffset > 0) calOffset--;
  renderCalendar();
});

$("#calNext").click(function () {
  if (calOffset < 12) calOffset++;
  renderCalendar();
});

$.getJSON("availability.json")
  .done(function (data) {
    calBooked = data.booked;
    renderCalendar();
  })
  .fail(function () {
    // no data, only show the booking tool
    $("#availability").hide();
  });
