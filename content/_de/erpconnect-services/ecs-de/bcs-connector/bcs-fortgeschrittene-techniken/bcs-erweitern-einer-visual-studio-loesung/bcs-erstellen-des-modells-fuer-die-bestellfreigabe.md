---
layout: page
title: Erstellen des Modells für die Bestellfreigabe
description: Erstellen des Modells für die Bestellfreigabe
product: erpconnect-services
parent: bcs-erweitern-einer-visual-studio-loesung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-erstellen-des-modells-fuer-die-bestellfreigabe
---

In den nachfolgenden Schritten werden Sie mit Hilfe des BCS Connector Designer ein Basismodell für die Erteilung einer Bestellfreigabe erstellen. Sie werden die 'PurchaseOrders' Entität mit der *Finder* und der *Specific Finder* Methode erstellen.

**Verbindungseinstellungen und Definition eines neuen Modells**

Starten Sie den BCS Connector Designer und beginnen Sie mit der Definition der Verbindungseinstellungen für das SharePoint-System und das SAP-System.

Zum Konfigurieren der SharePoint Verbindung betätigen Sie die *Edit SharePoint* Schaltfläche auf dem Ribbon.

Zum Konfigurieren der SAP Verbindung betätigen Sie die Schaltfläche neben *SAP R/3 Connection*. 

Die Statuszeile am unteren Rand des BCS Connector Designer Fensters sollte nun anzeigen, dass beide Verbindungen eingerichtet sind.  Für detaillierte Informationen lesen Sie das Kapitel [Verbindungen](../../bcs-erste-schritte/bcs-verbindungen/).

Um ein neues BCS Modell zu erstellen, ändern Sie den Standardnamen im Model Feld. Ändern Sie ebenfalls die Standardnamen für *LOB System* und *LOB System Instance* in einen anderen Wert, z.B.:

**Model** -	 SAP PO Model<br>
**LOB System** -	 SAP PO LOB System<br>
**LOB System Instance** -	 SAP PO LOB System Instance

![BCS-PO-VS-New-Model](/img/content/BCS-PO-VS-New-Model.png){:class="img-responsive"}

**Neue Entitätsdefinition**


Um eine neue Entität zu Ihrem Modell hinzuzufügen, betätigen Sie die *New* Schaltfläche unterhalb des *Entities* Bereichs.

Im *New Entity* Assistenten wählen Sie Function als SAP Objekt Typ und betätigen dann die *Next* Schaltfläche.

Auf der nächsten Seite des *New Entity* Assistenten definieren Sie den Funktionsbaustein, der die Datenstruktur für die Bestellungs-Entität beinhaltet. Um eine Liste aller BAPIs zu erhalten, die eine Beziehung zur Bestellung (PO) haben, geben Sie 'BAPI_PO* ' als Suchkriterium ein.

![BCS-PO-VS-New-Entity-01](/img/content/BCS-PO-VS-New-Entity-01.png){:class="img-responsive"}

Wählen Sie aus der Liste den Funktionsbaustein 'BAPI_PO_GETITEMS' und betätigen Sie *Next*.

Die nächste Seite des Assistenten zeigt eine Liste der möglichen Datenstrukturen für die Entität. Für den Funktionsbaustein 'BAPI_PO_GETITEMS' verwenden den Parameter 'PO_HEADERS', welcher die Tabellenstruktur für der Bestelldaten-Header beinhaltet.

![BCS-PO-VS-New-Entity-02](/img/content/BCS-PO-VS-New-Entity-02.png){:class="img-responsive"}

Wählen Sie den Parameter 'PO_HEADERS' und betätigen Sie *Finish*.

Sie sehen nun im BCS Connector Fenster die neue Entität 'PO_HEADERS'.

Ändern Sie den Namen der Entität im Feld *Entity* in 'PurchaseOrders'.

In der *Entity Properties* Tabelle deselektieren Sie zuerst alle Felder und wählen dann die in SharePoint benötigten Felder aus. Wählen Sie die nachfolgenden Felder aus und ändern den Namen im *Property* Feld:

**PO_NUMBER** -	 PONumber<br>
**VENDOR** -	 Vendor<br>
**PURCH_ORG** -	 PurchasingOrg<br>
**PUR_GROUP** -	 PurchasingGrp<br>
**CURRENCY** -	 POCurrency<br>
**DOC_DATE** -	 PODate<br>
**TARGET_VAL** -	 POValue<br>
**SUBJ_TO_REL** -	 PORelease<br>
**VEND_NAME** -	 VendorName 

Markieren Sie das Feld 'PO_NUMBER' als *ID* Feld.

