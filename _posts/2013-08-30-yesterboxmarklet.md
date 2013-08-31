---
layout: post
title: Yesterboxmarklet
---

Recently I read an article about a [somewhat curious approach to managing your
email inbox](http://yesterbox.com/) dubbed [Yesterbox](http://yesterbox.com/)
(via
[SimplicityBliss](http://simplicitybliss.com/2013/06/mastering-email-with-the-yesterbox-technique/)).

The concept, as summed up by Tony Hsieh, Yesterbox's creator, is simple yet
powerful:

>each day your to do list is yesterday's inbox instead of today's inbox

Now you have a finite list of emails to reply to each day :)

It sounded intriguing so I thought I would give it a try. It quickly became
apparent, however, that it would be difficult to emulate in Gmail (my email
client of choice) as there is no convenient way to view yesterday's emails
without performing a custom advanced search each time you want to view your
Yesterbox.

The closest I managed to get was to perform an advanced search, filtering by
"Date within 1 day of yesterday". Unfortunately this resulted in emails from
the day before and after yesterday being included in the search results.

<div class="article-image">
  <img alt="Desired search"
       src="/images/posts/2013-08-30-yesterboxmarklet/desired-search.png">
  <div class="article-image-caption">
    The search I wanted to perform with Gmail's advanced search
  </div>
</div>

<div class="article-image">
  <img alt="Closest search"
       src="/images/posts/2013-08-30-yesterboxmarklet/closest-search.png">
  <div class="article-image-caption">
    The closest, actual search I could perform using Gmail's advanced search interface
  </div>
</div>

I performed a cursory search on the internet to find a solution native to
Gmail, but without luck, so I tried the first approach to fixing the problem
that came to mind: I wrote a <a href="javascript: (function () { var jsCode =
document.createElement('script'); jsCode.setAttribute('src',
'http://markscholtz.com/js/bookmarklets/yesterbox.js');
document.body.appendChild(jsCode); }());" title="Yesterbox"> bookmarklet for
Yesterbox </a> that filters your email so that you have a view of yesterday's
emails only.

Try clicking <a href="javascript: (function () { var jsCode =
document.createElement('script'); jsCode.setAttribute('src',
'http://markscholtz/js/bookmarklets/yesterbox.js');
document.body.appendChild(jsCode); }());" title="Yesterbox">Yesterbox</a> to
test it out (you need to be logged in to Gmail for it to work). If you like it
the results and want to try out Yesterbox, drag the bookmarklet link up to your
bookmarks bar to save it permanently. Give it a click. If all goes well, voila!
Yesterbox in Gmail!

Disclaimer: I've only tested this in the latest version of Chrome on OS X. It's
not perfect and has a few issues. For example it doesn't seem to work from a
new Chrome tab. Any feedback or bug reports welcome.

And here is the code for those interested:

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

