---
ref: ecs-read-write-access-03
layout: page
title: Erstellen eines Modells und einer Entität
description: Erstellen eines Modells und einer Entität
product: erpconnect-services
parent: bcs-schreib-lese-zugriff
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-erstellen-eines-modells
---


Home > ERPConnect Services (für SharePoint) > BCS Connector > Fortgeschrittene Techniken > Schreib/Lese Zugriff > Erstellen eines Modells und einer Entität


Erstellen eines Modells und einer Entität

In den nachfolgenden Schritten erstellen Sie ein neues BCS Modell für das CRUD Szenario. Sie können auch ein bestehendes BCS Modell aus dem SharePoint System oder ein gepeichertes Modell nutzen.

Um ein neues Modell zu erstellen, ändern Sie den Namen im Model Feld z.B. in 'SAP CRUD Model'. Auf die gleiche Art und Weise ändern Sie die Werte für *LOB System* und *LOB System Instance*. Sie können zusätzliche Sprachversionen definieren, indem Sie die Schaltfläche neben dem jeweiligen Eingabefeld betätigen.

![BCS-CRUD-New-Model](/img/content/BCS-CRUD-New-Model.png){:class="img-responsive"}

Um eine neue Entität zu Ihrem Modell hinzuzufügen, betätigen Sie die *New* Schaltfläche unterhalb des *Entities* Feldes.
Im *New Entity* Assistenten wählen Sie *Function* als SAP Objekttyp aus, die die Grundlage für die Entität wird.

![BCS-CRUD-New-Function-Entity-01](/img/content/BCS-CRUD-New-Function-Entity-01.png){:class="img-responsive"}

Klicken Sie die *Next* Schaltfläche.

Auf der nächsten Seite des *New Entity* Assistenten spezifizieren Sie den Funktionsbaustein, der die Datenstruktur für die Entität darstellen wird. Üblicherweise wählen Sie einen Funktionsbaustein aus, der eine vollständige Struktur der Entität zurückgeben wird, in diesem Beispiel den Funktionsbaustein 'Z_ECS_PRODUCT_GET_DETAIL'.

Um nach dem Funktionsbaustein zu suchen, geben Sie 'Z_ECS_PRODUCT* ' in das *Type* Feld ein und betätigen die *Search* Schaltfläche, um eine Liste der passenden Funktionsbausteine in SAP zu erhalten.

![BCS-CRUD-New-Function-Entity-02](/img/content/BCS-CRUD-New-Function-Entity-02.png){:class="img-responsive"}

Wählen Sie das Funktionsmodul 'Z_ECS_PRODUCT_GET_DETAIL' aus der Liste und betätigen Sie *Next*.

Im nächsten Bildschirm zeigt der Assistent eine Liste der möglichen Funktionsparameter, welche die Datenstruktur der Entität definieren können. Für den Funktionsbaustein 'Z_ECS_PRODUCT_GET_DETAIL' wird über den Parameter 'T_PRODUCTS' eine Tabellenstruktur für die Produktentität definiert.

![BCS-CRUD-New-Function-Entity-03](/img/content/BCS-CRUD-New-Function-Entity-03.png){:class="img-responsive"}

Wählen Sie den Parameter 'T_PRODUCTS' und dann *Finish*.

Sie sehen die neue Entität 'T_PRODUCTS' im Hauptfenster des BCS Connector.

![BCS-CRUD-New-Function-Entity-04](/img/content/BCS-CRUD-New-Function-Entity-04.png){:class="img-responsive"}

Ändern Sie den Namen Ihrer Entität im Feld *Entity* in 'PRODUCTS'.

In der *Entity Properties* Tabelle wählen Sie das nicht benötigte Feld 'MANDT' ab.

Markieren Sie das Feld 'PRODUCTNR' als *ID* Feld.

Um einen aussagekräftigeren bzw. benutzerfreundlicheren Namen für eine Entität festzulegen, ändern Sie den Wert im *Property* Feld. Ergänzend können Sie mit der Schaltfläche neben dem Feld zusätzliche, länderspezifische Bezeichnungen hinzufügen.

![BCS-CRUD-New-Function-Entity-05](/img/content/BCS-CRUD-New-Function-Entity-05.png){:class="img-responsive"}
