---
title: "Why Data Centres Belong in Elderly Homes (Not Isolated Warehouses)"
date: 2025-05-30 10:15:00 +0000
excerpt: "From the Architect Tomorrow podcast: A conversation with David from Leaf Cloud about rethinking data centre locations for vastly improved sustainability"
linkedin_url: https://www.linkedin.com/pulse/why-data-centres-belong-elderly-homes-isolated-warehouses-cronk-drkee
---
*From the Architect Tomorrow podcast: A* [*conversation with David from Leaf Cloud*](https://youtu.be/fersuR-29iQ) *about rethinking data centre locations for vastly improved sustainability*

Following the previous conversation with Mark Bjornsgaard from Deep Green about turning computing's "waste" heat into valuable energy, we dive deeper into the practical realities of heat recovery with David from Leaf Cloud. If Deep Green showed us the theoretical potential—that "97% of the electrons that go into a server come out as heat"—David reveals why location strategy is everything when it comes to actually capturing that value.

The location of your data centre might be the most important sustainability decision you never knew you were making. David shared insights that completely reframe how we should think about distributed computing—it's not just about edge proximity, but about matching compute placement with the thermal demand characteristics of the location.

### The Fatal Flaw of Traditional Data Centres

Traditional data centres have a fundamental problem that most of us have simply accepted as normal (if we are even aware of it) they wastefully throw away enormous amounts of heat:

> "A data centre is a highly centralised power place where all the servers stand, and then because they're highly centralised they need to be cooled using air conditioning to draw all the [concentrated] heat away."

This waste occurs on an industrial scale and the economics are stark. As David explains if data centres want to try and re-use that heat:

> "If you put servers in a data centre you have to pay the data centre, and then the data centre has to pay to extract the heat and to transport the heat to somewhere [if they are going to try and re-use it]. So it's a cost add-on top of an already quite an expensive business. Whereas our locations, the cables in the ground exist, the fibre exists, the power exists, the cooling of our servers or the heating of the building exists."

### Why Nursing Homes Are Data Centre Gold

The revelation that transforms everything is understanding demand patterns. Not all heat demand is created equal:

> "Offices are pretty pointless actually. You might get 50% waste heat reuse in an office, but the weekends and the evenings and lack of tap water use... Your heat recovery is only part-time. Elderly homes and care homes are by far the best because they have super constant heat requirements."

The scale of opportunity is remarkable. David puts it in perspective:

> "If you take the currently installed IT capacity in the Netherlands and you transferred all of that into waste heat, you'd heat 50% of all showers in the Netherlands. And that's not even touching space heating in winters."

### The Metrics That Mislead Us

One of the most eye-opening parts of our conversation was David's critique of Power Usage Effectiveness (PUE), the industry-standard sustainability metric:

> "PUE one means you've thrown all the heat away—congratulations! In my experience, a lot of the IT cooling industry is about cooling, and a lot of the things that you think make sense when you're fully doing a heat reuse operating model really don't fit on top of that."

The problem runs deeper than just the metric itself:

> "There's no standard of what you put below the division. Google has a really clearly defined way of saying it, Amazon seems to put everything under the line that they can get away with. So there's already a very vague description of what is IT versus what is supporting."

Even government policy gets caught in the metric trap:

> "I've seen the government of Amsterdam—they had a PUE requirement of 1.1 without water usage effectiveness requirement. So that means basically you're saying use tap water for cooling, because then you'll hit our sustainability metric."

### Why Heating Hot Water Beats Space Heating

Understanding demand consistency is crucial for successful heat recovery. The difference between waste and utility comes down to how the heat is used:

> "We heat up water because [demand for hot] water is not seasonally bound and it's worldwide in terms of use."

This is a world away from traditional data centres that wastefully heat up water just to evaporate it for cooling. Instead, that same heat energy goes directly into hot water that people actually use for showers and heating. As David notes:

> "It's very hard to do water heating in offices as well—you're seasonally bound and you have weekends and you don't have evening [usage]."

This insight completely changes the location strategy. It's not enough to be near buildings—you need locations with predictable, constant heat demand.

### The AI Growth Reality Check

With AI driving massive growth in compute demand, the sustainability challenge is intensifying. David offers a pragmatic perspective:

> "Energy needed for hot tap water worldwide is massive. If you put all servers where heat is needed, there is still a lot of space for growth. If you're going to put them all in data centres, then I'm on the degrowth side and say no, let's not do that."

The industry's current trajectory is concerning:

> "All the big tech companies say we want to be carbon neutral or negative by 2030-2040. So their aim is down. However, their current track record is up—it's 25% per year for Microsoft, about 20% per year for Google, and we don't know what it is for Amazon because they hide their numbers so well."

### Sometimes a Scooter Is Faster Than a Formula 1 Car

Perhaps the most memorable insight from our conversation was David's analogy about the industry's tendency to over-engineer:

> "This is an industry that always chases Formula 1 cars—everyone wants the fastest Nvidia machine and the fastest Intel and AMD chips and the largest language models with 720 billion parameters. Everybody loves this stuff—bigger is better. And I think we tend to forget that a Formula 1 car is a horrible car to drive from A to B. Sometimes a scooter is just faster, or a pickup truck, or in the Netherlands a bicycle."

The practical implications are significant:

> "Most Kubernetes clusters are below 40% utilisation—something insanely over-provisioned. Try to simplify, try to make things more effective, more efficient. The software world doesn't connect to the hardware world well enough."

### The Path Forward

The conversation with David reveals that sustainable computing isn't just about more efficient chips or better cooling—it's about fundamentally rethinking where we place our infrastructure. When we match compute placement with consistent heat demand, we solve both sustainability and cost challenges simultaneously.

> "I literally pay my server space rent with waste heat. It's like barter."

The lesson for architects and technology leaders is clear: alongside optimising your infrastructure, optimise its location. The most sustainable data centre might not be a data centre at all—it might be in your local nursing home, providing free heat to the community whilst running your applications. This also applies to public cloud - not all cloud region choices are created equal when it comes to their carbon and environmental footprint. You need to think about carbon intensity, levels of water stress, ability to use free air cooling, alongside data sovereignty and latency requirements of a location.

As David puts it: location strategy for data centres should follow heat demand patterns, not just connectivity or land costs. It's time we started building infrastructure that serves both digital and human needs.

---

[Embedded LinkedIn content: view it on the original article](https://www.linkedin.com/pulse/why-data-centres-belong-elderly-homes-isolated-warehouses-cronk-drkee)

*Listen to the* [*full conversation with David from Leaf Cloud on the Architect Tomorrow podcast*](https://youtu.be/fersuR-29iQ)*. Combined with our previous episode featuring* [*Mark from Deep Green*](https://youtu.be/_CTOL8iU_7M)*, these conversations reveal two complementary approaches to solving the data centre heat challenge—one focusing on industrial-scale heat recovery, the other on distributed residential placement.*

*What's your take on distributed versus centralised computing for sustainability? You can probably see now why I've been talking a lot about* [*there being more than one way to architect AI*](https://www.linkedin.com/pulse/more-than-one-way-architect-ai-oliver-cronk-tfnsf/) *and the need for us to think about a range of infrastructure platforms for AI workloads (including on device, edge - distributed, alongside where needed, smartly located centralised).*

*AI use disclosure:* - Claude 4 Sonnet used to pull out and quote parts of the transcript to create a first draft - but it is based on a real conversation that you can find on the YouTube Channel.
