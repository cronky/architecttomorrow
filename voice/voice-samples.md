# Ollie Cronk: voice samples (2011 to 2022)

Thirteen pieces written and published by Oliver (Ollie) Cronk before December 2022, taken from the cronky-dot-net and architecttomorrow repositories. They are reference material for voice, rhythm and structure only. The facts, products and job titles in them are of their time and should not be reused as current.

Text is as published, typos included. Images, embeds and link URLs have been removed.

| Date | Title | Words |
|---|---|---|
| 2011-09-22 | Is "big bang" IT dying? Replaced with iterative approaches and best of breed Open Source? | 762 |
| 2013-06-28 | The importance of being courageous in IT; balancing between strategy and responsive delivery | 1443 |
| 2015-11-24 | Apps are dead! Long live seamless experiences! | 901 |
| 2016-02-03 | EAs: are you providing value for money? | 785 |
| 2016-09-16 | The Balancing Act of Architecture | 799 |
| 2017-03-17 | Are Autonomous Electric Vehicles the future of Personal Transport? | 1309 |
| 2017-06-05 | Ecosystem Architecture is making us rethink Enterprise Architecture | 460 |
| 2018-01-08 | Beyond APIs — Why Open Banking really matters | 1080 |
| 2019-08-12 | Business Social: getting the best out of LinkedIn without getting into trouble! | 1440 |
| 2021-03-05 | Where are your brakes? | 917 |
| 2021-11-10 | Architecture of Tomorrow | 513 |
| 2022-04-01 | Arabian Insights & Nordic Nostalgia | 1442 |
| 2022-11-13 | Update on the community and recent episodes | 592 |

---

## Is "big bang" IT dying? Replaced with iterative approaches and best of breed Open Source?

*Published 2011-09-22. Source file: `cronky/cronky-dot-net/_archive/2011-09-22-is-big-bang-it-dying-to-be-replaced-by-iterative-approaches-and-best-of-breed-open-source.md`*

This is an article I have been stewing on for a while and having recently changed from a consultancy largely working on public sector IT projects back to a private sector IT department its given me several different view points.
I also recently attended the excellent Zapthink SOA and Cloud course in Amsterdam - so I am now a Licensed/Certified Zapthink Architect!
**Time for a change?**
In the continued difficult financial climate will organisations continue to have the appetite and budget to invest in large scale greenfield COTS (Commercial Off the Shelf) IT projects and licensing? e.g. Large scale commercial enterprise systems such as ERP? And what's the next success for Open Source Software (OSS)?
Is the future a more incrementally / agile delivered open source, best of breed systems? Rather than big monolithic, generic packaged software that does everything ok but doesn't excel at much if anything. And worst of all, often requiring the business to change its processes to fit the software. Of course the lines between commercial software and Open Source are becoming more blurry - with "Commercial Open Source" (in other words commercially backed and supported).
I am thinking here of solutions that are developed on Open Standards / common platforms (eg J2EE) using common / standards based middleware and the XML family of technologies to connect them together. Of course there is a risk that if you pick and choose lots of niche software that serves its job well then you can end up with a big mess of spaghetti integration and duplication. But that is where effective Architecture, standards and Governance comes in; to keep things on the right track and aligned with business priorities.
Certainly the agile (iterative) methodology seems to be taking hold in larger companies, although waterfall still seems to be favoured in government - due to the perception that it will result in a fixed cost. Unfortunately too often it doesn't deliver successful results as its too rigid, ends up costing far more through cunning use by the vendor of change control and depending on the project the initial build can be as little as 10% of the total costs in any case.
What about the cloud? Isn't that supposed to reduce costs...
I think many in the IT industry (well some vendors anyway) right now would argue that the answer to this is delivery via the cloud using a pay as you need it service based model (to get away from having to make the big upfront investment in hardware and licensing). I guess this is an option but I think most large businesses (who have the budgets for the larger IT projects) are looking at the cloud quite sceptically, waiting for it to mature beyond e-Commerce and online type applications and add the required security and reliability that is needed. Keeping things in their own data centre and exploiting virtualisation to optimise costs at the Infrastructure layer. Cloud as your Disaster Recovery (DR) / Data Archiving environment looks like one of the most compelling use case so far.
I am seeing some suggestions that organisations would like to adopt this approach in some areas (eg Integration). In fact one of the places I worked in the past built its own home grown ERP / eLearning platform on Open Source. In my current role we are looking at Open Source alternatives - particularly for Integration and Infrastructure glue.
Its interesting to see how the adoption of Open Source has matured - from just the Linux OS used for servers, Linux + Apache for static web moving towards LAMP and other Apache projects such as Tomcat etc even more so with "Web 2.0". Data Integration / ETL is a big area for OSS - eg Talend, ActiveMQ, Glassfish. J2EE is a big success story too.
And of course now with Android OSS has finally come into contact with the casual end user (rather than the techies like me that run Linux on the desktop). This was brought home to me the other day when a completely non IT friend showed me his Motorola Xoom and was extolling its usability etc.
Interesting times. Wonder where OSS will infiltrate next? I guess the answer is probably wherever it can disrupt the marketplace in a engaging way for the consumer, or with a commercial model that is compelling to business/IT decision makers.

---

## The importance of being courageous in IT; balancing between strategy and responsive delivery

*Published 2013-06-28. Source file: `cronky/cronky-dot-net/_archive/2013-06-28-the-importance-of-being-courageous-in-it-balancing-between-strategy-and-responsive-delivery.md`*

