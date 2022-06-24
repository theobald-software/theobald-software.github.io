---
ref: xfa-bapi-param
layout: page
title: BAPI Parameter
description: Skalare Parameter
product: xtract-for-alteryx
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=skalare-parameter
---
### Parametertypen

Es gibt 4 Parametertypen für BAPIs:

- Imports
- Exports
- Changings
- Tables

![BAPI-Parameters](/img/content/xfa/BAPI-Parameters.png){:class="img-responsive"}

Alle Felder, die mit einem * markiert sind, sind verpflichtend.

Jeder Import, Export und Changings-Parameter kann einen der folgenden Darstellungen haben:

- ein Skalarfeld (z.B., Zeichen, Datum, Uhrzeit, Zahl, Menge, etc.)
- eine Struktur, die mehrere Komponenten beinhaltet
- eine Tabelle

{: .box-note }
**Hinweis:** Siehe [Setting Input and Output Values](./input-output-werte) für Details über Skalarfelder, Strukturen und Tabellen.

#### Strukturen

Strukturen werden je nach Datentyp wie folgt bezeichnet:

- Flache Strukturen enthalten Komponenten mit elementaren Datentypen (z.B. char, integer, float) und setzen skalare Eingabewerte voraus.
- Verschachtelte Strukturen enthalten mindestens eine Substruktur. Alle Komponenten und Subkomponenten sind flach.
- Tiefe Strukturen enthalten mindestens eine tiefe Komponente, wie Tabellen.

![Bapi-Structures](/img/content/xfa/BAPI-structure.png){:class="img-responsive"}


### Imports

**Imports** repräsentiert die Eingabewerte, die vom Client an SAP gesendet werden. 
Im Tab **Imports** können Sie Eingabeparameter definieren, die entweder als Skalarwerte oder Strukturen übergeben werden.

![BAPI import parameters](/img/content/xfa/bapi_import1.png){:class="img-responsive"}

Um die Filterfunktion zu verwenden, geben Sie in der Kopfzeile der Spalten **Name** und **Description** Suchbegriffe ein.<br>


### Exports

**Exports** repräsentiert die Ausgabewerte, die von SAP zurück an den Client gesendet werden, nachdem die Funktion ausgeführt wurden.

Im Tab **Exports** können Sie Ausgabeparameter definieren, die entweder als Skalarwerte oder Strukturen übergeben werden.
Sie können ein Element der Ausgabe hinzufügen, indem Sie die Checkbox in der Ausgabespalte anhaken.

![BAPI export parameters](/img/content/xfa/bapi_export.png){:class="img-responsive"}
Um die Filterfunktion zu verwenden, geben Sie in der Kopfzeile der Spalten **Name** und **Description** Suchbegriffe ein.<br>

 
### Changings
**Changings** repräsentiert Parameter, die sowohl für Eingabe als auch Ausgabe verwendet werden können.
Im Tab **Changings** können Sie Import und Export-Parameter definieren. 


### Tables

**Tables** enthält Parameter mit einer Tabellenstruktur, die aus mehreren Zeilen besteht. Tabellen können als Eingabe und Ausgabe verwendet werden.

Im Tab **Tables** können Sie Tabellen-Parameter für Import und Export zu und von einer SAP BAPI definieren.
Tabellen repräsentieren hier eine Struktur mehrerer Zeilen desselben Datentyps.

![BAPI table](/img/content/xfa/bapi_table.png){:class="img-responsive"}
Um die Filterfunktion zu verwenden, geben Sie in der Kopfzeile der Spalten **Name** und **Description** Suchbegriffe ein.<br>

#### Im Tables Tab navigieren

{: .box-note }
**Hinweis:** Nur **5** Tabellen stehen für einen parallelen Export zur Verfügung.

1. Aktivieren Sie die Checkbox in der Ausgabespalte (1), um Tabellen der Ausgabe hinzuzufügen.
2. In den Drop-Down-Listen in der Spalte **Value** werden die im Alteryx-Workflow definierten Tabellen angezeigt, die als Eingabetabellen verwendet werden können, siehe (see [Input- und Output-Werte im BAPI](./input-output-werte)).
3. Klicken Sie auf **[X]** (3), um die Werte zu entfernen.
4. Klicken Sie auf das **[![glasses](/img/content/icons/glasses.png) Symbol]** (4), um die Metadaten der ausgewählten Tabelle anzuzeigen, inklusive der Namen und Datentypen aller Felder.

![BAPI meta-data](/img/content/xfa/bapi_table_sap_fields.png){:class="img-responsive"}

