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

To call an extraction via web services, use the following URL-format: `<Protocol>://<HOST or IP address>:<Port>/?name=<Name of the Extraction>{&<parameter_i>=<value_i>}`

 Format | Description
:----------- | :------------
`<Protocol>` | HTTP or HTTPS - Activates a safe data transfer.
`<HOST or IP address>` | Host name or IP address of the XU server.
`<Port>` | The port on which the Xtract Universal service runs. The default is 8065. You can find the current value in the "Run" window of the [Designer](../getting-started/run-an-extraction#run-extraction).
`<Name of the Extraction>` | Name of the extraction.
`{&<parameter_i>=<value_i>}` | Optional parameter to be set when running the extraction. Multiple parameters can be set.

#### Examples
These are examples of URLs that call extractions:
```
http://localhost:8065/?name=Plants
http://localhost:8065/?name=Plants&rows=100
http://localhost:8065/?name=Plants&rows=100&lang=EN
```

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

#### Suppress Output of Extraction Logs
The log output of a synchronous called extraction with a push destination can be suppressed using the parameter `&quiet-push=true`.<br>
Example: `http://todd.theobald.local:8065/?name=Plants&quiet-push=true`

That parameters is set to `false` by default, meaning the extraction log of a push destination is added to the output by default. 

{: .box-note }
**Note:** That parameter has no effect on pull destinations and asynchronous extractions.

#### Asynchronous Call
Extraktions are called synchronous by default. The parameter `&wait=false` calls an asynchronous extraction.<br> 
Example: `http://todd.theobald.local:8065/?name=Plants&wait=false`

In this case the timestamp (4) of the extraction is returned in the HTTP body.
![Webservice Call async](/img/content/xu/automation/webservice/xu_call_webservice_push_asynch.png){:class="img-responsive"}

#### Abort Extraction
A running extraction can be aborted using the `abort` command before entering the extraction name.<br>
Example: `http://todd.theobald.local:8065/abort?name=Plants`

If the abortion is successfull, a confirmation message (5) is returned in the HTTP body.
![Webservice Call abort](/img/content/xu/automation/webservice/xu_call_webservice_abort.png){:class="img-responsive"}


****
#### Related Links
- [Metadata access via HTTP-JSON](../advanced-techniques/metadata-access-via-http-json)
- [Log Access via Web Service](../logging/logging-access-via-http)