*Disclaimer: This doesn't really describe a single organisation that I have worked at—it's a collective summary of my experience of working in IT (and that of present and former colleagues) working in medium and large sized organisations. Also the core message probably applies to many other business areas and not just IT in the value of thinking strategically (and the value of Enterprise Architecture).*
Many of you reading this working in an organisation over a few hundred people will recognise that IT is often not able deliver effectively. Either in its ability to provide what the business needs today or its ability to be adapted quickly to the demands of the markets it operates in. Often IT systems are fragmented, siloed, and un-able to share data with each other. This leads to horrible/bizarre manual processes (such as manual re-keying of information) to allow business units to work effectively with each other, cross-functionally. It often seems too much of a bold move to take step back and plan or focus on internal IT improvements when there is so much demand for business driven change that needs to be done yesterday.
The key thing that needs to happen to most organisations IT landscape is that it needs to be simplified. The horrible evolved mess needs to be analysed and worked through to understand how to make it simpler. Some technical teams may criticise architects for wanting to make the IT landscape "look prettier". However I believe that simplicity = ease of understanding, ease of use, faster to change and crucially lower cost to operate. All good things surely? Sometimes a team mentality might be to keep things as complex, messy or misunderstood as possible - so that they are "indispensable". But that also means they can't really be promoted. In technical terms - just like you can have very bad messy programming code - the same applies at the IT landscape level across all the different systems and teams.
I believe a lot of the problems are down to the fact that IT systems tend to evolve rather than being properly planned. Of course there is going to be a degree of emergence when organisations are big and complex and not everything can be planned for; but to me if feels a little like many organisations are in a hole and keep digging themselves deeper. By this I mean that due to the lack of roadmapping and thinking more end to end about what data, systems, processes and skills are needed it results in more and more tactical workarounds to keep delivering. Each time a new solution is added it just makes things more complex and harder to change in the future.
Its easier to be reactive and been seen to deliver, deliver, deliver than think strategically alongside delivery. Also thinking strategically is hard work. It takes time to understand the bigger picture, abstract problems, create models and think about where things should go and how they should work. Not only that but its also hard to think about how to transition from the mess you are in today to your target state once you have come up with it.
I fear this is one of the reasons IT professionals can become reactive - simply responding to the next request from the business to deliver something as quickly as possible. And of course delivering for the business isn't a bad thing - just if it's done in a way which doesn't think about the future state of the organisation or the architecture where problems creep (or flood!) in over time.
IT personnel can promoted to recognise their loyalty (and because of the detailed understanding of the mess that has evolved, and they may even be a one man dependency) rather than their ability to take the next step up (and think more strategically). Sometimes this means that they still have to do elements of their previous roles and don't actually have time to do their new roles properly. So all this compounds the problem—as they often created the problems in the first place they may not radically change approach—if they even recognise some of the problems they need to be brave to admit they made mistakes in the past that need to be put right. That is if they even have the time to think about them - their may simply be fighting the next fire.
We'll fix that in the next phase". How often are promises made to unpick tactical workarounds and technical debt later on but then never happens.
"This is just how it works around here - we don't have time to improve our processes and systems as we are too busy delivering"
"Our funding is based on a 12 month period - all work needs to deliver by the end of the year - we cannot have projects that go over multiple financial years its just not how the planning cycle works".
"We don't ever decommission anything - we just add new systems but as we don't know if the old ones are still used for something business critical we leave them alone."
IT costs then simply build up over time to a point where almost all the budget is spent on running stuff that the business is already reliant on and there is then less and less time or money to work strategically. Leading to a vicious cycle.
What is the answer? Well of course there isn't a magic bullet but I do think some maturing is needed - becoming more confident in pushing back on certain things in order that a better long term path can be taken. Becoming confident in challenging not only the business but technology management. Making sure that business sponsors prioritise and not just claim that everything is top priority and needs to be done now. But also thinking about the full lifecycle of a solution - not just implementing it rolling it out and then letting it rust. Very few people seem to consider how long systems will be used for - 5 years? 10 years? When should you consider to retire an application? Talking about retirement of a system you are just rolling out seems to be taboo.
Personally I believe you have to try and make time to consider the possibilities of new technology or process approach on your organisation or department - not because you want the technology on your CV but because you can see clear business value - that you can articulate to others. Sell your ideas, if you have to use some of your own time to create roadmaps - they don't have to be long and complex they can be 1 or 2 page diagrams (showing as is and to be; along with supporting business justification).
Explain the risks of taking a reactive approach - one man dependencies are a massive operational risk for example. Not considering how a solution will scale to meet demand is a reputational risk waiting to happen - run through what if scenarios with your stakeholders to get them to understand why things need to change and/or why investment in internal improvement is crucial. The improvement to IT employee engagement can be a key selling point too - particularly if you have a churn issue in your IT team - ask yourself why people aren't happy and engaged.
And of course its a balance between getting something out the door quickly which might open up a market opportunity, being engaged with the business and longer term simplicity. You can fall into a trap of being very academic by following architectural frameworks to the letter and getting very theoretical (although a dose of that - i.e. 1-2 determined, principled, purist architects to pull things in a different direction can be healthy for very immature organisations).
One thing I would say is don't give up on trying to improve - even if its just incremental improvements - maybe to the data models to begin with, introducing a principle, improving documentation, making something more portable or secure (as its generally the non functional requirements like security and scalability that suffer). Think about what the biggest impact will be to the organisation (and in fact what will free up technology team time so you can pick off the next challenge?)
You should reach a tipping point where you can start to deliver things more consistently and with a high level of quality - and then it will then click with everyone else and people will wonder why they didn't plan more and consider things over a longer time frame before!
Hopefully some food for thought anyway...

---

## Apps are dead! Long live seamless experiences!

*Published 2015-11-24. Source file: `cronky/architecttomorrow/_archive/2015-11-24-apps-are-dead-long-live-seamless-experiences.md`*

Whilst they offered a massive leap forward in User Experience mobile and tablet Apps as **you know them** **today will die and they will change sooner than you think**. The somewhat clunky way you launch and interact with Apps from a horrible long list of icons will drastically change. And this change will only accelerate as we connect more devices through the Internet of Things / Everything revolution.

**Why?** It is the basket of remotes problem. Or the "screens and screens of silo'd apps" problem.

Why do I want a TV remote, a DVD player remote, HiFi remote etc etc - what I want is an integrated solution.

(The above is taken from a paper by the AllSeenAlliance)

And in fact do I even want a remote at all? I'd like my devices and environments to respond to what I am doing.

Some of this can be achieved today via a solution called "If This Then That" (IFFTT) and also Near Field Communications (NFC). IFFTT is essentially a simple rules engine. You tell it the conditions and it can fire up something in response. NFC allows you to touch things with your phone which then trigger actions. Real world use cases today are Oyster or Apple Pay - but I think these are scratching the surface - and require you to get out your phone or card for them to work.

### **How is this really going to happen?**

I see some big shifts on the horizon:

1. Smart Agents / Digital Assistants going mainstream
2. "Enchanted Objects" and "Responsive Environments" (this goes beyond just wearables)
3. Open standards based integration along with Security and Privacy frameworks

### **Smart Agents or Digital Assistants:**

Think the next evolution of Siri, Cortana or Google Now. The ability to tell your phone what you want to do and have it present you with the information - but for any question (unlike the limited capabilities of the current generation of assistants). This is Smart Agent 2.0. Further out is Smart Agent 3.0 which you can think of as the Human brain cloud hybrid I talked about in my previous post. As in rather than saying "OK Google..." we will think it. As this will get around the fact that we will be self concious about talking to ourselves - which will somewhat limit the uptake of the current generation of Agents.

### **Enchanted Devices and Responsive Environments**

I think this is where the Internet of Things has the power to change the game. As we replace our possessions as they wear out we will replace them with versions designed for the era of always on connectivity. They will use sensors to detect the world around them and will help us shift our behaviour.

To see the kind of thing I really mean here is a great video by David Rose on Enchanted Objects: Design, Human Desire and the Internet of Things:

### **Next generation standards based integration along with Security and Privacy frameworks**

But this isn't just about the user interface or user experience, its about transforming the less sexy backend systems too. To power this and truly break down the silos it is going to require significant integration and open standards. This will facilitate different devices to communicate with each other and with the people using them (via the devices they are wearing or holding).

The expensive, proprietary integration technology generally used within large organisations isn't likely to work well here. It needs to be cheap, open, lightweight and event driven. Things like MQTT,Microservicesand APIs are going to be really key. This will need true decoupling (as in consumers and providers know very little about each other and yet have the ability to communicate effectively).

And I really shouldn't mention this last but; in order to build trust, control security and deal with privacy; these concerns are going to need to be built in from the start. This means into the agents, devices and integration platforms. I really strongly believe that government has a big role to play here - both in terms of funding research and academia into this problem space but also in key pieces of regulation to ensure individuals are protected. Why Government? If its left to the private sector I do not believe market forces will drive the right outcomes. Solution providers generally compete rather than collaborate, and in the race to deliver first corners will be cut in security and privacy.

