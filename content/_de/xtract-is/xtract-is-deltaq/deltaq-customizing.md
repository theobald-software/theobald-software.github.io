---
ref: xi-q-delta-02
layout: page
title: Customizing Check
description: Customizing Check
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 4
lang: de_DE
progressstate: 5
---

### Einstellungen

1. Öffnen Sie die DeltaQ Extraktion.
2. Füllen Sie die Felder oben rechts aus. Zur Suche nach den hinterlegten Einstellungen, klicken Sie auf **Suchen** (Lupensymbol). Die Einstellungen sind definiert in [DeltaQ Customizing](../sap-customizing/customizing-fuer-deltaq).

![deltaq-tech-settings](/img/content/deltaq-tech-settings2.png){:class="img-responsive"}

**Log. Destination** <br>Name des logischen RFC-Zielsystems.

**Gateway Host** <br>Name (oder IP-Adresse) Ihres SAP-Systems. <br>
Stellen Sie sicher, dass der Gateway-Host derselbe ist wie in Ihrer SAP-Verbindung. 

**Gateway Service** <br>In der Regel geben Sie den Gateway Service in der Form *sapgwNN* an, wobei *NN* die Instanz-Nummer ihres SAP-Systems ist, z. B. eine Zahl zwischen *00* und *99*. <br>
*NN* muss dem Feld *System No* in der SAP-Verbindung bzw. dem Feld Instanz-Nummer im SAP-Logon entsprechen. 

**Program ID** <br>Das registrierte RFC-Serverprogramm.
Stellen Sie sicher, dass sich die Registrierung der Program ID (z.B. XTRACT01) und des Hosts auf der Whitelist der reginfo ACL auf dem SAP Gateway befindet. 
Für nähere Informationen bzgl. der refinfoACL, siehe [SAP Blog: RFC Gateway Security](https://blogs.sap.com/2021/01/26/rfc-gateway-security-part-1-basic-understanding/).


Die Werte **Gateway Host** und **Gateway Service** entsprechen den Werten in der SAP-Verbindung:

![sap-conn-app-ecc](/img/content/sap-conn-app-ecc.png){:class="img-responsive"}

### Überprüfen der Eingaben

Klicken Sie auf **[Customizing Check]**, um das DeltaQ-Customizing auf dem SAP-System zu validieren.
Stellen Sie sicher, dass alle Zeilen im Bericht grün sind.

![customizing-check-successfull](/img/content/customizing-check-successfull.png){:class="img-responsive"}
