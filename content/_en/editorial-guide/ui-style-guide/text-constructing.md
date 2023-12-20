---
layout: page
title: Text Constructing
description: Formatting, forming and constructing sentences
parent: editorial-guide
parent: ui-style-guide
weight: 14
permalink: /:collection/:path
lang: en_GB
---
Text constructing refers to the process of creating or composing a written piece of text. It involves organizing ideas, selecting appropriate words and phrases, and structuring sentences and paragraphs to effectively convey a message or information.

### General

Avoid employing directional terminology like "above," "below," or "right-hand side" to guide the reader's orientation. Such language is not effective for accessibility or localization purposes.

| Recommended | Not recommended | 
| :------ |:--- |
|If TLS is enabled, yunIO uses the first Subject Alternative Name of the certificate. Without TLS yunIO uses localhost. The service port settings are adopted and the URL contains http or https.|If TLS is enabled below, the first Subject Alternative Name of the certificate will be used. Without TLS, localhost will be used. The port will match the Services port set below.|

Use same writing structures for similar things such as lists, procedures etc.

| Recommended | Not recommended | 
| :------ |:--- |
| View current license details.| Here you can see details of the currently installed license.|
| Select a license file to upload. | - |
| Select a remote-enabled function module.| -|
| Report any issues to our support | If you encounter any issues, please report them [...]|


### List
Don't make a list for just one item; a single item doesn't make a proper list. If you want to highlight one item from the nearby text, try a different formatting approach.

| Recommended | Not recommended | 
| :------ |:--- |
|Select the connection to SAP and select a function:<br> &bull; Call a function module / BAPI<br> &bull; Get data from a table or view or report <br> &bull; Automate a transaction. <br> | Please select the connection to SAP and decide, if you want to call a function module / BAPI, get data from a table or view or report, or automate a transaction.|
|Input values can be set to the following options:<br> &bull; supplied by caller when running the service <br> &bull; set to a constant value <br> &bull; default value defined in SAP | Input values can either be supplied by the caller when running the service, set to a constant value, or left to their defaults as defined in SAP.|


[Capitalization](./ui-style-guide/spelling-and-grammar#punctuation) and end [punctuation](./ui-style-guide/spelling-and-grammar#punctuation) depend on the type of list and the contents of the list.

Introduce a list with a complete sentence, not a fragment that's completed by the list items.

| Recommended | Not recommended | 
| :------ |:--- |
|Introduction of a list with a complete sentence contains the following: <br> &bull; Captialized list items<br> &bull; Correct punctuation | Fragment lists have a: <br> &bull; lead-in phrase or sentence followed by a colon <br> &bull; list of fragments, each marked by a bullet. |

### Procedures / Instructions
Use an introductory statement to introduce a procedure. The reader should be given context in this first sentence that isn't included in the section heading. Don't restate the heading; instead, provide context if necessary if the heading sufficiently indicates what the procedure involves.

The sentence can end with a period. If something comes right before the process, use a comma. If there is more text between the introduction and the procedure, use a period.
A procedure can be introduced with an imperative statement. Don't start a procedure off with a fragment statement. 

Use appellative language and instruct the user rather than describing what to do.

| Recommended | Not recommended | 
| :------ |:--- |
| To display a certificate here, add it to the "Local Computer" certificates in the "Personal" store on the yunIO server. Make sure to set "subjectAltName".| For a certificate to appear here, it must be added to the Local Computer certificates in the Personal store on the yunIO server, and must have subjectAltName set.|


***
### Related Links

- [Google Developers Guide - Procedures](https://developers.google.com/style/procedures#summary-of-guidelines-for-writing-procedures).