I am working on an attempt at a holistic reference architecture and capability model for the Internet of Things that cuts across the different silo'd use cases that people are talking about today. I see this as being a key first step before solutions that solve these challenges can be realised. Once I've made some progress I'll share it.

In the meantimeyou might be interested in some of my other posts. And I have now written a follow up on the future of Human Computer Interaction.

**Update:** Interestingly a few days after I posted this a TechRadar article entitled "Goodbye apps hello smart agents are you ready for the post app world" was published which includes recent research on this topic. Turns out they (TechRadar) have been saying something similar to this since 2014.

And here is a relevant tweet I came across from the Gartner ITxpo Symposium:

---

## EAs: are you providing value for money?

*Published 2016-02-03. Source file: `cronky/architecttomorrow/_archive/2016-02-03-eas-are-you-providing-value-for-money.md`*

Whilst this is an article aimed mainly at an EA (Enterprise Architecture) audience I am sure many of the principles apply elsewhere for those working in technical strategy roles. Also note **this not specific to my current or any previous place I've worked** - it’s a generalisation of what I have seen (and heard about) across different verticals.

Enterprise Architects have a challenging role; EAs need to think expansively about:

- Current business and technology challenges
- Future directions of the business and the overall vertical market(s)
- Disruptive forces (both in terms of technology trends and new business models)

Whilst engaging with a variety of different types and shapes of business and technical stakeholders (often including vendors). In order to do this successfully they need to be connected to (and influence) the day to day technology transformation and project delivery agenda too - or they risk becoming classic "Ivory Tower" Architects.

Here are some questions to ask yourself (which I often ask myself to keep myself honest) in order to assess whether you are providing full value to your organisation:

> What [re-usable] assets am I creating?

I'm not just suggesting the creation of documents and output purely to try and justify the existence of EA here. But it is important that it is clear to stakeholders what EAs deliver to the organisation (beyond consultancy and guiding services to projects and programmes).

> How much of my time is being spent on strategy vs change activity?

If you have to do timesheets this one is relatively easy to assess. And of course this will depend on where you have been asked to play across the spectrum of strategy to project / business to technology dimensions.

> Would someone in another organisation with my job role be undertaking this kind of work? Are leaders in my field working in this way?

This is where it helps to use things like LinkedIn forums and contacts through BCS to benchmark yourself against peers outside the fishbowl you are in. After all Architecture is often reflective of the culture, pressures and structures in place at the organisation.

> What am I learning? How I am developing myself or others?

Doesn't always have to be technology related (I like to balance between business and keeping on top of tech trends) - could be consulting skills or behaviours. Doesn't always have to be all about me either - I am supporting the development of others through coaching or support?

> How many challenging conversations am I having?

If I am not getting push back from stakeholders then I am probably not being bold or disruptive enough. This applies equally to Vendors, project teams, business owners etc I am influencing.

Many EAs progress to the role via Solution Architecture and the danger is that they stay in the comfort zone of solution delivery. After all reactive solution delivery is much clearer place to be than the strategic thinking that is required to create roadmaps and strategy.

But crucially EAs mustn't get caught up in the "Project Cult" as a "super senior Solution Architect" - or least not long term (I do appreciate there are times where the business needs a seasoned IT pro to guide or rescue a strategic piece of change). Most organisations are targeted to be "billable" / capex or project utilised and often this extends to the EA teams too. But my argument against this is there are plenty of people delivering change - the trick is to achieve a healthy tension between the guiding strategic thinking and governing delivery against that strategy. After all if there is clear strategy and reference architecture for projects to follow project delivery should be far smoother/quicker and programmes should build on and build out enterprise capability. But someone needs to be given the latitude (and budget!) to create that framework of guiding material.

