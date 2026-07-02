---
title: "The AI Saw a Gun. It Was a Bag of Doritos."
description: "Safety AI should not be judged by how well it watches. It should be judged by what happens after it thinks it saw something."
category: "Product Lessons"
date: 2026-06-15
image: /images/blog/camera-should-not-be-product/hero-openai-selected.png
imagePosition: center
tags: ["AI", "ProductManagement", "SafetyTech"]
draft: false
---

In October 2025, an AI security system at a Maryland high school flagged a possible firearm and set an escalation in motion. A student ended up searched and handcuffed. The firearm was a bag of Doritos.

Here is the detail that matters: humans had already reviewed the alert and canceled it. The handcuffs happened anyway.

Hold that thought.

I recently talked with a company building AI safety tools for senior living and schools, and one word kept bothering me: camera.

Not because cameras are always wrong. Sometimes seeing sooner matters. In senior living, a delayed check after a fall can change someone's life. In a school, a delayed response to a real threat can be catastrophic.

But "camera" is a dangerous word to build around because it makes the product feel obvious. Put a device on the wall. Detect the thing. Alert a person. Call it safety.

That skips the part where the product actually succeeds or fails.

The interview left me with a cleaner way to say it. The AI is the engine. The model that watches a hallway and guesses "firearm," or watches a room and guesses "fall," is real work and real math, but nobody lives with the engine. People live with the product built around it: the workflow that decides who gets interrupted, with what context, with what power to say no, and with what blast radius when the model is wrong.

Nobody judges a car by revving the engine in the parking lot. You judge the brakes, the steering, what happens in a crash. Safety AI keeps getting demoed as an engine and deployed as a product, and the gap between those two is where people get hurt.

A useful safety system does not just say, "I saw something." It has to say: this changed, here is why it matters, here is who needs to check, here is what they should know, and here is what happens if I am wrong. Call that the interruption contract: the terms under which a machine is allowed to interrupt a human.

That is the part I care about. Not the watching. The handoff.

In senior living, that handoff can be humane. In schools, the same basic pattern can become a suspicion machine if the workflow turns a model trigger into a consequence before anyone has enough context to make a real call.

That is the line this category has to walk.

## Senior living is the best-case version

In senior living, the hard part is not convincing anyone that falls matter. Everyone already knows that. The hard part is noticing the right change early enough without turning a resident's room into a control room.

People fall, wander, and get out of bed at night when no one is standing there. Staff are overloaded. Families want reassurance. Residents want dignity. Nobody wants a preventable delay, and nobody wants a bedroom turned into a live broadcast.

