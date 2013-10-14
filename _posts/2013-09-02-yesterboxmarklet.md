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

Excellent, a finite list of emails to reply to each day :)

This idea sounded intriguing to me, so I thought I would give it a try. It
quickly became apparent, however, that it would be difficult to emulate in
Gmail (my email client of choice) as there is no convenient way to view
yesterday's emails without performing a custom advanced search each time you
want to view your Yesterbox.

The closest I managed to get was to perform an advanced search, filtering by
"Date within 1 day of yesterday". Unfortunately this resulted in emails from
the day before and after yesterday being included in the search results. Not
what I wanted.

<div class="article-image">
  <img alt="Desired search"
       src="/images/posts/2013-09-02-yesterboxmarklet/desired-search.png">
  <div class="article-image-caption">
    The search I wanted to perform with Gmail's advanced search
  </div>
</div>

<div class="article-image">
  <img alt="Closest search"
       src="/images/posts/2013-09-02-yesterboxmarklet/closest-search.png">
  <div class="article-image-caption">
    The closest, actual search I could perform using Gmail's advanced search
    interface, which seems to actually be buggy
  </div>
</div>

<p>
  I then performed a cursory search on the internet to find a solution native to
  Gmail, but without luck. The first approach to fixing the problem that came to
  mind was writing a bookmarklet. So I did that. I like to call it
  <a href="javascript:window.open('http://markscholtz.com/yesterboxmarklet.html');void(0)" title="Yesterboxmarklet">Yesterboxmarklet</a>,
  a bookmarklet that filters your email in Gmail so that you have a view of
  yesterday's emails only.
</p>

Try clicking
<a href="javascript:window.open('http://markscholtz.com/yesterboxmarklet.html');void(0)" title="Yesterboxmarklet">Yesterboxmarklet</a>
to test it out (you need to be logged in to Gmail for it to work). If you like
the results and want to try out the Yesterbox approach for a while to see if it
suits you, drag the bookmarklet link up to your browser's bookmarks bar to save
it permanently. Give it a click. If all goes well, voila!  Yesterbox in Gmail!

<p class="article-disclaimer">
  <em>Disclaimer</em>: I've only tested this on the latest versions of Chrome, Safari
  and Firefox on OS X. It's not perfect and has a few issues. For example,
  searches on the first day of the month work, but the "after" day in the date
  filter is 0, not 1. It also doesn't work on Chrome's new tab page, which is a
  result of security measures put in place by the Chrome team. Also, this
  bookmarklet went through many iterations and was more a pain to write than I
  thought.  Currently it just opens a new window pointing to a page on this
  site that runs the below code. Any feedback on this approach or bug reports
  are most welcome.
</p>

<div class="code-header">Yesterbox</div>
{% highlight javascript linenos %}
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
{% endhighlight %}