**Achieving this balance is tricky**. Too much strategy disconnected from delivery creating PowerPoint slides (the "PowerPoint Architect") from on high won't deliver value - as the strategy won't be realised (or it won't be realisable as it is not grounded in reality). Getting stuck in with (non-strategic) solution delivery probably means your organisation isn't getting full value from your skills and experiences either. Obviously this all very much depends on what your brief and main focus is. But I would say **don't be afraid to challenge your brief and be disruptive** (in a constructive way). I have landed some of my biggest wins by doing this - but your mileage may vary depending on the appetite for change!

Very interested in your views on this topic and also whether this is the kind of article you find interesting.

---

## The Balancing Act of Architecture

*Published 2016-09-16. Source file: `cronky/architecttomorrow/_archive/2016-09-16-the-balancing-act-of-architecture.md`*

My perspectives on effective Architecture have changed somewhat following a year in a Architecture Governance role in a heavily regulated industry. I believe one of the key things an effective Architect does is pragmatic balancing of different concerns - and it's what makes the role very difficult (if not pretty much impossible) to truly master. Here are some of the key things that need to be considered and balanced:

> Balance between strategic and project focus

**Balance between strategy and project** - pragmatism in balancing project delivery timescale pressures and holding firm to achieving the desired target state for the organisation. Examples of this are projects taking decisions on implementing re-designed/optimised business processes or technology platforms as this will incur delays and additional costs to the project. However in some cases they are only seen as delays if they are not planned and discussed upfront with stakeholders and agreed as in scope. But then of course this turns in to conversations about de-scoping strategic implementation options in order to deliver quicker! My article on the SATO model relates to this. Also covered in my article - EAs are you providing value for money?

As an Architect the day to day reality of this is deciding should you/the team provide:

- **Project specific guidance and consultancy** to enable a specific instance of a solution to work (So either Solution Architecture or guiding and enabling Solution Architects).
- Creating documentation, collateral and supporting strategic guidance (**Architecture Assets / building a Repository**) that will guide many projects that have similar questions.
- Both - Ideally you have roles / resources to do both. Although if rotated across both aspects; Architects tend to be more rounded and pragmatic as a result. The old saying of walk a mile in someone else's shoes really applies here!

> Specialist expertise vs Emotional Intelligence

**Balance being a technical SME (Subject Matter Expert) and soft skills** / emotional intelligence - i.e. being really knowledgeable about Application Architecture (or any other subset of Architecture) but also being able to communicate the so what around the key points to a range of stakeholders.

This also relates to balance between depth and breadth of skills that Shaun McCran talks about in this article.

> Business vs IT Architecture

**Balance between business value focus and seeing technology potential.** Whilst everything Architecture work on should have business value - sometimes realising business value doesn't start with focussing on the business. It can come from looking at what the latest trends are, what your competitors are up to (but you do of course need to be careful not to be swept up in hype or "copy cat" type initiatives). You also need to think about the ecosystems the business operates in and whether a platform strategy makes sense for your organisation.

> Guardian vs Disruptor

Protecting the integrity of existing Architecture vs enabling Innovation. How you allow for innovation - for example opening up APIs that enable 3rd party developers to build new apps based on your capabilities - in a way that doesn't bring down your core internal systems. Balancing and mitigating that risk through intelligent choices in your architecture.

> Customer vs Employee experience

Customer Experience vs Employee Experience (and other considerations). How do you deliver fantastic experiences for your customers in such a way that doesn't cause massive headaches for your teams. Some might be tempted to paint over the cracks in legacy architecture by getting customer facing staff to use multiple systems and different processes. But that creates a living hell for your employees that hits employee satisfaction - that in turn can have a knock on impact on customer experience.

> Centralised vs Federated

Centralised vs Federated - this could be (but not limited to) the central Corporate IT department vs Planned (and Governed) Embedded IT within business units. Or it can be Corporate IT vs "Shadow IT" - ungoverned IT implementations undertaken by business units. Equally it could be about other capabilities - how much duplication do you tolerate as it's been done as a trade off?

> Controlled vs Fast

Following the process and governance vs focusing on delivery - I plan to write another article on Pragmatic Governance - so keep a look out for that. This relates to point 1 (and many others) but is more about ensuring you minimise / mitigate risks through appropriate controls and checks and balances. Some refer to it as 2-speed IT delivery but it applies to more of the transformation teams than just IT.

### What else?

What other key balancing acts do you think effective Architects provide? Or other related roles (such as Change Management or Transformation?) Please share your thoughts via a comment or a message to me - would be great to hear from you.

---

## Are Autonomous Electric Vehicles the future of Personal Transport?

*Published 2017-03-17. Source file: `cronky/architecttomorrow/_archive/2017-03-17-are-autonomous-electric-vehicles-the-future-of-personal-transport.md`*

The car industry is certainly in for some disruption if the event I attended this week is anything to go by! I was lucky enough to get a place at the Great Debate at Reading University - the topic "**Are Autonomous Electric Vehicles the future of Personal Transport?**" was highly insightful so I thought I would share some of the content with a wider audience.

### Summary of topics covered:

- **Challenges** of moving to electric cars - **impact on the Electricity Grid** and infrastructure
- Benefits to the environment - **not just CO2 reduction** (which is debatable depending on how polluting the future fuel mix for electricity generation is) but also **improvements to air quality**.
- How **charging and range issues** could be solved
- Trials that are underway or planned
- Moving away from ownership to **shared ownership** or "Car as a Service" - which could get around range and charging issues
- **Morals / ethics of algorithms** having to solve "hard problems" in choosing who gets injured or killed in crashes - I've posted on this one before

Some of you may know that I have some experience in this area - I used to work for an Energy and Climate Change consultancy and one of my projects was for an online system to manage grants for Low Emission Vehicles for the Department for Transport in the UK. So it was fascinating to see what progress has been made in the low emissions and electric vehicles space - as this (and other environmental and sustainability topics have remained personal interests).

### Impact on the Grid

Whilst charging lots of electric vehicles (EVs) overnight could cause spikes in demand - this could be managed by smart charging (wait until there is capacity available to charge without causing issues to the grid). There was also the argument that EVs could become energy storage and could feed electricity back into the grid when they don't need to charge but are stationary - smoothing out spikes in demand or blips in supply related to renewables.

### There are 5 levels of Driving from manual to fully automated:

There were concerns about the viability of level 3 - a driver could have to take over quickly if there is a problem. If you are in the middle of reading a book - how long would it take you to take over control?

### Charging and range

Technologies such as wireless charging and in road power transfer loops were discussed. There was also an argument that if cars are shared rather than owned you don't need to worry about range long term - you just need a vehicle that has the range to carry you on your current journey (and that Uber is the start of this kind of approach). Also you could just hop out of one vehicle and into another.

There was also the suggestion that if you could have automated wireless charging, cars could just drive off and park somewhere to get charged whilst they aren't being used - as most vehicles spend a lot of time stationary. The bus in the picture above is a live trial - where the bus charges for 10 minutes at the end of each route via a wireless charger that the bus drives over.

### Technology trials

I was interested to see that there is a trial about to start in Greenwich - the UK Smart Mobility Living Lab - exploring how automated vehicles will work in a real life setting.

I had no idea that live trials were going on in London (the pictures of the Heathrow style pod are near the O2 arena).

### Morals / ethics & hacking concerns

Significant deaths occur worldwide from car accidents - **claims of around 90% of these deaths are as a result of human error**. Therefore if automated cars could save 90%+ of deaths on the road is **will it become morally unacceptable to prevent this technology from being adopted?** Whilst it wasn't stated - is there an implication that manually driving a car in the future will be looked at much like drink driving or smoking? And of course further lives could be saved from removing the NOx and particulate pollution in vehicle tailpipes - particularly in heavily polluted cities.

How automated cars will deal with moral challenges - such as those as explored by the Moral Machine by MIT. Problems such as:

- The runaway tram can only be steered from one narrow track to another; five men are working on one track and one on the other; anyone on the track entered is bound to be killed. (Most people in the audience voted to minimise deaths)
- The tunnel problem - a car has two options - hit and kill a child or swerve into the wall on either side of the tunnel thus killing you...

What action does an automated vehicle take? And who is at fault when deaths inevitably occur as a result of these decisions?

The speaker quoted "that just because designers hold the technical abilities to engineer autonomous cars does not give them the authority to impose particular moral decisions on all users". And also that surveys have indicated that people expect different decisions from robots than from humans - whilst we might choose to swerve to minimise deaths we might expect a robot to make a different decision.

What was really interesting was the suggestion of that product liability laws could be relaxed and that global civil airline legislation and accident investigation style approaches could be used to look into accidents. This way blameless root cause analysis could be undertaken and corrections could be deployed to prevent re-occurrence. However where it could be proved that a company had been negligent in the creation of the code or other parts of the vehicle that controls the car then the manufacturer should be able to be sued - much like any other serious product defect.

When the topic of hacking and security was raised there was a quite lot of IT industry bashing; that the IT Industry had completely failed on security. Personally I felt this was somewhat unfair - lack of senior management awareness (or interest), cutting corners and non-functional requirements (which is often out of control of IT) are as much to blame for the current cyber challenges we face.

*On the panel were Dr Ben Potter from the* *University of Reading**, Denis Naberezhnykh and Nick Reed from* *TRL* *and* *Dr Blay Whitby* *from the University of Sussex.*

### My thoughts

Some of my concerns on this (most of which were covered off - not just through arguments but through video demonstrations of current technology) are:

- Adequately detecting and avoiding pedestrians and cyclists - which GCN recently covered on their YouTube Channel
- Whether mixing manual drive and autonomous vehicles would really work. Initial solutions to this could include only allowing fully automatic in certain zones - such as motorways.
- The enjoyment of driving (for which their answer was go to a race track!) and the prestige or status of car ownership (the view on this was that the younger generation and particularly those living in cities are less interested in driving and owning their own car - the likes of Uber etc are more convenient)

Other reading I've come across on this topic - it seems Tesla has competition in the form of a start-up called NIO. Here is an interesting article from their CEO. And also the Intel acquisition of Mobileye that has been in the news.

Sorry this is such a long article - there was lots of food for thought! I hope you found this interesting too - one thing is for sure - it looks like **the car industry and driving is going to face some serious disruption**!

---

## Ecosystem Architecture is making us rethink Enterprise Architecture

*Published 2017-06-05. Source file: `cronky/architecttomorrow/_archive/2017-06-05-ecosystem-architecture-is-making-us-rethink-enterprise-architecture.md`*

Organisations need Architectural thinking beyond their organisational boundaries. Much like how security thinking has moved on; the days of Enterprise Architecture taking a castle and moat approach are over.

### Why?

- **Digital Transformation** — In order to remain relevant and mitigate the risks of disruption by new technology, new entrants to your market etc
- **Platform Business, Aggregator** models and other emerging business architecture trends
- **API Economy** — the opportunity to monetise your data, processes and Intellectual Property
- **Agility** — delivering capability through consuming supplier and partner APIs and integration channels
- Blockchain and resulting **ecosystem changes** that may affect the fundamentals of markets and industry verticals
- **Commoditisation**and**Cloud** — the shift to the cloud and SaaS (Software as a Service) means that your own IT (Data centres, Servers, Applications) are no longer the main focus or within your full control and ownership
- **Orchestration** over development — the re-use and integration of existing capabilities from across the ecosystem using configurable orchestration will reduce the need for bespoke development.
- IT Vendor direction: Having spent time at both the Mulesoft and Axway summits recently it seems clear that API platform providers see things going in this direction.

> **“What are you talking about EA has always had an Ecosystem?! We have an ecosystem of suppliers?”**

Whilst traditional EA has absolutely often dealt with Vendor relationships and helped with procurement — this has tended to be more about the classic client — supplier type relationship. Whereas what I am talking about is more about building partner or co-creation type relationships. So the platform business model, exploiting and orchestrating APIs to build services — not so much about the fact that we’ve built on premise solutions using 3rd party products.

This post was partly inspired but a thread on the classic topic of “Is Enterprise Architecture Dead?” I think the answer is that as long as it moves beyond internal IT castle and moat thinking and embraces ecosystem thinking then it isn’t dead. If it remains sat in the internal IT function just concerning itself with standards and governance then yes ultimately it will be displaced by other roles. The discipline of Enterprise Architecture won’t go away but the latest buzzword for it (and how it is resourced and delivered) will of course change.

What are your thoughts — did I miss a driver? Do you think the role will split along business / ecosystem and technical / IT lines? Do you think this has already happened?

A reminder that these are my own thoughts rather than official views of my current or any previous employer. You might also like my other posts on the topic of Innovation Architecture. You can also find this and other posts on Medium.

---

## Beyond APIs — Why Open Banking really matters

*Published 2018-01-08. Source file: `cronky/architecttomorrow/_archive/2018-01-08-beyond-apis-why-open-banking-really-matters.md`*

Whilst it’s hard not to get caught up in the buzz surrounding Open Banking and its ability to open up the Financial Services market to new players (including FinTech — Financial Technology firms); it is important to try and look a couple of steps ahead to where this may lead the industry.

Whilst APIs as a technology aren’t that new — the new wave of standardised Open Banking APIs that are coming offer the ability to take core banking functions (such as retrieving account balances and transactions) and re-imagine the digital banking experience. Many niche apps — designed to solve a small number of customer needs — are being developed based on the ability to interact electronically with existing banking products in a standardised manner.

Examples of this include apps to reward and incentivise savings, or transfer money in a frictionless manner. One specific type of app that is worthy of attention is the *“Aggregator”* — which can combine your various different banking products from different firms into a “single pane of glass” (one app or customer touch point). These third party apps create an Over The Top (OTT) risk of disintermediation — much like when the Telco industry suffered from messaging Apps such as WhatsApp displacing traditional revenue streams such as SMS. Banking customers (particularly younger customers) may start to see their bank as a utility rather than an organisation that they have a deep value added relationship with.

Of course this goes beyond disruptive FinTech start-ups. Large technology companies are very likely to get involved — if they are comfortable with the regulatory implications of adding financial features to their products. If they are we may see for example balance checking or transaction history features added to social timelines. And naturally the tech companies will benefit from yet another data source to add to their view of users.

The existing more traditional incumbent banks will likely face a dilemma with OpenBanking. They already have mobile apps (which will make use of proprietary APIs developed specifically for their digital banking experience). Do they switch their apps to make use of OpenBanking APIs — so that they are eating their own OpenBanking API dog food? The danger if they do not is how do they effectively test these APIs and ensure they are robust if they are not using them in their own operations? Also, if they want to add aggregator type features to their existing banking apps surely they will need to adopt OpenBanking APIs anyway? Or perhaps many will see a benefit to not adopting the vanilla OpenBanking APIs for their own services to make use of their own proprietary capabilities as a way to differentiate their digital experience.

Once the initial flurry of niche apps and aggregators has passed many will start to look at how they truly leverage APIs to change their customer experience and/or improve the efficiency of their operations. As the beauty of APIs (done right) is that they allow for easy re-use and the ability to plug into new channels and capabilities. Voice based devices such as Amazon Echo and Google Home are also powered by APIs — and so it won’t be long before basic banking capabilities are added to these devices (Naturally once the security issues with voice assistants are addressed — perhaps using voice print authentication?). Customers will be able to say “Alexa what is the balance on credit card X” and get a voice response, or “Google transfer 50 pounds to Alice”. Of course someone will somehow create an augmented or virtual reality experience that allows you to get inside your banking transactions. Perhaps when you point your phone at a credit card it will show you a balance and then provide options to easily see transactions? Or when you point your phone at a store it will show you how much you have spent there in the last 6 or 12 months?

Beyond using APIs to power new channels of customer experience we really need to consider the latest developments in Artificial Intelligence and Algorithms. **Algo-Trading** has already taken the Financial Services industry by storm — but imagine similar technologies and techniques applied to retail and business banking services? This is something that I coined the phrase “**AlgoBanking**” for in 2016. Imagine being able to tell a virtual assistant your financial goals — or a desire to get a better rate of interest. That assistant can watch the different products coming on the market, look at your balances, and then present you with a calculation of the different options. You can think of this as souped up price comparison services — instead of the customer needing to do their homework on different products technology does it for them. And for many who find taking care of their financial services a chore (and as a result do not switch account types) this could be a huge boon.

Of course opening up new channels and using AI presents challenges and risks — what if AI creates a poor customer conduct outcome as it doesn’t understand the full needs of a customer? This topic is a whole separate future article — look out for it!

But how could the traditional banks respond to these risks? Certainly embracing OpenBanking and the FinTech ecosystem rather than observing and dealing with it at arm’s length. It is not enough to simply observe — by the time a customer trend is spotted it will be too late to respond and compete (unless they can buy up the successful disruptor firms). They will need to embed this new thinking into their culture and create (or strengthen) strategic partnerships with FinTech, technology and consulting firms. This of course could be a lower risk way of re-imaging the core banking platform — rather than a bank spending their budget on internal digital transformation — transform through acquisition of proven FinTech platforms.

> Whatever the banks choose to do it certainly promises to be an interesting period of change and perhaps for once you can honestly say that banking is exciting!!!

Whilst this article shares my own personal views and not those of my employer — they have also published quite a bit on this topic including this piece on the potential of fintech — and some of the links in the article above.

\* The eagle eyed of you will see that I look for any far fetched reason to include a picture of lego in my posts!

---

## Business Social: getting the best out of LinkedIn without getting into trouble!

*Published 2019-08-12. Source file: `cronky/cronky-dot-net/_posts/2019-08-12-business-social-getting-best-out-linkedin-without-trouble-cronk.md`*

Are you one of those people that admire how others use social media for business purposes and also maybe cringe at how others mistake it for Facebook? Afraid to make the same mistakes or fear oversharing and falling foul of work social media policies? Are you a passive reader rather than an active contributor of the online community? If you are then I think you are missing out - but you probably need to think before you switch from "broadcast receiver" to "interactive user" mode…

Caveat - I am not saying I get this right all the time (who does?) but I was discussing this with one of my colleagues Ralph a quite while back and they said they'd love to see an article on this topic. So here goes…!

LinkedIn is about much more than just jobs

### Why?

Firstly I think you need to recognise that LinkedIn and other professional social media sites are more than just looking for jobs or looking to hire people. I see professional success as a team sport - you don’t get very far on your own - and LinkedIn offers a great platform for connecting, collaborating with and learning from others. Yes it is about projecting a "personal brand" - but don't think of that as just another channel for your CV. For me it is all about connection. I've found some of the best ways to connect are to share insightful content or points of view and open up a dialogue. Some of that dialog happens off platform - in fact some of the best conversations happen in person - "that was interesting lets talk about it". This is why I don't care too much about metrics such as likes - for me it is about quality rather than quantity of interaction.

### Be insightful but don't overshare

Getting the balance right between sharing something insightful and oversharing can be tricky. By this I mean if you work in tech you might want to discuss lots of detail about what and how you are building and for who. You need to think about whether this is appropriate - are there NDAs in place related to what you are doing? Or embargos about a new product you are working on? What could a competitor do with this information? I generally avoid this by abstracting what I am doing into the general themes. The advantage of doing this is it makes the content more relatable as its not as specific to your company or workplace.

### It is about internal as well as external connection

On the topic of connection - unless your company has really taken to something like Workplace or Yammer or similar then actually it’s another way of connecting with an internal audience as much as an external one. Of course you need to be more careful of the content of the dialog as it’s a public platform. But I find it’s a great way of sharing external thinking industry thinking and building communities of like-minded colleagues.

### Be authentic and avoiding #Humblebrag

I like the phrase "be appropriately memorable" when it comes to professional interactions. So that means be authentic, honest, insightful and yourself (and that includes being a bit whacky and showing your character) but avoid showing off.

If you want examples of how not to do this - or you want a chuckle take a look at this twitter feed: 

### Consider the optics of what you like, share and post

If you work for a large multi-national particularly in the services sector - there is a chance that a news story that is being shared is about a client or a supplier. Even liking a particularly sensational story could get you into hot water with the account manager for that client. Additionally for firms that do Audits you have to be even more careful with any information about audit clients - as it could be seen to be impacting the independence of the audit relationship. An example of this might be sharing something that promotes an audit companies products or services - or something that might affect their valuation. Don't over think this but do give thought to - "how would this look if a work colleague or client quoted it back at me".

### Don't sweat too much about likes

If an article goes viral great - it’s a sign you've done something with broad appeal and/or done a great job explaining something clearly. But don’t let the lack of reaction to your initial posts put you off - it takes time to build an audience / following. As I mentioned earlier - many will be reading but won't actively respond (you can tell this from the view stats vs the number of interactions). As stated earlier its healthier to think of this as being about quality rather than quantity of interaction.

### But I shouldn't be doing this in work time…

Of course this varies depending on your role; but in many cases if you are helping build the online brand of your company by being authentic then you are helping to promote [the culture of] your company to potential clients, partner companies and hires. If you are just using it as an excuse to avoid work then of course that’s not on; but if you are using it to stay current with industry trends and make useful connections then that is different. In the modern business world I think it is (or will become) part of most folks jobs. Especially if you are in a leadership position. Bear in mind as it’s a work related platform most other people will be using it when they are working. That said I do tend to write most of my articles (like this one) in the evening and weekends - but it depends on the article.

### Think about what your profile and content says about you

You are far more likely to be found in searches if you have a photo on your profile - particularly if you have a common name! Think about your headline - does it align with why you are on the platform? Don't be surprised if you get sales or other requests that aren't what you are looking for if it isn't! Also think about your writing style - do you need to brush up on grammar? Do you need to think about how to write for the reader to make your content flow better?

### Use follow as well as connect to build your network

When you come across someone sharing interesting content you can simply follow them rather than requesting a connection (as generally connections are for people you know - or will get to know). You can do this for companies as well. It can also be great way to find content you can re-share with your network.

### Don't forget to review your social media policy!

As I mentioned at the start of this article - watch out for your policies. Most companies will now have a social media policy - or a social media section of an internet usage policy. Naturally make sure you read it and think about what it means! Even if the policy is pretty restrictive - unless you are working in a top secret / classified role or something then it is usually possible to operate in a way that complies. If you think the policy is draconian and needs an update find out who wrote it and maybe buy them a coffee and see if it can be tweaked to encourage the use of what has become a day to day tool for most companies! There are some companies that like to very carefully stage manage their social media presence and only certain employees are allowed to engage on social media - or be branded as thought leaders (in this case contact this team and see what the deal is). I get that for some places but generally I think it speaks volumes about company culture when anyone (with the right mindset and support) can engage online and show the true colours of an organisation.

### Why not start now? Share what holds you back:

Want to get started? Share your fears or thoughts in the comments below :-) I'd love to know more about what stops people from getting more involved! Or what tips or considerations have I missed?

