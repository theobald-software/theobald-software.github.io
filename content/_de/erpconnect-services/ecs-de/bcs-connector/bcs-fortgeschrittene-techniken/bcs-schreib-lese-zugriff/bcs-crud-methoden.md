---
layout: page
title: CRUD Methoden
description: CRUD Methoden
product: erpconnect-services
parent: bcs-schreib-lese-zugriff
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-crud-methoden
---

In den nachfolgenden Schritten definieren Sie die CRUD Methoden für die Entität. Für eine Entität auf Basis eines Funktionsbausteins ist die initiale Liste der *Entity Operations* leer. Betätigen Sie die New Schaltfläche, um eine neue Entitätsmethode zu definieren.

**Finder Methode**

Die erste Methode, die sie erstellen ist die *Finder* Methode. Wählen Sie die Option Finder als Typ für die Methode.

Der Assistent schlägt vor, dass die Methode auf dem SAP-Funktionsbaustein 'Z_ECS_PRODUCT_GET_DETAIL' basiert, d.h. dass Sie den gleichen Funktionsbaustein verwenden, den Sie vorher für die Definition der Struktur der Entität verwendet haben. Da dieser Funktionsbaustein nur einen einzelnen Datensatz zurückgibt, müssen Sie einen Funktionsbaustein auswählen, der für die Entität mehrere Datensätze zurückgeben kann.

Deaktivieren Sie die Auswahl neben dem Namen des Funktionsbausteins und betätigen Sie *Next*.

![BCS-CRUD-New-Finder-01](/img/content/BCS-CRUD-New-Finder-01.png){:class="img-responsive"}

Im *New Method* Dialogfenster geben Sie 'Z_ECS_PRODUCT* ' als Suchkriterium ein und betätigen die Search Schaltfläche, um eine Liste aller passenden Funktionsbausteine im *SAP-System* zu erhalten.

![BCS-CRUD-New-Finder-02](/img/content/BCS-CRUD-New-Finder-02.png){:class="img-responsive"}

Wählen Sie den Funktionsbaustein 'Z_ECS_PRODUCT_GET_LIST' aus der Liste aus und klicken Sie *Finish*.

Im *Edit Method* Dialogfenster können Sie sehen, dass die Methode zwei Eingabeparameter (SEARCH_PRODTYPE und SEARCH_PRODUCTNR) und einen Rückgabeparameter (T_PRODUCTS) besitzt. Standardmäßig besitzt die Methode auch einen Filter, der die Anzahl der zurückgegebenen Datensätze auf 1.000 begrenzt.

![BCS-CRUD-New-Finder-03](/img/content/BCS-CRUD-New-Finder-03.png){:class="img-responsive"}

Betätigen Sie die *Preview* Schaltfläche, um die Methode zu testen und eine Liste der Produkte zu erhalten.

![BCS-CRUD-New-Finder-04](/img/content/BCS-CRUD-New-Finder-04.png){:class="img-responsive"}

Betätigen Sie *OK*, um den *Preview* Dialog zu schließen.

Betätigen Sie *OK*, um das *Edit* Method Dialogfenster zu schließen. Sie sollten sich nun wieder im BCS Connector Hauptfenster befinden und die neue *Entity Operation* 'Read Data' sehen.

![BCS-CRUD-New-Finder-05](/img/content/BCS-CRUD-New-Finder-05.png){:class="img-responsive"}

**Specific Finder Methode**


Die nächste Methode, die sie definieren ist die *Specific Finder* Methode. Betätigen Sie die *New* Schaltfläche unterhalb der *Entity Operations* Liste.

Der Assistent wählt die *Specific Finder* als neu zu definierende Methode aus. Der Assistent schlägt vor, dass die Methode auf Basis des SAP-Funktionsbausteins 'Z_ECS_PRODUCT_GET_DETAIL' erstellt wird, d.h. auf Basis des Funktionsbausteins, der schon vorher für die Definition der Entitätsstruktur genutzt wurde. Dieser Funktionsbaustein liefert einen einzelnen Datensatz der Enität zurück, genauso wie es die *Specific Finder* Methode benötigt. Übernehmen Sie die vorgeschlagene Auswahl mit *Finish*.

