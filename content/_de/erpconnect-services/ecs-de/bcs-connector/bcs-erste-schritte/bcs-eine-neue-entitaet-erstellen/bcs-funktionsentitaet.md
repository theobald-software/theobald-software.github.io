---
layout: page
title: Funktionsentität
description: Funktionsentität
product: erpconnect-services
parent: bcs-eine-neue-entitaet-erstellen
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-funktionsentitaet
---

Eine Entität in Ihrem Modell beschreibt die Datenstruktur eines Business-Objekts. In einem SAP System kann ein Business-Objekt durch eine Tabelle, eine View oder einen Funktionsbaustein und als BAPI dargestellt werden. 

In SharePoint BCS wird die Entität durch einen external content type (ECT) dargestellt.
Um eine neue Entität zu definieren, wählen Sie die New Schaltfläche unterhalb des *Entities* Feldes.

![BCS-New-Function-Entity](/img/content/BCS-New-Function-Entity.png){:class="img-responsive"}

Im *New Entity* Assistent, wählen Sie als Basis für die neue Entität den SAP Objekttyp Function.


**Table** - 	Wählen Sie diesen Objekttyp, wenn Ihre Entität innerhalb des SAP Systems durch eine Tabelle oder eine View dargestellt werden soll.<br>
**Function** -	Wählen Sie diesen Objekttyp, wenn Ihre Entität innerhalb des SAP Systems durch einen Funktionsbaustein oder einen BAPI dargestellt werden soll.

Betätigen Sie die *Next* Schaltfläche.
 
Auf der nächsten Seite des New Entity Assistenten können Sie im SAP System nach der Tabelle suchen, die Ihre Entität darstellen soll.

Geben Sie in das *Type* Feld den Tabellennamen aus dem SAP System ein. Sie können auch die Wildcardzeichen Prozent (%) oder Sternchen ( * ) als Platzhalter für keine oder mehrere unbekannte Zeichen oder den Unterstrich ( _ ) für ein einzelnes, unbekanntes Zeichen in Ihrer Suchbedingung verwenden.

Für dieses Beispiel nutzen wir einen einfachen Funktionsbaustein in SAP, der Kundeninformationen bereit stellt. Im *Type* Feld geben Sie als  Namen für das Funktionsmodul 'SD*CUSTOMER*' ('SD' steht für 'Sales and Distribution' im SAP ERP) und betätigen anschliessend die Search Schaltfläche, um eine Liste der Funktionsbausteine zu erhalten, die dem eingegebenen Suchkriterium entsprechen.

![BCS-Function-Entity-Search](/img/content/BCS-Function-Entity-Search.png){:class="img-responsive"}

Wählen Sie den Funktionsbaustein 'SD_RFC_CUSTOMER_GET' aus der Liste und betätigen Sie die Next Schaltfläche.

Im nächsten Fenster zeigt der Assistent eine Liste der möglichen Funktionsparameter, die genutzt werden können, um die Datenstruktur der Entität zu definieren, z.B. alle Felder und deren Datentypen. Der Funktionsbaustein 'SD_RFC_CUSTOMER' besitzt einen Rückgabeparameter 'CUSTOMER_T', der die Struktur eines Kundendatensatzes darstellt.

Wählen Sie den Parameter 'CUSTOMER_T' und betätigen die *Finish* Schaltfläche. 

![BCS-Function-Parameter-Selection](/img/content/BCS-Function-Parameter-Selection.png){:class="img-responsive"}

Sie sehen nun den neuen Eintrag 'CUSTOMER_T' im Hauptfenster des BCS Connector zusätzlich zu den andern Entitäten in Ihrem Modell.

![BCS-New-CUSTOMERT-Entity](/img/content/BCS-New-CUSTOMERT-Entity.png){:class="img-responsive"}

Die Entität wird mit den nachfolgenden Informationen dargestellt:

