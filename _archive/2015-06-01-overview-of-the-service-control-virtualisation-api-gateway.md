---
title: "Overview of the Service Control / Virtualisation / API Gateway"
date: 2015-06-01 13:50:00 +0000
excerpt: "Following my talk last month at Gartner AADI alongside Mark O'Neill of Axway on the topic of Service Control Gateways I've had quite a few questions on the topic. I thought I'd write a quick post to…"
linkedin_url: https://www.linkedin.com/pulse/role-service-controlvirtualisation-gateway-oliver-cronk
---
Following my talk last month at [Gartner AADI](http://www.gartner.com/technology/summits/emea/application-development/) alongside Mark O'Neill of [Axway](https://www.axway.com/) on the topic of Service Control Gateways I've had quite a few questions on the topic. I thought I'd write a quick post to clarify some of my thinking.

Here is a variation of the core slide from my slide deck:

![](https://media.licdn.com/dms/image/v2/C5612AQFhtXOtXxhIuQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1520186486565?e=1783555200&v=beta&t=iOCzq10X6wis5KOSZc8BoO9vEzqLrVO35d9MdS39ewk)

For me Service Control / Virtualisation Gateway Gartner terminology\* is a subtle twist on the previous XML Gateway or API Gateway role. Logically they can sit in the same space - they seperate the consumers of your services or APIs from the producers (or back end systems). What is new is the level of intelligence or logic you *can*place in the Gateway.

Consider that an XML Gateway might have been about just creating a simple facade at the edge (DMZ) of your network - an XML compatible web service for a [legacy] system to be consumed but by something that sat outside of in house IT. An API gateway might have evolved things a bit more - in that it provided a bit more abstraction. It might expose a simple REST or Web style API to consumers on the outside and on the inside may translate that into a native database query or a couple of SOAP web service calls to different systems.

In many situations the XMLG or APIG simply sat in front of existing integration technologies - exposing variations of existing internal services to the outside world or to limited partners.

The Service Control Gateway or Service Virtualisation Gateway could go further - perhaps different parts of your IT architecture sit in the public cloud, private cloud and on premise data centres - or sit across different IT stacks, or even exist as a sea of microservices (or all of the above). The gateway can transparently route across the complexity and provide a simple end point for a service or API. These latest generation of gateways are more advanced and can (but that doesn't mean should!) do much more and replace some of the traditional middleware that sat in between.

Why do I say can but not should? Consider scalability and separation of concerns. If the device at the edge of the network (which is generally your first line of dense against security attacks etc) is doing heavy lifting mediating and translating content from API speak into system speak its going to need more horse power and more instances to handle the load. I prefer to separate these layers - do some basic mediation at the gateway level sure, but anything that resembles orchestration or business logic should sit elsewhere in my view. That somewhere else could be another dedicated instance/layer of Service Control Gateways if that is most appropriate in your situation.

If you disagree do let me know - would love to hear other views on this - the above is based on my real world implementation of this technology and vision for its future deployment. But if you are a start-up with more of a "digital" (sorry I hate that term too - I mean mobile apps / web centric) architecture then you may make different choices.

**Update**: Its been pointed out there is also the term SDA - for Software Defined Architecture and SDA Gateway as outlined in this article: <http://www.infoq.com/news/2014/05/sda>. Again I see the SDA gateway being another term for the Service virtualisation gateway - it gives you the power to separate / abstract your UX channels from your underlying services and internal APIs. The extreme to which you go with this pattern depends on what you are trying to achieve.

\*Even the Gartner Analysts themselves were making jokes about Gartner creating new terminology just for the IT industry to have to keep up!
