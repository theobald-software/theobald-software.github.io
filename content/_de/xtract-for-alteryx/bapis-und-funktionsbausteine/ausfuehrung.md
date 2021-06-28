---
ref: xfa-bapi-run
layout: page
title: BAPI - Ausführen einer Beispielextraktion
description: Ausführung
product: xtract-for-alteryx
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=ausfuehrung
---

Das folgende Beispiel zeigt eine erfolgreiche BAPI-Extraktion einer Bestellanforderung.

### Eine Extraktion ausführen
1. Definieren Sie in Ihrem Alteryx-Workflow eine Tabelle (z.B. *PRITEM*) für die Eingabe. Stellen Sie sicher, dass der Name der Tabelle identisch mit der korrespondierenden SAP Tabelle ist.
2. Ziehen Sie die BAPI-Komponente in Ihren Workflow und prüfen Sie die SAP-Verbindung.
3. Verbinden Sie Ihre Eingabetabelle mit der BAPI-Komponente (3).
4. Wählen Sie die BAPI-Komponente an und klicken Sie auf **[Edit]**. Das Fenster "Xtract BAPI" öffnet sich.
5. Führen Sie eine [BAPI Suche](./eine-bapi-quelle-definieren#eine-bapi-extraktion-finden) (4) durch und suchen Sie nach "BAPI_REQUISITION_CREATE".
6. Navigieren Sie im Fenster "Xtract BAPI" zum Tab *Tables* (5).
7. Navigieren Sie zum erforderlichen Eingabefeld **REQUISITION_ITEMS** und wählen Sie die Tabelle *PRITEM* aus der Drop-Down-Liste aus (6).
8. Aktivieren Sie die Ausgabe-Checkbox des Felds **Return** (7). Im "Configuration" Fenster des Alteryx-Designers prüfen Sie **Output Mappings > Output Tables**.
Das geählte Ausgabefeld **RETURN** und die Anzahl der Ausgabetabellen (hier eine) wird angezeigt.
9. Führen Sie Ihren Alteryx Workflow aus.

![Bapi-Extraction](/img/content/xfa/bapi_example.png){:class="img-responsive"} 


### Die Extraction Ergebnisse prüfen

Navigieren Sie zum "Result"-Fenster im Alteryx-Designer und prüfen Sie die Ausgabe:

![Bapi-Output](/img/content/xfa/bapi_example_result.png){:class="img-responsive"} 