Thanks again to Ralph Forgeon for his help putting this article together (not only the original concept but reviewing and suggesting a follow up piece on driving engagement!) thanks Ralph!

---

## Where are your brakes?

*Published 2021-03-05. Source file: `cronky/cronky-dot-net/_posts/2021-03-05-where-your-brakes-oliver-cronk.md`*

In cycling effective brakes are critical to going fast downhill yet staying in control (well plus confidence - more on that in a bit). "Oliver when you go downhill where are your brakes?" is one of the most amazing questions my counsellor has ever asked me. Of course she wasn't asking about the brakes on my bike - but what are the controls I put in place and the things I can turn to when I recognise things aren't going well.

"Oliver when you go downhill where are your brakes?"

In a somewhat circular and ironic fashion one of my responses was - my bike! As one of many who get the value of cycling and exercise as a way of managing mental health. Cycling for me isn't just about the physiological benefit of exercise to my muscles and my brain chemistry - but:

- Allows me to explore and get outside

- Re-connect with nature

- Connect and compete with friends

- Forces me to be present and mindful particularly when looking for the right line and overcoming obstacles on the MTB

### The power of mindset

Talking of overcoming obstacles - what's the best way of doing that? Confidence.

Whilst I'm not saying having experience, skill, the right bike and kit doesn't help - recently getting through winter mud has been far easier and more fun with mud tyres.

