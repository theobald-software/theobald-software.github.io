---
ref: ecs-core-administration-settings-05
layout: page
title: System Operations
description: System Operations
product: erpconnect-services
parent: settings
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=system_operations
---

Unter *System Operations* können folgende Operationen durchgeführt werden:
- Clear consumer website caches
- Regenerate All Web Services

**Clear consumer website caches** <br>
Mit dieser Operation wird der Webseiten-Cache erneuert, was dem Recyclen der IIS Applikationspools der ECS Core Management Site (Standardport 8085) und der Services Site (Standardport 8080)entspricht.
Zur Nutzung der Operation müssen oben die Windows Credentials und ggf. der Domainname des Windows-Servers hinterlegt werden. <br>

Wichtig: Diese Operation oder das manuelle Recyclen der IIS Applikationspools muss zwingend ausgeführt werden nach der Registrierung eines Azure Relays (ausführlich beschrieben unter [Azure Relay](./settings/azure_relay)).    

**Regenerate All Web Services** <br>
Die Operation betrifft nur die Migration von einer ECS Core 1.x auf einer ECS Core 2.x Version. Zur manuellen Wiederherstellung deployter Webservices aus der alten Version kann diese Operation verwendet werden.
