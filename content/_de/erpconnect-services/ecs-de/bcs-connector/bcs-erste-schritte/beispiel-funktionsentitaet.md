---
ref: ecs-getting-started-with-the-bcs-connector-04
layout: page
title: Beispiel Funktionsentität
description: Beispiel Funktionsentität
product: erpconnect-services
parent: bcs-erste-schritte
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=beispiel-funktionsentitaet
---

Im *New Entity*  Assistenten, nachdem Sie Function als SAP Objekt *Type* ausgewählt haben, können Sie im SAP-System nach einem Remote Funktionsbaustein oder einer BAPI Methode suchen, die Ihre Entität repräsentieren soll.

Im *Type* Feld, legen Sie den Namen des SAP-Funktionsbausteins fest. Sie können die Wildcardzeichen (%) oder Sternchen ( * ) als Platzhalter für keines oder mehrere Zeichen oder den Unterstrich ( _ ) für ein einzelnes, unbekanntes Zeichen in Ihrer Suchbedingung verwenden.

In diesem Beispiel nutzen Sie einen einfachen SAP-Funktionsbaustein der Kundeninformationen zurück gibt. Im *Type* Feld geben Sie als Suchbegriff 'SD*CUSTOMER*' an ('SD' steht für 'Sales and Distribution' im SAP ERP) und betätigen Sie die Search Schaltfläche, um alle passenden Funktionsbausteine aufgelistet zu bekommen.

![BCS-Function-Entity-Search](/img/content/BCS-Function-Entity-Search.png){:class="img-responsive"}

Wählen Sie aus der Liste den Funktionsbaustein 'SD_RFC_CUSTOMER_GET' und betätigen Sie die *Next* Schaltfläche.

Auf dem nächsten Bildschirm zeigt der Assistent eine Liste der verfügbaren Funktionsparameter, die genutzt werden können, um die Datenstruktur der Entität zu definieren, d.h., alle Felder und deren Datentypen. Der Funktionsbaustein 'SD_RFC_CUSTOMER' besitzt einen Rückgabeparameter 'CUSTOMER_T' welcher die Struktur des Kundendatensatzes repräsentiert.

Wählen Sie den Parameter 'CUSTOMER_T' und betätigen dann die *Finish* Schaltfläche.

![BCS-Function-Entity-Parameter-Selection](/img/content/BCS-Function-Entity-Parameter-Selection.png){:class="img-responsive"}

Sie sehen jetzt die neue Entität 'CUSTOMER_T' im BCS Connector Fenster, zusätzlich zu den bereits im Modell vorhandenen Entitäten.

![BCS-Function-Entity-New-CUSTOMERT](/img/content/BCS-Function-Entity-New-CUSTOMERT.png){:class="img-responsive"}

Das Entitätsobjekt wird nun angezeigt. Für detaillierte Informationen lesen Sie das Abschnitt [Entitätsdetails](./bcs-eine-neue-entitaet-erstellen/bcs-entitaetsdetails).

In diesem Beispiel ändern Sie den nachfolgenden Wert:


**Entity** -	 Customer (SD_RFC_CUSTOMER_GET)

Im *Entity Properties* Bereich des Fensters scrollen Sie die Feldliste runter und deaktivieren das Feld 'TELFX'. Dieses Feld wird in SAP genutzt, um die Faxnummer zu speichern, wird in diesem Beispiel aber nicht benötigt.

Aktivieren Sie die *ID* Checkbox neben dem Feld 'KUNNR', welche innerhalb des Funktionsbausteins eine eindeutige Kundennummer repräsentiert.

Ändern Sie, wie unten gezeigt, das *Property* Feld in einen aussagekräftigeren Namen.

![BCS-Function-Entity-Changed-Properties](/img/content/BCS-Function-Entity-Changed-Properties.png){:class="img-responsive"}