![BCS-PO-VS-New-Entity-03](/img/content/BCS-PO-VS-New-Entity-03.png){:class="img-responsive"}

**Finder Methode**


Um die *Finder* Methode für die Entität zu erstellen, betätigen Sie die *New* Schaltfläche unterhalb der *Entity Operations* Liste.

Wählen Sie die Option *Finder* als Typ für die Methode.

Der Assistent schlägt vor, dass die Methode auf Basis des Funktionsbausteins 'BAPI_PO_GETITEMS' erstellt wird, d. h. der gleiche Funktionsbaustein gewählt wird, der schon vorher für die Definition der Entitätsstruktur verwendet wurde. Für dieses Beispiel verwenden Sie den Funktionsbaustein 'BAPI_PO_GETITEMSREL', welcher Bestellungen, die für eine Freigabe vorgesehen sind, zurückgibt. Der Funktionsbaustein gibt die Bellungen in der für die Entität benötigten Struktur zurück, wie z.B. auf Basis des Tabellenparameters PO_HEADERS, zurück.

Deaktivieren Sie die Auswahl neben 'BAPI_PO_GETITEMS' und betätigen Sie *Next*.

Im *New Method* Fenster suchen Sie nach 'BAPI_PO* ' und wählen Sie Methode 'BAPI_PO_GETITEMSREL'.

![BCS-PO-VS-Finder-01](/img/content/BCS-PO-VS-Finder-01.png){:class="img-responsive"}

Im *Edit Method* Dialogfenster geben Sie die nachfolgenden Eingabeparameter ein:

**REL_CODE** -	 Z1	Kundenfreigabezeichen für dieses Beispiel gemäß der SAP Einstellungen.<br>
**REL_GROUP** -	 02	 02 = Bestellung

![BCS-PO-VS-Finder-02](/img/content/BCS-PO-VS-Finder-02.png){:class="img-responsive"}

Betätigen Sie die *Preview* Schaltfläche um die *Finder* Methode zu testen und eine Liste der Bestellungen für den angegebenen ReleaseCode angezeigt zu bekommen.


Bestätigen Sie mit *OK*, um das *Edit Method* Dialogfenster zu schließen. Sie sollten sich jetzt wieder im Hauptfenster des BCS Connector befinden und die neue *Entity Operation* 'Read Data' angezeigt bekommen.

**Specific Finder Method**

Um die *Specific Finder* Methode zu erstellen, betätigen Sie die *New* Schaltfläche unterhalb der *Entity Operations* Liste.

Der Assistent schlägt vor, die Methode auf Basis des SAP-Funktionsbausteins 'BAPI_PO_GETITEMS' zu erstellen, d.h. auf Basis des gleichen Funktionsbausteins, den Sie zuvor für die Definition der Entitätsstruktur verwendet haben. Dieser Funktionsbaustein kann die *ID* einer Bestellung als Eingabeparameter übernehmen und einen einzelnen Datensatz in der benötigten Struktur (z.B. auf der Basis von 'PO_HEADERS') zurückgeben. Bestätigen Sie den Vorschlag und betätigen Sie *Finish*.

![BCS-PO-VS-Specific-Finder-01](/img/content/BCS-PO-VS-Specific-Finder-01.png){:class="img-responsive"}

Im *Edit Method* Dialogfenster scrollen Sie die Liste der Eingabeparameter herunter und verknüpfen die Parameter 'PO_NUMBER' mit 'PO_NUMBER', d.h. mit der ID der Entität.


![BCS-PO-VS-Specific-Finder-02](/img/content/BCS-PO-VS-Specific-Finder-02.png){:class="img-responsive"}

Scrollen Sie die Liste der Parameter herunter und geben den Wert 'X' für den Parameter 'WITH_PO_HEADERS' ein. Dieser Indikator erzeugt für den 'PO_HEADER' die Rückgabe der Datenstruktur.

![BCS-PO-VS-Specific-Finder-03](/img/content/BCS-PO-VS-Specific-Finder-03.png){:class="img-responsive"}

Betätigen Sie *OK* um das *Edit Method* Dialogfenster zu schließen.


Sie haben jetzt die *Read Data* und die *Read Data Record* Methode für die 'PurchaseOrders' Entität definiert.

Speichern Sie das Modell in SharePoint, indem Sie die *Save Model* Schaltfläche auf dem Ribbon betätigen.

![BCS-PO-VS-Model-Save](/img/content/BCS-PO-VS-Model-Save.png){:class="img-responsive"}

Sie sollten jetzt eine Meldung sehen, dass das Modell erfolgreich nach SharePoint übertragen wurde.