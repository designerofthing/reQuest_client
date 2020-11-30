# reQuest_client

[![Netlify Status](https://api.netlify.com/api/v1/badges/7502e25d-7b5d-4036-9228-b6e5ec87edbc/deploy-status)](https://app.netlify.com/sites/requestnow/deploys)

https://requestnow.netlify.app/

Final project of April 2020 Cohort

![Img](https://i.imgur.com/Z9LBbne.png)

An app for people helping each other, paying with in-app currency (karma points). So in order to have people help you with stuff, you need to help others with stuff.

User can post a request for a certain task to be done. User can respond to requests and say that they can do it. They both agree on the reward. When the task is done the user that requested it pays the user that performed the task with in-app currency (karma points). Afterwards they can rate each other, so that trust-worthy people will get higher rating. A user needs an account in order to post and respond to requests.

User can browse the feed of tasks in the local area, by newest or category or....

```
As a community of people in the local area
In order to help each other within the area, making use of the skills and tools that exist in the area
People can register for an account to connect *people in need of help* with *people who has the resources and ability to help with the specific task*.
```


## Features
### MVP
* Full-feature Desktop app
	* Basic request/help flow
		* Including automatic rewarding
	* Geolocation (exclusively - you only see local stuff)
	* rating (but not commenting)
	* browsing (but not searching)
	* profile page (but not public)
* Partial-feature Native app
	* Your active Quests and reQuests
	* Requester/Helper interaction
	* Your points
* API app

* authorisation
* geolocation
* in-app-currency and transferring
* messaging
* websockets (for real-time-chat (and push notifications?))
* push-notifications
* well-implemented categories
* rating

### Optional / extra
* profile page ( show skills, tools, location... )
* search functionality
* add picture / video
* UI translation
* each post can have multiple tags
* reviewing/commenting
* bidding / auctioning
* expiry date on tasks
* collaboration with Ica or Biltema for users to be able to redeem points for rabattkuponger
* collaboration with charity for earning points
* ads - have users watch ads for points
* Oauth - log in with Facebook / Google
* Bonus points for completing parts of profile page
	
## Sprint planning
	* Decide MVP desktop
		* Basic request/help flow
			* Including automatic rewarding
		* Geolocation (exclusively - you only see local stuff)
		* rating (but not commenting)
		* browsing (but not searching)
		* profile page (but not public)
	* MVP mobile:
		* THE THINGS THAT ON THE 'YOUR' PAGE
	 	* Except Profile page - but the points always visible 
		* User interaction
		* 
	* Complete Lo-fis and start adding stuff to the PT Board
	   then:
	* Decide which stories are most important

### Define epics:
#### User can search for quests (browse and search)
* MVP: by category (one per request)
* MVP: recently posted (newest)
* Extra: Sorting: popular (most people responded to), reward
#### User can request help (create a request)
#### Requester and Helper can interact
#### Requester and Helper can communicate
* Real-time chat
* Helper can offer help, for either the reward that's been set, or lower (..or higher..)
* Decide which one will help
* Give the location
* Agree on reward
* Agree on time
#### Reward system
* Requester can reward helper
* Helper can receive reward
* The reward points are reserved when a request is created
#### Only accepted Helper can see sensitive information
* Larger area at first, then exact address
* How do we show location? On a map? Just text?
* Phone number
#### Users are associated/connected with their local area
* Are you strictly limited or can you e.g. browse the whole country? 
* Some quests might be unrelated to location

### discussion/extra features:
* Rewards coming in to the system
	* Helping charity
	* Signup bonus
	* Users watch ads
* Give away points? To friends in desperate need. Limit amounts in that case.
* Request help for others?
* tools / requirements
	* text analysis?
* Sanitise requests through text and picture analysis
* Include pictures?
* chat based on contact list or on request?
* comments is extra feature (we don't need public profile before we have comments)
* private offers to your favourite helpers?

## The flow
#### post a request
* what you need help with
* where you need the help
* when? expiry date? when in the day?
	* options: before / after / between / at exactly - refactor to between
* fixed reward, as it's own input (negotiable as later feature)
* reward points are reserved - can't make another request unless you have more points for it
* EXTRA: require picture of completed quest
* main tag / category:  - choose from predefined tags
* additional tags / category - choose from predefined tags, can choose multiple
#### look for quests - browse and search
* see the headline, reward and more?
#### click on a specific quest to expand
* see full information and contact button
#### contact
* get to send a message saying something, suggest a reward
#### requester gets many responses
* list/collection with pending helpers, below or close to the specific pending request
* when clicked. opens chat window with that helper, option to accept or decline
#### helper is happy with the quest and checks OK - I'm up for it
#### requester is happy with the helper and checks OK - you're the one
* helper gets notification
#### quest is completed
* both mark 'quest completed' when job is done. Rewarding is done automatically - should be visible
* opportunity for rating after job is completed (inside of the chat window) (Comments as extra feature)
	* should be visible in the request and the response (along with amount of ratings)

* what happens if you don't do the quest? - no points given, no work done. bad rating.


## The profile page
* Not public, to begin with
* Picture
* Name
* Address
* Phone number
* Skills & tools
