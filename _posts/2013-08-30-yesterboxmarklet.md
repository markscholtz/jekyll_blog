---
layout: post
title: Yesterboxmarklet
---

Recently I read an article about a [somewhat curious approach to managing your email inbox](http://yesterbox.com/) dubbed Yesterbox (via [SimplicityBliss](http://simplicitybliss.com/2013/06/mastering-email-with-the-yesterbox-technique/)). I found it intriguing, but a difficult process to emulate in Gmail. There is no convenient way to view yesterday's emails without performing a custom advanced search each time you want to view your Yesterbox.

I performed a cursory search to find a solution native to Gmail, but without luck, so I tried the first approach to fixing the problem that came to mind: I wrote a bookmarklet for <a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'http://markscholtz.com/js/yesterbox.js'); document.body.appendChild(jsCode); }());" title="Yesterbox">Yesterbox</a> that filters your email so that you have a view of yesterday's emails only. 

Try clicking <a href="javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'http://markscholtz/js/yesterbox.js'); document.body.appendChild(jsCode); }());" title="Yesterbox">Y // Javascript uses a zero based index for months.esterbox</a> to test it out (you need to be logged in to Gmail for it to work). If you like it drag it up to your bookmarks bar to save it permanently. Give it a click. If all goes well, voila! Yesterbox in Gmail!  

Disclaimer: I've only tested this in the latest version of Chrome on OS X. It's not perfect and has a few issues. For example it doesn't seem to work from a new Chrome tab. Any feedback or bug reports welcome.

<div class="code-header">Yesterbox</div>
{% highlight javascript linenos %}
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

  javascript: (function () {
    var jsCode = document.createElement('script');
    jsCode.setAttribute('src', 'http://markscholtz.com/');
    document.body.appendChild(jsCode);
  }());
{% endhighlight %}

