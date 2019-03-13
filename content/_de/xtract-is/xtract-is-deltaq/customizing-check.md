---
ref: xi-q-delta-02
layout: page
title: Customizing Check
description: Customizing Check
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=customizing-check
---

Tragen Sie nun die Felder auf der rechten Seite, entsprechend der im Kapitel [DeltaQ Customizing](./customizing-fuer-deltaq) angelegten SAP Objekten, ein. 

![deltaq-tech-settings](/img/content/general_settings_xis_deltaq.png){:class="img-responsive"}

|Feld | Beschreibung |
|:--|:--|
|Log. Destination | logisches RFC-Zielsystem (siehe Schritt 1 beim [DeltaQ Customizing](./customizing-fuer-deltaq)|
|Gateway Host | Name (oder IP-Adresse) Ihres SAP-Systems <br> Beachten Sie, dass Gateway Host Ihrem in der SAP-Verbindung definierten SAP-System (Feld Host oder Message Server) entspricht. |
|Gateway Service | in der Regel in der Form sapgwNN, wobei NN die Instanz-Nummer ihres SAP-Systems ist, eine zweistellige Zahl zwischen 00 und 99. <br> NN muss dem Feld System No in der SAP-Verbindung bzw. dem Feld Instanz-Nummer im SAP Logon entsprechen.|
|Program ID | registriertes RFC-Serverprogramm (siehe Schritt 4 beim [DeltaQ Customizing] (./customizing-fuer-deltaq)|

Hier sehen Sie die Daten der SAP-Verbindung für den Vergleich.

![sap-conn-app-ecc](/img/content/sap-conn-app-ecc.png){:class="img-responsive"}

Anschließend klicken Sie auf Customizing Check, um die interne Diagnose durchzuführen. Stellen Sie sicher, dass alles grün ist. 

![customizing-check-successfull](/img/content/customizing-check-successfull.png){:class="img-responsive"}