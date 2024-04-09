---
ref: erpconnect-08
layout: page
title: SAP BW
description: SAP BW
product: erpconnect
parent: erpconnect
childidentifier: sap-bw
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sap-bw
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

Dieses Abschnitt enthält Informationen und Beispiele für BW-Datenextraktionen. 

Die *BW*-Klasse kann verwendet werden, um Daten aus BW InfoProvidern (z.B. Cubes) direkt oder aus BW Queries zu extrahieren. 
Ein üblicher Ansatz für die Verwendung der *BW*-Klasse ist, in SAP eine Abfrage zu erstellen, die Ihren Geschäftsanforderungen entspricht und diese Abfrage zu extrahieren.

{: .box-note }
**Hinweis**: Dieser Abschnitt bezieht sich auf BW Queries. Für Informationen über Queries, die über die SAP-Transactions **SQ02** und **SQ01** erstellt werden können, siehe [SAP Query](./sap-queries).

### Über BEx Queries und InfoCubes

BEx Queries filtern Daten, um für Analysezwecke Reporting-Objekte oder InfoProvider zu erstellen.
Ein Typ der InfoProvider sind sog. InfoCubes. 

InfoCubes sind multidimensionale Datensets, die Daten speichern, z.B. Dimensionen, Kennzahlen, Einheiten, Zeiten oder techn. Eigenschaften.<br>
Sie können InfoCubes Daten von einer oder mehreren InfoSources oder InfoProvidern hinzufügen.
 

****
Weitere Informationen zum Arbeiten mit SAP BW finden Sie in dem folgenden Unterabschnit:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
