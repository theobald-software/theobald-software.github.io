---
ref: ecs-core-developing-02
layout: page
title: Funktionsbaustein aufrufen
description: Funktionsbaustein aufrufen
product: erpconnect-services
parent: anwendungsentwicklung-mit-ecs-core
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=funktionsbaustein-aufrufen
---

Im vorigen Beispiel haben wir Daten aus einer SAP-Tabelle mit Hilfe der Function tEcs.executeXql() gelesen. <br>
Nun wollen wir das Szenario wiederholen, aber einen Funktionsbaustein mit Hilfe der Function tEcs.executeFunction() aufrufen, um SAP-Kundendaten zu lesen.<br>
Analog wäre es auch möglich, mit einem Funktionsbaustein Daten ins SAP zu schreiben. 

Alle Kenntnisse aus dem vorigen Beispiel [Erste Schritte mit ECS Core und SharePoint Online](./erste-schritte-mit-ecs-core-und-sharepoint-online) werden hier vorausgesetzt. <br>
In diesem Beispiel werden wir nur den Schritt ändern, um den SAP-Funktionsbaustein aufzurufen. 


Im SAP prüfen wir zuerst den Funktionsbaustein SD_RFC_CUSTOMER_GET zum Lesen von Kundendaten. <br>
Den Eingabeparameter NAME1 setzen wir beispielhaft auf X* . 
Nach der Ausführung enthält die Ergebnistabelle CUSTOMER_T die 5 Datensätze der Kundendaten.  

![ecscore-gettingstarted-11](/img/content/ecscore-gettingstarted-11.jpg){:class="img-responsive"}

![ecscore-gettingstarted-12](/img/content/ecscore-gettingstarted-12.jpg){:class="img-responsive"}

Nun schauen wir uns den Schritt mit JavaScript-Code für den Aufruf des SAP-Funktionsbausteins an.  


**Schritt 3: Javascript-Code für den Aufruf des SAP-Funktionsbausteins einfügen** 


Die Funktion tEcs.executeFunction() wird verwendet, um den Funktionsbaustein *SD_RFC_CUSTOMER_GET* aufzurufen. <br>
Die Eingabe wird dem Eingabeparameter *NAME1* zugewiesen. <br>
Das Ergebnis liefert die Tabellle *CUSTOMER_T* . 

![ecscore-gettingstarted-13](/img/content/ecscore-gettingstarted-13.jpg){:class="img-responsive"}

Führen Sie nun das SharePoint-Add-In aus. Folgendes Ergebnis erhalten Sie:

![ecscore-gettingstarted-14](/img/content/ecscore-gettingstarted-14.jpg){:class="img-responsive"}
