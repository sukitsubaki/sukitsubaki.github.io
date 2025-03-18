---
layout: default
title: System Architecture
permalink: /system-architecture/
---

# System Architecture

{% for post in site.posts %}
  {% if post.scope == "System Architecture" %}
    - [{{ post.title }}]({{ post.url }})
  {% endif %}
{% endfor %}
