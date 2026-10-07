---
title: "GenAI Architectural Challenges"
date: 2023-05-10 16:36:00 +0000
excerpt: "Apologies for the newsletter silence! Not a reflection of the activity in the community - there has been a lot going on across Generative AI, Sustainable Technology and the future of Architecture!…"
linkedin_url: https://www.linkedin.com/pulse/architectural-challenges-genai-oliver-cronk
---
Apologies for the newsletter silence! Not a reflection of the activity in the community - there has been a lot going on across Generative AI, Sustainable Technology and the future of Architecture! This month will mostly be an update on our work on Generative AI...

## Risks of deploying Generative AI in enterprises

In the full episode below we talk about the challenges of deploying customer facing Generative AI power applications in [regulated] enterprises. We touch on:

- Reputational Damage
- Legal and regulatory compliance in particular “Customer Conduct” aka “Consumer Duty”
- Intellectual Property Infringement
- Illegal activity
- Ethics and Privacy - Use of Personal / Personally Identifiable Data
- Bias in training data

Technical and Technology integration challenges including:

- Explainability / repeatability / transparency
- Scalability
- Security
- Data and systems integration
- Costs and the dangers of free trials
- Environmental impact

[Embedded LinkedIn content: view it on the original article](https://www.linkedin.com/pulse/architectural-challenges-genai-oliver-cronk)

Off the back of the research and thoughts from this episode we've pulled together a conceptual architecture. Thanks again to Charles Phiri, PhD, CITP, Chris Booth, James Heward and others in the community who provided input.

## Conceptual Architecture for GenAI deployment

![](https://media.licdn.com/dms/image/v2/D4E12AQFlheQ7C8guxA/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1683734330229?e=1784160000&v=beta&t=qc2nds6eUyfbsG8BWdi9ZAGGyeBWvHr7dFlNlfVFxZY)

Generative AI Conceptual Solution Architecture

Here is a run through of the notable components (we do acknowledge that the Data Management aspect is important and we will circle back to that very soon).

### Demand Management

Requests should be managed through demand management mechanisms – ideally in the form of a queuing mechanism. This ensures that the platform is isolated from and can manage the spikes in customer demand. Should the volumes be high enough and the workloads be time sensitive, auto-scaling of the orchestration components is an option to consider.

### Orchestration

This is the wrapper or abstraction layer around the different components, managing the generative AI models (in the Model Zoo – more on that later) and providing the framework to add elements such as telemetry capture, input and output checking. The beauty of this is you can keep the upstream and downstream interfaces consistent but swap out components or models within the orchestrator, or scale them up and down as required.

### Input filtering and Model IO engineering

Just from using them, it appears pretty likely that ChatGPT and other Chatbot implementations are using a form of input filtering. As an extension of sanitising inputs this makes a lot of sense, but for systems where the input prompt is so critical to the success of the outcome, this is even more vital. The input might need to be significantly altered to get a better chance of success or to avoid content generation risks; for example, requests that could lead to outcomes that are not compatible with the brand of the organisation. Different models in the Model Zoo might require different input data or prompting styles.

### Model Zoo

It’s highly unlikely that a single model (regardless of how powerful or general purpose it is) is going to cover all the use cases of a non-trivial application. The orchestrator can draw on a number of approved models in the [Model Zoo](https://github.com/collections/ai-model-zoos) (ingested from publicly available model hubs such as [HuggingFace](https://huggingface.co/models) and internal model development as required). This allows for the management and governance of models used in the application. This approach could potentially lead to something approaching Artificial General Intelligence (AGI) – as narrow specialist models can be called upon to solve specific challenges and fill gaps in more general language models that are good at human interaction.

### Telemetry

When aircraft sadly crash, the black box flight recorder is crucial to the investigation of why the accident occurred. When applications leveraging machine learning fail, we need a similar audit trail data source – capturing the input data, decisions and outputs. That way, lessons can be learned and decisions can be made to tune or change models on the basis of data and evidence. From a regulatory perspective, it’s possible that this will be made a requirement when using ML technologies for customer processes – in the future, regulators may demand to see your application telemetry.

### Output checking

When dealing with customer requests in real time, it’s not going to be good enough to just try and catch issues and errors after the fact and adjust architecture afterwards. In order to prevent brand damage, misselling, or other mishaps from generating inappropriate content, output checks and filtering is going to be required. This is likely to be a blend of traditional logic-based filtering and ML models that generate a confidence percentage that outputs are aligned with company policies and/or regulatory standards. Responses back to the customer can then be altered or held back and escalated to a human employee to respond to the customer instead.

### Design time architecture

Underlying this will be design time components – these will ingest telemetry and performance data and assist with updates to the Model Zoo, input and output filtering, and other supporting components. The performance of the platform can be evaluated and fine-tuned and issues and incidents can be investigated from the captured telemetry data.

If you want [more details on this check out the full blog here.](https://blog.scottlogic.com/2023/05/04/generative-ai-solution-architecture.html) And if you'd like to [see the discussion / leave feedback check out this thread](https://www.linkedin.com/feed/update/urn:li:activity:7059829119999467520/) (or feel free to leave a comment on this post).

## What's next?

### The power of Knowledge Graphs!

The next topic in the AI series (although not the next episode...) features many of the original panel plus Tony Seale a leading Knowledge Graph Engineer. Chris Booth and I recorded the follow up episode with him this week and we were both blown away (as you'll be able to tell from the "buffer face" moments that I have whilst processing the implications of what Tony articulates describes. In short Knowledge Graphs partner very well with Large Language Models and this is an episode you won't want to miss!

Chris and I also touch on some R&D we have been doing - using Graph structures to manage customer interaction with Large Language Model generated chat dialogue.

This goes some way to addressing the Data Management piece - the next step is likely to be building out more of that part of the conceptual architecture.

### Strategy to Reality and Business Architecture

[![](https://media.licdn.com/dms/image/v2/D4E12AQGlT8QBbn7P6Q/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1683735317023?e=1784160000&v=beta&t=oBaOgv84X6wxr5KAtJ8JuZEjFrBT5chrJRvkOT65TCk)](https://bizarchmastery.com/strategy-reality-whynde-kuehn)

Strategy to Reality Book Cover

The next episode (that is currently in the editing process) to drop sees Whynde Kuehn returning to talk about her book [Strategy to Reality](https://bizarchmastery.com/strategy-reality-whynde-kuehn), [Women in Architecture](https://thewomeninarchitecture.org/) and Business Architecture in general.

We are joined by Lisa Woodall (who appeared when we spoke to the Intersection Group) and Catherine Pratt. An amazing all woman line up! Diary and travel permitting this should be out in the next couple of weeks.

## Sharing is caring!

A healthy community is a growing community! If this is helpful please do subscribe and share this with your network.

<https://youtube.com/ArchitectTomorrow/>

Is there a topic you'd like to talk about or a speaker you'd recommend? Particularly in the area of Sustainable Architecture / Technology (as in making technology more sustainable) please do get in touch via the comments or send [Oliver](https://www.linkedin.com/in/cronky/) a DM.