The scale is brutal. The [CDC says](https://www.cdc.gov/falls/data-research/index.html) more than 14 million older adults, about 1 in 4, report falling each year. About 37% of those who fall report an injury that needs medical treatment or restricts activity. The age-adjusted fall death rate rose 21% from 2018 to 2024.

That does not mean an AI product gets to swagger into the room claiming it prevents falls. It means the operating problem is serious enough to deserve better product thinking than "add cameras and pray."

That is why one detail from a recent [Axios Phoenix story](https://www.axios.com/local/phoenix/2026/02/20/ai-motion-detector-paul-falls-assisted-living) stuck with me. Fellowship Square Mesa had averaged about 20 falls per month among 125 residents before using Helpany's Paul system. The system uses radar-based motion detection, not a camera or audio recorder, and flags changes like gait, instability, posture, and getting out of bed at night.

The interesting part is not that it avoids cameras, though that matters. The interesting part is what happens after the signal.

A sensor can notice that someone's movement changed overnight. That is useful, but it is not the product yet. The product decision starts when the system decides whether to interrupt a staff member, what context to show, who owns the check, and how easy it is to correct the system when it is wrong.

That is where dignity either survives or gets quietly traded away.

## A feed is not a workflow

I have a low tolerance for dashboards that make the buyer feel informed and the operator feel doomed.

A video feed is not a workflow. A sensor is not a workflow. A risk score is definitely not a workflow if nobody knows what to do with it at 2:17 in the morning when three other things are already going wrong.

The product has to answer a small set of practical questions.

What changed, and why does it matter now? Who owns the next step? What context does that person need?

What happens if the alert is wrong? What happens if no one responds? How does the system remember what happened without letting every incident become a permanent cloud of suspicion?

This is less glamorous than "AI camera." Good. Glamour is usually where product categories go to lose the plot.

The humane version is narrow. It does not treat every person like a pending incident. It does not turn family reassurance into remote surveillance. It does not ask staff to stare at screens in case reality happens.

It says: this changed, here is why we think it matters, here is the next human step, and here is the receipt.

That is the product. Not the footage. Not even the model. The handoff between a machine noticing something and a human deciding what to do next.

## Schools are the warning label

Senior living shows the humane case for noticing. Schools show why noticing becomes dangerous when the workflow treats a model trigger like an event.

A senior-living alert can still go wrong, but the default use case is care. A school alert can become discipline, police contact, or humiliation.

That does not mean schools have fake safety problems. It means the product cannot be allowed to confuse "something triggered the model" with "something dangerous happened."

The cleanest example is the one this piece opened with. [TechCrunch reported](https://techcrunch.com/2025/10/25/high-schools-ai-security-system-confuses-doritos-bag-for-a-possible-firearm/) the sequence: an AI security system at a Maryland high school flagged a bag of chips as a possible firearm. Security reviewed and canceled the alert, but the escalation chain still reached the school resource officer. The student was searched and handcuffed anyway.

That is not a tiny edge case. That is the product, exposed.

If a canceled alert can still travel far enough to put a student in handcuffs, the model is not what failed. Models misread things; that is exactly why the workflow exists. The workflow failed.

This is where the phrase "human review" starts to annoy me. Human review is not magic dust. It only matters if it happens before the consequence. If the alert has already scared the room, routed to the wrong person, or pushed people toward escalation, the human is not reviewing. The human is cleaning up after the product.

The [FTC's action against Evolv Technologies](https://www.ftc.gov/news-events/news/press-releases/2024/11/ftc-takes-action-against-evolv-technologies-deceiving-users-about-its-ai-powered-security-screening) is another warning. The FTC said Evolv made false or unsupported claims about its AI weapons-screening systems, including in school settings. The agency said the scanners were in more than 800 schools across 40 states, school systems made up half the business, and the complaint alleged failures to detect weapons plus false alarms on harmless items.

That is what happens when a product category sells confidence before it earns it.

Washington's [SSB 5956 House Bill Report](https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bill%20Reports/House/5956-S%20HBR%20ED%2026.pdf) gets at the same problem from the policy side. It talks about automated decision systems, student discipline, school surveillance, meaningful human involvement, and avoiding replacement of human judgment in safety decisions.

I read that less as a policy abstraction and more as a product requirement.

I do not know exactly where every deployment line belongs. I would not trust one of these systems until I saw who can cancel an alert, who can escalate it, what they see, and how fast a bad pattern gets shut down.

Do not let the machine turn a messy signal into a consequence before a person has enough context to make a real call.

## The product principles are boring on purpose

If I were evaluating one of these systems, I would care less about the camera demo and more about the interruption contract.

**First, narrow signal.** The system should answer one small question. Did movement change enough to justify a check? Did someone get out of bed at a risky time? Did an object match a very specific safety condition? The moment the product becomes a general-purpose suspicion engine, it is already drifting.

**Second, human review before escalation.** Before discipline, police contact, family panic, or anyone treats the alert like reality. Human review after the blast radius is just paperwork with a nicer name.

**Third, an audit trail.** Every alert needs a receipt: what triggered it, what context was shown, who saw it, what they decided, and whether it was corrected. If it was a false positive, did the product learn the right lesson, or did the organization just move on because everyone was busy?

**Fourth, false-positive handling.** A false positive is not just a model error. It is an interruption. In schools, it can become fear and punishment. In senior living, it can become alert fatigue, wasted staff time, and less trust in the next alert.

**Fifth, a kill switch.** If the system cannot be paused, narrowed, or shut down when it behaves badly, it is not ready for high-consequence environments. "Always on" sounds good in a sales deck. It sounds worse when the product is wrong.

**Sixth, scope control.** A tool bought for fall detection should not quietly become behavior scoring. A tool bought for weapons detection should not quietly become attendance tracking, discipline support, or protest monitoring. Scope creep is not a footnote in this category. It is one of the main failure modes.

None of this is flashy. That is the point. High-consequence product work should feel a little boring from the outside because the drama has been removed from the workflow.

## Better reasons to look

I do not want more eyes on people. I want better reasons to look.

In senior living, the best version respects the fact that people need care without treating their lives as footage. It helps staff notice what matters sooner, with less staring and more context.

In schools, the best version may often be restraint. Smaller scope. Fewer automated consequences. More proof before escalation. More humility about what the system does not know.

The camera is the easy thing to sell because everyone understands watching.

The engine will keep getting better. Engines always do. But better detection would not have kept that student out of handcuffs, because the alert was already canceled. Accuracy was not the problem. The product was.

The harder product is interruption: rare enough to trust, specific enough to act on, and accountable enough to survive being wrong.

That is the version of safety AI worth building.

Not a bigger screen.

A better reason to look.
