---
layout: default
title: System Architecture
permalink: /system-architecture/index.md
---

# System Architecture

Text

## All Posts in Scope

{% for post in site.posts %}
  {% if post.scope == "System Architecture" %}
    - [{{ post.title }}]({{ post.url }})
  {% endif %}
{% endfor %}

## Debug
{{ site.posts.size }}
