---
ref: xi-bw-cube-04
layout: page
title: Einstellungen
description: Settings
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=bw-cube-settings
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Über den *Settings*-Link im Editor öffnet sich das Einstellungsfenster.

![XIS_BWCube_Settings](/img/content/XIS_BWCube_Settings.png){:class="img-responsive"}


### String Conversion

**Automatic String Conversion** <br>
bedeutet, dass die Datenquelle alle Strings nach NvarChar konvertiert, wenn SAP ein Unicode-System ist, und nach VarChar, wenn SAP kein Unicode-System ist.

**Convert Strings to VarChar** <br>
bedeutet, dass die Datenquelle alle Strings nach VarChar konvertiert.

**Convert Strings to NVarChar** <br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert.


### Misc

**Do not tread 'Axis has no rows' as Error** <br>
Definiert, ob ein leeres Ergebnis (keine Daten selektiert) einen Fehler auslöst oder nicht.

**Use Description for Pipeline** <br>
Definiert, dass sich der Name der Pipeline-Elemente aus der Beschreibung ergibt und nicht aus dessen technischem Namen.

**User Formatted Values** <br>
Definiert, dass die Werte der Kennzahlen so ausgegeben werden, wie im Query-Designer definiert (z.B. Skalierungsfaktor und Dezimalstellen).

**Debug Details** <br>
Erzeugt mehr und detailliertere Protokolleinträge, die für die Fehlersuche genutzt werden können.

**Measure Unit in Resultset** <br>
Die Einheiten der Kennzahlen werden angezeigt.

**Package Size** <br>
Kann auf Werte größer 0 gesetzt werden, um das Query-Ergebnis nicht in einem Rutsch, sondern in Paketen mit dieser Größe zu holen.

**Automatic Slicing Dimension** <br>
ermöglicht die Wahl einer Dimension für ein automatisches Slicing.<br>
Beim automatischen Slicing wird über die Werte (Ausprägungen) der gewählten Dimension (Merkmal) iteriert und für jeden dieser Werte das Ergebnis aus BW extrahiert.
Diese Option ermöglicht die Extraktion größere Datenmengen (mehrere Millionen Datensätze) aus BW, welche bisher aufgrund BW-seitigen Speicherüberlaufs fehlgeschlagen waren.<br>
Wählen Sie eine geeignete Dimension für das Slicing, bei größeren Datenmengen selektieren Sie eine Dimension mit einer granularen Ausprägung.

**Legacy metadata retrieval** <br>
Betrifft BW Cube Extraktionen, die mit Xtract IS Version 2.5.17 oder früher erstellt wurden. Sollten Sie die Metadaten der Extraktion aktualisieren, sollten Sie vorher dieses Feld anhaken. Das betrifft insbesondere BEx Queries, die zwei Strukturen enthalten (Merkmals- und Kennzahlenstruktur), da sich der Metadatenabruf seit oben genannter Version geändert hat.
 

### Extraction Type

**Regular** <br>
extrahiert die Daten über die MDX-Schnittstelle. 

**BEX** <br>
Nutzen Sie diese Option für BEx Queries mit einer Struktur in den Zeilen.<br>
Dabei wird die BEx-Query mit demselben Output (Struktur und Daten) wie z.B. im BEx Analyser geliefert.<br>
Es besteht nicht die Möglichkeit, die Selektion der Dimensionen und Kennzahlen zu ändern.

Im BEX Extraction Modus können Sie auch eine Query View extrahieren. Nach der Selektion der BEx query setzen Sie einfach den Namen der Query View ins Feld *Query* View.

![BWCube-Settings-02](/img/content/BWCube-Settings-02.png){:class="img-responsive"}

**Fill Emply Cells**<br>
Füllt die leeren Felder der Dimensionen.

**Eliminate Result Lines**<br>
Eliminiert die Ergebniszeilen (z.B. die Summe).

**MDX**<br>
In der Hauptmaske geben Sie direkt einen MDX-Befehl ein.

![BWCube-Settings-03](/img/content/BWCube-Settings-03.png){:class="img-responsive"}


Danach klicken Sie auf Execute MDX and refresh statement, um die Metadaten aus dem BW-System zu lesen.

![BWCube-Settings-04](/img/content/BWCube-Settings-04.png){:class="img-responsive"}

Variablen können sowohl für den ganzen MDX-Befehl als auch innerhalb des MDX-Befehls verwerdet werden.

**Decimal Separator (veraltet)**<br>
ist das Dezimaltrennzeichen auf dem SAP-System, meistens ein Punkt "." in den englischsprachigen und ein Komma "," in den deutschsparchigen Systemen (ohne Hochkommata). 


**Use new OLAP BAPIs**<br>
Sofern die neuen OLAP BAPIs auf dem BW-System vorhanden sind, werden sie verwendet.<br>
Diese Einstellung ermöglicht die Verwendung der neuen OLAP BAPIs. Dadurch wird die 1.000.000 Zellen Einschränkung behoben. Die neuen OLAP BAPIs sind in den nachfolgenden SAP Netweaver BI Versionen enthalten:

- version 7.01 SP2 or higher (7.0 with ehp1 and support package 2 or later) or
- version 7.11 with support package 00 or higher (SAPKW71100)