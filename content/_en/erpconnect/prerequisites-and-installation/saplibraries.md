---
ref: ec-prerequisites-and-installation-01
layout: page
title: SAP Libraries
description: SAP Libraries
product: erpconnect
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=prerequisites
---


To use ERPConnect you need also the following SAP libraries.<br>
You can find the SAP Libraries in the SAP Marketplace download area.

### Client Protocol RFC (librfc32.dll)

Copy the 64-bit version of librfc32.dll to the `\System32` folder. <br>
Copy the 32-Bit Version of librfc32.dll to the `\SysWoW64` folder.

Note that the files have the same file name, only the file size varies.

![librfc32dll](/img/content/librfc32dll.png){:class="img-responsive" width="300px" }

To use the Classic RFC Protocol, set the Property *Protocol* of the *R3Connection* object to *ClientProtocol.RFC* before you open the connection.

```
R3Connection.Protocol = ClientProtocol.RFC;
```

### Netweaver RFC Library

ERPConnect supports the Netweaver RFC (SDK) as of version 4.6.0. <br>
For 64-Bit environments the following DLLs are required (XX can vary depending on the version of the NW RRC Libraries):
- sapnwrfc.dll
- icuucXX.dll
- icudtXX.dll
- icuinXX.dll 

Copy the 64-Bit Version of NW Libraries to the `\System32` folder.<br>
Copy the 32-Bit Version of NW Libraries to the `\SysWoW64` folder.

To use the Netweaver RFC (SDK), set the Property *Protocol* of the *R3Connection* object to *ClientProtocol.NWRFC* before opening the connection. 

```
R3Connection.Protocol = ClientProtocol.NWRFC;
```

