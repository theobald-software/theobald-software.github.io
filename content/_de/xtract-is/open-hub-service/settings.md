---
ref: xi-open-hub-service-ohs-04
layout: page
title: Extraktionseinstellungen
description: Extraktionseinstellungen
product: xtract-is
parent: open-hub-service
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=ohs-settings
---
Klicken Sie im Hauptfenster der OHS-Komponente auf **Settings**, um das Menü für die Extraktionseinstellungen zu öffnen. 

Das Menü besteht aus zwei Tabs: <br>
- [*Table*](#table-einstellungen)
- [*Third party tool (legacy)*](#third-party-tool-einstellungen)

Die Tabs beziehen sich auf den ausgewählten **Extraction type**. <br>
Wenn Sie *Table* als **Extraction type** ausgewählt haben, bearbeiten Sie die Einstellungen im Tab *Table Settings*. <br>
Wenn Sie *Third party tool (legacy)* als **Extraction type** ausgewählt haben, bearbeiten Sie die Einstellungen im Tab *Third party tool (legacy)*. 

## Table Einstellungen
{% include _content/de/table/extraktionseinstellungen.md  %}

## Third Party Tool Einstellungen

![OHS-Search-002](/img/content/xis/ohs-tpt-settings.png){:class="img-responsive" }

#### Gateway Host
Geben Sie die Daten Ihres Gateway Hosts eins. Oft handelt es sich um denselben Host wie vom SAP Application Server.

#### Gateway Service
Geben Sie die Daten Ihres Gateway Dienstes ein (*sapgwXX*, wobei XX die Systemnummer ist).

#### Program ID 
Geben Sie die Program ID der [RFC-Destination](https://kb.theobald-software.com/general/maintaining-rfc-destinations) ein.
