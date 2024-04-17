---
ref: xu-extraction-via-webservice-01
layout: page
title: Call via Webservice
description: Call an Extraction via Webservice
product: xtract-universal
parent: execute-and-automate-extractions
permalink: /:collection/:path
weight: 4
lang: en_EN
---

For testing purposes extractions can be called via web service.
Calling extractions is usually done via script, scheduler or BI-tool. 

{% include _content/en/xu-specific/advanced-techniques/api-base-url.md %}

{: .box-note } 
**Note:** Make sure to use the correct ports, see [Server Ports](../server/ports).

Use the following URL format to trigger an extraction:

`[protocol]://[host or IP address]:[port]/?name=[name of the extraction]`

### HTTP Status Code & Header
The response of a web service call contains the following information:
- HTTP status code (1)
- Information in the HTTP header (2)
- Response in the HTTP body (3)

![Webservice Call pull](/img/content/xu/automation/webservice/xu_call_webservice_csv.png){:class="img-responsive"}

Response | Description
:----------:| :------------
 (1) | The HTTP status code *200* indicates a successful extraction call. It does not indicate a successful execution of the extraction. <br> The HTTP status code *404* indicates that the called extraction does not exist. Detailed information can be found in the log of the web service.
 (2) | Shows the timestamp of the extraction in the following HTTP header e.g., X-XU-Timestamp: *2021-04-09_19:03:09.971*
 (3) | The Response in the HTTP body depends on the destination type of the extraction. 

#### Response in the HTTP Body (3)

Status code | Destination type | Description
:----------: | :-----------: | :-----
*200* | Pull | Depending on the destination type, the extracted data is returned in either CSV or JSON format (3).
*200* | Push | The extraction log is returned in CSV format.

### Options for Calling Extractions

Multiple options are available to use with the URL-format <br>
`[protocol]://[host or IP address]:[port]/?name=[name of the extraction]{&[parameter_i]=[value_i]}`.

#### Suppress Output of Extraction Logs
The log output of a synchronous called extraction with a push destination can be suppressed using the parameter `&quiet-push=true`.<br>
Example: `http://todd.theobald.local:8065/?name=Plants&quiet-push=true`

That parameters is set to `false` by default, meaning the extraction log of a push destination is added to the output by default. 

{: .box-note }
**Note:** That parameter has no effect on pull destinations and asynchronous extractions.

#### Asynchronous Call
Extractions are called synchronous by default. The parameter `&wait=false` calls an asynchronous extraction.<br> 
Example: `http://todd.theobald.local:8065/?name=Plants&wait=false`

In this case the timestamp (4) of the extraction is returned in the HTTP body.
![Webservice Call async](/img/content/xu/automation/webservice/xu_call_webservice_push_asynch.png){:class="img-responsive"}

#### Abort Extraction
A running extraction can be aborted using the `abort` command before entering the extraction name.<br>
Example: `http://todd.theobald.local:8065/abort?name=Plants`

If the abortion is successful, a confirmation message (5) is returned in the HTTP body.
![Webservice Call abort](/img/content/xu/automation/webservice/xu_call_webservice_abort.png){:class="img-responsive"}
