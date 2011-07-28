I started investigating applescript today. The problem I was trying to solve was as follows. 

I’ve recently disabled the flash plugin for Chrome as it has a fairly noticeable effect on performance when running on a Mac. For situations where I require flash, I have the latest developer build of Chrome (Canary) installed. This has worked fine up until now, but the process of opening Canary to view the current webpage was becoming quite tedious (command-l to access the address bar in Chrome -> command-c to copy the current url -> ctrl-space (my custom shortcut) to fire up Alfred -> start typing “canary” to find the app -> return to fire up the app -> command-v t paste the url into Canary’s address bar -> and finally return to go to the site in question). 

I have read about applescript a bit before and felt that it was finally time to try it out. A few useful articles later and I had the following script up and running:

*** script goes here ***

So that’s nice, but how do I run this thing? Enable the applescript menubar item and fanny about with the mouse? I think not. Create an Automator workflow to fire off the script and then assign a keyboard shortcut to it in System Preferences? There must be a better way. And there is, thanks to FastScript pointed out to me by ***the author*** of this article. Now it’s far less painful than setting up and Automator workflow and configuring a keyboard shortcut to have an application specific shortcut to a custom script. 

Jolly good show.