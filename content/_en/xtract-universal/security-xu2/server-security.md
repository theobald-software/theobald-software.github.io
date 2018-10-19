---
ref: xu-security-xu2-03
layout: page
title: Server Security
description: Server Security
product: xtract-universal
parent: security-xu2
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=server-security
---

**Security Tab** 

You find the Security tab under Server -> Server Settings.  
On the *Security tab* you can specify which computer has the right to execute extractions via HTTP.

![Server-Settings-Security](/img/content/Server-Settings-Security.jpg){:class="img-responsive"}

**Allow HTTP access to everybody**<br>
There are no limitations. Every machine is allowed to execute extractions.

**Restrict HTTP access to specific machines**<br>
Only defined computers are allowed to execute extractions.

To define a restriction select *Restrict HTTP access to specific machines*  and click the *Add* button.


![Server-Settings-Machine-Network](/img/content/Server-Settings-Machine-Network.png){:class="img-responsive"}

Now you can set the restrictions for single computers (IP-address) of for computers from a specified subnet or a special name pattern. To define a name pattern you can use regular expressions.

**Only local access**

Set the IP to ::1 to allow the execution of the extractions only on the localhost, i.e. on the machine, where Xtract Universal server is running. Requests from other machines will therefore not be executed.

On most computer systems, "localhost" resolves to the IP address 127.0.0.1, which is the most commonly used IPv4 loopback address, and to the IPv6 loopback address ::1 . 

![XU-server-security-local](/img/content/XU-server-security-local.jpg){:class="img-responsive"}