But what is most critical? Mindset. Once I have developed the basic skills - if I go into a difficult section believing I can cycle through the massive section of mud, bump down a section of steps or scramble up a technical, rocky climb then most of the time it turns out I can. When I have self doubt or don't fully commit that's when I end up muddy and sometimes bruised. Of course this is a balance as sometimes coming off the rails can be due to overconfidence - not using the brakes or other controls I have effectively to stay on course. This of course applies to obstacles in most other parts of my life - I need to see them as challenges that can be overcome with the right approach and a confident mindset. That way I can turn those challenges into opportunities.

Bringing all that together check this video out from the amazingly talented Danny MacAskill:

Do check out his other videos too - particularly the out takes where he shows how much "failure" and experimentation goes into these videos.

### Technology Controls

Of course these questions aren't just pertinent for people - they also equally apply to organisations. In the world after midnight innovation, markets, regulations and organisational change are moving so fast that its hard to keep up. For any organisation moving safely at speed (particularly during technologically driven change) with agility requires controls. Smaller organisation have lower interpersonal connectivity and complexity so start-ups can rely more on good people and relationships. As organisations grow they need more controls - effective ways of managing risk - be that technology and cyber related, financial, operational. Some of the most effective controls can be those driven by technology - using data and automation to ensure the right things are happening (or not happening). For example - checks and balances that ensure that someone in a front office trading role does not also have the ability to confirm their trades on the back office systems (something Barings Bank learnt the hard way). Whilst you can do that manually - you can also run an algorithm over your identity and access management information and systems access records and logs as additional controls that policies have not been circumvented.

