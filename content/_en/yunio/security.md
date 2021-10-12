---
ref: yunio-09
layout: page
title: Security 
description: Security
product: yunio
parent: yunio
childidentifier: security
permalink: /:collection/:path
weight: 40
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=security_in_xu_3_x
progressstate: 5
---

Communication security between the Designer and the Server is provided using the following techniques:

- Authentication
- Transport encryption
- Access control

### Authentication 
The authentication security method guarantees the verification of the identity of the logged in user.  
After the initial connecting to the server using the default authentication methods such as "Windows Credentials" or "Anonymous", you can define 
further details within the server settings. See also [User Management](./security/user-management).


### Transport encryption
The transport encryption security method prevents spying or manipulating of the data (such as SAP credentials) that is exchanged between the Designer and the Server. 

yunIO supports two different methods of transport encryption:
-	[Kerberos](https://msdn.microsoft.com/en-us/library/windows/desktop/aa374762(v=vs.85).aspx)
-	[Transport Layer Security (TLS)](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol)


### Access Control
Access control security method allows the granting and restricting of access to certain users or user groups. 
Access rights are assigned on the server level, but can be further restricted for selected extractions or sources.
See also [Access Management](./security/access-management).



