---
layout: page
title: Prerequisites and Installation
description: Description about Prerequisites and Installation
collection: erpconnect
parent: erpconnect
permalink: /:collection/:path
weight: 2
---

ERPConnect was developed in C# and requires runtime components and installation steps described in this chapter.

{% assign items = site.erpconnect | where:"parent","prerequisites-and-installation" | sort: 'weight' %}
{% for item in items %}
<a href="{{ site.url }}{{ item.url }}">{{ item.title }}</a>
{% endfor %}