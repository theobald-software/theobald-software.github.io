---
ref: ecs-business-integration-apps-02
layout: page
title: Kundenstammblatt
description: Kundenstammblatt
product: erpconnect-services
parent: business-integration-apps-bia
childidentifier: kundenstammblatt
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=kundenstammblatt
---

Mit dem Kundenstammblatt (Customer Factsheet) stellt Theobald Software eine insbesondere für Vertriebsmitarbeiter und Manager interessante Business Integration App zur Verfügung. Mit der App können sich die Anwender einen schnellen Überblick über SAP-Kundendaten verschaffen. Auf einer übersichtlich gestalteten Seite werden dabei die wichtigsten Eckdaten und aktuellen Verkaufsaktivitäten zu einer gewünschten Kundennummer aufgelistet. <br>
Speziell bei dieser Business Integration App ist der mobile Einsatz über SharePoint Online interessant. Grundsätzlich lassen sich alle Apps über SharePoint Online auch von unterwegs mit jedem internetfähigen Endgerät (Tablet, Smartphone) aufrufen.

**Aufbau der App**

Die relevanten Kundeninformationen werden im Kundenstammblatt in unterschiedlichen Bildschirmblöcken aufgelistet, nachdem man eine bestimmte Kundennummer aufgerufen hat. Die Anwendung ist rein für Auswertungszwecke gedacht und wurde nicht zum Editieren von Kundenstammdaten konzipiert. Durch die direkte Integration der SAP-Daten werden alle Änderungen im Backend-System, wie die Anlage eines neuen Angebotes für einen Kunden, direkt in der Anwendung dargestellt.

![ECS-BIA-CustomerFactsheet1](/img/content/ECS-BIA-CustomerFactsheet1.png){:class="img-responsive"}

**Durchführung einer Kundenabfrage**

Zur Durchführung einer Kundenabfrage trägt man die gewünschte Kundennummer in der Suchmaske ein und startet die Suche mit ENTER oder dem Lupensymbol.

![ECS-BIA-CustomerFactsheet2](/img/content/ECS-BIA-CustomerFactsheet2.png){:class="img-responsive"}

Ist für die ausgewählte Kundennummer ein Stammsatz vorhanden, dann öffnen sich im oberen Bildschirmbereich die Adressdaten, Kennzahlen und Ansprechpartner des Kunden. Grundlage für die hinterlegten Daten sind die Kundenstammdaten in SAP. Nur wenn auf SAP-Seite die entsprechenden Informationen gepflegt sind, werden im Stammblatt auch Daten angezeigt. 

![ECS-BIA-CustomerFactsheet3](/img/content/ECS-BIA-CustomerFactsheet3.png){:class="img-responsive"}

Im unteren Bildschirmbereich befindet sich eine Aufstellung der Aufträge und Angebote, die für den gewählten Kunden in SAP hinterlegt sind. 

![ECS-BIA-CustomerFactsheet4](/img/content/ECS-BIA-CustomerFactsheet4.png){:class="img-responsive"}

Über den Zeitraumfilter (7 Tage, 30 Tage, Alle) und den generischen Suchfilter, mit dem nach beliebigen Zeichenfolgen in der kompletten Tabelle gesucht werden kann, ist es möglich, die Treffermenge weiter einzuschränken. Mit einem Klick auf den Auftrag oder das Angebot, erscheinen die dazu erfassten Positionen in einem gesonderten Popup-Fenster.

![ECS-BIA-CustomerFactsheet6](/img/content/ECS-BIA-CustomerFactsheet6.png){:class="img-responsive"}

Über eine Exportfunktion kann die Liste der Aufträge und Angebote ins Excel- oder TXT-Format exportiert werden. 

![ECS-BIA-CustomerFactsheet7](/img/content/ECS-BIA-CustomerFactsheet7.png){:class="img-responsive"}

Bei großen Treffermengen kann zwischen den Anzeigeseiten geblättert werden und die Anzahl der 
angezeigten Treffer pro Seite hochgesetzt werden (Standardwert: 10 Treffer).

![ECS-BIA-CustomerFactsheet8](/img/content/ECS-BIA-CustomerFactsheet8.png){:class="img-responsive"}


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}