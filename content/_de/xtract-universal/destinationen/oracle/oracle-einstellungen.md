---
ref: xu-oracle-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: oracle
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=oracle-einstellungen
progressstate: 5
---
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![ext_spec_set_de_form_debug](/img/content/oracle-configurations.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}


### Debugging

![Debugging](/img/content/debugging-bulk-insert.png){:class="img-responsive"}

{: .box-warning}
**Warnung! Performance-Verlust (Leistungseinbuße)!**
Die Performance sinkt, wenn Bulk Insert deaktiviert ist.
Deaktivieren Sie den Bulk Insert nur wenn es notwendig ist, z.B. auf Anfrage des Support-Teams.

Durch das Anhaken der Checkbox **Disable bulk operations** wird der standardmäßige Bulk Insert beim Schreiben auf die Datenbank deaktiviert.

Diese Option ermöglicht eine detaillierte Fehleranalyse, falls bestimmte Datenzeilen nicht auf der Datenbank persistiert werden können. 
Mögliche Ursachen für dieses Verhalten können fehlerhafte Werte im hinterlegten Datentyp sein.

Das Debugging sollte nach der erfolgreichen Fehleranalyse wieder deaktiviert werden, da ansonsten die Performance der Datenbank-Schreibprozesse dauerhaft niedrig bleibt. 

#### Verwendung von Custom SQL

{: .box-note }
**Hinweis:** Bulk Operations werden grundsätzlich beim Verwenden von [Custom SQL Anweisungen](#sql-anweisungen) (z.B. bei *Row Processing*) mit Oracle Destination unterstützt.

{: .box-tip }
**Tip:** Um die Performance beim Verwenden von [Custom SQL Anweisungen](#sql-anweisungen) zu steigern, wird empfohlen die Custom-Verarbeitung im *Finalization*-Schritt zu verwenden.

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}

