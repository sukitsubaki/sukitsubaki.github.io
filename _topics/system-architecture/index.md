---
layout: default
title: System Architecture
---

# System Architecture

Text

## All posts in scope

{% for post in site.posts %}
  {% if post.scope == "System Architecture" %}
    - [{{ post.title }}]({{ post.url }})
  {% endif %}
{% endfor %}
