---
title: "What to Leave Unautomated"
description: "I built an agent fleet because I believe automation is useful. That is also why I have become much more careful about what I refuse to automate."
category: "AI Systems"
date: 2026-05-13T12:00:00-06:00
tags: ["AI", "AgenticAI", "Automation", "Operations"]
draft: false
---

<p>
I built an agent fleet because I believe automation is useful.
</p>

<p>
That is also why I do not trust the phrase "automate everything."
</p>

<p>
The hard part is not getting agents to do more work. The hard part is deciding which work should not leave your hands yet.
</p>

<p>
Restraint is not smaller ambition. It is what keeps fast work from turning into hidden risk.
</p>

<p>
I run agents across research, product, building, QA, marketing, content, admin, and operations. They write drafts, inspect repositories, move tasks, summarize state, gather sources, prepare outreach, and route work between lanes.
</p>

<p>
The system is useful because it does a lot without me. It stays useful because some things still stop before me.
</p>

<hr>

<h2>The taxonomy I actually use</h2>

<p>
I mostly sort work into three buckets.
</p>

<p>
First: automate aggressively. If the work is repetitive, reversible, visible, and mechanically checkable, I want agents doing it. That means source collection, formatting, routing, checks, and status summaries.
</p>

<p>
Second: automate with gates. If the work creates external consequence, cost, public claims, code changes, or trust exposure, agents can prepare it, but something has to stop before action.
</p>

<p>
That stop might be a QA pass, a cost threshold, a human approval, a diff review, a daily cap, or a traceability check.
</p>

<p>
Third: leave human until trust is earned. That includes signing contracts, spending money beyond approved bounds, sensitive replies, final public voice, ambiguous relationship context, and irreversible destructive actions.
</p>

<p>
Those are not permanent walls. Some boundaries should move as the system proves itself. But they move through evidence, not optimism.
</p>

<p>
I do not know if this taxonomy is final. I expect it to change. But it is the cleanest way I have found to keep automation powerful without pretending every task deserves the same level of autonomy.
</p>

<hr>

<h2>The wrong goal is full autonomy</h2>

<p>
Full autonomy sounds clean from a distance. Give the system a goal and let it report back when the work is done.
</p>

<p>
Some workflows can move in that direction. Many should not start there.
</p>

<p>
One of my agents once produced resume bullets that looked polished and were not true enough. They had the shape of good writing. They had the confidence of good writing. They also introduced claims that did not trace cleanly to the source material.
</p>

<p>
That is a different class of failure than a broken script. A broken script fails in the system. A polished false claim fails under my name.
</p>

<p>
The fix was not "never let agents draft resumes." That would be the wrong lesson. The fix was traceability.
</p>

<p>
Every bullet has to map back to source material. Each claim gets classified as traceable, stretch, or fabricated. A fabricated claim is a hard fail.
</p>

<p>
The agent can draft. The agent cannot become the final authority on truth-bearing self-representation.
</p>

<p>
That distinction matters. Automation is not one switch. It is a set of permissions.
</p>

<hr>

<h2>Automate the mechanical parts hard</h2>

<p>
There are plenty of things I want the system to automate aggressively.
</p>

<p>
Source collection, link gathering, formatting, deduplication, queue routing, status summaries, search, recall, schema validation, and test runs.
</p>

<p>
Those jobs are perfect for agents because they are high-volume and low-romance. I do not need to preserve the human magic of copying URLs into a research file.
</p>

<p>
If the work is reversible, visible, structured, and cheap to correct, I want it out of my hands as quickly as possible.
</p>

<p>
But even mechanical work needs the right interface. I learned that after a queue wipe. Two agents wrote to one shared JSON file, and one write silently overwrote another.
</p>

<p>
A task disappeared from the queue with no error and no warning.
</p>

<p>
The answer was not to ask agents to be more careful. The answer was to stop letting them raw-write shared state. Queue writes moved behind file locking, atomic writes, deduplication, and a blessed script.
</p>

<p>
That is a pattern I trust: automate the work, constrain the boundary.
</p>

<hr>

<h2>Gate anything with compounding consequence</h2>

<p>
The next category is not "keep human." It is "automate with gates."
</p>

<p>
Drafts belong here. External messages belong here. Code before deploy belongs here. Recurring paid API calls belong here.
</p>

<p>
I learned the money version through a memory sync that called an external embedding API continuously. It burned about $100 per day before I noticed.
</p>

<p>
The problem was not automation. The problem was automation with no spending boundary.
</p>

<p>
Now a task that deploys a recurring external API call needs a cost estimate. Above a threshold, it has to stop and surface before it ships.
</p>

<p>
That gate is not bureaucracy. It is the difference between useful background work and a quiet bill.
</p>

<p>
Outbound communication has a similar shape. The fleet can research public contact routes, draft personalized outreach, and send a small capped number through approved channels under explicit rules.
</p>

<p>
It cannot scrape personal emails. It cannot blast. It cannot negotiate custom terms. It cannot ignore an objection or unsubscribe.
</p>

<p>
The work is partly automated because speed helps. The boundary stays human because trust is easy to spend and hard to earn back.
</p>

<hr>

<h2>Leave judgment where failure is quiet</h2>

<p>
The most dangerous automation is not always the one that breaks loudly.
</p>

<p>
A task in my system once emitted <code>task.picked_up</code> again and again for nearly an hour before it finally failed. From the outside, the system looked alive. It looked busy. It looked like work was moving.
</p>

<p>
Nothing useful was happening.
</p>

<p>
That is the version of automation I distrust most: the kind that makes quiet failure look operational.
</p>

<p>
This is where final judgment has to stay closer to the human. Not because humans are pure or agents are bad, but because some failures are hard to detect from the output alone.
</p>

<p>
Did the message preserve the relationship context? Did the article sound like me? Did the tradeoff make sense politically, not just logically? Did the system choose the easiest measurable proxy instead of the real goal?
</p>

<p>
Agents can help pressure-test those questions. They can draft, critique, check sources, and make the decision surface cleaner.
</p>

<p>
But assistance is not accountability.
</p>

<p>
The call still belongs to the person whose name, money, users, relationships, or commitments are on the other side of it.
</p>

<hr>

<h2>Even writing has a boundary</h2>

<p>
This piece came through the same rule. Agents can gather sources, draft, critique structure, check claims, and prepare a version for staging.
</p>

<p>
But I do not want a system to publish under my name because each individual step looked plausible in isolation.
</p>

<p>
The final trust moment matters. It carries voice, judgment, and accountability. The pipeline helps create the work, but it does not erase the boundary around owning it.
</p>

<hr>

<h2>The mature operator does not automate everything</h2>

<p>
It is easy to brag about how much the system can do without you. It is harder, and more useful, to explain where it stops.
</p>

<p>
That is the part I care about now. Not because I want less automation. Because I want automation I can trust.
</p>

<p>
The goal is not to keep humans busy. The goal is to make the human moments rare, explicit, and worth protecting.
</p>

<p>
Agents should make the decision surface cleaner, not bury the human deeper in the machine.
</p>

<p>
When the work carries judgment, taste, trust, money, identity, relationship context, or irreversible consequence, the question changes.
</p>

<p>
The mature AI operator is not the person who automates the most.
</p>

<p>
It is the person who knows what to leave unautomated until the system has earned more.
</p>
