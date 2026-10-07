---
title: "Royal Society Event: 75 Years of the Turing Test and AI Reality Check"
date: 2025-10-06 12:03:00 +0000
excerpt: "The Royal Society's event marking 75 years since Alan Turing's 1950 paper could have been a simple celebration. To me it was something far more significant: a rigorous counternarrative to the…"
linkedin_url: https://www.linkedin.com/pulse/royal-society-event-75-years-turing-test-ais-reality-check-cronk-nrgge
---
The [Royal Society's event marking 75 years since Alan Turing's 1950 paper](https://royalsociety.org/science-events-and-lectures/2025/10/celebrating-75-anniversary-turing-test/) could have been a simple celebration. To me it was something far more significant: a rigorous counternarrative to the prevailing AI hype, bringing together leading academics and industry figures to ask whether the headlong rush towards artificial general intelligence is built on sound foundations.

There was an emphasis on a variety of AI models and techniques and a more naunced / considered definition of what intelligence actually is. They argued that whilst large language models may pass surface-level Turing tests, they remain fundamentally limited pattern-matchers. Another important question is whether current AI deployment represents what Professor Sir Nigel Shadbolt termed a "massive uncontrolled experiment" on society, with insufficient regard for safety, ethics, or human flourishing.

I've pulled this piece together from my notes on the event and some of things I've written about on this topic on the [Scott Logic Blog](https://blog.scottlogic.com/ocronk/) and this [Architect Tomorrow newsletter](https://www.linkedin.com/newsletters/architect-tomorrow-6864159042021949440/). BTW a [part 2 more on the so what for Architects? Is now available.](https://www.linkedin.com/pulse/practical-pragmatic-ai-principles-autumn-oliver-cronk-jkwfe/)

## The Scaling "Law" is actually hitting a Scaling Wall

Recently the mantra has been: bigger models, more compute, more data = better results. Rich Sutton's 2019 essay ["The Bitter Lesson"](https://en.wikipedia.org/wiki/Bitter_lesson) argued that raw scale always wins over clever engineering. The tech industry bet trillions on this assumption.

Dr Gary Marcus widely dismissed as a sceptic, has been vindicated somewhat. When he argued in 2022 that scaling laws weren't universal, Sam Altman called him a "mediocre deep learning sceptic." Even Rich Sutton himself publicly acknowledged the limitations recently, tweeting: "You were never alone, Gary... I salute you for this good service."

The timeline of collapse tells its own story. Satya Nadella in November 2024: "There is a lot of debate... have we hit the wall with scaling laws? These are not physical laws, just empirical observations." Llama-4 in April 2025 "landed with a thud." GPT-5 arrived to mixed reviews - certainly not the level of AGI progess that had been hyped.

The economics tell a similar story. Bloomberg and Bain analysis suggests AI companies will need $2 trillion in combined annual revenue by 2030 to fund computing power, but are likely to fall $800 billion short (btw the entire public cloud market is round $200B).

[Embedded LinkedIn content: view it on the original article](https://www.linkedin.com/pulse/royal-society-event-75-years-turing-test-ais-reality-check-cronk-nrgge)

Personally I think these models do have value - and some of the lack of ROI reports that featured at the event were a little bit cherry picked. However the value at the moment is more about augmentation - with hard to measure value. I think the jury is still out on the the drive for more autonomous agentic approaches.

## Pattern-Matching Isn't Thinking

Marcus demonstrated what systematic testing reveals: LLMs regularly fail in ways that expose fundamental lack of understanding. Examples shown at the event included GPT-5 placing random labels on elephant images with bizarre misspellings, dangerous electrical wiring advice that would cause short circuits, and complete spatial confusion when asked to show five clocks at specific times (rather than the most common 10 past 10 image).

![](https://media.licdn.com/dms/image/v2/D4E12AQFL9rSGO_IysA/article-inline_image-shrink_1500_2232/B4EZm5WTBnKkAU-/0/1759751274679?e=1783555200&v=beta&t=kFagqCJrsWJn9g7loZXMg3agUsafDbjnUVsfYclM-Yg)

These aren't edge cases. They're predictable failures revealing that these systems are curve-fitters finding correlations without understanding causation. As Alan Kay demonstrated, a 0.99 correlation between divorce rates in Maine and margarine consumption doesn't mean one causes the other, yet AI systems trained to optimise for pattern-matching cannot distinguish coincidence from causation.

Dr Stevan Harnad framed it clearly: LLMs are "not understanding anything, it's false." The symbol grounding problem remains unsolved. These systems manipulate tokens without comprehending what those tokens represent in the physical world.

## Known Harms, Ignored Warnings

Contrary to rhetoric about "harms we can't anticipate," the problems are well-documented:

- **2016**: Bias issues extensively called out
- **10 years ago**: Deskilling raised as major risk
- **1966**: ELIZA effect (overattributing intelligence to simple systems) identified

Dr Kaitlyn Regehr's research reveals a troubling generational divide. Older users employ AI to support existing expertise. Younger users rely on it instead of developing expertise. A 15-year-old girl now uses ChatGPT to text her friends because "I think it does a better job than I can." She's losing confidence in her own communication abilities.

More seriously, there have been documented cases of AI companion-induced suicides among teenagers, where systems provided detailed instructions for self-harm. Dr Abeba Birhane highlighted that these systems also amplify existing biases. Machine learning inherently encodes hierarchies where privileged groups consistently rank higher, with applications in hiring, medical diagnosis, and law enforcement exaggerating these patterns.

## What Actually Works: Specialisation Over Generalisation

The counterexample to LLM hype is DeepMind's AlphaFold 3. Purpose-built for protein structure prediction, combining multiple specialised approaches, it has genuinely advanced scientific understanding. Marcus described it as "exquisite" engineering.

The lesson: "Some of the best results in AI have come from highly-specialised, highly modular systems." Not jacks-of-all-trades attempting everything adequately, but focused tools excelling at specific problems.

![](https://media.licdn.com/dms/image/v2/D4E12AQGByZMK0p_4SQ/article-inline_image-shrink_1500_2232/B4EZm5XflyKsAY-/0/1759751568814?e=1783555200&v=beta&t=1cvDzcdTSifGbVYxQ3a6h-conSl6sbnYJh7PITzul9o)

Slide from Nigel Shadbolt about varieties of AI

This aligns with cognitive science. Jerry Fodor's *The Modularity of Mind* argues human intelligence isn't a single general-purpose system but many specialised circuits working together. Professor Shannon Vallor suggested we should decompose "intelligence" into specific capabilities rather than treating it as a unified concept, likening it to phlogiston (a historical scientific concept we now understand was misconceived).

The neurosymbolic approach ([that I recently wrote about](https://www.linkedin.com/pulse/neurosymbolic-ai-grounding-enterprise-actually-needs-oliver-cronk-kxbze/) combines pattern recognition (what current AI does well) with symbolic reasoning (what it does poorly). Statistical learning excels at perception but struggles with logic. Rule-based systems excel at reasoning but struggle with adaptation. Combining both offers a more promising path than simply scaling transformers.

[Embedded LinkedIn content: view it on the original article](https://www.linkedin.com/pulse/royal-society-event-75-years-turing-test-ais-reality-check-cronk-nrgge)

## The Uncontrolled Experiment

No other field would permit such unchecked deployment. Aviation, pharmaceuticals, and transport all require rigorous testing before public rollout. AI systems face no such constraints.

Dame Wendy Hall opened the event with a stark observation: "Don't worry about AI, worry about low levels of human intelligence." We're remarkably easy to fool. What Turing arguably got wrong was overestimating human intelligence. The test measures our gullibility more than machine capability.

[Embedded LinkedIn content: view it on the original article](https://www.linkedin.com/pulse/royal-society-event-75-years-turing-test-ais-reality-check-cronk-nrgge)

Alan Kay expanded this point. Humans don't just get fooled, we pay to be fooled. Theatre, television, advertising all demonstrate we inhabit a "waking hallucinatory dream." This isn't a bug; it's how we function. AI systems exploit this vulnerability at unprecedented scale.

Kay's most chilling point (but possibly a little elitist?): "The most frightening thing I can think of is trillions of ordinary human-level intelligences roaming the internet at will." The threat isn't superhuman AI but scaled human stupidity, amplified by systems that inherit our biases and lack our contextual understanding.

Kay invoked the engineering principle: "The bridge must not collapse. The plane must not crash. The software must not harm or fail." AI development needs duty of care. A Hippocratic oath: "Do no harm."

## Resisting Inevitability

There was quite a lot of talk on the inevitability narrative. "AGI is coming whether we like it or not" serves corporate interests, not public good. It positions citizens as passengers rather than agents.

This is rhetorical strategy, not technical reality. Vallor emphasised: "It's vital we resist the idea that we are passengers... AI is behind the wheel and we're just hoping it takes us somewhere nice." The lack of control is political and economic reality, not technological destiny.

Governments face enormous lobbying pressure. A $100 million political action committee backed by a16z and OpenAI aims to shape regulation in industry's favour. Regulatory capture is real. But humans have resisted bad ideas before. We can do it again.

The question isn't whether there will be a market correction (most investors recognises valuations are unsustainable) but how much damage occurs first. Social media offers a cautionary precedent: we normalised harmful technology because it was convenient and profitable, only addressing problems after significant societal damage.

## What Needs to Happen

The path forward requires several shifts:

**Safety must be paramount.** Kay argued "safety should be the theme of the 21st century." This means rigorous testing before deployment, liability frameworks that actually constrain behaviour, and investment in safety research across academia and industry.

**Demand evidence.** When universities, companies, or governments claim AI benefits, ask for data. Challenge the fear of missing out with requests for systematic evidence. Make deployment conditional on demonstrated value, not speculative promises.

**Empower diverse voices.** Dame Wendy Hall noted AI discussion is dominated by "tech bros" and politicians with limited diversity. Mothers, daughters, different ethnicities and cultures must be part of this debate because it affects everyone globally.

**Protect creative work.** The mass appropriation of content to train models represents an unprecedented transfer of value from creators to corporations. This requires urgent attention.

**Resist "AGI" rhetoric.** By keeping AGI "always in the future, never now," companies ignore current harms, evade transparency demands, and sidestep responsibility. Draw a line under this framing.

**Focus on augmentation, not replacement.** The better question is how we augment human intelligence without making ourselves stupider. We made these tools. The challenge is thinking carefully about how they shape us.

## My Reflection - the need for AI Autumn to avoid AI Winter:

Personally I see massive potential in a range of types of AI - but it's important that we consider the value and costs of these when implementing. As per [my recent post on the need for AI autumn](https://www.linkedin.com/feed/update/urn:li:activity:7379843494879698945/). AI has value but there are economic, social, environmental and technical risks from the current approach - that could lead to an AI winter.

[Embedded LinkedIn content: view it on the original article](https://www.linkedin.com/pulse/royal-society-event-75-years-turing-test-ais-reality-check-cronk-nrgge)

- Dead leaves - being approaches or experiments that don't show ROI or are brute forced and unsustainable
- Harvest the approaches that do work and encourage people to use a range of models and techniques that best fit the problem being solved
- Crucially do these things in a way that benefits people and enterprises not just driving centralisation of profits and progress in a single direction
- Avoid a knee jerk reaction when the air comes out of the bubble that drives a once-bitten-twice-shy reaction to markets and businesses when it comes to broader AI.

## Conclusion

Seventy-five years after Turing asked "Can machines think?", this gathering suggested it's the wrong question. Better questions: What exactly does this machine do? Does it work reliably in real-world contexts? Who benefits and who bears costs? Does it add meaningful value to human lives?

The Turing Test has been passed and proved largely irrelevant. Current AI systems are powerful pattern-matchers, not thinkers. The pursuit of AGI may be chasing a mirage whilst ignoring present harms.

Most importantly: we are not passengers. Despite rhetoric of inevitability, despite trillion-dollar bets, despite regulatory capture, we have agency. We can demand better. We can resist. We can build the future we actually want rather than the one being imposed.

As Turing himself said: "We can only see a short distance ahead, but we can see plenty there that needs to be done." Time to do it.

[Here is part 2! Which is more of a so what for Enterprise and Technology Architects.](https://www.linkedin.com/pulse/practical-pragmatic-ai-principles-autumn-oliver-cronk-jkwfe/) If you have thoughts or feedback do leave or comment for the #ArchitectTomorrow community to discuss or send me a DM.
