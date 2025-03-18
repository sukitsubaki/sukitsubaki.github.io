---
layout: default
title: System Architecture
permalink: /system-architecture/
---

# System Architecture

{% for post in site.posts %}
  {% if post.scope == "System Architecture" %}
    <article class="post-list">
            <span class="date monospace small">{{ post.date | date: "%Y-%m-%d" }}</span> <span class="post"><a href="{{ post.url }}">{{ post.title }}</a></span>
        </article>
  {% endif %}
{% endfor %}
