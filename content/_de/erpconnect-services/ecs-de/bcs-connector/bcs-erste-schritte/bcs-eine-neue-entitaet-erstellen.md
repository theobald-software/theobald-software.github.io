---
layout: page
title: Eine neue Entität erstellen
description: Eine neue Entität erstellen
product: erpconnect-services
parent: bcs-erste-schritte
childidentifier: bcs-eine-neue-entitaet-erstellen
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-eine-neue-entitaet-erstellen
---

In einem SharePoint System muss das BCS Modell alle notwendigen Informationen beinhalten, um mit dem externen System, z.B. SAP, zu interagieren.

Um ein neues BCS Modell zu erstellen vergeben Sie als erstes einen spezifischen Namen im Feld *Model* oder übernehmen den vorgegebenen Wert "SAP Model". Durch das Ändern des Modellnamens stellen Sie sicher, dass kein existierendes Modell in SharePoint überschrieben wird.

![BCS-Generic-New-Model](/img/content/BCS-Generic-New-Model.png){:class="img-responsive"}

Ein SharePoint BCS Modell benötigt einige Informationen über das externe System oder über das LOB (Line-of-Business) System mit dem es verbunden ist. Im *LOB System* Feld geben Sie bitte den Namen oder den Typ des SAP Systems an, mit dem das Modell sich verbinden soll. Sie können aber auch einfach den Standardwert "SAP Model LOB" übernehmen. 

Im Feld *LOB System Instance* geben Sie ebenfalls den Namen des SAP Systems an, mit dem das Modell verbunden werden soll oder Sie übernehmen den Standardwert "SAP Model LOB Instance". 

Mit Hilfe der Schaltflächen neben den Eingabefeldern können Sie zusätzliche Sprachen hinzufügen.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}