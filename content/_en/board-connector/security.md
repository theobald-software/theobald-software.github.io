---
ref: board-connector-09
layout: page
title: Security
description: Security
product: board-connector
parent: board-connector
childidentifier: security
permalink: /:collection/:path
weight: 9
lang: en_GB
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Board Connector.<br>
Make sure to use the documentation within the new [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).


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

Xtract Universal supports two different methods of transport encryption:
-	[Kerberos](https://msdn.microsoft.com/en-us/library/windows/desktop/aa374762(v=vs.85).aspx)
-	[Transport Layer Security (TLS)](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol)


### Access Control
The access control security method allows the granting and restricting of access to certain users or user groups. 
Access rights are assigned on the server level, but can be further restricted for selected extractions or sources.
See also [Access Management](./security/access-management).