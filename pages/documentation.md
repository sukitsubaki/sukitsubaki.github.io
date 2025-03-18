---
layout: default
title: Documentation
permalink: /documentation/
---

# Documentation

{% for post in site.posts %}
  {% if post.scope == "Documentation" %}
<article class="post-list">
  <span class="date monospace small">{{ post.date | date: "%Y-%m-%d" }}</span> <span class="post"><a href="{{ post.url }}">{{ post.title }}</a></span>
</article>
  {% endif %}
{% endfor %}
