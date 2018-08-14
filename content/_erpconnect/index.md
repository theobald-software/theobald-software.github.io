---
layout: page
title: ERPConnect
description: ERPConnect main page
collection: erpconnect
parent: home
permalink: /:collection
weight: 1
---

Welcome to the Online Help for ERPConnect, which includes the following chapters:

{% assign items = site.erpconnect | where:"parent","erpconnect" | sort: 'weight' %}
{% for item in items %}
<a href="{{ site.url }}{{ item.url }}">{{ item.title }}</a>
{% endfor %}