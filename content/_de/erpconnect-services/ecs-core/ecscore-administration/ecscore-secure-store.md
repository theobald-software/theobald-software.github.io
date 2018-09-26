---
layout: page
title: Secure Stores
description: Secure Stores
product: erpconnect-services
parent: ecscore-administration
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecscore-secure-store
---

Unter *Secure Stores* kann ein Secure Store zur Authentifzierung hinzugefügt und verwaltet werden. 
Ein Secure Store sorgt dafür, dass die existierenden Windows-Benutzer einen nahtlosen Zugriff auf das SAP-System mit eigenem SAP-Benutzer bekommen.


Gehen Sie zum Menü *Secure Stores*:

![ecscore-managementsite12](/img/content/ecscore-managementsite12.jpg.png){:class="img-responsive"}

Klicken Sie auf *Add Secure Store* und geben Sie ihm einen Namen.

![ecscore-managementsite15](/img/content/ecscore-managementsite15.jpg.png){:class="img-responsive"}

Der *Secure Store* wird anschließend unter *Secure Stores* auf der linken Seite aufgeführt. Klicken Sie anschließend auf den Karteireiter Credentials. Dort können Sie die entsprechenden Anmeldedaten für einen Benutzer festlegen.

![ecscore-managementsite13](/img/content/ecscore-managementsite13.jpg.png){:class="img-responsive"}

Klicken Sie auf *Add Credentials*.

Im vorliegenden Beispiel wird dem Windows User hans.mueller der SAP User hmueller mit entsprechendem Passwort zugewiesen.

![ecscore-managementsite14](/img/content/ecscore-managementsite14.jpg.png){:class="img-responsive"}

Der Benutzer wird anschließend bei *Credentials* unter *Name* aufgeführt. 

![ecscore-managementsite16](/img/content/ecscore-managementsite16.jpg.png){:class="img-responsive"}

Wenn sich ein Benutzer nun gegen ECSCore mit dem Windows-Benutzer hans.mueller authorisiert, kommt er an das hinterlegte SAP-System mit dem Login hmueller.
Wichtig: Ein Secure-Store kann aus mehreren Benutzer-Verknüpfungen bestehen. Der SAP Benutzername muss mindestens 5 Zeichen lang sein.


Unter Services lässt sich jetzt bei den Authentifizierungsmethoden unter Use Secure Store der neu hinterlegte SecureStore bei *Application ID* auswählen (siehe Online-Hilfe unter Services).

![ecscore-managementsite17](/img/content/ecscore-managementsite17.jpg.png){:class="img-responsive"}