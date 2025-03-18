---
layout: default
title: Problem Solving
permalink: /problem-solving/
---

## Problem Solving

{% for post in site.posts %}
  {% if post.scope == "Problem Solving" %}
<article class="post-list">
  <span class="text-monospace" style="font-size: var(--text-xs);">{{ post.date | date: "%Y-%m-%d" }}</span> <span class="post-list__item"><a href="{{ post.url }}">{{ post.title }}</a></span>
</article>
  {% endif %}
{% endfor %}