![BCS-CRUD-New-Specific-Finder-01](/img/content/BCS-CRUD-New-Specific-Finder-01.png){:class="img-responsive"}

Im *Edit Method* Dialogfenster sehen Sie, dass die Methode einen Eingabeparameter 'I_PRODUCTNR' und einen Rückgabeparameter 'T_PRODUCTS' besitzt. Beachten Sie, dass die *Finder* Methode den gleichen Rückgabeparameter besitzt.

Eine *Specific Finder* Methode benötigt eine ID der Entität, die mit einem der Eingabeparameter verknüpft ist. Verknüpfen Sie das ID Feld 'PRODUCTNR' mit dem Eingabeparamater 'I_PRODUCTNR'.

![BCS-CRUD-New-Specific-Finder-02](/img/content/BCS-CRUD-New-Specific-Finder-02.png){:class="img-responsive"}

Betätigen Sie *OK*, um das *Edit Method* Dialogfenster zu schließen.

Sie haben jetzt die *Read Data* und die *Read Data Record* Methode für die 'PRODUCTS' Entität definiert.

![BCS-CRUD-New-Specific-Finder-03](/img/content/BCS-CRUD-New-Specific-Finder-03.png){:class="img-responsive"}

**Creator Methode**

Im nächsten Schritt definieren Sie die Creator Methode für die Entität. Betätigen Sie die *New* Schaltfläche unterhalb der *Entity Operations* Liste.

Der Assistent wählt die *Creator* Methode als die nächste zu definierende Methode aus. Der Assistent schlägt vor, dass die Methode auf Basis des SAP Funktionsbausteins 'Z_ECS_PRODUCT_GET_DETAIL' erstellt wird, d.h. auf Basis des Funktionsbausteins, der schon vorher für die Definition der Entitätsstruktur genutzt wurde. Da dieser Funktionsbaustein nur einzelne Datensätze zurückgeben kann, benötigen Sie einen anderen Funktionsbaustein für die *Creator* Methode.

Deaktivieren Sie die Auswahl des Funktionsbausteins und betätigen Sie *Next*.

![BCS-CRUD-New-Creator-01](/img/content/BCS-CRUD-New-Creator-01.png){:class="img-responsive"}

Im *New Method* Dialogfenster geben Sie 'Z_ECS_PRODUCT* ' als Suchkriterium ein und betätigen die *Search* Schaltfläche, um eine Liste passender Funktionsbausteine in SAP zu erhalten.

![BCS-CRUD-New-Creator-02](/img/content/BCS-CRUD-New-Creator-02.png){:class="img-responsive"}

Wählen Sie den Funktionsbaustein 'Z_ECS_PRODUCT_CREATE' von der Liste und betätigen Sie *Finish*.

Im *Edit Method* Dialogfenster sehen Sie, dass die Methode einen Eingabeparameter 'I_PRODUCT' besitzt. Dieser Parameter repräsentiert die Struktur einer Entität. Die *Creator* Methode benötigt die mit dem Eingabeparameter der Entität verknüpfte Struktur, wie durch den Wert '<>' im *Mapping* Feld angegeben.

![BCS-CRUD-New-Creator-03](/img/content/BCS-CRUD-New-Creator-03.png){:class="img-responsive"}

Betätigen Sie *OK*, um das *Edit Method* Dialogfenster zu schließen.

Sie haben jetzt die *Read Data, Read Data Record* und die *Create Data Record* Methode für die 'PRODUCTS' Entität erstellt.

![BCS-CRUD-New-Creator-04](/img/content/BCS-CRUD-New-Creator-04.png){:class="img-responsive"}

**Updater Methode**

Die nächste Methode, die Sie definieren ist die *Updater* Methode. Betätigen Sie die *New* Schaltfläche unterhalb der *Entity Operations* Liste.

Der Assistent wählt die *Update*r Methode als die nächste, zu definierende Methode aus. Der Assistent schlägt vor, dass die Updater Methode auf Basis des SAP-Funktionsbausteins 'Z_ECS_PRODUCT_GET_DETAIL' erstellt werden soll, d.h. auf Basis des Funktionsbausteins, der schon vorher für die Definition der Entitätsstruktur genutzt wurde. Da dieser Funktionsbaustein nur einzelne Datensätze zurückgeben kann, benötigen Sie einen anderen Funktionsbaustein für die *Creator* Methode.

