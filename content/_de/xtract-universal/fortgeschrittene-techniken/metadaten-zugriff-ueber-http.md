---
ref: xu-advanced-techniques-08
layout: page
title: Metadaten-Zugriff über HTTP
description: Metadaten-Zugriff über HTTP
product: xtract-universal
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=metadaten-zugriff-ueber-http
---

Man kann über HTTP verschiedene Metadaten-Informationen einer Extraktion abrufen. 

**Spalten einer Extraktion**

Das URL-Pattern lautet: 

[http://[host]:[port]/metadata/?name=[extractionName]]()

wobei [extractionName] für den Namen der Extraktion steht.

Die Metadatentabelle hat folgendes Schema:

| Spalte   | Typ                          | Beschreibung              |
|----------|------------------------------|---------------------------|
| POSITION | Integer                      | Position der Spalte       |
| NAME     | String                       | Name der Spalte           |
| DESC     | String                       | Spaltenbeschreibung       |
| TYPE     | Einstellige ABAP Datentyp ID | ABAP Datentyp             |
| LENGTH   | Länge der Spalte             | Länge der Spalte          |
| DECIMALS | Integer                      | Anzahl der Dezimalstellen |

Die "einstellige ABAP Datentyp ID" ist hier definiert:<br>
[http://help.sap.com/abapdocu_702/en/abapdescribe_field.htm](http://help.sap.com/abapdocu_702/en/abapdescribe_field.htm)             
            
Die eingebauten ABAP Datentypen hier:<br>
[http://help.sap.com/abapdocu_702/en/ABENBUILT_IN_TYPES_COMPLETE.htm](http://help.sap.com/abapdocu_702/en/ABENBUILT_IN_TYPES_COMPLETE.htm) 
            

**Beispiel**: Der Aufruf der Metadaten der Extraktion 0COSTCENTER_ATTR mit der URL 

[http://localhost:8095/metadata/?name=delta01]()

liefert

POSITION,NAME,DESC,TYPE,LENGTH,DECIMALS<br>
1,KOKRS,Kostenrechnungskreis,C,8,0<br>
2,KOSTL,Kostenstelle,C,20,0<br>
3,DATETO,Datum gültig bis,D,16,0<br>
4,DATEFROM,Datum gültig ab,D,16,0<br>
5,VERAK,Verantwortlicher,C,40,0<br>
6,BUKRS,Buchungskreis,C,8,0<br>
7,GSBER,Geschäftsbereich,C,8,0<br>
8,ABTEI,Abteilung,C,24,0<br>
9,KOSAR,Art der Kostenstelle,C,2,0<br>
10,WAERS,Währungsschlüssel,C,10,0<br>
11,PRCTR,Profitcenter,C,20,0<br>

**Parameter (Variablen)**

Die URL http://[host]:[port]/parameters/?name=[extractionName]<br>
liefert die Liste der verfügbaren Parameter, welche im Run-Dialog erscheinen. 

Im folgenden Beispiel liefert die URL liefert die folgenden Parameter:<br>
http://localhost:8065/parameters/?name=Customers

Name,Description,Category,Type,DefaultValue <br>
preview,Enable/disable preview mode,Extraction,Flag,False <br>
clearBuffer,Clear/keep the result <br>buffer,Extraction,Flag,False <br>
rows,Maximum number of rows,Extraction,Number,0 <br>
where,Where Clause,Extraction,Text, <br>
packageSize,Package Size,Extraction,Number,50000 <br>
bg,Enable/disable background <br>extraction,Extraction,Flag,False <br>
decimalSeparator,Symbol between integer and fractional part,Extraction,Text,. <br>
columnSeparator,Symbol which indicates the start of a new column,Extraction,Text,"," <br>
lang,Logon Language,Connection,Text,EN <br>
client,Client,Connection,Text,800 <br>
sysnr,System Number,Connection,Number,0 <br>
ashost,Application Server,Connection,Text,ecc.theobald-software.com

**Produkt-Version**

Die aktuellen Versionsinformationen können über die nachfolgenden HTTP Abfragen ermittelt werden:

[http://localhost:8065/CurrentVersion]()<br>
[http://localhost:8065/ProductVersionHistory]()<br>
[http://localhost:8065/KernelVersionHistory]()<br>

Eine Extraktionsliste aller auf dem Server wird ausgegeben, wenn man die Basis-URL ohne jeglichen Parameter aufruft:

[http://localhost:8065/]()

