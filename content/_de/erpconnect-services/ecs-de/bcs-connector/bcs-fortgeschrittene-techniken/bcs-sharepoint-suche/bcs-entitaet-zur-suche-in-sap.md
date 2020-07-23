---
ref: ecs-sharepoint-search-02
layout: page
title: Entität zur Suche in SAP
description: Entität zur Suche in SAP
product: erpconnect-services
parent: bcs-sharepoint-suche
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-entitaet-zur-suche-in-sap
progressstate: 3
---

Im Beispiel soll eine Suche nach SAP-Kundendaten ermöglicht werden. Dazu wird eine neue Entität definiert, die auf dem SAP-Funktionsbaustein SD_RFC_CUSTOMER_GET basiert.

Damit die Entität vom Suchdienst durchforstet werden kann, muss die Checkbox *Crawlable* aktiviert werden.

![BCS-Search-Entity](/img/content/BCS-Search-Entity.png){:class="img-responsive"}

Im nächsten Schritt wählen Sie die Felder für die Entität aus. Wählen Sie hierbei nur die Felder aus, die für die spätere Suche und Anzeige der Suchergebnisse wichtig sind. Die Anzahl der Felder wirkt sich auf die Durchforstungsdauer aus.

Markieren Sie eines der Felder als Titel-Feld der Entität. Das Titel-Feld wird später in den Suchergebnissen als Link angezeigt. Über den Link wird die Profilseite des externen Datensatzes angezeigt.

Wählen Sie die Schaltfläche (…) neben dem Feld welches Sie als Titel-Feld markieren möchten, im Beispiel verwenden wir das Feld *KUNNR*.

Im darauffolgenden Dialog wählen Sie *Options* und aktivieren Sie die Checkbox Set as *Title*.

![BCS-Search-Set-Title](/img/content/BCS-Search-Set-Title.png){:class="img-responsive"}
