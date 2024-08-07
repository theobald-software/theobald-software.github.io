---
ref: xu-getting-started-02
layout: page
title: Schritt 3 - Eine neue Extraktion anlegen
description: 3 - Eine neue Extraktion anlegen
product: xtract-universal
parent: erste-schritte
permalink: /:collection/:path
weight: 3
lang: de_DE
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

### Eine Extraktion anlegen
Das folgende Beispiel zeigt die Erstellung einer Extraktion mit der Komponente "SAP Table or View".
1. Im Hauptfenster des Xtract Universal Designers klicken Sie auf **[Neu]** (1).
Das Fenster "Create Extraction" wird geöffnet. 
![Create-New-Table-Extraction](/img/content/xu/xu-intro.png){:class="img-responsive"}
2. Das Feld **Source** gibt die SAP-Verbindung an. Wählen Sie die zuvor angelegte SAP-Verbindung aus dem Dropdown-Menü (1).
![Table_or_View](/img/content/table/table_new_extraction.png){:class="img-responsive"}
3. Geben Sie einen frei wählbaren, eindeutigen Namen für Ihre Extraktion ein (2).
4. Wählen Sie den Typ der Extraktion. Im aufgeführten Beispiel: **SAP-Tabelle oder View** (3). <br>
5. Klicken Sie auf **[OK]** zum Bestätigen.
Das Fenster "Extract Single and Joint SAP Tables or Views" wird geöffnet. <br>
In diesem Fenster können Sie einfache Tabellenextraktionen definieren oder Tabellen für Extraktionen zusammenfügen (Table Joins). Im folgenden Beispiel wird eine einzelne Tabelle extrahiert.

{: .box-note }
**Hinweis:** Wenn Sie eine Extraktion anlegen, wird der Extraktion automatisch die Destination [http-csv](../destinationen/csv-via-http) zugewiesen. 

{% include _content/de/table/extraktion-anlegen.md  %}