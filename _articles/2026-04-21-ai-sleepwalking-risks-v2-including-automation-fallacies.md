---
title: "AI Sleepwalking Risks V2, including Automation Fallacies"
date: 2026-04-21 11:45:00 +0000
excerpt: "As we published \"Are We Sleepwalking Into Tomorrow's AI Challenges?\" just over a year ago I decided to reflect and go deeper on this topic. A big reflection was that arguably the biggest sleepwalking…"
linkedin_url: https://www.linkedin.com/pulse/ai-sleepwalking-risks-v2-including-automation-fallacies-oliver-cronk-bf6ee
---
As we published "[Are We Sleepwalking Into Tomorrow's AI Challenges?](https://www.linkedin.com/pulse/we-sleepwalking-tomorrows-ai-challenges-oliver-cronk-4rcge/)" just over a year ago I decided to reflect and go deeper on this topic. A big reflection was that arguably the biggest sleepwalking risk I didn't include was information, processes and commercial IP leaking into the models and AI products that the large tech companies are building. However I think that's been pretty well discussed elsewhere - including in ["Practical & Pragmatic AI Principles for AI Autumn"](https://www.linkedin.com/pulse/practical-pragmatic-ai-principles-autumn-oliver-cronk-jkwfe/). Have now included that one and decided to break these AI sleepwalking risks into organisational / enterprise and personal categories (see the [diagram]({{ '/assets/images/sleepwalkingrisksv2.svg' | relative_url }}) later on).

I have come across three interesting patterns in older automation/economic literature that could be significant to how viable and sustainable agentic AI / automation programmes are. Significant food for thought that I welcome push back and discussion on!

### We already have a lot of the answers but they are gathering dust!

Thanks to members of the community (in particular Selena Evans) pointing me at some excellent papers (particularly on cybernetics) from the 70s and 80 and the Ironies of Automation getting attention; I wondered what else might be out there. What follows is a set of observations: three old fallacies from automation, economics, and human factors that shape the non-happy-path of using enterprise AI to drive automation.

## What are the AI sleepwalking risks?

As a quick reminder / orientation, here is how the sleepwalking risks sit together when you draw the connections between them. Keep this context in mind as we walk through the fallacies in a moment.

**Enterprise / organisational sleepwalking** (how AI reshapes institutions, markets, and competitive / ecosystem dynamics):

- AI Arms Race
- (Greater) Digital Divide
- Asymmetrical Overload (AI generated volumes can easily exceed human team capacity)
- IP & Knowledge Leakage (sensitive org material can end up in AI models)

**Personal sleepwalking** (how AI reshapes individual cognition, behaviour, and social experience):

- Confirmation / Augmentation Fatigue (unreliable human review)
- Relevance Degradation (AI causes expertise loss)
- Tech Addiction
- Impersonation (AI content indistinguishable from human)
- Human vs Bot (AI personas easily confused with humans)

[![Diagram: nine AI sleepwalking risks]({{ '/assets/images/sleepwalkingrisksv2.svg' | relative_url }})]({{ '/assets/images/sleepwalkingrisksv2.svg' | relative_url }})

Figure 1 - AI Sleepwalking Risks V2, some of the lines probably need tweaking!

Overview of [diagram]({{ '/assets/images/sleepwalkingrisksv2.svg' | relative_url }}) - nine sleepwalking risks split into enterprise (top) and personal (bottom). The critical channel runs vertically on the right, where Asymmetrical Overload becomes Confirmation Fatigue: the precise seam where Fallacy 2 bleeds into Fallacy 3. Relevance Degradation sits as the hub where two reinforcing loops meet.

## The three fallacies

- **The Substitution Fallacy.** That automation cleanly replaces human work. Sits uncomfortably with Bainbridge (1983) and the human factors literature.
- **The Productivity Fallacy.** That automation investment yields measurable, proportionate productivity gains on a forecastable timeline. Sits uncomfortably with Solow's 1987 observation and forty years of subsequent IT productivity research.
- **The Oversight Fallacy.** That a human reviewer can meaningfully supervise an automated system whose outputs they did not generate. Sits uncomfortably with Mackworth on vigilance and the automation bias research that followed.

### Fallacy 1: The Substitution Fallacy

*Automation replaces human work cleanly.*

Lisanne Bainbridge's paper ["Ironies of Automation"](https://www.sciencedirect.com/science/article/abs/pii/0005109883900468) (*Automatica*, 1983) outlines that "the designer who tries to eliminate the operator still leaves the operator to do the tasks which the designer cannot think how to automate." The residue that remains is rarely a simplified version of the original job. It tends to be whatever resisted automation: the edge cases, the ambiguous judgements, the abnormal conditions. And it gets handed to a human who has lost the routine practice that originally built their competence.

Several of Bainbridge's observations read differently in an agentic AI context than they might have a few years ago:

- **Manual skills decay under (mostly) monitoring.** A reviewer who rarely produces the underlying output loses the ability to evaluate it. (this one I have felt a lot personally and as a result my use of AI have changed in the last few weeks / months)
- **Long-term knowledge requires frequent use.** Theoretical training without practical exercise does not stick.
- **Working context takes time to build.** A human parachuted into an AI-generated decision often lacks the situational awareness that made the original operator effective.
- **The most successful automated systems may need the greatest investment in human training.** Precisely because intervention is rare, the competence required when it matters is fragile

Note I am not claiming automation cannot replace tasks. It clearly can, and often does so satisfactorily. The assumption worth questioning is whether that replacement is clean? My experience suggests it leaves issues that are less visible than the tasks replaced, harder to specify, and often under-invested in because it falls outside both the original role and the original business case.

**A possible architectural response:** treat the human residue as a first-class design concern rather than an afterthought. More controlled architecture patterns seems to help, because keeping the AI's scope narrow keeps the residue legible. Agentic architectures tend to scatter the residue across a larger surface area, which could make it harder to support or govern?

**Another possible response (anti-pattern?):** Human oversight is too hard to sustain reliably so we won't bother with it. Probably a high risk strategy but sadly I suspect many architects drunk on AI vendor kool-aid (or organisations that fired the whole team doing the work manually) may be tempted to go this way?

### Fallacy 2: The Productivity Fallacy

*Automation investment yields measurable, proportionate productivity gains on a forecastable timeline.*

In July 1987, Robert Solow wrote a book review in the *New York Times* that produced a fascinating quote that I am amazed I've not seen before:

> "You can see the computer age everywhere but in the productivity statistics."

By the late 1980s, US firms had invested heavily in IT for nearly two decades, and measured productivity growth had *slowed* over the same period. The [Solow paradox](https://en.wikipedia.org/wiki/Productivity_paradox) became the defining puzzle of technology economics for roughly a decade. When productivity growth eventually picked up in the late 1990s, it arrived considerably later than originally forecast, concentrated in a minority of sectors, and with gains captured disproportionately by a narrow band of frontier firms.

Erik Brynjolfsson and colleagues have more recently attempted to explain why. Their ["productivity J-curve" framework](https://www.aeaweb.org/articles?id=10.1257/mac.20180386) argues that general-purpose technologies require large, mostly-invisible complementary investments before measured productivity improves. Organisations have to redesign processes, develop new skills, restructure around new capabilities, and sometimes discard what used to work. During that period measured productivity can be *worse*, because the intangible investment costs are counted but the benefits have not yet materialised. Eventually the curve turns upward, but the lag has historically been long.

A few recent studies are worth considering soberly alongside this. Probably not wise to lean heavily too on any single one, and the picture they collectively paint is still forming:

- [Brynjolfsson, Li and Raymond (2023)](https://www.nber.org/papers/w31161) reported generative AI improved customer service agent productivity by roughly 14%, concentrated mostly in less-experienced workers. Experienced workers saw relatively small gains.
- The [Dell'Acqua et al. (2023) "jagged frontier" study](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321) with BCG consultants found material performance improvements on tasks "within the AI frontier". However a measurable *decline* on tasks that looked similar but fell outside it and consultants often could not tell which were which.
- Daron Acemoglu's [2024 paper "The Simple Macroeconomics of AI"](https://www.nber.org/papers/w32487) offers a notably lower aggregate productivity estimate for AI over the coming decade than most consulting forecasts.

These studies have been contested, as you would expect with anything touching AI economics right now. Taken together though, the pattern they suggest is that AI productivity gains may be real but concentrated, uneven, and probably smaller and slower than many deployment cases assume.

Where this matters architecturally / from a governance standpoint is the pressure that unrealistic productivity targets place on design decisions.

When the business case demands 30% productivity gain in eighteen months, architects tend to get pushed toward:

- **Visible gains over substantive ones.** Dashboards, co-pilots, and demos that satisfy the quarterly review rather than process redesign (often less sexy or visible behind the scenes stuff) that would pay off over five years.
- **Coverage over quality.** Broad rather than careful deployments, because narrow high-quality deployments take longer to show in aggregate numbers.
- **Thin oversight over deep oversight.** Review processes sized to the productivity target rather than to the risk profile of the task. This is where Fallacy 2 starts to link into Fallacy 3.

**A possible architectural response:** plan for the J-curve. Make the intangible complementary investments (skills, process redesign, data quality, governance maturity) part of the delivery plan rather than deferrable. Resist the temptation to size review capacity to productivity targets rather than risk. And be candid with steering committees that the historical record does not always support the pace of gain currently being forecast.

### Fallacy 3: The Oversight Fallacy

*A human reviewer can meaningfully supervise an automated system whose outputs they did not generate. (very much links to Confirmation Fatigue and relevance degradation).*

Bainbridge, put this more bluntly than I would:

> "If the computer is being used to make the decisions because human judgement and intuitive reasoning are not adequate in this context, then which of the decisions is to be accepted? The human monitor has been given an impossible task."

This is confirmation fatigue (or augmentation fatigue) stated in a reasonably rigorous form. My sense is that it is not primarily a motivation problem, and not primarily a training problem. It looks more like a structural feature of how review work sits against automated output volumes.

A few mechanisms seem to feed it, each with different architectural implications:

1. **The vigilance decrement.** Mackworth (1950) showed that human attention on rare-event signals tends to collapse within about 30 minutes. Review workflows that assume sustained attention over long shifts are building on a shaky premise.
2. **Automation bias.** Decades of research in aviation, medicine, and finance suggest humans systematically over-trust automated outputs even when contradicting evidence is visible. Modern LLMs produce fluently authoritative text, which seems likely to amplify the pull toward agreement.
3. **The competence gap.** The skills needed to review an output often overlap heavily with the skills needed to produce it. If AI automates the junior work that builds senior judgement, the reviewer population may become less able to detect confidently-wrong outputs.
4. **Context poverty.** Bainbridge observed experienced operators arrived thirty minutes early to build situational awareness. A reviewer handed an AI-generated decision sees the conclusion without that substrate of context. Explanation traces and chain-of-thought transcripts are not quite the same thing.
5. **Automation camouflage.** Automated systems can compensate against small deviations until the trend is beyond recovery. AI outputs that are wrong in subtle, internally-consistent ways may be particularly hard to detect. The [Post Office Horizon scandal](https://www.postofficehorizoninquiry.org.uk/) is a sobering point of reference: institutional trust in an automated system outlasted contradicting human evidence for over two decades.
6. **The Ephrath effect.** Ephrath (1980) found system performance sometimes *worsened* with computer aiding, because the operator made the decision anyway and checking the machine added load. The "I asked Copilot, then rewrote it from scratch" experience may be this effect rediscovered.

The usual mitigations have specific weaknesses I would flag rather than assume solved. **"Human-in-the-loop"** has become so universal it has lost some meaning; when a reviewer processes 200 outputs an hour against a target that assumes 200 outputs an hour, they are not obviously in any loop in a meaningful sense. [Madeleine Clare Elish's "moral crumple zone"](https://estsjournal.org/index.php/ests/article/view/260) research argues that the human in such arrangements absorbs moral and legal liability for failures the system's design made hard to detect, which is a framing I find hard to argue with given how opaque many AI systems are.

**LLM-as-judge** evaluations are useful in development and high-throughput operational checks (they were used in building [InferESG](https://github.com/cronky/InferESG)) but I would flag as a hypothesis that they may be vulnerable to recursive complacency: judge and candidate often share training data, tokenisation, and architectural biases, so the independence assumption is not obviously safe. This is a known unknown rather than a settled criticism, and worth scrutiny.

**A possible architectural response:** reserve agentic, thin-oversight architectures for lower-consequence tasks where crumple-zone dynamics are less acute. Use more controlled architectures where consequences are meaningful (yet more reinforcement for my recommendation of the use of deterministic tech to co-ordinate AI for highly regulated domains). And be careful about calling something human-in-the-loop unless the human plausibly has time, authority, and competence. If one or more of those is missing, it is probably more honest to call it a approval ceremony than a mechanism of oversight?

## How the Fallacies Seem to Compound

If the three fallacies were independent they would be serious but manageable. But I think they might reinforce each other:

The **substitution fallacy** leaves an under-supported remainder of human work: edge cases, ambiguous judgements, oversight tasks.

The **productivity fallacy** then generates pressure for those residual tasks to be performed faster and cheaper, because forecast gains have not arrived on schedule and steering committees need evidence of progress.

Under that pressure the **oversight fallacy** becomes acute. Review capacity is sized to the productivity target rather than to the risk. Reviewers get less time, less context, and less authority than genuine oversight requires. A ceremonial version of human-in-the-loop takes over, which looks exactly like governance from the outside.

This is where the sleepwalking diagram becomes useful. The compounding pattern maps fairly directly onto the clustered structure: productivity pressure sits in the systemic cluster at the top, feeds through Asymmetrical Overload, and lands in the cognitive cluster where Confirmation Fatigue and Relevance Degradation start reinforcing each other.

The two feedback loops anchored on Relevance Degradation are where an organisation stops being able to self-correct; skills atrophy makes ceremonial review feel acceptable, ceremonial review removes the practice that would have maintained skills, and the loop tightens.

That makes Relevance Degradation something like the load-bearing wall in this structure. If it holds, the other risks remain manageable. If it goes, a lot goes with it.

I am not claiming this is the only way to read the interactions. Others may weight things differently. But it suggests that interventions targeting skills maintenance and competence are higher leverage than the usual focus on output checks.

## Possible Architectural Responses

Here are some thoughts on patterns that could be materially better than the current default in many of the deployments I have seen.

**Risk-tier deployments honestly.** A lot of AI governance applies uniform review processes across tasks of radically different risk. Agentic architectures with thin oversight seem appropriate for low-consequence, reversible, high-volume tasks. Controlled architectures with genuine human authority (or lower risk old school deterministic logic) look more appropriate where consequences matter.

**Slow the agent, do not speed up the human.** If a human cannot plausibly review 200 outputs an hour, designing a system that produces 200 outputs an hour and then asking them to review it is probably not the right architectural choice (and going back to cybernetics goes against [Ashby's Law of requisite variety](https://en.wikipedia.org/wiki/Variety_(cybernetics))). Rate-limiting the AI rather than the reviewer could be considered though it sits uncomfortably with productivity and speeding up process narratives.

**Budget for the J-curve.** If the productivity case requires substantial organisational complementary investment (process redesign, skills development, data quality, governance maturity) the delivery plan probably needs to include those investments explicitly.

**Budget for skills maintenance.** If AI is automating the work that built a reviewer's judgement, that reviewer capability is on a depreciation curve. Either invest deliberately in rotation back into unassisted work (chaos anti AI monkey maybe isn't sounding so wild after all?!), or accept that oversight capability is decaying. Pilots have known this for decades. Knowledge workers may be about to rediscover it.

**Design for obvious failure.** Graceful, plausible failure is probably a confirmation-fatigue trap. AI systems that fail in ways that look obviously wrong rather than plausibly right may be more honest to design for, even though that conflicts with UX conventions optimised for polish (and LLMs nasty habit for sycophancy).

**Flag recursive complacency as a known unknown.** AI evaluating AI is useful but probably not a substitute for cognitive independence. I would be cautious about architectures that treat LLM-as-judge as solving oversight rather than augmenting it.

**The chaos anti-AI monkey.** I floated this in the original [sleepwalking piece](https://www.linkedin.com/pulse/we-sleepwalking-tomorrows-ai-challenges-oliver-cronk-4rcge/) partly in jest, but the case for it gets stronger the more I think about it. Scheduled AI-off periods seem to surface hidden dependencies, maintain unassisted competence, and give reviewers empirical grounding for what "normal" looks like without the tooling. Something like a disaster recovery drill for cognitive infrastructure?

## Does AI automation always make sense?!

Taken together, the three fallacies produce a question I do not hear asked nearly enough in AI governance conversations:

> If the AI's judgement is better than a human's, the productivity gains are smaller than forecast, and a human reviewer cannot catch errors: what exactly is this AI deployment achieving? Is it worth the costs and risks?

Local gains (or massive volume tasks that would never have been possible for a human team) may still justify deployment. Some tasks are low-consequence enough that thin oversight is low risk. Some deployments are pilot investments whose real value is learning how to do the next one better. These are all defensible positions, and I would encourage architects to state them as the actual rationale rather than dressing them up as oven ready large-scale transformation(s).

What I find harder to defend is the tacit position many programmes (or vendor / consultant **marketing narratives**) seem to occupy: that **substitution is clean, productivity gains are imminent, and oversight can be meaningful**. The literatures on each of those questions do not obviously support all three being true at once. They may be true in particular cases (as I said earlier perhaps at large scales).

Bainbridge closed her 1983 paper with a line I have been thinking about:

> "The difficulty remains that they are less effective when under time pressure... resolving them will require even greater technological ingenuity than does classic automation."

The question, forty-three years on, is whether we apply it to the genuinely hard problem of designing in honest oversight, or whether we keep scaling systems whose governance is ceremonial and whose productivity case may turn out to be a vendor hype. I had been thinking that maybe we just need smarter feedback loops (leaning on cybernetics again) but after reviewing this literature I need to do a lot more thinking about how viable some adaptive / dynamic ecosystem architecture approaches might be.

## Citations / Further reading

- Bainbridge, L. (1983). ["Ironies of Automation"](https://www.sciencedirect.com/science/article/abs/pii/0005109883900468). *Automatica*, 19(6).
- Brynjolfsson, E., Rock, D. & Syverson, C. (2021). ["The Productivity J-Curve: How Intangibles Complement General Purpose Technologies"](https://www.aeaweb.org/articles?id=10.1257/mac.20180386). *AEJ: Macroeconomics*.
- Brynjolfsson, E., Li, D. & Raymond, L. (2023). ["Generative AI at Work"](https://www.nber.org/papers/w31161). NBER Working Paper 31161.
- Dell'Acqua, F. et al. (2023). ["Navigating the Jagged Technological Frontier"](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321). Harvard Business School Working Paper 24-013.
- Daron Acemoglu, "The Simple Macroeconomics of AI," NBER Working Paper 32487 (2024), <https://doi.org/10.3386/w32487>.
- Elish, M. C. (2019). ["Moral Crumple Zones: Cautionary Tales in Human-Robot Interaction"](https://estsjournal.org/index.php/ests/article/view/260). *Engaging Science, Technology, and Society*, 5.
- Cronk, O. (2025). ["Are we sleepwalking into tomorrow's AI challenges?"](https://www.linkedin.com/pulse/we-sleepwalking-tomorrows-ai-challenges-oliver-cronk-4rcge/)

---

*Notes: This piece is a follow-up exploration of the Architect Tomorrow sleepwalking risks framework. Several claims here are hypotheses flagged deliberately as open (in particular the compounding dynamic across the three fallacies, the recursive complacency concern in LLM-as-judge patterns, and the load-bearing role of Relevance Degradation in the sleepwalking diagram). AI use disclosure - Claude Opus 4.7 used to help me find further relevant research and papers to the ones originally found and helped me elaborate and edit the piece. The whole piece has been through manual review and manual reference checking (would be a further irony otherwise!!!)*
