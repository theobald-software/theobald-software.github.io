---
layout: page
title: Customizing Check
description: Customizing Check
product: xtract-universal
parent: datasource-deltaq
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=customizing-check
---

Füllen Sie nun noch oben rechts die Felder aus, wie im Kapitel [DeltaQ Customizing](../sap-customizing/customizing-fuer-deltaq) angelegt. 

![deltaq-tech-settings](/img/content/deltaq-tech-settings.png){:class="img-responsive"}

**Log. Destination** ist das logische RFC-Zielsystem (siehe Schritt 1 beim DeltaQ Customizing).

**Gateway Host** ist der Name (oder IP-Adresse) Ihres SAP-Systems. <br>
Beachten Sie, dass Gateway Host Ihrem in der SAP-Verbindung definierten SAP-System (Feld Host oder Message Server) entspricht. 

**Gateway Service** ist in der Regel in der Form sapgwNN, wobei NN die Instanz-Nummer ihres SAP-Systems ist, eine zweistellige Zahl zwischen 00 und 09. <br>
NN muss dem Feld System No in der SAP-Verbindung bzw. dem Feld Instanz-Nummer im SAP Logon entsprechen. 

**Program ID** ist das registrierte RFC-Serverprogramm (siehe Schritt 4 beim DeltaQ Customizing).

Hier sehen Sie die Daten der SAP-Verbindung für den Vergleich.

![sap-conn-app-ecc](/img/content/sap-conn-app-ecc.png){:class="img-responsive"}

Anschließend klicken Sie auf Customizing Check und stellen Sie sicher, dass alles grün ist. 

![customizing-check-successfull](/img/content/customizing-check-successfull.png){:class="img-responsive"}