### Slow down!

Bringing it back to exercise again for a moment: In the working week I don’t always have time to get out on the bike so I go out for a quick run. Quick being the operative word – often too quick! My running fitness isn’t quite the same as my cycling fitness and so I get injured quite regularly (bilsters, sore joints etc). Recently my wife bought me an exercise smart watch - in fact I used it on the day I wrote part of this article. Amusingly when I glanced at it halfway around my run it said:

“Slow Down!”

I hadn’t realised that the default run setting is gentle jog – and it was looking at my GPS and heart rate (I assume) and advising me I was over exerting! Another example of the technology control – but in this case relating to health / exercise risks! When you think about it data and technology controls can be applied in so many places.

### Where are YOUR controls?

So I ask you the same question - in these turbulent, challenging and uncertain times - where are YOUR brakes? Do you understand what keeps you and your organisation in control? Don't be afraid to get help answering these questions about you or your organisation - talk about your challenges and get fresh perspectives. For me personally it's been critical - and I recognise that getting through personally challenging times is far easier with a blend of tools including exercise, counselling and opening up and talking to friends .

Getting started is often the hardest part - but don't put it off - have the difficult conversations. I believe you will be pleasantly surprised from being truly honest, authentic & showing you are only human.

---

## Architecture of Tomorrow

*Published 2021-11-10. Source file: `cronky/architecttomorrow/_articles/2021-11-10-architecture-of-tomorrow.md`*

Welcome to the first edition of the Architect Tomorrow Newsletter! My thinking is that some of these will be updates on what we are doing as a community others will be more about a specific topic and sharing thoughts from different voices on that theme. As always I appreciate feedback and ideas from you - and if you'd like to collaborate on a future edition do let me know!

### Architecture of Tomorrow

Excitingly Architect Tomorrow are sponsoring the IASA Global Architecture of Tomorrow Event (part of their BILT series of 24 hour events). The agenda for the 11th and 12th looks very interesting with lots of different voices from across the Architecture profession. Zac Warren and I will be doing a fireside chat on our thoughts on the current and future state of Security and IT Architecture. If you haven't already signed up please do check out the event website: 

### Security Architecture and Threat Modelling

In case you missed it - I recently put live the latest video with Simon Cole talking to me about Threat Modelling:

But we had a wide ranging conversation on all things Security Architecture, Agile, DevSecOps, hiring and what makes a good architect. Do check out the full series with Simon here and if you aren't already please do subscribe to the YouTube: 

### In person meet ups!

As I announced a while back COVID allowing we are starting to run small networking meet ups. The general rules of the community apply (no sales, its about networking and knowledge sharing). We are running the first of these after work on Tuesday the 16th November at the Gotham Hotel in Manchester - it looks like a very interesting venue. At the time of writing there are still a couple of spots available out of the 10 person chatham house rules round table discussion we will be holding over dinner. We also plan to hold one in an interesting location in central London - when details of that one are confirmed I will let you know (very likely to be in January now).

I totally appreciate not everyone is up for in person yet - and so we will continue to do a lot of our activity and video recordings online.

### Future episodes to look out for

Thought provoking conversation with **Anton Chuvakin**from Google Cloud Security

The amazing and award winning Kimberley St Pierre on women in cybersecurity.

### Topics I'd really like to cover (interesting in talking about these?)

**Future of technology regulation** - Nick Seeber's recent post is great food for thought on that topic - across the spectrum of Telco Security and Critical National Infrastructure through to the moderation of Online Platforms

**2022 Tech trends** - a follow up to the what we predicted 2021 had in store

Also how we can use **Architecture to tackle sustainability and ethics**