**Entity:**  Der Standardname der Entität ist der Parametername des ausgewählten SAP Funktionsbausteins (in diesem Beispiel 'CUSTOMER_T'). Um einen aussagekräftigen Namen zu vergeben, ändern Sie die Bezeichnung in 'Customer (SD_RFC_CUSTOMER_GET)'. Mit der Schaltfläche neben dem Feld können Sie weitere, länderspezifische Bezeichnungen hinzufügen. 

**Namespace:** Der Standardwert für den Namespace ist 'BCSConnector.SAP'. Der Namespace wird gemeinsam mit den Werten für die Entity und Version genutzt, um eine eindeutige ID zu generieren, durch die die Entität innerhalb der Business Connectivity Services identifiziert wird.

**Version:** Der Standardwert ist '1.0.0.0'. Die Version wird gemeinsam mit dem Namespace und der Entity für die Generierung einer ID benötigt damit die Entität in dem Business Connectivity Services eindeutig identifiziert werden kann.

**Est. Instances:**  Der Standardwert ist '1000'. Dieser Parameter hilft BCS abzuschätzen, wie viele Datensätze einer Entität innerhalb der Web Part Liste angezeigt werden und kann das Anzeigeverhalten beeinflussen.

**Object Type:**  Der Typ der Entität im SAP System. Kann 'Table' oder 'Function' sein.

**Object:**  Der Name der Entität im SAP System, z.B. der Name der SAP Tabelle oder der Name des SAP Funktionsbausteins.

**Custom Function:** Der Name des Funktionsbausteins, wenn die Tabelle über einen Funktionsbaustein aufgerufen wird.

Im **Entity Properties** Bereich des Fensters sehen Sie die Datenelemente der Entität. Der BCS Connector hat eine Liste der Eigenschaften auf Basis der Parameter des Funktionsbausteins (in diesem Beispiel 'CUSTOMER_T') im SAP System erstellt. Standardmäßig sind alle Felder der Parameterstruktur für die Entität aktiviert. Um ein Feld aus der Entität auszuschließen müssen Sie einfach die entsprechenden Felder in der ersten Eigenschaftenspalte abwählen. In diesem Beispiel wählen Sie für die Parameterstruktur 'CUSTOMER_T' aus dem unteren Bereich der Eigenschaftenliste das Feld 'TELFX', in dem SAP die Faxnummer speichert.

![BCS-CUSTOMERT-Entity-with-Changed-Properties-01](/img/content/BCS-CUSTOMERT-Entity-with-Changed-Properties-01.png){:class="img-responsive"}

Jede BCS Entität benötigt mindestens ein Feld, das als eindeutige ID gekennzeichnet wird. In unserem Beispiel wählen Sie das Feld 'KUNNR' als ID Feld aus. Es beinhaltet eine eindeutige Kundennummer innerhalb des SAP Funktionsbausteins.

Die Werte in den Spalten *Field* und *Type* sind Definitionen der SAP Parameter und können nicht geändert werden. 

Um den Namen der Eigenschaft zu ändern, klicken Sie in das Feld Property in der BCS Entität und überschreiben den Namen wie im nachfolgenden Beispiel gezeigt. Dadurch haben Sie die Möglichkeit, den Eigenschaften einen aussagekräftigen Namen zu geben. Diese Bezeichnungen werden später im SharePoint UI angezeigt. 

Um für die Felder eine länderspezifische Einstellung festzulegen, betätigen Sie die Schaltfläche neben der Eigenschaftenzeile. Hier können Sie dann einen länderspezifischen Feldnamen definieren.

![BCS-CUSTOMERT-Entity-with-Changed-Properties-02](/img/content/BCS-CUSTOMERT-Entity-with-Changed-Properties-02.png){:class="img-responsive"}

Im Bereich *Entity Operations* des Fensters finden Sie die Methoden für die Entität. Für eine Entität, die auf einem Funktionsbaustein basiert, ist die Liste leer. Für SharePoint BCS müssen Sie mindestens eine Read Data (oder Finder) und eine Read Data Record (or Specific Finder) Methode für jede Enität definieren.

Betätigen Sie die *New* Schaltfläche, um eine neue Methode zu erstellen.