Im *Entity Operations* Bereich des BCS Connector Fensters sehen Sie eine Liste der Methoden, die für Ihre Entität definiert sind. Für eine Entität auf Basis eines Funktionsbausteins ist diese Liste leer. Als Minimalvoraussetzung benötigt der SharePoint BCS die Definition einer Read Data (oder Finder) und einer Read Data Record (oder Specific Finder) Methode für jede Entität.

In den nachfolgenden Schritten definieren Sie die Methoden für die Entität. Für detaillierte Informationen lesen Sie das Abschnitt [Entitätsmethoden](./bcs-eine-neue-entitaet-erstellen/bcs-entitaetsmethoden).

**Finder Methode**

Betätigen Sie die *New* Schaltfläche unterhalb des *Entity Operations* Bereichs.

Im ersten Schritt definieren Sie die *Finder* Methode. Wählen Sie die Option *Finder* als Typ für die Methode.

Beachten Sie, dass der Assistent weiter unten im Dialogfenster vorschlägt, die *Finder* Methode auf Basis des SAP Funktionsbausteins 'SD_RFC_CUSTOMER_GET' zu erstellen, d.h., dass der gleiche Funktionsbaustein verwendet wird, der schon für das Erstellen der Entität verwendet wurde. Dieser Funktionsbaustein gibt, wie von der Finder Methode benötigt, eine Liste von Kundendatensätzen zurück. Also können Sie die Auswahl übernehmen und die *Finish* Schaltfläche betätigen.

![BCS-Function-Entity-Parameter-Selection](/img/content/BCS-Function-Entity-Parameter-Selection.png){:class="img-responsive"}

Das *Edit Method* Dialogfenster wird angezeigt, wodurch Sie die Eigenschaften der Finder Methode ändern können. Der Standardname Name für die Entitätsmethode im BCS lautet 'Read Data'. Sie können den Namen ändern oder mit der Schaltfläche neben dem Eingabefeld länderspezifische Werte definieren.

Der *Input Parameter* Bereich des Dialogfensters zeigt die möglichen Eingabeparameter für die Methode. In unserem Beispiel besitzt der Funktionsbaustein 'SD_RFC_CUSTOMER_GET' zwei mögliche Eingabeparameter: 'KUNNR' (Kundennummer) und 'NAME1' (Name).

Der *Return Parameter* Bereich des Dialogfensters zeigt die möglichen Rückgabeparameter der Methode, in diesem Beispiel besitzt der Funktionsbaustein 'SD_RFC_CUSTOMER_GET' nur die Struktur 'CUSTOMER_T' als Rückgabewert.

Der *Filter Parameter* Bereich des Dialogfensters zeigt die Filter für die Methode. Standardmäßig sind für die Methoden, die auf Funktionsbausteinen basieren, keine Filter definiert.

![BCS-Function-Entity-Edit-Finder-Method](/img/content/BCS-Function-Entity-Edit-Finder-Method.png){:class="img-responsive"}

Um einen neuen LimitFilter für die Methode zu definieren, wählen Sie die New Schaltfläche und definieren Sie die nachfolgenden Werte. Für weiterführende Informationen lesen Sie das Abschnitt [Filter](./bcs-eine-neue-entitaet-erstellen/bcs-filter).


**Name** -	 LimitFilter<br>
**Type** -	 Limit<br>
**Default Value** -	 1000<br>
**Mapping** -	 Wählen Sie die Option'Field' und den Eintrag 'KUNNR'.<br>
**Parameter Name** -	 CustomerNumber (wird nach der Auswahl im Mapping Feld automatisch gesetzt).

![BCS-Function-Entity-Edit-Limit-Filter](/img/content/BCS-Function-Entity-Edit-Limit-Filter.png){:class="img-responsive"}

Betätigen Sie mit *OK*, um den neuen Filter zu erstellen. Sie sehen nun den neuen LimitFilter in der Filterliste des Entitätsmodells.

Benutzen Sie die Preview Funktion um die 'Read Data' Methode zu aktivieren. Aufgrund der Art und Weise wie der Funktionsbaustein 'SD_RFC_CUSTOMER_GET' in SAP implementiert ist, müssen Sie einen Wert für den Eingabeparameter vorgeben. Geben Sie ein Sternchen ( * ) als Value für das Feld 'KUNNR' an.

