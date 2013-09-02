(function () {
  var now = new Date();

  var year = now.getFullYear();
  var month = (now.getMonth() + 1); // Javascript uses a zero based index for months.
  var day = now.getDate();

  var today = year + "/" + month + "/" + day;
  var yesterday = year + "/" + month + "/" + (day - 1)

  var yesterbox = "https://mail.google.com/mail/u/0/?ui=2&shva=1#search/";
  yesterbox += "+in";
  yesterbox += encodeURIComponent(":inbox");
  yesterbox += "+after";
  yesterbox += encodeURIComponent(":" + yesterday);
  yesterbox += "+before";
  yesterbox += encodeURIComponent(":" + today);

  window.location.href = yesterbox;
})();

