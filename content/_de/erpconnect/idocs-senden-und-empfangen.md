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

IDocs sind elektronische Dokumente, die an und von SAP-Systemen gesendet werden können. <br>
IDocs werden von SAP sowohl für die Kommunikation zwischen SAP-Systemen als auch zwischen SAP und externen Subsystemen eingesetzt.
ERPConnect bietet Klassen an, die das Senden, Empfangen und Konstruieren von IDocs ermöglichen.

### Aufbau von IDocs
Jedes IDoc besteht aus einem Kopfsatz, der administrative Felder zum Transport, dem Absender und Infos zum Empfängersystem beinhaltet. 
Die Daten eines IDocs befinden sich in Segmenten, die hierarchisch angeordnet sind. 
Jedes Segment beinhaltet Felder, die die betriebswirtschaftlichen Informationen enthalten.

{: .box-tip }
**Tipp**: Verwenden Sie die Transaktion **WE60**, um den Aufbau von IDocs in SAP einzusehen.


Die nachfolgende Grafik zeigt die Objekthierachie von ERPConnects IDoc.Objekten. <br>
Jedes Segment kann beliebig viele Kind-Segmente enthalten und jedes Segment enthält beliebig viele Felder.

![SAP-IDoc-Object-Model](/img/content/SAP-IDoc-Object-Model.png){:class="img-responsive" width="500"}

****
Weitere Informationen zum Arbeiten mit den ERPConnect IDocs-Klassen finden Sie in den folgenden Unterabschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}