Im ersten Schritt definieren Sie die *Finder* Methode. Wählen Sie die Option *Finder* als Methodentyp aus.

Beachten Sie, dass der Assistent im unteren Bereich des Fensters vorschägt die *Finder* Methode auf Basis des SAP Funktionsbausteins 'SD_RFC_CUSTOMER_GET' zu erstellen. Dieser Funktionsbaustein gibt eine Liste aller Kundendatensätze zurück die für die *Finder* Methode gebraucht werden, also können Sie die Auswahl mit einem Klick auf die *Finish* Schaltfläche bestätigen.


![BCS-New-Finder-Method](/img/content/BCS-New-Finder-Method.png){:class="img-responsive"}

Das *Edit Method* Dialogfenster wird geöffnet. Hier können Sie die Eigenschaften für die *Finder* Methode anpassen. Der Vorgabewert für den Namen der BCS Methode ist 'Read Data'. Sie können den Namen ändern oder länderspezifische Namen durch das Betätigen der Schaltfläche neben dem Eingabefeld festlegen.

Der *Input Parameter* Bereich des Dialogfensters zeigt die möglichen Eingabeparameter für die Methode. In diesem Beispiel gibt es für den Funktionsbaustein 'SD_RFC_CUSTOMER_GET' zwei mögliche Eingabeparameter: 'KUNNR' (Kundennummer) und 'NAME1' (Name).

Der *Return Parameter* Bereich des Dialogfensters zeigt die möglichen Rückgabeparameter der Methode. In diesem Beispiel gibt es für den Funktionsbaustein 'SD_RFC_CUSTOMER_GET' nur eine Struktur, die zurückgegeben wird ('CUSTOMER_T').

Der *Filter Parameter* Bereich des Dialogfensters zeigt die Filter für die Methode. Für eine Methode auf Basis eines Funktionsbausteins sind standardmäßig keine Filter definiert.

![BCS-Edit-Finder-Method](/img/content/BCS-Edit-Finder-Method.png){:class="img-responsive"}

Um einen neuen *Filter* für die Methode zu definieren, betätigen Sie die *New* Schaltfläche. Im *Edit Filter* Dialog definieren Sie die nachfolgenden Werte:

**Name** = LimitFilter

**Type** = Limit

**Default Value** = 1000

**Mapping** =  Wählen Sie die Option 'Field' und aus der Liste den Wert 'KUNNR'.

**Parameter Name** = CustomerNumber (wird automatisch gesetzt nachdem das Mapping Feld ausgewählt wurde.).

Dadurch wird ein neuer Filter erstellt, der die Anzahl der zurückgegebenen Datensätze auf 1.000 beschränkt.

![BCS-Edit-Limit-Filter](/img/content/BCS-Edit-Limit-Filter.png){:class="img-responsive"}

Bestätigen Sie mit *OK*, um den neuen *Filter* anzulegen. Sie sehen jetzt den neuen Filter in der *Filterliste* der Methode.

Aktivieren sie mit der *Preview* Funktion die ‘Read Data’ Methode. Aufgrund der Art und Weise wie der Funktionsbaustein 'SD_RFC_CUSTOMER_GET' in SAP implementiert ist, müssen Sie einen Wert für den Eingabeparameter angeben.  Geben Sie ein Sternchen ( * ) als *Value* für das Feld 'KUNNR' an.

![BCS-New-Target-Application-01](/img/content/BCS-New-Target-Application-01.png){:class="img-responsive"}

Betätigen Sie die *Preview* Schaltfläche. Sie sollten jetzt eine auf 1.000 Kundendaten begrenzte Liste angezeigt bekommen.

![BCS-Function-Method-Preview](/img/content/BCS-Function-Method-Preview.png){:class="img-responsive"}

Mit der *OK* Schaltfläche schließen Sie das *Preview* Fenster.

Bestätigen Sie mit *OK*, um das *Edit Method* Dialogfenster zu schließen. Es sollte jetzt wieder das BCS Connector Fenster aktiv sein. 

