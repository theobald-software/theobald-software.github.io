---
layout: page
title: Beispiel Tabellenentität
description: Beispiel Tabellenentität
product: erpconnect-services
parent: bcs-erste-schritte
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=beispiel-tabellenentitaet
---

Dieses Beispiel führt Sie durch die einzelnen Schritte, um eine neue Entität auf Basis einer SAP Tabelle zu erstellen.<br>
Im BCS Connector Designer erstellen Sie ein neues oder öffnen ein vorhandenes Modell.<br>
Um eine neue Entität zu erstellen, betätigen Sie die *New* Schaltfläche unterhalb des *Entities* Feldes.

![BCS-Table-Entity-New](/img/content/BCS-Table-Entity-New.png){:class="img-responsive"}

Im *New Entity* Assistenten wählen Sie Table als Objekttyp für die neue Entität.<br>
Betätigen Sie die Next Schaltfläche, um fortzufahren.<br>
Im nächsten Bildschirm des *New Entity* Assistenten können Sie im SAP-System nach einer Tabelle suchen, die Ihre Entität repräsentieren soll. In das *Type* Feld geben Sie 'MAK* ' ein, um nach einer Tabelle zu suchen, die mit diesen Buchstaben beginnt.
Betätigen Sie die *Search* Schaltfläche. 

![BCS-Table-Entity-Search](/img/content/BCS-Table-Entity-Search.png){:class="img-responsive"}

Wählen Sie die Tabelle 'MAKT'und betätigen dann die *Finish* Schaltfläche.<br>
Sie sehen jetzt im BCS Connector Fenster die neue Entität. Das Entity Feld zeigt den Namen der Entität, standardmäßig ist der Name der Name des SAP-Tabellenobjekts.

![BCS-Table-Entity-New-MAKT](/img/content/BCS-Table-Entity-New-MAKT.png){:class="img-responsive"}

Im *Entity Properties* Bereich des Formulars sehen Sie die Datenelemente des Entitätsobjekts. Der BCS Connector hat eine Liste der Eigenschaften auf Basis der Tabellendefinition im SAP-System erstellt. Standardmäßig sind alle Felder der SAP-Tabelle aktiviert. Um ein Feld aus der BCS Entität auszuschließen, deaktivieren Sie einfach das entsprechende Feld in der ersten Spalte der Eigenschaftsliste. In diesem Beispiel deselektieren Sie für die SAP-Tabelle 'MAKT' das Feld 'MAKTG', weil dieses Feld den gleichen Wert wie das Feld 'MAKTX' (Materialbeschreibung) speichert, allerdings in Großschreibung.

Die Werte in der *Field* und der *Type* Spalte basieren auf der SAP-Tabellendefinition und können nicht geändert werden. Bitte beachten Sie weiterhin, dass die ID Kennzeichnung auf Basis der SAP-Tabellendefinition vorausgewählt ist.

Ändern Sie die Werte der Entitätseigenschaften wie im Beispiel unten dargestellt. Dies versetzt Sie in die Lage, benutzerfreundliche bzw. aussagekräftigere Namen für die Eigenschaften zu vergeben. Diese werden dann später im SharePoint UI angezeigt. 

Für weiterführende Informationen lesen Sie die Kapitel [Entitätsdetails]() und [Lokalisierung]().

![BCS-Table-Entity-MAKT-With-Changed-Properties](/img/content/BCS-Table-Entity-MAKT-With-Changed-Properties.png){:class="img-responsive"}

Im *Entity Operations* Bereich des Formulars sehen Sie die Methoden, die für Ihre Entität definiert sind. Die Standardmethoden für SAP-Tabellen sind 'Read Table' und 'Read Table Record'.

Die ‘Read Table’ Methode verweist auf die 'Finder' Methode in BCS und gibt alle Datensätze einer Tabelle zurück. Die 'Read Table Record' Methode ist mit der 'Specific Finder' Methode verknüpft und gibt die Details einer speziellen, individuellen Tabelle zurück.

Sie können eine vorhandene Methode mit der *Edit* Schaltfläche bearbeiten. In diesem Beispiel, unter Verwendung der SAP-Tabelle 'MAKT', ändern Sie die 'Read Table' Methode durch das Hinzufügen eines Filters, sodass die Methode nur Datensätze zurückgibt, bei denen die Beschreibung in der gewählten Sprache nicht leer ist.

Für weiterführende Informationen lesen Sie das Kapitel Entitätsmethoden.<br>
Wählen Sie die 'Read Table' Methode und betätigen Sie dann die *Edit *Schaltfläche. Das *Edit Method* Dialogfenster wird geöffnet.

![BCS-Table-Entity-Edit-Method-01](/img/content/BCS-Table-Entity-Edit-Method-01.png){:class="img-responsive"}

Die 'Read Table' Methode besitzt keine Eingabeparameter und einen Rückgabeparameter 'MAKT'.

Unter *Filter Parameters* sollten Sie den Standardfilter 'Limit Filter', welcher die Anzahl der durch die Methode 'Read Table' zurückgegebenen Datensätze auf 1000 limitiert, sehen.

Um einen neuen Filter zu erstellen, betätigen Sie die *New* Schaltfläche. Im *Edit Filter* Dialogfenster definieren Sie die nachfolgenden Werte:


**Name** -	 LanguageFilter <br>
**Type** -	 Wildcard<br>
**Default Value** -	 E<br>
**Mapping** -	 Wählen Sie die Option 'Field' und den Eintrag 'SPRAS'.<br>
**Parameter Name** -	 Language (Wird nach der Auswahl des Mapping-Felds automatisch eingetragen).

![BCS-Table-Entity-Edit-Method-02](/img/content/BCS-Table-Entity-Edit-Method-02.png){:class="img-responsive"}

Bestätigen Sie mit *OK*, um den neuen Filter zu erstellen. Sie sehen nun einen neuen Wildcard-Filter in der Filterliste Ihres Entitätsmodells.

![BCS-Table-Entity-Edit-Method-03](/img/content/BCS-Table-Entity-Edit-Method-03.png){:class="img-responsive"}

Benutzen Sie die *Preview* Funktion, um die 'Read Table' Methode mit den beiden Filtern zu aktivieren.

Betätigen Sie die *Preview* Schaltfläche. 

Das *Preview* Dialogfenster zeigt eine Liste aller Datensätze, die von der 'Read Table' Methode auf Basis der Filterwerte für 'Limit Filter' und 'LanguageFilter' ermittelt wurden.

![BCS-Table-Entity-Edit-Method-04](/img/content/BCS-Table-Entity-Edit-Method-04.png){:class="img-responsive"}

Ändern Sie den Wert im *LanguageFilter* Feld von 'E' (für English) zu 'D' (for Deutsch).

Betätigen Sie die *Execute* Schaltfläche, um die 'Read Table' mit dem neuen Filterwert zu aktivieren.

![BCS-Table-Entity-Edit-Method-05](/img/content/BCS-Table-Entity-Edit-Method-05.png){:class="img-responsive"}

Betätigen Sie *OK*, um das *Preview* Dialogfenster zu schließen.

Betätigen Sie *OK*, um das *Edit Method* Dialogfenster zu schließen. Sie sollten jetzt wieder das BCS Connector Hauptfenster sehen.

![BCS-Table-Entity-MAKT](/img/content/BCS-Table-Entity-MAKT.png){:class="img-responsive"}
