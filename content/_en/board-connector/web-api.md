---
ref: board-connector-100
layout: page
title: Web-API
description: Web-API
product: board-connector
parent: board-connector
permalink: /:collection/:path
weight: 6
lang: en_GB
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Board Connector.<br>
Make sure to use the documentation within the new [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

The following section contains information about the web API of Board Connector.

Board Connector offers a web API that allows running extractions and querying meta information and extraction logs from Board Connector through web calls.
The web API returns the result as an http-json stream.

{% include _content/en/xu-specific/advanced-techniques/api-base-url.md %}

{: .box-note } 
**Note:** Make sure to use the correct ports, see [Server Ports](./server/ports).

{% include _content/en/xu-specific/advanced-techniques/api-config.md %}

{% include _content/en/xu-specific/advanced-techniques/api-run-extractions.md %}

{% include _content/en/xu-specific/advanced-techniques/api-logs.md %}
