---
layout: post
title: "Documentation Habits That Save Future You"
date: 2012-03-17
last_updated: 2017-01-22
scope: "Documentation"
---

# Documentation Habits That Save Future You

There's a familiar moment that most developers experience: returning to a project after months away and feeling like you're reading code written by a stranger. You stare at functions and wonder what they do, why they were written that way, and what assumptions they make. That stranger, of course, is past you—and they've left you a puzzle to solve.

Over the years, I've developed documentation habits that have saved me countless hours of rediscovery and head-scratching. These aren't about formal documentation systems or rigid processes—they're simple practices that create a trail of breadcrumbs for future you to follow.

## The Three Audiences of Documentation

Before diving into specific habits, it's worth considering who you're actually writing documentation for. In my experience, there are three main audiences:

1. **Future You**: The person who will maintain this code months or years from now, when the context is no longer fresh
2. **Collaborators**: Others who might work with your code, even in small-scale projects
3. **Users**: People who will use what you've built without seeing the inner workings

Each audience needs different information, but I've found that focusing primarily on Future You naturally creates documentation that serves the other audiences as well.

## Document Decisions, Not Just Code

The most valuable documentation often isn't about what the code does, but why it does it that way. Code can show the how, but rarely reveals the why.

I keep a simple `decisions.md` file in project roots that captures:

- Major architectural choices
- Technologies selected and alternatives considered
- Known limitations and their reasons
- Unexpected challenges and their solutions

## Create Setup Instructions For Your Future Self

Nothing is more frustrating than returning to a project and spending hours figuring out how to get it running again. Even for small personal projects, I create a `setup.md` file with:

- Required dependencies with exact versions
- Environment configuration steps
- Build and run commands
- Common development tasks

What makes this different from standard README instructions is including the small details that you'll inevitably forget—like that one configuration flag that's essential but not obvious.

## Comment on the Unexpected, Not the Obvious

Comments that merely describe what code does waste space and can drift out of sync with the code. Instead, I try to focus my comments on:

- Non-obvious edge cases
- Performance considerations
- Browser/environment quirks being addressed
- Temporary solutions that should be revisited

For example, rather than:

```javascript
// Loop through the items array
for (let i = 0; i < items.length; i++) {
```

I'd only comment if there's something unusual:

```javascript
// Using a traditional for-loop instead of forEach for IE11 compatibility
for (let i = 0; i < items.length; i++) {
```

## Create Living Documentation Through Examples

Some of the most helpful documentation is code that shows how other code should be used. Create example files that:

- Demonstrate common use cases
- Show integration patterns
- Illustrate configuration options

These examples serve as both documentation and tests—if they stop working, something has changed that might break real usage.

In a Python module I built for parsing specialized files, I included an `examples` directory with sample input files and scripts showing how to process them. When I came back later, these examples got me into again within minutes.

## Document Your Environment, Not Just Your Code

Code doesn't exist in isolation. I've learned to document the environment it runs in, including:

- Operating system specifics
- Browser version requirements
- External services and their configuration
- Database schemas and migrations

A common debugging challenge arises when a previously functional project suddenly fails due to unnoticed environment changes. For example, an unintentional upgrade of a key dependency, such as a programming language runtime, can introduce compatibility issues. A simple note about version requirements can prevent hours of troubleshooting.

## Schedule Documentation Reviews

Documentation ages faster than code. A function with a slightly misleading comment is worse than a function with no comment at all. I schedule recurring calendar reminders to:

- Review documentation for accuracy
- Update outdated information
- Add documentation for new features
- Improve areas that proved confusing when revisited

Even just 30 minutes every few months keeps documentation fresh and useful.

## Keep a Development Journal

Perhaps my most valuable documentation habit is keeping a simple development journal—a chronological record of what I'm working on, challenges faced, and solutions found.

I use a simple text file / note app with date headers and bullet points about:
- What I accomplished
- Roadblocks encountered
- Decisions made
- Resources consulted
- Next steps planned

This journal has saved me countless times when I've had to recall why I made a particular change or how I solved a tricky problem.

## Documentation as Future-Proofing

When working on open source or projects with potential longevity, take documentation a step further by considering:

- Contribution guidelines
- Architectural overviews
- Feature roadmaps

This level of documentation makes projects more resilient to contributor turnover and helps maintain consistent direction over time.

## Lightweight Templates

To make good documentation habits stick, create lightweight templates for common documentation needs:

- Project READMEs
- Setup instructions
- API documentation
- Troubleshooting guides

These templates provide just enough structure to ensure to cover important information without becoming burdensome.

## The Payoff: Freedom From Your Past

Good documentation is ultimately about freedom—the freedom to step away from a project and return without paying a steep relearning tax. It's about being able to pick up where you left off, whether that's after a weekend or after a year.

I've found that projects with even modest documentation are the ones I'm most likely to return to and continue developing. They feel approachable rather than intimidating, like revisiting a well-organized workshop rather than a cluttered storage unit.

## Start Small, Stay Consistent

If you're not documenting much currently, don't try to retrofit comprehensive documentation to all your projects. Instead:

1. Start with new projects
2. Focus on one documentation habit at a time
3. Document as you go, not as an afterthought
4. Prioritize the information most likely to be forgotten

Even just keeping a simple decision log and setup instructions will put you ahead of where most solo developers find themselves.

## Conclusion

Documentation doesn't have to be formal or extensive to be valuable. The best documentation habits are the ones you'll actually maintain—the ones that feel like they're saving you time rather than consuming it.

By focusing on creating breadcrumbs for your future self, you're not just being considerate to someone who will thank you later; you're building a sustainable practice that makes long-term projects viable and enjoyable.

What documentation habits have you found most valuable? I'd be interested to hear what works for others, particularly in small-scale or personal projects.
