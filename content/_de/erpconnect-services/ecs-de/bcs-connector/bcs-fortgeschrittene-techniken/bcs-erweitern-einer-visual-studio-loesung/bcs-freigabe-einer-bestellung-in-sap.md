---
ref: ecs-extending-a-solution-in-visual-studio-01
layout: page
title: Freigabe einer Bestellung in SAP
description: Freigabe einer Bestellung in SAP
product: erpconnect-services
parent: bcs-erweitern-einer-visual-studio-loesung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-freigabe-einer-bestellung-in-sap
---

Dieses Beispiel setzt voraus, dass ein Freigabeverfahren für Bestellungen in Ihrem SAP-System konfiguriert wurde.  Im Freigabeverfahren in SAP können Bedingungen definiert werden (z.B. der Gesamtwert ist auf 10.000 USD begrenzt), die vor einer Bestellung erfüllt sein müssen, bevor sie weiter verarbeitet werden darf. Der SAP Anwender kann dies auf der Registerkarte 'Release strategy' im 'Purchase Order Display' Bildschirm sehen.

![BCS-PO-VS-SAP](/img/content/BCS-PO-VS-SAP.png){:class="img-responsive"}

SAP stellt eine Reihe von Standard-Schnittstellen in der Form von BAPIs (Business APIs) zur Verfügung, um auf die Bestellungen zugreifen zu können. Die BAPI Funktionsbausteine, die Sie in diesem Beispiel nutzen. sind:

**BAPI_PO_GETITEMSREL** -	Gibt eine Liste der freizugebenden Bestellungen zurück. Sie verwenden diesen Funktionsbaustein für die *Finder* Methode.<br>
**BAPI_PO_GETITEMS** -	Gibt eine Liste der freizugebenden Bestellungen zurück, die den Suchkriterien entspricht. Sie verwenden diesen Funktionsbaustein für die Specific *Finder* Methode.<br>
**BAPI_PO_RELEASE** -	Gibt eine Bestellung in SAP frei. Sie verwenden diesen Funktionsbaustein für die benutzerdefinierte *Release* Methode.
