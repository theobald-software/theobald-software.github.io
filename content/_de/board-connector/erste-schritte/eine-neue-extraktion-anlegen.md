---
ref: bc-getting-started-02
layout: page
title: Schritt 2 - Eine neue Extraktion anlegen
description: Schritt 2 - Eine neue Extraktion anlegen
product: board-connector
parent: erste-schritte
permalink: /:collection/:path
weight: 2
lang: de_DE
progressstate: 5
---


### SAP-Verbindung anlegen

Eine erfolgreiche SAP-Anbindung ist die Voraussetzung für das Anlegen einer Extraktion. Um eine SAP-Verbindung herzustellen, folgen Sie den Schritten beschrieben im Abschnitt [SAP-Verbindung](../einfuehrung/sap-verbindungen-anlegen) beschrieben vor. 


### Extraktion anlegen
Das folgende Beispiel zeigt die Erstellung einer Extraktion unter Verwendung der Komponente "SAP Table or View".

1. Im Hauptfenster des BOARD Connector Designers klicken Sie auf **[New]**.
![Create-New-Table-Extraction](/img/content/bc_extraction_anlegen.png){:class="img-responsive list-img"}
Das Fenster "Create Extraction" wird geöffnet. <br>
2. Das Feld **Source** (1) gibt die SAP-Verbindung an. Wählen Sie die angelegte SAP-Verbindung aus dem Dropdown-Menü.
![Add-Extraction](/img/content/bc_tabellen_extraktion_anlegen.png){:class="img-responsive list-img"}
3. Geben Sie einen eindeutigen Namen für Ihre Extraktion ein (2).
4. Wählen Sie die Art der Extraktion. Im aufgeführten Beispiel: **SAP Table or View** (3).
5. Klicken Sie auf **[OK]** (4) zum Bestätigen.

Das Fenster "Extract Single and Joint SAP Tables or Views" wird geöffnet.
Wählen Sie die zuvor erstellte SAP-Verbindung und geben Sie der Extraktion einen eindeutigen Namen.

In dem geöffneten Fenster können Sie einfache Tabellenextraktionen oder Join-Tabellen für Extraktionen definieren. Im folgenden Beispiel wird eine einzelne Tabelle extrahiert.


