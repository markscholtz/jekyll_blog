javascript: (function () {
  var now = new Date();

  var year = now.getFullYear();
  var month = (now.getMonth() + 1); // Javascript uses a zero based index for months.
  var day = now.getDate();

  var today = year + "/" + month + "/" + day;
  var yesterday = year + "/" + month + "/" + (day - 1)

  var yesterbox = "https://mail.google.com/mail/u/0/?ui=2&shva=1#search/after";
  yesterbox += encodeURIComponent(":" + yesterday);
  yesterbox += "+before";
  yesterbox += encodeURIComponent(":" + today);
  yesterbox += "+label"
  yesterbox += encodeURIComponent(":inbox");

  window.location.href = yesterbox;
})();