![BCS-Function-Entity-Edit-Input-Parameter](/img/content/BCS-Function-Entity-Edit-Input-Parameter.png){:class="img-responsive"}

Betätigen Sie die *Preview* Schaltfläche. Sie sollten nun eine auf 1000 Einträge begrenzte Kundenliste sehen.

![BCS-Function-Entity-Method-Preview](/img/content/BCS-Function-Entity-Method-Preview.png){:class="img-responsive"}

Bestätigen Sie mit *OK* um das *Preview* Dialogfenster zu schließen.

Bestätigen Sie mit *OK*, um das *Edit Method* Dialogfenster zu schließen. Sie sollten jetzt wieder das Hauptfenster des BCS Connector sehen.

![BCS-Function-Entity-Read-Data-Operation](/img/content/BCS-Function-Entity-Read-Data-Operation.png){:class="img-responsive"}

**Specific Finder**

Im nächsten Schritt definieren Sie die *Specific Finder Methode* für die Entität. Betätigen Sie die New Schaltfläche unterhalb der *Entity Operations* Liste.

Der Assistent wählt standardmäßig den *Specific Finder* Typ. Beachten Sie, dass im unteren Bereich des Dialogfensters der Assistent vorschlägt, dass die Methode auf Basis des SAP-Funktionsbausteins 'SD_RFC_CUSTOMER_GET' erstellt werden soll, d.h. dass der gleiche Funktionsbaustein verwendet wird, den wir zuvor für das Erstellen der Entität genutzt haben. Dieser Funktionsbaustein kann, wie es für die *Specific Finder* Methode erforderlich ist, für eine bestimmte *ID* einen einzelnen Kundendatensatz zurückliefern, also können Sie die Auswahl mit der *Finish* Schaltfläche übernehmen.

![BCS-Function-Entity-New-Specific-Finder-Method](/img/content/BCS-Function-Entity-New-Specific-Finder-Method.png){:class="img-responsive"}

Das *Edit Method* Dialogfenster wird eingeblendet und Sie können die Eigenschaften der *Specific Finder* Methode ändern. Der Standardwert der Entitätsmethode für Name im BCS ist 'Read Data Record'. Sie können den Namen ändern oder zusätzliche, länderspezifische Werte eingeben. Betätigen Sie dazu die Schaltfläche neben dem Eigenschaftenfeld.

Im *Input Parameter* Bereich des Dialogfensters werden die möglichen Eingabeparameter der Methode angezeigt. In diesem Beispiel gibt es für den Funktionsbaustein 'SD_RFC_CUSTOMER_GET' zwei mögliche Eingabeparameter: 'KUNNR' (Kundennummer) und 'NAME1' (Name). Beachten Sie, dass der Eingabeparameter 'KUNNR' mit dem Parameter 'KUNNR' verknüpft ist. Der Eingabeparameter repräsentiert das *ID* Feld der Entität. Dies ermöglicht es, eine eindeutige ID ('KUNNR') an die *Specific Finder* Methode als Eingabeparameter zu übergeben.

Die *Specific Finder* Methode gibt, wie im Return Parameter Bereich des Dialogfensters gezeigt, einen einzelnen Datensatz der Parameterstruktur 'CUSTOMER_T' zurück. 

![BCS-Function-Entity-Edit-Specific-Finder-Method](/img/content/BCS-Function-Entity-Edit-Specific-Finder-Method.png){:class="img-responsive"}

Bestätigen Sie mit *OK* um das *Edit Method* Dialogfenster zu schließen.

Sie haben jetzt die beiden benötigten Methoden *Read Data* und *Read Data Record* für die Entität 'Customer (SD_RFC_CUSTOMER_GET)' definiert.

![BCS-Function-Entity-Read-Data-Record](/img/content/BCS-Function-Entity-Read-Data-Record.png){:class="img-responsive"}
