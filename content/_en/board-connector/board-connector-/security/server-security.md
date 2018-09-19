---
layout: page
title: Server Security
description: Server Security
product: board-connector
parent: security
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=server-security
---

**Security Tab** 

You find the *Security* tab under *Server -> Server Settings*. <br>
On the *Security* tab you can specify which computer has the right to execute extractions via HTTP. 

![Security-Tab-01](/img/content/Security-Tab-01.jpg){:class="img-responsive"}

**Allow HTTP access to everybody**

There are no limitations. Every machine is allowed to execute extractions.

**Restrict HTTP access to specific machines**

Only defined computers are allowed to execute extractions.

To define a restriction select *Restrict HTTP access to specific machines*  and click the *Add* button.

![Security-Tab-02](/img/content/Security-Tab-02.png){:class="img-responsive"}

Now you can set the restrictions for single computers (IP-address) of for computers from a specified subnet or a special name pattern. To define a name pattern you can use regular expressions.