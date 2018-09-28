---
layout: page
title: Arbeitszeitblatt (CATS)
description: Arbeitszeitblatt (CATS)
product: erpconnect-services
parent: business-integration-apps-bia
childidentifier: arbeitszeitblatt
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=arbeitszeitblatt
---

Die Anwendung besteht aus einer einfachen Monats-, Wochen-, oder Tageskalender -Sicht, in der man zeitlich vor- und zurückblättern kann, um neue Einträge vorzunehmen. Über den Secure Store in SharePoint erfolgt eine gesicherte Zuordnung und Authentifizierung des SharePoint Users zum SAP-Benutzer. Die Zuordnung des SAP-Benutzers zur Personalnummer erfolgt über einen Infotyp in den Personalstammdaten (IT0105).    


**Anlage eines neuen Zeiteintrags**


Mit einem Klick in den Kalender, öffnet sich ein Popup-Fenster zur Anlage eines neuen Eintrags. Die vorher markierte Zeitspanne wird dabei als Start- und Endzeit übernommen.  

![cats-app-01](/img/content/cats-app-01.png){:class="img-responsive"}

In der ersten Zeile der Erfassungsmaske wird das Projekt ausgewählt, auf welches Zeiten verbucht werden sollen (Anzeige der Kurzbeschreibung und Projektdefinition). Nur auf freigegebene Projekte können Zeiten verbucht werden. In der Wertehilfe stehen alle freigegebenen Projekte des SAP Projektsystems zur Verfügung.

![cats-app-02](/img/content/cats-app-02.png){:class="img-responsive"}

Nachdem man das gewünschte Projekt aus der Liste selektiert hat, werden in der zweiten Zeile alle Vorgänge zu diesem Projekt geladen und aufgelistet. 

![cats-app-03](/img/content/cats-app-03.png){:class="img-responsive"}

Angezeigt wird in der Zeile das Netzwerk, unter dem der Vorgang angelegt ist, sowie die Vorgangsnummer und die Kurzbeschreibung des Vorgangs. Zu einem Projekt können unter Umständen eine Vielzahl von Vorgängen existieren, auf die Arbeitszeiten gebucht werden können. Um den Eintrag zu speichern, muss außerdem im Feld Description zwingend eine Beschreibung eingetragen werden.


![cats-app-04](/img/content/cats-app-04.png){:class="img-responsive"}

Nach erfolgreichem Sichern wird ein neuer Eintrag im Kalender erzeugt.

![cats-app-05](/img/content/cats-app-05.png){:class="img-responsive"}

Bestehende Einträge können problemlos wieder gelöscht werden.

![cats-app-06](/img/content/cats-app-06.png){:class="img-responsive"}

![cats-app-07](/img/content/cats-app-07.png){:class="img-responsive"}

**Verbuchung in SAP**


Nach der Anlage eines neuen Eintrages  werden die Daten im SAP-System verbucht. In den entsprechenden Tabellen (z.B. CATSDB und CATSPS) und Datenbanken des CATS-Moduls werden neue Einträge erzeugt und können in SAP angezeigt werden (Transaktion CAT3).

![cats-app-08](/img/content/cats-app-08.png){:class="img-responsive"}

In SAP kann anschließend eine Überleitung in das Projektsystem erfolgen (Transaktion CAT5), vorausgesetzt das SAP-System wurde dafür entsprechend konfiguriert.

![cats-app-09](/img/content/cats-app-09.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}