![BCS-CUSTOMERT-Entity-with-Read-Data-Operation](/img/content/BCS-CUSTOMERT-Entity-with-Read-Data-Operation.png){:class="img-responsive"}

Im nächsten Schritt definieren Sie für die Entität die Specific Finder Methode. Betätigen Sie die *New* Schaltfläche unterhalb der Methodenliste.

Der Assistent wählt standardmäßig den Specific Finder Typ aus. Beachten Sie, dass der Assistent im unteren Bereich des Fensters vorschägt, die Finder Methode auf Basis des SAP Funktionsbausteins 'SD_RFC_CUSTOMER_GET' zu erstellen. Dieser Funktionsbaustein kann einen einzelnen Kundendatensatz mit einer eindeutigen ID zurückgeben. Dies wird für die *Specific Finder* Methode benötigt. Bestätigen Sie die Auswahl durch einen Klick auf die *Finish* Schaltfläche.

![BCS-New-Specific-Finder-Method](/img/content/BCS-New-Specific-Finder-Method.png){:class="img-responsive"}

Es wird nun das *Edit Method* Dialogfenster eingeblendet. Hier können Sie die Eigenschaften der *Specific Finder Methode* anpassen. Die Standardbezeichnung für die BCS Methode im Feld *Name* ist 'Read Data Record'. Sie können den Namen ändern oder über die Schaltfläche neben dem Textfeld einen länderspezifischen Namen festlegen. 

Der *Input Parameter* Bereich des Dialogfensters zeigt die für die Methode möglichen Eingabeparameter an.  In diesem Beispiel gibt es für den Funktionsbaustein 'SD_RFC_CUSTOMER_GET' zwei mögliche Eingabeparameter: 'KUNNR' (Kundennummer) und 'NAME1'  (Name). Beachten Sie, dass der Eingabeparameter ‘KUNNR’ auf den Parameter ‘KUNNR’ verweist, das *ID* Feld der Entität. Dies ist die Voraussetzung, um eine eindeutige ID ('KUNNR') als Eingabeparameter an die *Specific Finder Methode* zu übergeben. 

Die *Specific Finder Methode* gibt einen einzelnen Datensatz mit der Struktur 'CUSTOMER_T' als Rückgabeparameter zurück. Beachten Sie hierzu den *Return Parameter* Bereich des Dialogfensters.

![BCS-Edit-Specific-Finder-Method](/img/content/BCS-Edit-Specific-Finder-Method.png){:class="img-responsive"}

Mit *OK* schließen Sie das *Edit Method* Dialogfenster.

Sie haben nun die obligatorischen Methoden *Read Data* und *Read Data Record* für die Entität 'Customer (SD_RFC_CUSTOMER_GET)' erstellt.

![BCS-CUSTOMERT-Entity-with-Read-Data-Record-Operation](/img/content/BCS-CUSTOMERT-Entity-with-Read-Data-Record-Operation.png){:class="img-responsive"}

**Erstellen des Externen Content Type in SharePoint**

Sie können Ihr Modell jetzt im SharePoint BCS Metadata Store speichern. Jede Entität in Ihrem Modell wird einen External Content Type (ECT) in SharePoint generieren.

Auf dem *BCS Connector* Ribbon wählen Sie den *Save Model* Befehl. Sie werden gefragt, ob Sie das Modell nach SharePoint übertragen möchten, bestätigen Sie die Frage mit der Yes Schaltfläche.

Der BCS Connector baut nun eine Verbindung zum SharePoint BCS Metadata Store auf, um das Modell zu übertragen. Bitte achten Sie darauf, dass Sie über ausreichende Rechte verfügen, um Daten in den BCS Metadata Store zu schreiben.

![BCS-Save-Model-Two-Entities](/img/content/BCS-Save-Model-Two-Entities.png){:class="img-responsive"}

Sie sollten nun eine Mitteilung über das erfolgreiche Speichern und die Übertragung des Modells auf den SharePoint Server erhalten.

![BCS-Successful-Model-Save](/img/content/BCS-Successful-Model-Save.png){:class="img-responsive"}
