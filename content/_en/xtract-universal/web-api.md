---
ref: xtract-universal-100
layout: page
title: Web-API
description: Web-API
product: xtract-universal
parent: xtract-universal
redirect_from:
  - en/xtract-universal/advanced-techniques/metadata-access-via-http
  - en/xtract-universal/advanced-techniques/metadata-access-via-http-json
  - en/xtract-universal/logging/logging-access-via-http
permalink: /:collection/:path
weight: 17
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=SAPCustomizing-EN:sap-customizing-en
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

The following section contains information about the web API of Xtract Universal.

Xtract Universal offers a web API that allows running extractions and querying meta information and extraction logs from Xtract Universal through web calls.
The web API returns the result as an http-json stream.

{% include _content/en/xu-specific/advanced-techniques/api-base-url.md %}

{: .box-note } 
**Note:** Make sure to use the correct ports, see [Server Ports](./server/ports).

{% include _content/en/xu-specific/advanced-techniques/api-config.md %}

{% include _content/en/xu-specific/advanced-techniques/api-run-extractions.md %}

{% include _content/en/xu-specific/advanced-techniques/api-logs.md %}
