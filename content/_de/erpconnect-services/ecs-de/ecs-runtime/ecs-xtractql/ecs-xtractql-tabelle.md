---
layout: page
title: Tabelle
description: Tabelle
product: erpconnect-services
parent: ecs-xtractql
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-xtractql-tabelle
---
Selektion der ersten fünf Datensätze der Tabelle *T001W*, bei denen das Feld *FABKL* den Wert *US* hat. 

{% highlight sql %}
SELECT TOP 5 * FROM T001W WHERE FABKL = 'US'
{% endhighlight %}

Selektion aller Datensätze der Tabelle *MAKT*. Die Ergebnistabelle enthält die Spalten mit den Namen Kurztext, MANDT und Language. 

{% highlight sql %}
SELECT MAKTX AS [Kurztext], MANDT, SPRAS AS Language FROM MAKT
{% endhighlight %}

Abfrage der SAP Query *S|ZTHEO02|ZLIKP* mit Workspace Standard, Benutzergruppe *ZTHEO02* und dem Namen ZLIKP. Die Ergebnistabelle liefert maximal 30 Datensätze zurück. Die Sprache XtractQL erweitert die Syntax-Optionen des *SELECT*-Statements für SAP Query-Abfragen. Es können bspw. Rückgabefelder in der Form *LIPS-LFIMG* angegeben werden. Das Gleiche gilt für die SAP-typische SAP-WHERE-Angaben.

{% highlight sql %}
SELECT TOP 30 LIPS-LFIMG, LIPS-MATNR, TEXT_LIKP_KUNNR AS Kundennummer 
 FROM QUERY 'S|ZTHEO02|ZLIKP' 
 WHERE SP$00002 BT '0080011000'AND '0080011999'
{% endhighlight %}

**Einschränkungen beim Tabellen-Lesen** 

Selektion aller Datensätze der Tabelle MARA. SAP-seitig wird die XQL-Abfrage durch den in der WITH-OPTIONS-Angabe definiertem Funktionsbaustein Z_XTRACT_IS_TABLE ausgeführt. 

{% highlight sql %}
SELECT * FROM MARA WITH-OPTIONS(CUSTOMFUNCTIONNAME = 'Z_XTRACT_IS_TABLE')
{% endhighlight %}

Im Kapitel [Einschränkungen bei Tabellen]() finden Sie weitere Informationen zu den Einschränkungen beim Lesen von SAP-Tabellen und wie Sie den Z-Funktionsbaustein Z_XTRACT_IS_TABLE installieren.