---
ref: ecs-core-administration-settings-05
layout: page
title: System Operations
description: System Operations
product: ecs-core
parent: settings
permalink: /:collection/:path
weight: 5
lang: en_GB
---

The following operations can be performed under *System Operations*:
- Clear consumer website caches
- Regenerate All Web Services

![ecscore-system-operations](/img/content/ecscore_system_operations.png){:class="img-responsive"}

**Clear consumer website caches** <br>
This operation refreshes the Web page cache, which is equivalent to recycling the IIS application pools of the ECS Core Management Site (default port 8085) and the Services Site (default port 8080).
To use the operation, the Windows credentials and, if applicable, the domain name of the Windows server must be stored at the top. <br>

Important: This operation or manual recycling of the IIS application pools must be performed after registering an Azure Relay (described in detail in [Azure Relay](./azure_relay)).    

**Regenerate All Web Services** <br>
The operation only affects the migration from an ECS Core 1.x to an ECS Core 2.x version. This operation can be used for manual recovery of deployed web services from the old version
