---
ref: ecs-sharepoint-search-03
layout: page
title: Operationen zur Suche in SAP
description: Operationen zur Suche in SAP
product: erpconnect-services
parent: bcs-sharepoint-suche
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-operationen-zur-suche-in-sap
---

Im nächsten Schritt werden die Operationen *Read Data* und *Read Data Record* erstellt. 

Die *Read Data Operation* (Finder Methode) wird vom Durchforstungsprozess aufgerufen, um die externen Daten zu lesen und danach zu indizieren. Da die *Read Data Operation* alle Felder der Entität enthält, kann auf einen weiteren Aufruf der *Read Data Record Operation* (SpecificFinder Methode) verzichtet werden, was die Durchforstungsdauer vor allem bei großen Datenmengen erheblich reduziert.
 
Die *Read Data Record Operation* wird zur Anzeige eines Suchergebnisses in der Profilseite aufgerufen.
 
Da der BCS Connector standardmäßig einen *Limit Filter* mit 1000 Datensätzen anlegt, muss dieser Filter für die *Read Data Operation* der Such-Entität entfernt werden. 
Dazu wählen Sie im *Edit Operation* Dialog den *Limit Filter* und danach wählen Sie *Delete*. 

![BCS-Search-Limit-Filter](/img/content/BCS-Search-Limit-Filter.png){:class="img-responsive"}
