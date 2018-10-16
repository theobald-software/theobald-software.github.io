---
ref: erpconnect-08
layout: page
title: SAP BW
description: SAP BW
product: erpconnect
parent: erpconnect
childidentifier: sap-bw
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sap-bw
---

Dieses Kapitel enthält Informationen und Beispiele rund um das Thema BW-Datenextraktion. Die entsprechenden ERPConnect-Klassen sind im Namensraum ERPConnect.BW zu finden.<br> 
Die Beispiele basieren auf einer BW-Query, die auf dem Cube 0D_DECU basiert und ZSIMPLEQUERY heißt. Bitte beachten Sie, dass bei der Query in Ihren Einstellungen das Häkchen *Externen Zugriff zulassen* gesetzt sein muss.

Die folgende Abbildung zeigt die Query im Designer. Es sind die Dimensionen *Material* und *Auftraggeber*, sowie die Kennzahlen *Fakturierte Menge* und *Kosten* in die Ergebnismenge gezogen. Die Dimension hat die Variable namens MAT01, die die Einschränkung auf Materialnummer erlaubt. 


![BW-001](/img/content/BW-001.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
