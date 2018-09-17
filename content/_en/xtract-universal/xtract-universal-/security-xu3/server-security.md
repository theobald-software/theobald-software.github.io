---
layout: page
title: Server Security
description: Server Security
product: xtract-universal
parent: security-xu3
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=server_security
---

This chapter describes how execution of extractions can be restricted.

The necessary settings can be found via the menu bar - *Server - Settings - Web Server tab*.

Check the *Restrict HTTP(S) access to the following machines* checkbox to allow extraction execution from dedicated computers only.

![XU3_ServerSettings_web_tab](/img/content/XU3_ServerSettings_web_tab.jpg){:class="img-responsive"}

Click on the *Add* button, to speficy a Single machine, a Network or a Hostname from which extractions can be executed.
You can allow extractions only from a specified subnet or a special name pattern. To define a name pattern you can use regular expressions.

![XU3_ServerSecurity](/img/content/XU3_ServerSecurity.jpg){:class="img-responsive"}
