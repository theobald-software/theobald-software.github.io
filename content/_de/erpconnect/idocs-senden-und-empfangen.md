---
ref: erpconnect-05
layout: page
title: IDocs
description: IDocs senden und empfangen
product: erpconnect
parent: erpconnect
childidentifier: idocs-senden-und-empfangen
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=idocs-senden-und-empfangen
---

IDocs sind das elektronische Pendant zum auf Papier ausgedruckten Beleg. Die IDoc-Technik wird von SAP sowohl für die Kommunikation zwischen SAP-Systemen als auch zwischen SAP und externen Subsystemen eingesetzt.

ERPConnect bietet einen Satz an Klassen, die das einfache Senden und Empfangen von IDocs ermöglichen.

Ein IDoc wird charakterisiert durch seinen Namen (und ggfs. noch durch den Namen seiner Erweiterung). Jedes IDoc besteht aus einem Kopfsatz, der administrative Felder zum Transport, dem Absender und Infos zum Empfängersystem beinhaltet. Außerdem enthält das IDoc so genannte Segmente, die hierarchisch angeordnet sind. Jedes Segment wiederum beinhaltet Felder, die die betriebswirtschaftlichen Informationen enthalten.

Die nachfolgende Grafik zeigt die Objekthierachie, die sich innerhalb des IDoc-Handlings abspielt. Jedes Segment kann beliebig viele Kind-Segmente enthalten und jedes Segment enthält beliebig viele Felder.

![SAP-IDoc-Object-Model](/img/content/SAP-IDoc-Object-Model.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}