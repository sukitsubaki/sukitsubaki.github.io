---
layout: post
title: "Design Thinking for Technical Problem Solving"
date: 2020-10-04
last_updated: 2020-12-19
scope: "Problem Solving"
---

# Design Thinking for Technical Problem Solving

Technical problems are traditionally approached through a logical, linear process: define the issue, analyze it, identify potential solutions, implement the best one. This approach works well for clearly-defined problems with established solution patterns. But what about the messy, ambiguous challenges that increasingly characterize modern development work?

Over the past two years, I've been experimenting with applying design thinking—a methodology typically associated with product development and user experience—to purely technical problem solving. The results have been transformative, leading to more innovative solutions, better alignment with actual needs, and ultimately more successful outcomes.

## When Traditional Problem-Solving Falls Short

Traditional technical problem-solving approaches excel at optimization and incremental improvement but often struggle with:

- **Ambiguity**: Problems where even the definition isn't clear
- **Stakeholder alignment**: Problems involving multiple perspectives and priorities
- **Hidden constraints**: Problems where the real limitations aren't immediately obvious
- **Innovation needs**: Problems requiring novel approaches rather than established patterns

I encountered these limitations while working on a data processing pipeline that was technically sound but failed to meet evolving business needs. Despite numerous optimization attempts, user satisfaction remained low. It wasn't until we stepped back and approached it as a design problem that we discovered we were solving the wrong problem entirely.

## Design Thinking: A Brief Overview

Design thinking is a human-centered, iterative approach to problem-solving that emphasizes:

1. **Empathy**: Deeply understanding those affected by the problem
2. **Definition**: Clearly articulating the actual problem to solve
3. **Ideation**: Generating diverse possible solutions
4. **Prototyping**: Creating simplified versions of potential solutions
5. **Testing**: Gathering feedback through real-world trials

While these principles emerged from product design, they translate surprisingly well to technical domains.

## Applying Design Thinking to Technical Challenges

Here's how each aspect of design thinking translates to technical problem solving:

### 1. Technical Empathy: Understanding the Full Context

Traditional technical problem solving often jumps straight to the technical aspects. Design thinking starts by understanding the complete context:

- **Who is affected** by this technical issue?
- **What are they trying to accomplish** when they encounter it?
- **What constraints** are they operating under?
- **What constitutes success** from different perspectives?

#### In Practice:

For a particularly challenging API performance issue, I began not by profiling code but by:

- Interviewing the developers consuming the API about their usage patterns
- Observing the systems that integrated with this service
- Speaking with operations about their monitoring concerns
- Reviewing business goals for the service

This broader context revealed that pure performance optimization wasn't the real need—reliability and predictability were actually more important to the stakeholders than raw speed.

### 2. Problem Redefinition: Finding the Right Problem

Technical professionals often fall in love with elegant solutions, sometimes before clearly defining the problem. Design thinking emphasizes precise problem definition:

- Move from symptoms to underlying causes
- Challenge initial problem statements
- Frame problems in terms of outcomes, not implementations
- Identify the constraints that actually matter

#### In Practice:

When tasked with optimizing a slow database query, I started with the standard problem statement: "Make this query faster." Through a design thinking approach, we redefined it as: "Enable data analysts to receive trend reports within their decision-making window without compromising system stability."

This redefinition opened entirely new solution paths—including pre-calculated aggregates, asynchronous processing, and selective data sampling—that wouldn't have emerged from the original performance-centric framing.

### 3. Technical Ideation: Expanding the Solution Space

Technical problem solving often narrows quickly to the most obvious solution. Design thinking deliberately expands the solution space before narrowing:

- Separate ideation from evaluation
- Encourage quantity and diversity of ideas
- Combine seemingly unrelated approaches
- Challenge technical assumptions and "best practices"

#### In Practice:

For a complex data transformation challenge, I facilitated a structured ideation session with:

- A "no criticism" rule during the initial idea generation
- Explicit mixing of different technical paradigms (functional, object-oriented, stream-based)
- Deliberate introduction of constraints to force creative thinking ("What if we had to do this with 1/10th the memory?")
- Evaluation criteria that balanced technical elegance with practical constraints

