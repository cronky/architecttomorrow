---
title: "Are we sleepwalking into tomorrow's AI challenges?"
date: 2025-02-10 12:57:00 +0000
excerpt: "Even if you are cynical and/or sceptical on AI, I'd urge you to engage in this one - your opinions will be valuable."
linkedin_url: https://www.linkedin.com/pulse/we-sleepwalking-tomorrows-ai-challenges-oliver-cronk-4rcge
---
*Even if you are cynical and/or sceptical on AI, I'd urge you to engage in this one - your opinions will be valuable.*

[*Note there is now a V2 of this which builds*](https://www.linkedin.com/pulse/ai-sleepwalking-risks-v2-including-automation-fallacies-oliver-cronk-bf6ee/) *on this piece (still worth reading this one for some of the basics).*

As the capabilities and accessibility of AI continue to advance (including more advanced [reasoning type capabilities that I showed in my last post](https://www.linkedin.com/pulse/getting-deep-meaningful-deepseek-r1-oliver-cronk-hy2hf/)) it raises several questions and risk areas to ponder. Particularly in light of the publication of [Gradual Disempowerment](https://gradual-disempowerment.ai/). Whilst the [Architect Tomorrow community](https://www.youtube.com/watch?v=l-zHfUkVYzc) and [I covered some of this in May 2023](https://blog.scottlogic.com/2023/05/04/generative-ai-solution-architecture.html) it was perhaps a bit naive thinking just a bit of conceptual thinking on solution architecture would be enough!

### AI developments are becoming relevant to all regardless of stance?

Like it or loathe it; Generative AI continues to [attract serious investment](https://www.linkedin.com/news/story/tech-giants-double-down-on-ai-7169402/) and is advancing rapidly (sometimes in its [hype and adoption ahead of its proven capabilities](https://www.perplexity.ai/search/can-you-find-examples-of-embra-wgJrSjO3TwC7P5LyA06EVw)!) to the point where reasoning models and autonomous agents will create new risks and issues -partly from the immaturity of the tech but also from how it's been (hastily) deployed. These are surely no longer a concern simply for highly regulated businesses using AI themselves; but organisations and society at large where they are faced with these solutions on the other side of interactions.  In this piece I am going to avoid jumping straight into solutioning - I am keen we explore the challenges, risks and issues before considering how we might architect differently in the future to mitigate them.

![](https://media.licdn.com/dms/image/v2/D4E12AQE3QIyN3Ymv5w/article-inline_image-shrink_1500_2232/B4EZ4eSZybJAAU-/0/1778624601496?e=1783555200&v=beta&t=CCOx3mLZF5f6BwiBx9oyRj7_RCu86wqW_3oqNqhmNNc)

Categories of AI sleepwalking risk

## Impersonation and authentication

Firstly, what happens when AI becomes sophisticated enough for anyone to generate human-like content effortlessly? Right now we still only have a relatively small number of the global population with this ability. This leads us to ponder the methods we will need to authenticate and validate human actions and creations. For instance, will electronic evidence, such as CCTV footage, become compromised or devalued? [The BBC series "The Capture"](https://www.bbc.co.uk/programmes/m00085sx) vividly brings the later concern to life. The extreme end of this potentially leads to a "dead internet" full of bots with some humans returning to in person situations to regain trust and others being sucked into an increasingly fake and disconnected from reality virtual world.

## Human vs Bot Activity - what is acceptable?

How can we ensure that a human being genuinely created or performed an action on a system, rather than an automated process acting on their behalf, either actively or passively? This question is crucial for certain processes as we navigate the blurred lines between human and machine contributions. But for other processes will it matter if something was done by the actual person or tool / agent acting on their behalf? Do we need some kind way of classifying activities into:

- "**Human only**" (requiring **verification**)
- "**Human Preferred**" (Augmentation acceptable - but human sign off and indicate use?)"
- "**Full automation expected"** (but no set requirements on human involvement?"

Noting also that categories might change as capabilities or acceptance of AI changes.

Whilst writing this I came across the recently [published paper by HuggingFace which suggests that "Fully Autonomous AI Agents Should Not be Developed"](https://arxiv.org/pdf/2502.02649).

## Confirmation Fatigue? Review Weariness?

The requirement for human sign off and review of AI activities could become boring (particularly for more repetitive activities) which effectively leads to straight through automation (you might as well fully automate something if it isn't going to be checked). Perhaps this could be prevented by asking for more specific feedback on content generated (which again bad actors could probably automate) or legal frameworks? Another thought is to have another AI evaluate actions (these "evals" are quite common in Agentic AI coding frameworks including Scott Logic's InferGPT/[InferESG](https://github.com/ScottLogic/InferESG) architecture) but is this good enough? Is this a slippery slope to the Gradual Disempowerment risk?

> Do we need chaos anti-AI monkey for our organisations?!

## Degradation of human capabilities?

Another longer term (in some cases laziness related) challenge is the potential for people to forget how to perform tasks independently. As we increasingly rely on artificial intelligence, do we need to find ways to prevent this dependency from eroding our skills and knowledge? Or is this just like any other tech advancement, cloud computing being a recent example of de-skilling at a hardware level? How comfortable are we that we are making human society even more dependent on tech and more fragile and prone to major consequences of failure? Do we need chaos anti-AI monkey for our organisations?! Days where we turn it off to make sure we can still manage to operate without sophisticated tech platforms?

## Tech Addiction on steroids?

How do we deal with individuals becoming addicted to an artificial version of reality? The allure of a perfectly curated, AI-generated world could lead to a detachment from genuine human experiences, interactions and involvement in society?

## Digital Divide and further inequality

How accessible are these latest generation of tools? Are we about to see further digital divides or levels of personal AI maturity:

- No access to digital or the internet
- No access to or understanding of how to use AI tools
- Access to AI tools but only as an end user
- Ability to leverage / create AI tools for economic advantage (creating a passive income)
- Mastering / owning AI platforms that [start to] dominate markets

So this isn't just about their end use - of course a chat bot is using human language so is more accessible than other things - but ability to leverage their design, creation and operation. Awareness, access, cost, skills, bias all play a part here. How do we ensure we aren't leaving customers, colleagues, stakeholders behind? For some these tools right now are like giving someone an MS-DOS prompt without a manual - until prompt engineering is abstracted away this can be a barrier to adoption. "What should / can I do with this" is a common question of those not so familiar / curious / excited by LLMs. Those that have the skills / money to build / own these platforms will be at a significant advantage - but not without facing into the other risk areas discussed of course. Perhaps this is another reason why we should push for Open Source AI platforms - as these make AI more broadly accessible?

## Societal and political manipulation

Have we learnt the lessons from the [Cambridge Analytica scandal](https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal)? Has the democracy horse already bolted? Is the average person geared up to handle a flood of fake social media activity and hyper personalisation of political content? Particularly when many don't understand the capabilities of the latest generation of AI tools (as per above) let alone see their biases. Manipulation and mobilisation is surely a powerful force?

## Automation overloading our (not just technical) architectures

Could we be about to see impacts akin to denial of service attacks? As the implementation of GenAI systems will likely lead to imbalances and asymmetry. Consider a few scenarios / angles:

1. A web application or **platform that was architected, designed and capacity planned for human use**. Unless it has some degree of auto-scaling could agentic AI use massively overwhelm platforms that previously were just used in a limited way by humans? This needs to be considered all the way down the tech stack - not just the presentation or web tier - but what might happen at the backend or your downstream systems?
2. **Your email inbox** - spam is bad enough today - what about agents generating emails that look human, important and urgent?

*Non technical examples:*

1. **Customer service still handled by a limited number of people**. Automated phone calls or emails overwhelming a team designed purely for geniune human interaction
2. **Your attention** including social media feed. Are the days of being able to look at timelines and social media feeds ourselves numbered? It feels like we are already overwhelmed?

## Implications of "I'll get my AI to talk to your AI?"

I'm sure many of you are shouting at this - but we'll just use more AI to fix these things on the other end. Maybe we will, but what knock on implications does that bring? Do we then have automation on both ends leading to further unexpected consequences - at best maybe an endless back and forth between bots (wasting energy and storage) - at worst causing something to fail or unexpected to happen.

## The impending AI Arms race?

So many questions - and I'm sure there are more - let me know if you think of new categories - or initiatives / projects that are tackling these things. One thing is for sure - there is too much at stake for a sit back and wait and see approach on a lot of this. Even if you are sceptical of GenAI - many others aren't and are rushing ahead to implement things. Some of which will crash and burn spectacularly, but others might just "work" - and what will that do to your operations? Sadly this is an arms race that will probably eventually force the other side to also take up arms?

### The need to create a conscious policy / strategy

Regardless I'd encourage you and your organisations not to be an ostrich on this one - even if you aren't doing anything - make that a conscious risk assessed strategy that you get signed off (as it might well have cost implications from an increase in human based activities dealing with inbound AI generated demand).

This arms race drives further tech consumption with implications on materials and energy consumption. But this piece has deliberately focussed more on the Social and Governance angles than [Environmental aspects](https://blog.scottlogic.com/2024/07/16/the-impending-implosion-of-generative-ai-and-the-potential-of-a-more-sustainable-future.html) of sustainability.

## What is your take?

Much of this is possibly under the banner of AI safety and alignment but I think the virtual Architect Tomorrow community has a valuable role here - I never fail to be blown away by the thinking of the community so I am confident we will come up with some interesting angles!

Ultimately I'd like what we come up with to lead to advice, principles and approaches that end up in places like IASA's BTABoK, Chief Architect Network, BCS and corporate AI policies and Enterprise Architecture teams ways of working. Perhaps this would make a good topic for an event or 2? Sorry so many questions - perhaps I am forcing you to use AI here to answer them all ;-)

BTW Do check out <https://gradual-disempowerment.ai/> if you want to go even deeper on implications of this latest wave of software eating the world.
