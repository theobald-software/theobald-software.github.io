---
ref: erpconnect-05
layout: page
title: IDocs
description: Receiving and Sending IDocs
product: erpconnect
parent: erpconnect
childidentifier: receiving-and-sending-idocs
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=receiving-and-sending-idocs
---

IDocs are electronic documents that can be sent from or to SAP systems. It is possible to exchange IDocs between SAP systems or between one SAP system and an external application. ERPConnect provides a set of classes to send, receive and construct IDocs very easily.

An IDoc consists of one control record and several data records. The control record contains routing data and information about the sending and the receiving system. The data records are arranged hierarchically. A single data record is also called segment. One segment itself consists of several fields. Please use transaction WE60 to refer to the structure of several IDoc types.

The figure below shows the IDoc object structure of ERPConnect.

Each segment can contain several child segments and every segment contains several field objects.


![SAP-IDoc-Object-Model](/img/content/SAP-IDoc-Object-Model.png){:class="img-responsive"}


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}