This approach led us to a hybrid solution that combined event streaming for real-time needs with batch processing for historical analysis—a combination nobody initially considered.

### 4. Technical Prototyping: Learning Through Building

Engineering cultures often bias toward comprehensive implementation. Design thinking favors rapid, targeted prototypes:

- Build the minimum necessary to test a specific hypothesis
- Create throwaway code to explore concepts quickly
- Focus on the riskiest or least understood aspects first
- Use simulations and mockups before full implementations

#### In Practice:

When developing a new caching strategy, rather than building the complete system, we:

1. Created a simplified simulator to test various eviction algorithms with actual usage patterns
2. Built a thin prototype that measured cache hit rates without actually storing data
3. Implemented a minimal version that cached only the most impactful data types
4. Gradually expanded based on measured results rather than theoretical predictions

This incremental approach revealed that our initial assumptions about access patterns were flawed, saving weeks of development in the wrong direction.

### 5. Technical Testing: Validating with Real-World Feedback

Engineers often test against specifications rather than actual needs. Design thinking emphasizes testing with real users and real scenarios:

- Observe how solutions perform in authentic contexts
- Gather qualitative feedback, not just metrics
- Test the entire system behavior, not just individual components
- Use findings to refine the problem definition, not just the solution

#### In Practice:

For an authentication system upgrade, we:

1. Created a parallel implementation for internal users before external rollout
2. Set up monitoring that tracked both technical metrics and user experience indicators
3. Conducted interviews about pain points and unexpected behaviors
4. Used this feedback to discover that performance wasn't the issue—inconsistent behavior across platforms was the actual problem

This testing approach completely redirected our efforts toward standardizing behavior rather than optimizing a flawed interaction model.

## Design Thinking Tools for Technical Problem Solving

Beyond the core process, specific design thinking tools have proven valuable for technical problems:

### Technical Journey Mapping

Similar to customer journey mapping, this technique visualizes the complete flow of data, requests, or processes through a system:

1. Identify all participants (services, components, users)
2. Map each step in the process chronologically
3. Document pain points, delays, and inefficiencies
4. Highlight assumptions and dependencies

This holistic view often reveals that the reported problem is just a symptom of issues elsewhere in the chain.

### Constraint Storming

This structured exercise explicitly identifies and challenges constraints:

1. List all perceived limitations (technical, organizational, resource-based)
2. Categorize them as immutable, flexible, or self-imposed
3. Specifically challenge self-imposed constraints
4. Explore how flexible constraints might be modified

I've found this particularly valuable for breaking through "it can't be done" thinking and revealing that many perceived technical limitations are actually policy or practice choices.

### Technical Personas

Adapting the concept of user personas to technical contexts:

1. Create profiles of different systems, components, or users that interact with your solution
2. Document their needs, constraints, and "goals"
3. Consider how your solution affects each persona
4. Evaluate alternatives from multiple perspectives

This approach prevents the common problem of optimizing for one component at the expense of the overall system health.

### Parallel Prototyping

Rather than iterating on a single approach, simultaneously develop multiple alternatives:

1. Choose 2-3 fundamentally different approaches
2. Create minimal implementations of each
3. Test them against the same scenarios
4. Compare strengths and weaknesses

This parallel approach often leads to hybrid solutions that combine the best aspects of different approaches.

## Case Study: A Design Thinking Approach to Technical Architecture

A concrete example illustrates these principles in action:

### The Problem

We were tasked with designing a new event-processing system to replace a monolithic batch process. The initial technical framing was straightforward: "Build a scalable, real-time event processing pipeline."

### The Design Thinking Approach

**Empathy Phase:**
Instead of immediately architecting a solution, we:
- Interviewed data producers about their event generation patterns
- Shadowed analysts who consumed the processed data
- Mapped existing workflows and pain points
- Discovered that "real-time" meant very different things to different stakeholders

