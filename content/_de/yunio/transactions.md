---
ref: yunio-transaction-01
layout: page
title: Transaktionen
description: Transaktionen
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 19
lang: de_DE
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-a-bapi-extraction
---

Mit der *Transaction* Komponente können SAP Transaktionen angesteuert und für die Automatisierung konfiguriert und parametriert werden.
Der Integrationstyp *Transaction* befindet sich aktuell im Stadium "Preview" und ist noch nicht vollständig funktional.
Zukünftige Versionen werden alle SAP-Transaktionen unterstützen.

### Voraussetzungen

Transaktionen erfordern zwingend die Verwendung eines SAP-Dialogbenutzers in den Verbindungseinstellungen.

{: .box-tip }
**Tipp:** *Transaction* bietet dieselbe Funktionalität wie die SAP GUI.
Wenn Sie mit der Navigation der SAP GUI vertraut sind, vereinfacht das die Erstellung eines *Transaction* Services.


### SAP Transaktionen Ausführen

1. Erstellen Sie einen neuen *Service* vom Typ *Transaction*.  
2. Geben Sie einen Transaktionscode ein (1) und klicken Sie auf **[Start]**, um die Transaktion auszuführen.
Der Inhalt der SAP GUI wird angezeigt.<br>
Klicken Sie auf **[Stop]**, um die laufende Transaktion abzubrechen.<br>
![transaction](/img/content/yunio/transaction.png){:class="img-responsive"}
3. Füllen Sie die Eingabefelder so aus, wie Sie es in der SAP GUI tun würden.
4. Klicken Sie auf **[Submit]** (2), um Ihre Eingaben zu übergeben.
Alle Aktionen, die Sie ausführend werden im Abschnitt *GUI Steps* aufgezeichnet (3). <br>
![transaction-ie01](/img/content/yunio/transaction-ie01.png){:class="img-responsive"}
5. Klicken Sie auf **[Save]**, sobald alle Eingaben erledigt sind.

{: .box-note }
**Hinweis:** Wenn Sie einen *Transaction* Service bearbeiten, müssen Sie die Transaktion neu starten.
Es ist nicht möglich, einzelne GUI-Schritte der Transaktion zu bearbeiten.


****
#### Weiterführende Links
- [Knowledge Base Article: Working with Transactions](https://kb.theobald-software.com/yunio/working-with-transactions)