Deaktivieren Sie die Auswahl des Funktionsbaustein und betätigen Sie *Next*.

![BCS-CRUD-New-Updater-01](/img/content/BCS-CRUD-New-Updater-01.png){:class="img-responsive"}

Geben Sie im *New Method* Dialogfenster 'Z_ECS_PRODUCT* ' als Suchkriterium an und betätigen Sie die Search Schaltfläche, um eine Liste der passenden SAP Funktionsbausteine zu erhalten.

![BCS-CRUD-New-Updater-02](/img/content/BCS-CRUD-New-Updater-02.png){:class="img-responsive"}

Wählen Sie den Funktionsbaustein 'Z_ECS_PRODUCT_CHANGE' aus der Liste aus und betätigen Sie *Finish*.

Im *Edit Method* Dialogfenster sehen Sie, dass die Methode zwei Eingabeparameter hat: 'I_PRODUCT' repräsentiert die Struktur der Entität und 'I_PRODUCTNR' die *ID* der Entität. Verknüpfen Sie die Paramter 'I_PRODUCT' der Methode mit dem Eintrag '<>' und den Parameter 'I_PRODUCTNR' der Methode mit 'PRODUCTNR'.

![BCS-CRUD-New-Updater-03](/img/content/BCS-CRUD-New-Updater-03.png){:class="img-responsive"}

Betätigen Sie *OK*, um das *Edit Method* Dialogfenster zu schließen.

Sie haben jetzt *Read Data, Read Data Record, Create Data Record* und die *Update Data Record* Methoden für die 'PRODUCTS' Entität erstellt.

![BCS-CRUD-New-Updater-04](/img/content/BCS-CRUD-New-Updater-04.png){:class="img-responsive"}

**Deleter Method**


Abschließend definieren Sie die *Deleter* Methode der Entität. Betätigen Sie die New Schaltfläche unterhalb der the *Entity Operations* Liste.

Der Assistent schlägt vor, dass die *Deleter* Methode auf Basis des SAP Funktionsbausteins 'Z_ECS_PRODUCT_GET_DETAIL' erstellt werden soll, d.h. auf Basis des Funktionsbausteins, der schon vorher für die Definition der Entitätsstruktur genutzt wurde. Da dieser Funktionsbaustein nur einzelne Datensätze zurückgeben kann, benötigen Sie einen anderen Funktionsbaustein für die *Deleter* Methode.

Deaktivieren Sie die Auswahl des Funktionsbausteins und betätigen Sie *Next*.

![BCS-CRUD-New-Deleter-01](/img/content/BCS-CRUD-New-Deleter-01.png){:class="img-responsive"}

Im *New Method* Dialogfenster geben Sie 'Z_ECS_PRODUCT* ' als Suchkriterium ein und betätigen die *Search* Schaltfläche, um eine Liste der passenden Funktionsbausteine in SAP zu erhalten.

![BCS-CRUD-New-Deleter-02](/img/content/BCS-CRUD-New-Deleter-02.png){:class="img-responsive"}

Wählen Sie den Funktionsbaustein 'Z_ECS_PRODUCT_DELETE' von der Liste und betätigen Sie *Finish*.

Im *Edit Method* Dialogfenster sehen Sie, dass die Methode einen Eingabeparameter 'I_PRODUCTNR' besitzt, der die *ID* der zu löschenden Entität definiert. Verknüpfen Sie den Parameter 'I_PRODUCTNR' der Methode mit 'PRODUCTNR'.

![BCS-CRUD-New-Deleter-03](/img/content/BCS-CRUD-New-Deleter-03.png){:class="img-responsive"}

Betätigen Sie *OK*, um das *Edit Method* Dialogfenster zu schließen.

Sie haben nun sämtliche CRUD Methoden für die 'PRODUCTS' Entität erstellt: *Read Data, Read Data Record, Create Data Record, Update Data Record* und *Delete Data Record*.

![BCS-CRUD-New-Deleter-04](/img/content/BCS-CRUD-New-Deleter-04.png){:class="img-responsive"}