---
layout: default
title: Problem Solving
permalink: /problem-solving/
---

## Problem Solving

{% for post in site.posts %}
  {% if post.scope == "Problem Solving" %}
<article class="post-list">
  <span class="text-monospace" style="--text-xs">{{ post.date | date: "%Y-%m-%d" }}</span> <span class="post"><a href="{{ post.url }}">{{ post.title }}</a></span>
</article>
  {% endif %}
{% endfor %}
