# AggreGatePresentation

## What is AggrGate?

**AggrGate is the first unlimited-source, group-oriented, shareable news aggregator.**

In the current political climate, news comes at us fast. It can feel as though we are being bombarded with stories from a myriad of sources, and keeping up with all of them can be overwhelming for even the most knowledge-hungry of people. Moreover, different sources present us with different versions of news events. For those who want to “get the big picture” on a given event, comparing and contrasting media relevant to that particular topic is essential to avoiding a fragmented understanding of that event. 

News aggregators can be a major help in processing media. *But as I looked through existing aggregators, it felt like many things were missing.* Existing aggregators organized articles by site, or by general genre of news, rather than being optimized to organize news by specific story or event. While some allowed for articles to be saved to a user’s profile, users could not group saved articles into categories. What’s more, they only culled articles from a limited list of sites. Few existing aggregators were oriented towards sharing, and the ones that were only allowed for sharing of individual articles rather than collections of them. In general, existing aggregators seemed to be oriented towards the individual, despite the fact that group discussion is a fantastic way of furthering one’s worldly knowledge. 

So, I and a friend who was similarly dissatisfied with the current news aggregator selection came up with the idea for AggrGate. For any newsworthy event of a user’s choosing, AggrGate allows the user to create a collection of relevant tweets/podcasts/videos/articles from any online sources they want, and store this collection in their account as a shareable/selectively editable “storyboard”, complete with a real-time Socket.io chat room for each board. Each board has the ability to add editing privileges for multiple users, so that media curation for a particular event can be a collaborative effort.  

AggrGate is currently deployed at https://aggrgate.herokuapp.com/ . I recommend looking at the tutorial section of this markdown before exploring the site. 

While I am satisfied with how the site is running currently, there are still many features I wish to add to it, which you can find detailed in the Future Plans section. Updates are coming slowly but steadily, as I am currently managing the site on my own while working on several other projects. 


## Technologies Used

* MongoDB 
* Mongoose
* Javascript
* JQuery
* HTML5
* CSS3
* Express
* Node.js
* Socket.io
* user authentication (session cookies)

## Browser and Screen Compatibility

### Browser Tests

The site has currently been tested on Chrome, and fully works on Chrome.

Plans to test on Firefox, Internet Explorer, and Safari are upcoming. 

The site is not currently optimized for mobile, though I have plans to put in media queries that will allow mobile use.

### Screen Compatibility Tests

When loaded properly, the page should look like this:

![Logged-out Homepage](/public/assets/images/loggedouthomepage.JPG)
**Logged-out homepage.**

![Logged-in Homepage](/public/assets/images/loggedinhomepage.JPG)
**Logged-in homepage.**

![Individual Board](/public/assets/images/indboardbig.JPG)
**Individual board (top half; the rest of the page is visible if one keeps scrolling.)**

The site is best viewed on a 1280x1024 small desktop. 

It also looks good on a 1366 x 768 Ultrabook, a 1280x800 Netbook and a 1366x768 tablet.

The site looks basically fine on a 1680x1050 large desktop, but has negligible layout kinks at the top of the individual storyboard page which need to be resolved.

The site’s layout currently needs work on a 1024x768 iPad, a 768x1280 Windows Phone, a 640x960 iPhone, a 480x800 Windows Phone, and a 320x480 Android phone. The logged-in/admin homepage looks okay (though not optimal) on these devices, but the other pages are in need of reorganization on these screen sizes. 

## The Site in Action

A tutorial video walking you through the site’s basic functionality.

https://youtu.be/0ZeBOQALJMY

## Future Plans for Improvement

### Fairly crucial:

* Add group functionality so that if the owner of a board so chooses, the board can be edited by a group of allowed users. Display the boards you can edit (but do not own) in a link on your personalized homepage.
* Add a “get history” link for each individual board’s real time chat. Less important if I also add comments.
* The site is in desperate need of media queries for abnormal screen sizes. Mostly mobile.
* Use APIs where possible to solve the issue of having to use embed links instead of plain URLs for embeddable media. APIs exist for this on Twitter, Soundcloud, and Youtube.
* Descriptions and titles for articles need to be updatable. 
* Should the real time chat be linked on the editable versions of event pages too? 
* Add buttons to each data source on the page that show comments from viewers. Anyone should be able to leave a comment.
* Maybe overhaul and use passport.js for the auth. 
* Add footer.

### Fancy/non-important:

* Get the drag and drop functionality to work. Like where you drag and drop links in and it automatically extracts the title instead of using a form. But also the functionality where you can drag and drop the order of the articles. Except I don’t know how well that last one will mesh with the scrolling.
* URL shortening algorithm for sharing. For now we just have hovertext that says, “When sharing with friends, we recommend using bit.ly to shorten links to boards so that they can fit inside of character-restricted media like Tweets.” 
* Make it so that when you click the logo on the logged-out homepage, it takes you to some page that has a detailed explanation of the site and a tutorial video. Maybe even a “future plans” section.
* Scraping button (to check for any changes in a given news article; version comparison). Although, that can wait. For a long while.
* Making an average article rating (i.e. multiple group members for a board can rate an article, and the average of all ratings is displayed as the rating.)
* “Added by: (username)” as hovertext for data on boards when group functionality is added.

## Current Bugs

You can currently go back to the logged-out homepage if you click the back button while on the logged-in homepage, even while logged in. However, I have done some research on StackOverflow about how to fix this, and it seems to be a fairly simple fix (either done with cache-clearing or forcing the page to reload). Will fix soon.
