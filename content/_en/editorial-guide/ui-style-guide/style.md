---
layout: page
title: Style
description: Style
parent: editorial-guide
parent: ui-style-guide
weight: 5
permalink: /:collection/:path
lang: en_GB
---

When creating content style can be defined as “the way the author writes texts”. In the context of the UI the following aspects are considered: comprehensibility, simplicity, conciseness (as short as possible, as long as needed) and consistent word choice.

Keep in mind that readers have diverse cultural backgrounds and different English reading skills. As much as possible, avoid culturally specific references. Writing in a straightforward and uniform manner can also simplify the translation of documents into other languages.

Make big chunks of text easier to scan. Split bigger paragraphs into smaller paragraphs, make headings, and use [lists](./ui-style-guide/text-constructing#list).

Use shorter words and shorter sentences. Try to use fewer than 26 words per sentence.

| Recommended | Not recommended | 
| :------ |:--- |
|Access to this yunIO server is restricted. Enter username and password to log in. |Access to this yunIO server is restricted. Please provide username and password to log in.|
|If you cannot log in, delete the <code>config\servers\permission.json</code> file [...]. | If you get shut out and can't log in, delete the <code>config\servers\permission.json</code> [...]. |
|The columns that are included in the output of the service.|Provide the constant values for the parameters that should be included for the execution of the report in SAP|
|Add any additional information. The information is then available as part of the service metadata via Swagger/OpenAPI. | In the description, you can provide additional info that will be available e. g. as part of the service metadata via Swagger/OpenAPI.|

Put the most important information in the first sentence of a paragraph so it's easy to spot when scanning.

Use simple technical and direct language, but don't get to colloquial. 

| Recommended | Not recommended | 
| :------ |:--- |
|If Default option is not suitable, provide a custom base URL with protocol and port (e. g., https://yunio.example.com:8175). | If Default doesn't work for you, a custom base URL including protocol and port can be provided (e. g. https://yunio.example.com:8175).|

### Please - Level of Politeness
Excessive politeness, such as using the word "please", can have negative impact. It makes the text longer, your brand seems unsure, and you miss chances to inspire action. 

| Recommended | Not recommended | 
| :------ |:--- |
|Report any issues to our support.|If you encounter any issues, please report them to our <a href="https://support.theobald-software.com/">support team</a>.|
|Check firewall settings in case of connection issues.|Please check your firewall settings when encountering connection issues.|
|Enter username and password to log in.|Please provide username and password to log in.|


### Simplicity – easy-to-read content

When writing information for users it is important to produce easy-to-read texts. The concept of “easy-to-read” is not universal and it will not be possible to write a text that will suit every reader. Easy-to-read content is generally characterized by:  

- The use of a simple, straightforward language 
- Only one main idea per sentence 
- No usage of abbreviations that were not introduced or not well-known (e.g., XU vs. PC) 
- Clear and logical structure  

Writing in a simple, straightforward language does not mean writing in a childish or simplistic manner. The widest possible audience in terms of customers should be able to understand easy-to-read content. Even if you do feel comfortable with more complex vocabulary, use the simpler synonym if that has the same meaning.  

| Recommended | Not recommended | Rule|
| :------ |:--- |:---|
|View current license details.| Here you can see details of the currently installed license.|simpler, more straightforward language.|
|Unchecking the option prevents users from logging in. No users deletion or changing passwords needed.|You can prevent a user from logging in without deleting them or changing their password, by unchecking the checkbox.|Only one main idea per sentence.|

Writing in a simple, straightforward language does not mean writing in a childish or simplistic manner. The widest possible audience in terms of customers should be able to understand easy-to-read content. Even if you do feel comfortable with more complex vocabulary, use the simpler synonym if that has the same meaning.  

Try to use easier grammatical constructions, e.g., avoid "neither nor" - construction.

| Recommended | Not recommended | 
| :------ |:--- |
|Contact our support team for bug reports, feature requests, general feedback, and any questions not covered by our online help or knowledge base.|For bug reports, feature request, general feedback and all the questions that neither our online help nor knowledge base can answer, please contact our support team.|

### Consistent Word Choice

Don't use synonyms. 
If you decided to use a word, e.g., the verb "select", try to use this word in all cases:

| Recommended | Not recommended | 
| :------ |:--- |
|[...] select this option and provide the connection string from the Azure Portal.|[...] choose this option and provide the connection string from the Azure Portal.
|Select the parameters to include into the service input or output.| - |
|Select a report | - |

Try to use the preferred word and not rewrite it's meaning in other words. If you used the word e.g., "include" - stick to it.

| Recommended | Not recommended | 
| :------ |:--- |
|The service name is a unique identifier for the service and is included in the URL of the service.|The service name is the unique identifier of this service and will be part of the service's URL.|
|Select the columns to include in the output of the service. | - |
|Select the parameters to include into the service input or output. | - |