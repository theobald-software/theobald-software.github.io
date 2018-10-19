---
ref: ecs-getting-started-creating-a-new-model-02
layout: page
title: Entitätsdetails
description: Entitätsdetails
product: erpconnect-services
parent: bcs-eine-neue-entitaet-erstellen
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-entitaetsdetails
---

Nachdem der *New Entity* Assistent beendet wurde, sehen Sie die neue Entität im BCS Connector Fenster.

![BCS-Table-Entity-New-MAKT](/img/content/BCS-Table-Entity-New-MAKT.png){:class="img-responsive"}

Das Entitätsobjekt wird mit den nachfolgenden Informationen angezeigt:

**Entity** -	Der Standardname der Entität entspricht dem Parameter des ausgewählten SAP-Funktionsbausteins  (in diesem Beispiel 'CUSTOMER_T'). Um für die Entität einen aussagekräftigeren Namen zu vergeben, ändern Sie den Wert  in 'Customer (SD_RFC_CUSTOMER_GET)'. Mit der Schaltfläche neben dem Eingabefeld können Sie länderspezifische Namen hinzufügen.<br>
**Namespace** -	Der Standardwert lautet 'BCSConnector.SAP'. Der Namespace wird gemeinsam mit der Entity und derVersion zur Generierung einer ID genutzt, die die Entität innerhalb des Business Connectivity Services eindeutig identifiziert.<br>
**Version** -	Der Standardwert ist '1.0.0.0'. Die Version wird gemeinsam mit dem Namespace und derEntity zur Generierung einer ID genutzt, die die Entität innerhalb des Business Connectivity Services eindeutig identifiziert.<br>
**Est. Instances** -	Der Standardwert ist '1000'. Dieser Parameter hilft BCS festzustellen, wie viele Datensätze innerhalb einer WebPart Liste angezeigt werden sollen und kann das Anzeigeverhalten beeinflussen.<br>
**Object Type** -	Der SAP-Objekttyp der Entität, entweder 'Table' oder 'Function'.<br>
**Object** -	Der Name des Entitätsobjekts im SAP-System, z.B. der Name der SAP-Tabelle oder des SAP-Funktionsbausteins.<br>
**Custom Function** -	Nur für die Verwendung von Tabellenobjekten. Name des SAP-Funktionsbausteins, wenn die Tabelle über einen Funktionsbaustein ermittelt wird.

Im *Entity Properties* Bereich des Fensters sehen Sie die Datenelemente Ihres Entitätsobjekts. Der BCS Connector hat eine Liste der Eigenschaften auf Basis der Tabellendefinition im SAP-System erstellt. Die Liste beinhaltet die folgenden Informationen:

**'Checkbox'** -	Wenn ausgewählt wird die Eigenschaft in die Entität implementiert. Standardmäßig sind alle Eigenschaften ausgewählt.<br>
**ID** -	Wenn ausgewählt wird das Feld (oder die Felder) als eindeutiger Schlüssel für die Entität verwendet. Der BCS Connector wählt automatisch die Felder auf Basis der Objektdefiniton in SAP aus.<br>
**Field** -	Der Name der Objekteigenschaft in SAP.<br>
**Type** -	Der .NET Datentyp der Eigenschaft.<br>
**Property** -	Der Name der Eigenschaft im BCS Modell. Standardmäßig übernimmt BCS den Wert aus Field. Mit der Schaltfläche neben dem Eingabefeld können Sie zusätzlich länderspezifische Werte erfassen.

Standardmäßig werden alle Felder des SAP Objektes für die Entität ausgewählt. Um einzelne Felder aus der BCS Entität auszuschließen, können Sie die Felder einfach in der Eigenschaftsliste abwählen. In dem Beispiel für die SAP-Tabelle 'MAKT' wählen Sie das Feld 'MAKTG' ab, weil dieses Feld den gleichen Wert wie das Feld 'MAKTX' (Materialbeschreibung) speichert, nur in Großschreibung.

![BCS-Table-Entity-MAKT-With-Changed-Properties](/img/content/BCS-Table-Entity-MAKT-With-Changed-Properties.png){:class="img-responsive"}
