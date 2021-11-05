---
ref: ecs-sharepoint-configuration-01
layout: page
title: BCS Berechtigungen einstellen
description: BCS Berechtigungen einstellen
product: erpconnect-services
parent: bcs-sharepiont-konfigurieren
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-berechtigungen-einstellen
---

In einem SharePoint System speichert der BCS Metadata Store alle Informationen über Modelle, externe Systeme, externe Inhaltstypen und deren Methoden. Im vorhergehenden Abschnitt wurde ein Modell mit einem externen Inhaltstyp aus SAP im BCS Metadata Store veröffentlicht. Damit der Benutzer auf die externen Daten zugreifen kann, müssen die Berechtigungen im BCS Metadata Store gesetzt werden.

Im BCS Connector Designer können Sie die Berechtigungsstufen des aktiven Users innerhalb des BCS Metadata Store einsehen.

Wählen Sie auf dem BCS Connector Ribbon den Eintrag Show *Permissions*, um das *Permissions* Dialog Fenster zu öffnen.

![BCS-SP-Show-Permissions](/img/content/BCS-SP-Show-Permissions.png){:class="img-responsive"}

Betätigen Sie mit *OK*, Schaltfläche um das *Permissions Dialog Fenster* zu schließen.

Um die Berechtigungen zu ändern, benutzen Sie das *SharePoint 2010 Central Administration* Werkzeug. Im Start Menü Ihres SharePoint Systems klicken Sie auf SharePoint 2010 Central Administration.

![BCS-SP-Manage-Service-Applications](/img/content/BCS-SP-Manage-Service-Applications.png){:class="img-responsive"}

In der *Application Management* Gruppe wählen Sie den *Manage service applications* Link.

![BCS-SP-Manage](/img/content/BCS-SP-Manage.png){:class="img-responsive"}

Wählen Sie die *Business Data Connectivity Service* Anwendung und wählen dann die *Manage* Schaltfläche vom Ribbon.

![BCS-SP-Service-Application-Information](/img/content/BCS-SP-Service-Application-Information.PNG){:class="img-responsive"}

Auf der *Service Application Information* Seite sehen Sie die externen Inhaltstypen, die Sie vorher veröffentlicht haben.

Wählen Sie den Set *Metadata Store Permissions* Befehl vom Ribbon.

Standardmäßig sehen Sie Ihren Benutzernamen in der Kontenliste und darunter die zugewiesenen Berechtigungen.

![BCS-SP-Set-Metadata-Store-Permissions-01](/img/content/BCS-SP-Set-Metadata-Store-Permissions-01.png){:class="img-responsive"}

Wählen Sie das Adressbuch Symbol unter dem Feld 'To add an account, or group … ',  um nach zusätzlichen Konten oder einer Gruppe zu suchen.

**Beispiel:**

Um die Berechtigung für alle authentifizierten Benutzer zu setzen, wählen Sie All Users und dann die Gruppe *All Authenticated Users*, und anschliessend die Add Schaltfläche. Bestätigen Sie die Gruppenauswahl mit *OK* .

![BCS-SP-Set-Metadata-Store-Permissions-02](/img/content/BCS-SP-Set-Metadata-Store-Permissions-02.png){:class="img-responsive"}

Zurück im *Set Metadata Store Permissions* Dialog, wählen Sie die *Add* Schaltfläche, um die Gruppe ‘All Authenticated Users’ in die untere Liste zu verschieben.

In der *Permissions for All Authenticated Users* Liste aktivieren Sie die Execute Berechtigung und lassen die übrigen Berechtigungen unmarkiert. Stellen Sie sicher, dass die Option P*ropagate permissions to all BDC Models, External Systems and External Content Types in the BDC Metadata Store* aktiviert ist und somit die Berechtigungen auf alle Objekte übertragen werden.

Bestätigen Sie durch *OK*, um die Änderungen zu übernehmen.

![BCS-SP-Set-Metadata-Store-Permissions-03](/img/content/BCS-SP-Set-Metadata-Store-Permissions-03.png){:class="img-responsive"}

Schließen Sie das *SharePoint Central Administration* Fenster.