**Problem Redefinition:**
We reframed the problem as: "Enable operational teams to react to significant business events within appropriate timeframes while giving analysts access to complete historical data for pattern analysis."

This definition acknowledged that different events had different timing needs—some required seconds, others hours—and that comprehensive analysis was as important as rapid notification.

**Ideation:**
We conducted structured ideation sessions that:
- Generated diverse architectural patterns (pure streaming, lambda architecture, CQRS)
- Explored various technology stacks
- Considered hybrid approaches combining multiple paradigms
- Evaluated trade-offs between consistency, latency, and complexity

**Prototyping:**
Rather than building one comprehensive solution, we:
- Created a simulation of event flows using actual production volumes
- Built a thin prototype focusing on the classification mechanism
- Developed visualization tools to help stakeholders understand different approaches
- Tested critical components with synthetic workloads

**Testing:**
We validated our approach through:
- A limited deployment processing duplicate events alongside the existing system
- Focused user testing with operational teams to verify actionability
- Structured interviews about how the information was actually being used
- Iterative refinement based on real-world usage patterns

### The Outcome

The final architecture differed substantially from the initial concept:
- Events were classified into urgency tiers with different processing approaches
- Critical events used a streamlined path optimized for speed
- Standard events were processed in micro-batches balancing efficiency and timeliness
- A separate analytical store captured complete history optimized for complex queries

This nuanced solution wouldn't have emerged from a traditional technical approach that focused exclusively on building a "real-time pipeline" without deeper exploration of the actual needs and contexts.

## Challenges and Limitations

While design thinking offers valuable approaches to technical problem solving, it's not without challenges:

### Time Pressure Resistance

The empathy and ideation phases can feel time-consuming when facing tight deadlines. I've found that:
- Starting with abbreviated versions of these practices still adds value
- The time investment typically pays off through reduced rework
- Teams become more efficient with these approaches over time
- Selecting the right problems for this approach is key—not every issue warrants full design thinking treatment

### Engineering Culture Friction

Traditional engineering cultures may resist approaches perceived as "soft" or non-technical. Strategies that help include:
- Framing design thinking in terms of engineering outcomes (reduced rework, more robust solutions)
- Starting with small, demonstrable wins
- Adapting terminology to fit engineering contexts
- Involving respected technical leaders as early adopters

### Balancing Divergent and Convergent Thinking

Technical professionals often excel at convergent thinking (narrowing to solutions) but find divergent thinking (expanding possibilities) more challenging. Techniques that help include:
- Structured ideation exercises with clear rules
- Temporary constraints that force creative thinking
- Explicit permission to explore "impractical" ideas
- Separate sessions for generation and evaluation

## Getting Started with Technical Design Thinking

For teams interested in applying design thinking to technical problems, these incremental steps provide a pathway:

1. **Begin with problem framing**: Before diving into solutions, invest time in crafting better problem statements
2. **Add structured ideation**: Introduce formal brainstorming sessions with rules that encourage diverse thinking
3. **Start small**: Apply these approaches to well-defined challenges before tackling ambitious problems
4. **Build on success**: Document and share outcomes to demonstrate the value of these approaches
5. **Develop facilitation skills**: Identify team members who can effectively guide design thinking sessions

Even partial adoption of these methods can significantly improve technical problem-solving outcomes.

## Conclusion

Design thinking isn't a replacement for deep technical expertise and analytical problem solving. Rather, it's a complementary approach that excels in situations where traditional methods fall short—particularly for ambiguous problems, contexts with multiple stakeholders, and challenges requiring innovative approaches.

The core practices—building empathy, reframing problems, generating diverse solutions, rapid prototyping, and testing with real-world feedback—provide a structured path through uncertainty toward more robust, aligned solutions.

In my experience, the engineers who create the most valuable solutions aren't just technically proficient but also skilled at understanding context, reframing problems, and exploring diverse approaches. Design thinking provides a framework to develop these capabilities systematically.

What approaches have you found valuable for tackling ambiguous technical challenges? I'd be interested to hear about experiences applying design thinking or similar methodologies to technical problem domains.