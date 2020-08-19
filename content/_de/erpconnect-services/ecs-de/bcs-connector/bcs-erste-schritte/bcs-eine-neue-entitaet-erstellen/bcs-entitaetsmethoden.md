---
ref: ecs-getting-started-creating-a-new-model-05
layout: page
title: Entitätsmethoden
description: Entitätsmethoden
product: erpconnect-services
parent: bcs-eine-neue-entitaet-erstellen
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-entitaetsmethoden
---

Im *Entity Operations* Bereich des BCS Connector Fensters sehen Sie eine Liste der Methoden, die für Ihre Entität definiert sind. Die Standardmethoden für eine Entität, die auf einer SAP Tabelle basiert, sind 'Read Table' und 'Read Table Record'. Für eine Entität, die auf einem SAP-Funktionsbaustein basiert ist die Methodenliste anfangs leer. Der SharePoint BCS benötigt mindestens die Definition einer Read (oder Finder) und einer Read Record (oder Specific Finder) Methode für jede Entität.

Betätigen Sie die *New* Schaltfläche, um eine neue Entitätsmethode zu erstellen.

Im New Method Dialogfenster definieren Sie die Methode, die Sie erstellen möchten:


**Finder** -	Benötigte Methode. Diese Methode gibt eine Liste mit keinem oder mehreren Datensätzen (Instanzen) der Entität zurück.<br>
**Specific Finder** -	Benötigte Methode. Diese Methode gibt für eine definierte ID einen einzelnen Datensatz der Entität zurück.<br>
**Creator** -	Diese Methode erstellt einen neuen Datensatz (Instanz) der Entität.<br>
**Updater** -	Diese Methode aktualisiert einen Datensatz (Instanz) der Entität.<br>
**Deleter** -	Diese Methode löscht einen Datensatz (Instanz) der Entität.

![BCS-Generic-New-Method](/img/content/BCS-Generic-New-Method.png){:class="img-responsive"}

Weiterführende Informationen über das Erstellen von Entitätsmethoden finden Sie in den nachfolgenden Beispielen:

[Beispiel Funktionsentität](../beispiel-funktionsentitaet) <br>
[Schreib/Lese Zugriff](../../bcs-fortgeschrittene-techniken/bcs-schreib-lese-zugriff) 

Betätigen Sie die Edit Schaltfläche, um Änderungen an einer vorhandenen Entitätsmethode vorzunehmen.


Das *Edit Method* Dialogfenster zeigt den Typ und das SAP-Objekt für die Methode. Sie können den Namen der Methode und die länderspezifischen Namen ändern.

Das Dialogfenster zeigt die *Input Parameters* für die Methode mit den verknüpften Eintitätseigenschaften.

Das Dialogfenster zeigt ebenfalls die *Return Parameters* für die Methode und alle für die Methode definierten Filters. Für weitere Informationen lesen Sie das Abschnitt [Filter](./bcs-filter).

![BCS-Generic-Edit-Method](/img/content/BCS-Generic-Edit-Method.png){:class="img-responsive"}