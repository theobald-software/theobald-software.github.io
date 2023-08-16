---
layout: page
title: Spelling and Grammar
description: Spelling and Grammar
parent: editorial-guide
parent: yunio-style-guide
weight: 10
permalink: /:collection/:path
lang: en_GB
---

Spelling refers to the correct arrangement of letters in a word, while grammar refers to the rules and structure of a language, including the correct arrangement of words in a sentence and the proper use of punctuation. Spelling and grammar are important for effective communication and understanding in written language.

For reference you can use the spelling dictionary [Merriam Webster](https://www.merriam-webster.com). The preferable English for Theobald Software products is US English.
The yunIO Style Guide of Theobald Software also deals with cases that require a more detailed explanation than one can find in a spelling dictionary.

### Present Tense

Use present tense for general statements about behavior that are not tied to a specific time.

| Recommended | Not recommended | 
| :------ |:--- |
|If parameters are selected for Output, the values **are** included in the response body of the service.| If parameters are selected for Output, their values **will be** included in the result of the service |
|The service name is a unique identifier for the service and **is** included in the URL of the service.|The service name is the unique identifier of this service and **will be** part of the service's URL. |
|Report doesn't have any columns or columns **are** not yet detected.|The report doesn't have any columns or columns **were** not yet detected.|

#### Should / Would / Have to

Recommendation: avoid.

["Should"](https://developers.google.com/style/word-list#should) is unclear and can be an issue. For instance, if you're guiding the reader, "should" suggests a recommended but optional action, creating uncertainty. Be clear: decide if actions are necessary or optional, outcomes expected or possible, and states actual or recommended.

| Recommended | Not recommended | 
| :------ |:--- |
| Select the columns to include in the output of the service. |Select the columns that **should be** included in the output of the service.|
| Password must consist 8 characters or more. | The password has to be at least 8 characters long.|

"Must" is acceptable, when something will not function otherwise.

### Active Voice
When you're writing, it's usually better to use active voice instead of passive voice. Active voice makes it clear who is doing the action in a sentence. Passive voice can sometimes make it confusing to know who is supposed to do something. For example, it might be unclear if it's the reader, the computer, the server, a user, or a visitor to a website. So, it's generally a good idea to use active voice to make your writing clearer.
Tip: Here is an article on distinguishing active and passive voice: [Active vs. Passive Voice: What's The Difference?](https://www.merriam-webster.com/grammar/active-vs-passive-voice-difference)

| Recommended | Not recommended | 
| :------ |:--- |
| Define the endpoint of yunIO web services. | Define how the yunIO web services can be reached. | 
| Restart the yunIO service, when transitioning to this option or modifying the connection string.| Restarting the yunIO service is required when you are switching to this option or changing the connection string.|
|Restart the yunIO service, when transitioning to this option or modifying the connection string.|Restarting the yunIO service is required when you are switching to this option or changing the connection string.|

Appeal to the reader using active and direct language. 

| Recommended | Not recommended | 
| :------ |:--- |
|For a certificate to appear here, it must be added to the Local Computer certificates in the Personal store on the yunIO server, and must have subjectAltName set.|To display a certificate here, add it to the "Local Computer" certificates in the "Personal" store on the yunIO server. Make sure to set "subjectAltName".|
|View current license details.|Here you can see details of the currently installed license.|

Avoid "need" and try to always use the active form of the verb.

| Recommended | Not recommended | 
| :------ |:--- |
|To disable anonymous access, set up functioning TLS in **Settings**. At least one user needs to exist. | To disable anonymous access, you need to set up TLS in Settings and make sure that it's working. Go to Users and make sure that at least one user exists.|

#### Exceptions

Passive can be used in the following instances:

To emphasize an object over an action.
Recommended: Access to this yunIO server is restricted. 

To de-emphasize a subject or actor.
Recommended: The service port settings are adopted.

| Recommended | Not recommended | 
| :------ |:--- |
|If TLS is enabled, yunIO uses the first Subject Alternative Name of the certificate.|If TLS is enabled below, the first Subject Alternative Name of the certificate will be used.|

### Capitalization
Avoid unnecessary capitalization. Only capitalize words when necessary and consider why it needs to be capitalized. Do not rely on capitalization to convey meaning, as it can be confusing for readers. Avoid using camel case ([CamelCase](https://en.wikipedia.org/wiki/Camel_case)), unless it is an official name or referencing code that uses camel case.

Use capital letters in the following ways:
- The first words of a sentence
- Trademarks


### Punctuation	
Semicolon...
