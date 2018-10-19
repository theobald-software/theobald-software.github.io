---
ref: xtract-universal-08
layout: page
title: Security in XU 2.x
description: Security in XU 2.x
product: xtract-universal
parent: xtract-universal
childidentifier: security-xu2
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=security
---

This chapter gives you an overview about the security concept.

**User Management**

You can use all your Active Directory (AD) users an user groups.

**Working with the Designer** 

If access management is active, only authorized users are allowed to connect to the server and work with the designer. You can find detailed information in the chapter [Access Management](./security-xu2/access-management).

**Managing extractions**

On the extraction level you can define the users and user groups respectively that are allowed to manage the extraction. You can find more information in the chapter [Extraction Security](./security-xu2/extraction-security).

**Executing extractions**

You have the possibility to restrict extraction executions to specific networks and machines. The restriction can be defined on server level (see [Server Security](./security-xu2/server-security)) and is valid for all extractions. Extraction specific restrictions can be defined on extraction level (see [Extraction Security](./security-xu2/extraction-security)).

On extraction level you can additionally define that the user has to enter his SAP credentials (username and password) for executing an extraction. You can find more information in the chapter [Extraction Security](./security-xu2/extraction-security).

On the connection level you can also enable the Single Sign On for the SAP system. For mor detail information see the SSO with SNC chapter.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}