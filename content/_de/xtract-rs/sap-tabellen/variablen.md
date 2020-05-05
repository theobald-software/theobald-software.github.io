---
ref: xr-sap-tables-02
layout: page
title: Variablen
description: Variablen
product: xtract-rs
parent: sap-tabellen
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=variablen
---

Um die Where-Klausel dynamisch zu gestalten, können Variablen eingebaut werden. Dem Variablennamen muss ein @ vorangestellt werden. Bitte beachten Sie bei der Einschränkung auf Datumsfelder, dass das Datum in SAP-Schreibweise - also YYYYMMDD - eingetragen werden muss.

Um die Variable zu füllen, gehen Sie bitte in den Variablen-Tab des DataSet-Eigenschaften-Dialogs. Der folgende Screenshot zeigt es. Sie können wie an fast allen anderen Stellen in den Reporting-Services auch entsprechende Expressions hinterlegen, um die Variablen zu füllen.

**Achtung!!** Wenn die Where-Klausel selbst mit einem @ beginnt, geht Xtract RS davon, dass in der Variable nicht nur ein einzelner Wert sondern die komplette Where-Klausel enthalten ist. Das kann vor allem dann sinnvoll sein, wenn man nicht nur einzelne Werte, sondern die komplette Where-Klausel über Expressions zusammenbauen möchte.

![Variables](/img/content/Variables.png){:class="img-responsive"}