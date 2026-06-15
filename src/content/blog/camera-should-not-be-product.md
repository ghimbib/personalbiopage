---
title: "The Camera Should Not Be the Product"
description: "The humane version of physical safety AI is not a bigger screen. It is a smaller, cleaner, more accountable interruption."
category: "Product Lessons"
date: 2026-06-15
image: /images/blog/camera-should-not-be-product/hero-banner.png
imagePosition: center
tags: ["AI", "ProductManagement", "SafetyTech"]
draft: false
---

I recently talked with a company building AI safety tools for senior living and schools, and I kept getting stuck on one word: camera.

A camera feels like the product because it is the thing everyone can point at: visible, budgetable, progress bolted to a wall.

That is the trap: the camera should not be the product; the accountable interruption should be.

Or more specifically: the product is the moment a tired human gets interrupted for the right reason.

That distinction matters because physical safety AI sits in a weird, uncomfortable category. In one room, it can help staff notice a resident is at risk. In another room, the same basic pattern can turn into a suspicion machine pointed at students.

Same category. Similar AI sales pitch. Very different escalation risk.

## Senior living is the humane case

Start with senior living because the problem is real and not theoretical.

People fall, wander, and get out of bed at night when no one is standing there. Staff are overloaded. Families want reassurance. Residents want dignity. Nobody wants a preventable delay, and nobody wants a bedroom turned into a live broadcast.