Oh and watch out everyone I also have been given access to LinkedIn Live....! (Do let me know if you'd like to be a guinea pig!)

---

## Arabian Insights & Nordic Nostalgia

*Published 2022-04-01. Source file: `cronky/architecttomorrow/_articles/2022-04-01-arabian-insights-nordic-nostalgia.md`*

Following on from last months edition of back to business as usual March '22 has been about back to business international travel for me and so that features heavily in this months newsletter! This edition is a little more society, physical architecture and personal focussed than usual - I hope you don't mind that.

I had hoped (and did promise) Architect Tomorrow video content this month but that was over optimistic as my work and personal schedule has been very busy. Apologies to Intersection group as your fantastic video is still in process of being edited and other great conversations are still on the to edit list. Will keep you posted on these - I hope to return to content as usual asap.

### Arabian Insights: Saudi Arabia

What first springs to mind when you think of the middle east? Is what you are thinking of based on first-hand experience of the region or what you have seen in the media, on the news or in a film? Or in my case also an out of date guidebook from 2008! I had my first trip to Saudi Arabia (KSA) and the United Arab Emirates (UAE) in March. As I posted when I got back it really changed my this-part-of-the-world-view. I hadn't expected the level of diversity, kindness and western brands. Whilst of course parts of society are different to Europe and the states and the region isn’t perfect (but then neither is the west if we are being totally honest) it has seen a massive amount of progression and transformation in the last few years. A shining and unexpected example of this was ladies working as senior IT and security leaders attending the event I presented at in Riyadh. Something which was massively out of step with the out of date guidebook. In general everyone I met and came across was incredibly friendly and I felt safe - something I must admit I wasn't expecting at all given my preconceptions.

My experiences are of course mostly based on a few days and a somewhat sheltered business environment (but also from conversations with those living and working in the region).

Before I go into that its worth considering some of the history of the region - in particular UK and US influences and relationships. Oil of course plays a big role in the geopolitical relationships between this part of the world and the west - with the UK having the KSA oil rights until the 1930s when the US took the lead. I am guessing this explains why the region uses the UK 3 pin plug socket - as around the time of electrification the UK was a major influence?

There are major signs of US influences - the amount of US cars and the size and scale of some of the infrastructure like the roads.

Riyadh has an exciting buzz about it, the roads are crazily busy and there is a massive amount of development going on. The hotel I stayed in was part of a 100+ story tower (the Kingdom Centre) with mightily impressive architecture. In fact it featured an arch right at the top which housed a viewing gallery.

The views from the tower were fantastic - and I was lucky to experience a bit of a sandstorm and when it was clearer:

What was also amazing was looking down on to the rest of the tower - quite a unique vantage point and vertigo inducing!

I wasn't surprised there was a McDonalds - after all they are almost everywhere. What I was surprised to see was a high end Sushi restaurant Roka but also smaller chains like Five Guys etc. Also Debenhams and several french retail chains as well.

I really enjoyed sampling the local cuisine. Rami (one of the team who represents Tanium in the Middle East) was an excellent guide who very kindly got me from meeting to meeting...

... and took me to a fantastic local restaurant.

I have however glossed over the visa and security aspects of the trip (to KSA). This was somewhat involved - I was expecting to have to get a visa but hadn’t expected it to be quite so costly and complex. Also in order to present at an event in KSA you need to apply for a speaking permit which is further paperwork. Getting into the country once I had all this was pretty straightforward, and getting out of airport security to travel on to Dubai was quite thorough but not an issue.

### Dubai

Many of you reading this from Europe will likely have travelled to Dubai (or know someone who has) as it's become quite the tourist hotspot in recent years. What I hadn't appreciated was the sheer size and scale of the city. It is truly massive - not just upwards into the sky with the masses of towers but along the coast and into the sea via the many artificial islands that have been created.

I'd kind of describe Dubai as a cross between Monaco, Switzerland and what I hear Singapore is like. It's very much a cosmopolitan melting pot of different people and cultures - with lots of expats - not just from Europe but also from Asia.

Being a big fan of physical architecture I made sure the team and I got to visit the Burj Khalifa as it is symbolic of the success of the city. The highest floor you can visit is 148, but it goes all the way to 160. Do look out for this (and some Dubai Lego Architecture) featuring on an Architect Tomorrow video soon!

Initially I had thought this would be a one-time visit - something I needed to do as my role is E**ME**A wide. But now my view is different - I see exciting opportunities and relationships in the region and look forward to hopefully returning in late May. Excited to expand my network and the Architect Tomorrow community to include this part of the world.

### Nordic Nostalgia

Some of my favourite work events are the opportunities to speak at US embassies and US ambassadors residences across EMEA. So far during the pandemic these have mostly had to be virtual - so being asked to cover the Nordic region in person was an exciting prospect.

The last time I went to Copenhagen was to visit the European Environment Agency when I worked for AEA (now Ricardo) in the late noughties. It's such a lovely city and although I didn't get to see much of it was I was working I was impressed by the number of EVs on the roads and the amount of solidarity with Ukraine.

Helsinki holds a special place in my heart. My dear late friend Jeremy Skyrme lived there when he worked at the Start-up OpenMobile. When I was still at University I visited him there for a week during a summer break. I learned a massive amount about WML\*, WAP\*\* (remember those?!) and Mobile networks during that week - whilst also developing a taste for Finlandia Vodka! It was great to be back after over 20 years but to see it during a different season. When I visited around the turn of the millennium it was summer and it never got dark - so seeing the sea ice thawing during a beautiful winter sunset was a very different experience.

The US Embassy is situated in a lovely spot overlooking the sea and nearby islands - it was hard not to be distracted by the view during the event!

Both the talks seemed to be well received and I look forward to the next legs of the Nordic tour!

### Stamps in passports

Something that is new post-Brexit is that you now get stamps in your passport entering and leaving the EU. I remember as a kid being desperate to get passport stamps but I'm not sure the pain has really been worth it?! Perhaps Brexit is all my fault as I wished too hard for passport stamps as a child?!

### Cost of travel

However of course all of this travel does come at a cost. Financial, environmental (my carbon footprint guilt is triggered), time and personal energy are expended. I had forgotten how tiring travel is, particularly when changing time zones. Although of course this is mostly first world problem territory - and I am very lucky to get the opportunity to travel after 2 years of being confined to the UK.

\* WML - Wireless Markup Language - a cut down version of XHTML: 

\*\* WAP - No not the Cardi B song meaning! - Wireless Application Protocol!!!!

---

## Update on the community and recent episodes

*Published 2022-11-13. Source file: `cronky/architecttomorrow/_articles/2022-11-13-update-on-the-community-and-recent-episodes.md`*

Firstly apologies for the lack of newsletters in the last few months. Hopefully you've seen the recent podcast episodes? In case you haven't do check out the conversation with Ted Neward on Software Engineering Leadership and Management:

The Salesforce Ecosystem and Salesforce Ben story with Ben McCarthy: (note this one was still recorded whilst I was working at Tanium )

Plus the HealthTech episode with Mina FROST and Sanjay Joshi

### Prefer to listen instead of watching?

The new episodes are also released on the major audio podcast platforms (Spotify, Apple, Google Podcasts etc). I have to say Anchor.fm is fantastic (massive thanks to John Chiu for that recommendation a few years back!). It does a great job of converting the video version and pushing it out to the different platforms automagically.

### Changes to Architect Tomorrow

The main reason for the pause in newsletters has been my move from Tanium to Scott Logic - a software engineering consultancy.

Architect Tomorrow was previously sponsored and supported by Tanium and other partner organisations although much of the content created was Creative Commons. I'm pleased to announce it is now a fully independent community for Architects and related roles by Architects and others interested in strategy and architecture.

I want to take the opportunity to thank Tanium (in particular Christopher Hodson, Tony Larks and Shawn Surber) for their vision in the creation of the community, all the support whilst I was working there and crucially in enabling the community to have an independent future going forwards.

As a result of this change the content themes and community members are likely to be broader and less connected to cybersecurity and IT asset management type topics. The plan is cover more of the sustainable technology themes we have touched on in the past. It's also possible things might be more closely aligned with Iasa Global and/or Intersection Group but for now it is very much independent and aims to be the "Switzerland" of architect communities.

### What is coming up on Architect Tomorrow?

**Experimenting in the Metaverse** with Johanna Eiramo (she/her), Colin Eberhardt and Lilly Pencheva. This one will be audio only and was recorded as a mashup with the Beyond the Hype podcast series. This will be out later in November.

**Tech Trends 2023**! I am very excited to be recording a 3rd edition of the Trends video series - Sally V Pritchard and Tom Fairbairn are returning with other panelists TBC. This is likely to be released in Dec (or early January)

**Unboxing Enterprise Systems Architecture** with the author (and leader of BCS, The Chartered Institute for IT EA Specialist Group) Daljit Banger

Enterprise Systems Architecture book by - Daljit Roy Banger

**Interview with** Gideon Slifkin - Gideon is a great speaker and very knowledgeable on EA so I'm sure this will be a great conversation.

**Sustainable Software** - a variant of the talk track that I am doing next week (Beers with Engineers on the 17th in London - spaces still available get in touch if interested). More on this in the next newsletter.

Do look out for all that over the next few months - and as always if you are interested in getting involved do get in touch via the LinkedIn group (the group has since closed) (that has effectively become the behind the scenes / community area) or leave a comment / DM.
