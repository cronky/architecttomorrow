---
title: "Mythos: What Enterprise and Security Architects Need to Know about Agentic AI"
date: 2026-04-14 00:09:00 +0000
excerpt: "Whilst there has been a lot of chatter about Anthophic Mythos / Glasswing, I wanted to cut through the noise and summarise what you need to care about from an Enterprise / Security Architect POV…"
linkedin_url: https://www.linkedin.com/pulse/mythos-what-enterprise-security-architects-need-know-agentic-cronk-9gs4e
---
Whilst there has been a lot of chatter about [Anthophic Mythos / Glasswing](https://www.anthropic.com/glasswing), I wanted to cut through the noise and summarise what you need to care about from an Enterprise / Security Architect POV. Firstly thanks to [Christophe Parisel](https://www.linkedin.com/in/parisel) (who has appearred on the [podcast](https://www.youtube.com/watch?v=rzGZMolb42w&list=PLu1Byoup02RbIKEeNSCAJcN4R7Uxb9paP&index=22)) for signposting me to the excellent [Cloud Security Alliance report](https://labs.cloudsecurityalliance.org/mythos-ciso/).

On 12 April, the Cloud Security Alliance, SANS Institute, OWASP, and [un]prompted jointly published a draft strategy briefing titled *"The AI Vulnerability Storm: Building a Mythos-ready Security Program"*. The contributing author list is impressive including: Bruce Schneier, Jen Easterly (former CISA Director), Chris Inglis (former National Cyber Director), Heather Adkins (CISO, Google), Phil Venables (former CISO, Google Cloud), Rob Joyce (former NSA Cybersecurity Director), and many more. This isn't vendor marketing. It's a cross-industry call to action, and the architectural implications are worth reflecting on...

### The short version of what happened

Anthropic's Claude Mythos (Preview) autonomously discovered thousands of zero-day vulnerabilities across every major operating system and browser, generating working exploits with a 72% success rate. It found a 27-year-old bug in OpenBSD. It chained multiple memory corruption vulnerabilities into single exploit paths without human guidance. Anthropic responded with Project Glasswing, giving 40 vendors early access so they can remediate.

Most of these capabilities predated Mythos, but Mythos has arguably made the threat harder to ignore. The briefing's timeline shows this has been building since mid-2025: XBOW topping HackerOne's leaderboard, Google Big Sleep finding 20 real-world zero-days, DARPA AIxCC finding 54 vulnerabilities in four hours, and state-sponsored groups running autonomous attack chains.

### Why architects should care, not just CISOs

**The attacker-defender asymmetry is now structural, not circumstantial.** AI lowers the cost and skill floor for discovering and weaponising vulnerabilities faster than organisations can patch them. The paper is blunt: current patch cycles, response processes, and risk metrics were not built for this environment. For architects, this means the assumptions underpinning your non-functional requirements for security response times, patching windows, and incident frequency are likely wrong. If your architecture depends on a 30-day patch cycle as an acceptable risk window, that window is closing rapidly if hasn't already closed.

Here's the thing though: patching and IT hygiene have been neglected for a very long time, and this predates AI entirely. From my time working at Tanium, I saw how many large enterprises struggled with the basics: incomplete asset inventories, patching backlogs measured in months, and a persistent gap between what the security team thought was deployed and what was actually running. Mythos doesn't create that problem; it weaponises it. AI can now finds vulnerabilities and exploit them, and compressed the timeline for adversaries to do the same. If your organisation hasn't been disciplined about patching and asset management before now, the urgency just increased by an order of magnitude.

**Agents are simultaneously the problem and the proposed solution.** The paper's priority actions include both "Require AI Agent Adoption" across all security functions and "Defend Your Agents" as critical priorities, to be started this week. The briefing explicitly states that without agents, most of its recommendations are untenable, but also that agents are "privileged, insecure by default, and not covered by existing security controls." They recommend defining scope boundaries, blast-radius limits, escalation logic, and human override mechanisms before deploying agents in or adjacent to production.

This is the architectural challenge in a nutshell: agents need explicit lifecycle management. Spawn with scope, budget with token and time limits, monitor with real-time telemetry, and terminate when boundaries are reached. The CSA paper says you cannot treat agents as just another user or just another service. They are a new asset class requiring a new control framework.

**The software supply chain just got significantly more dangerous.** The paper calls out MCP servers, plugins, and agentic supply chains by name. One of its ten diagnostic questions asks whether you have "disciplined control repos, artifacts, and software, including for agentic supply chain such as MCP servers, plugins, and skills." For enterprise architects managing integration landscapes, this is a material new dimension. Every MCP server, every tool definition, every retrieval pipeline is now part of your attack surface.

### The architectural implications

The briefing recommends using AI agents offensively against your own code, in your CI/CD pipelines, and across security operations. That's a significant endorsement of agentic patterns, but notice the framing: these are agents pointed inward, under controlled orchestration, with explicit scope and governance. It's not a free-for-all.

The case for a governed orchestration approach, where a deterministic workflow engine selectively invokes AI rather than the other way round, becomes even more compelling in this context. If your vulnerability discovery agents, your code review agents, and your incident response agents are all operating through a governed orchestration layer with token budgets, audit trails, and kill switches, you are in a fundamentally different position than if you've handed AI coding tools the keys and hoped for the best.

This also maps directly to the [sleepwalking risks](https://www.linkedin.com/pulse/we-sleepwalking-tomorrows-ai-challenges-oliver-cronk-4rcge/) we've been exploring. The "Asymmetrical Overload" risk, where AI-augmented actors overwhelm those without equivalent capabilities, is precisely what the CSA paper describes. But there's a new sleepwalking risk emerging here: organisations that rush to deploy AI agents for defence without the governance structures to control them may be introducing as much risk as they're mitigating. The paper itself acknowledges this, warning against waiting for industry governance frameworks. "Define your own now," it says.

### The human cost matters

Credit to the authors for addressing burnout directly. Security teams are caught in a vice: AI is simultaneously accelerating the volume of vulnerabilities they must respond to, the volume of code their organisations are shipping, and expanding the attack surface. The paper recommends requesting additional headcount and budget for reserve capacity. It also makes the observation that every security role is becoming an "AI builder" role.

This resonates with a point I've been making: the skills gap isn't about learning to code. It's about learning to work with AI as a collaborator. The organisations that will navigate this best are those that invest in their people alongside their tooling.

### My take

The paper is right that Mythos represents a step-change headline grabbing situation, but it's also candid that most of these capabilities predated it. Architects should be cautious about treating this as a singular event rather than a trend that's been building for over a year.

The Y2K comparison in the conclusions is apt in one respect: it was a systemic threat the industry met through coordinated effort. But Y2K had a fixed deadline. This doesn't. The paper's own framing of "the first of many waves" is more honest and more useful for strategic planning.

There's also a pattern here that architects should recognise and challenge. The paper's core recommendation is essentially: the release of a powerful new AI capability has created significant new risks, and the primary mitigation is to deploy more AI. More agents, more AI-driven scanning, more AI-augmented response. There is a circularity to this that deserves honest examination. We are being told that the antidote to AI-generated risk is more AI, with all the second-order consequences that entails: greater complexity, expanded attack surfaces from the defensive agents themselves, increased energy consumption, deeper dependency on a small number of frontier model providers, and a skills landscape that shifts faster than most organisations can adapt. None of this means the recommendations are wrong. They may well be necessary. But architects should go in with eyes open about the compounding effects rather than treating AI-for-defence as a clean solution to AI-as-threat.

Finally, the recommendation to deploy AI agents across all security functions, whilst simultaneously warning that defensive AI technologies are "lagging behind offensive ones," creates an interesting challenge. You're being told to adopt tools that aren't fully mature, at speed, under pressure. That's precisely the environment where architectural discipline, governed orchestration, explicit boundaries, and human oversight, matters most.

The full draft briefing is available from the [Cloud Security Alliance](https://cloudsecurityalliance.org/). I'd encourage you to read it, share it with your security teams, and use it to start a conversation with your CISO about what your architecture needs to absorb.

**What's your organisation doing in response? Are you seeing these pressures already? I'd love to hear from the community.**

---

*Oliver Cronk is Founder, Fractional CTO and Chief Architect at Cronk Advisory, and founder and host of Architect Tomorrow.*

*AI Use Disclosure: Claude Opus 4.6 assisted with the drafting this edition of the newsletter.*