The scale is brutal. The [CDC says](https://www.cdc.gov/falls/data-research/index.html) more than 14 million older adults, about 1 in 4, report falling each year. About 37% of those who fall report an injury that needs medical treatment or restricts activity. The age-adjusted fall death rate rose 21% from 2018 to 2024.

That does not mean an AI product gets to swagger into the room claiming it prevents falls. It means the operating problem is serious enough to deserve better product thinking than "add cameras and pray."

The best senior-living version of this category is not about making more people watch more footage. It is about noticing meaningful change without making the resident feel like a subject in a demo.

That is why one detail from a recent [Axios Phoenix story](https://www.axios.com/local/phoenix/2026/02/20/ai-motion-detector-paul-falls-assisted-living) stuck with me. Fellowship Square Mesa had averaged about 20 falls per month among 125 residents before using Helpany's Paul system. The system uses radar-based motion detection, not a camera or audio recorder, and flags changes like gait, instability, posture, and getting out of bed at night.

The interesting part is not the sensor. The interesting part is the handoff.

If the system notices that someone's movement changed overnight, what does a staff member receive? Is it a useful check-in prompt or another dashboard tile? Does it carry enough context to act? Does it have an owner? Can it be dismissed, corrected, or escalated without creating a fake sense of certainty?

That is where the product lives.

## A feed is not a workflow

I have a low tolerance for dashboards that make the buyer feel informed and the operator feel doomed.

A video feed is not a workflow. A sensor is not a workflow. A risk score is definitely not a workflow if nobody knows what to do with it at 2:17 in the morning when three other things are already going wrong.

The product has to answer a small set of very practical questions.

What changed, and why does it matter now? Who owns the next step? What context does that person need?

What happens if the alert is wrong? What happens if no one responds? How does the system remember what happened without letting every incident become a permanent cloud of suspicion?

That is less glamorous than "AI camera." Good. Glamour is usually where product categories go to lose the plot.

The humane version is narrow. It does not treat every person like a pending incident. It does not turn family reassurance into remote surveillance. It does not ask staff to stare at screens in case reality happens.

It says: this changed, here is why we think it matters, here is the next human step, and here is the receipt.

## Schools are the warning label

Then you move the same category into schools and the temperature changes fast.

A senior-living alert can still go wrong, but the default use case is care. A school alert can become discipline, police contact, or humiliation.

That does not mean schools have fake safety problems. It means the product cannot be allowed to confuse "something triggered the model" with "something dangerous happened."

The cleanest example is the Doritos incident. [TechCrunch reported](https://techcrunch.com/2025/10/25/high-schools-ai-security-system-confuses-doritos-bag-for-a-possible-firearm/) that an AI security system at a Maryland high school flagged a bag of chips as a possible firearm. Security reportedly reviewed and canceled the alert, but the escalation chain still reached the school resource officer. The student was searched and handcuffed.

That is not a tiny edge case. That is the product, exposed.

If a canceled alert can still travel far enough to put a student in handcuffs, the system did not merely have a false positive. The workflow failed.

This is where the phrase "human review" starts to annoy me. Human review is not magic dust. It only matters if it happens before the consequence. If the alert has already scared the room, routed to the wrong person, or pushed people toward escalation, the human is not reviewing. The human is cleaning up after the product.

The [FTC's action against Evolv Technologies](https://www.ftc.gov/news-events/news/press-releases/2024/11/ftc-takes-action-against-evolv-technologies-deceiving-users-about-its-ai-powered-security-screening) is another warning. The FTC said Evolv made false or unsupported claims about its AI weapons-screening systems, including in school settings. The agency said the scanners were in more than 800 schools across 40 states, school systems made up half the business, and the complaint alleged failures to detect weapons plus false alarms on harmless items.

That is what happens when a product category sells confidence before it earns it.

Washington's [SSB 5956 House Bill Report](https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bill%20Reports/House/5956-S%20HBR%20ED%2026.pdf) gets at the same problem from the policy side. It talks about automated decision systems, student discipline, school surveillance, meaningful human involvement, and avoiding replacement of human judgment in safety decisions.

I read that less as a policy abstraction and more as a product requirement.

I do not know exactly where every deployment line belongs. I would not trust one of these systems until I saw who can cancel an alert, who can escalate it, what they see, and how fast a bad pattern gets shut down.

Do not let the machine turn a messy signal into a consequence before a person has enough context to make a real call.

## The product principles are boring on purpose

If I were evaluating one of these systems, I would care less about the camera demo and more about the interruption contract.

**First, narrow signal.** The system should answer one small question: did movement change enough to justify a check, did someone get out of bed at a risky time, or did an object match a very specific safety condition? The moment the product becomes a general-purpose suspicion engine, it is already drifting.

**Second, human review before escalation.** Before discipline, police contact, family panic, or anyone treats the alert like reality. Human review after the blast radius is just paperwork with a nicer name.

**Third, an audit trail.** Every alert needs a receipt: what triggered it, what context was shown, who saw it, what they decided, and whether it was corrected. If it was a false positive, did the product learn the right lesson, or did the organization just move on because everyone was busy?

**Fourth, false-positive handling.** A false positive is not just a model error. It is an interruption. In schools, it can become fear and punishment. In senior living, it can become alert fatigue, wasted staff time, and less trust in the next alert.

**Fifth, a kill switch.** If the system cannot be paused, narrowed, or shut down when it behaves badly, it is not ready for high-consequence environments. "Always on" sounds good in a sales deck. It sounds worse when the product is wrong.

**Sixth, scope control.** A tool bought for fall detection should not quietly become behavior scoring. A tool bought for weapons detection should not quietly become attendance tracking, discipline support, or protest monitoring. Scope creep is not a footnote in this category. It is one of the main failure modes.

## Better reasons to look

I do not want more eyes on people. I want better reasons to look.

In senior living, the best version respects the fact that people need care without treating their lives as footage. It helps staff notice what matters sooner, with less staring and more context.

In schools, the best version may often be restraint. Smaller scope. Fewer automated consequences. More proof before escalation. More humility about what the system does not know.

The camera is the easy thing to sell because everyone understands watching.

The harder product is interruption: rare enough to trust, specific enough to act on, and accountable enough to survive being wrong.

That is the version of safety AI worth building.

Not a bigger screen.

A better reason to look.
