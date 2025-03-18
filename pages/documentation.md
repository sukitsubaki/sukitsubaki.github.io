---
layout: default
title: Documentation
permalink: /documentation/
---

## Documentation

{% for post in site.posts %}
  {% if post.scope == "Documentation" %}
<article class="post-list">
  <span class="text-monospace" style="font-size: var(--text-xs);">{{ post.date | date: "%Y-%m-%d" }}</span> <span class="post-list__item"><a href="{{ post.url }}">{{ post.title }}</a></span>
</article>
  {% endif %}
{% endfor %}
