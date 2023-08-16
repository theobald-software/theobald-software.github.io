---
layout: page
title: Text Constructing
description: Formatting, forming and constructing sentences
parent: editorial-guide
parent: yunio-style-guide
weight: 14
permalink: /:collection/:path
lang: en_GB
---
Text constructing refers to the process of creating or composing a written piece of text. It involves organizing ideas, selecting appropriate words and phrases, and structuring sentences and paragraphs to effectively convey a message or information.


### List

| Recommended | Not recommended | 
| :------ |:--- |
|Select the connection to SAP and select a function:<br> &bull; Call a function module / BAPI<br> &bull; Get data from a table or view or report <br> &bull; Automate a transaction. <br> | Please select the connection to SAP and decide, if you want to call a function module / BAPI, get data from a table or view or report, or automate a transaction.|
|Input values can be set to the following options:<br> &bull; supplied by caller when running the service <br> &bull; set to a constant value <br> &bull; default value defined in SAP | Input values can either be supplied by the caller when running the service, set to a constant value, or left to their defaults as defined in SAP.|

Don't make a list for just one item; a single item doesn't make a proper list. If you want to highlight one item from the nearby text, try a different formatting approach.
Capitalization and end punctuation depend on the type of list and the contents of the list.

Introduce a list with a complete sentence, not a partial one that's completed by the list items.


### Procedures / Instructions

If you want to tell the reader to do something, try to mention the circumstance, conditions, or goal before you provide the instruction. Mentioning the circumstance first lets the reader skip the instruction if it doesn't apply. 
[Procedures](https://developers.google.com/style/procedures#summary-of-guidelines-for-writing-procedures).

### General...

Avoid employing directional terminology like "above," "below," or "right-hand side" to guide the reader's orientation. Such language is not effective for accessibility or localization purposes.

| Recommended | Not recommended | 
| :------ |:--- |
|If TLS is enabled below, the first Subject Alternative Name of the certificate will be used. Without TLS, localhost will be used. The port will match the Services port set below.|If TLS is enabled, yunIO uses the first Subject Alternative Name of the certificate. Without TLS yunIO uses localhost. The service port settings are adopted and the URL contains http or https.|