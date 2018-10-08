---
layout: page
title: Security in XU 3.x
description: Security in XU 3.x
product: xtract-universal
parent: xtract-universal
childidentifier: security-xu3
permalink: /:collection/:path
weight: 9
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=security_in_xu_3_x
---

Security in XU 3.x for communication between Xtract Universal Designer and Xtract Universal Server consists of three components:
- Transport encryption
- Authentication
- Access control

**Transport encryption** provides security against spying on or manipulating data (such as SAP credentials) that is exchanged between Xtract Unviersal Designer and Server.

Xtract Universal supports two different methods of transport encryption:
-	Kerberos (https://msdn.microsoft.com/en-us/library/windows/desktop/aa374762(v=vs.85).aspx)
-	Transport Layer Security (TLS)

**Authentication** guarantees, that the logged on user is actually the one he/she pretends to be. 

Xtract Universal supports two types of user management:
-	Active Directory user + groups, managed via the Windows domain.
- Own users + groups (custom), managed via Xtract Univesal.

**Access Control** allows the assignment of different rights to users or user groups. Those rights are assigned on server level, but they can be further restricted for selected extractions or sources.

The following rights can be assigned. See chapter Access Management for a detailed explanation.
- read
- modify
- create
- admin

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
