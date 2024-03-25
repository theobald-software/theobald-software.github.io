---
ref: erpconnect-03
layout: page
title: BAPIs/Funktionsbausteine
description: RFC-Client-Funktionen und BAPIs
product: erpconnect
parent: erpconnect
childidentifier: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=rfc-client-funktionen-und-bapis
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

Funktionsbausteine sind einzelne Funktionen, die im SAP Function Builder (Transaktion **SE37**) verwaltet und in ABAP entwickelt werden. 

{: .box-note }
**Hinweis**: Ein BAPI/Funktionsbaustein muss das Attribute **Remote Enabled** haben, um über das RFC-Protokoll außerhalb von SAP gerufen werden zu können. 

### Über BAPIs/Funktionsbausteine
Jeder Funktionsbaustein besteht aus skalaren Import- und Export-Parametern, die an den Baustein übergeben oder von ihm zurückgegeben werden. 
Ein Austausch von Tabellen ist ebenfalls möglich. 

Die nachfolgende Grafik zeigt den Klassenzusammenhang von ERPConnect.

![ERPConnect-Client-Function-Architecture](/img/content/ERPConnect-Client-Function-Architecture.png){:class="img-responsive" width="550"}

****
Weitere Informationen zum Arbeiten mit den ERPConnect Function-Klassen finden Sie in den folgenden Unterabschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}