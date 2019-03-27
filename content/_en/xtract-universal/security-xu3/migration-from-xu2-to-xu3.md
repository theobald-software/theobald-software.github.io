---
ref: xu-security-xu3-04
layout: page
title: Migration from XU 2.x to XU 3.x
description: Migration from XU 2.x to XU 3.x
product: xtract-universal
parent: security-xu3
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=migration_from_xu_2_x_to_xu_3_x
---

The migration from XU 2.x to XU 3.x can be performed automatically as follows:

During the installation process by checking the *Convert 2.x Files* checkbox. <br>
This calls the *Xtract Universal Configuration Converter*, which ensures that all extractions, source systems, destinations, server and user settings from XU 2.x are available in the new version. <br>

![XU3_Migration_1](/img/content/XU3_Migration_1.png){:class="img-responsive"} <br>

The start of the conversion process must be confirmed in the appearing command line window. >br>

![XU3_Migration_2](/img/content/XU3_Migration_2.png){:class="img-responsive"} <br>

If the converter is not executed automatically during installation, it can also be started manually from the installation directory. <br>

![XU3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

**ATTENTION**:<br>
In XU 2.x, Windows AD users could be assigend to custom user groups. This is no longer possible in XU 3.x.
This is a breaking change as opposed to XU 2.x.

As a consequence, Windows AD users, that had been assigned to custom user groups in XU 2.x will no longer be assigned to these groups when migrating to XU 3.x.

Security will not be affected but will be broken down to user level, as those users will be removed from the custom groups during the migration process.
