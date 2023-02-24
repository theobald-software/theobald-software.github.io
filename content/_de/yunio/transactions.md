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


### Transaktionen Auszeichnen

1. Erstellen Sie einen neuen *Service* vom Typ *Transaction*.  
2. Geben Sie einen Transaktionscode ein (1) und klicken Sie auf **[Start]**, um die Transaktion auszuführen.
Der Inhalt der SAP GUI wird angezeigt.<br>
Klicken Sie auf **[Stop]**, um die laufende Transaktion abzubrechen.<br>
![transaction](/img/content/yunio/transaction.png){:class="img-responsive"}
3. Füllen Sie die Eingabefelder so aus, wie Sie es in der SAP GUI tun würden. Die Felder können parametrisiert werden, sobald die Transaktion aufgezeichnet wurde.
4. Klicken Sie auf **[Submit]** (2), um Ihre Eingaben zu übergeben.
Alle Aktionen die Sie ausführen, werden im Abschnitt *GUI Steps* aufgezeichnet (3). <br>
![transaction-ie01](/img/content/yunio/transaction-ie01.png){:class="img-responsive"}
5. Klicken Sie auf **[Save]**, sobald alle Eingaben erledigt sind. <br>
Alternativ, klicken Sie auf **[Stop]**, um die Transaktion zu parametrisieren, siehe [Transaktionen Parametrisieren](#transaktionen-parametrisieren).

### Transaktionen Parametrisieren

Führen Sie die folgenden Schritte aus, um eine Transaktion zu parametrisieren.

1. Zeichnen Sie eine Transaktion auf, siehe [Record Transactions](#record-transactions).<br>
Achten Sie darauf, dass alle Felder, die Sie parametrisieren möchten, über den Abschnitt *GUI Steps* verfügbar sind.
Beispiel: Wenn ein Eingabefeld in einem bestimmten Reiter oder einem Menü parametrisieren möchten, muss der Reiter / das Menü geöffnet werden, wenn Sie die Transaktion aufzeichnen.
2. Öffnen Sie den Transaktions-Service. Um einen Service zu bearbeiten, klicken Sie im Menü *Services* auf **[Edit]** ( ![edit-cog-icon](/img/content/yunio/edit-cog-icon.png){:class="img-responsive" style="display:inline"} Symbol), um die Transaktion zu öffnen.<br>
![transaction-edit](/img/content/yunio/transaction-edit.png){:class="img-responsive"}
3. In dem Abschnitt *SAP GUI* klicken Sie auf die Aktion, die Sie parametrisieren möchten. Der dazugehörige Eingabebildschirm öffnet sich.<br>
![transaction-actions](/img/content/yunio/transaction-actions.png){:class="img-responsive"}
4. Klicken Sie auf die Felder, die Sie parametrisieren möchten.<br>
Alle Felder, die parametrisiert werden können, werden grün markiert, wenn Sie mit dem Cursor darüber fahren.<br>
5. Wählen Sie **Input**, um Werte zur Laufzeit überschreiben. Felder, die als **Input** markiert sind, sind als Eingabeparameter im Request Body des Services verfügbar.<br>
Wählen Sie **Output**, um Werte nach Ausführung des Services zurückzugeben. Felder, die als **Output** markiert sind, sind im Response Body des Services verfügbar.<br>
![transaction-parameterize](/img/content/yunio/transaction-parameterize.png){:class="img-responsive"}
6. Optional: Bearbeiten Sie den Namen des Parameters.
7. Klick Sie auf **[OK]**, um ihre Eingabe zu bestätigen.
8. Klicken Sie auf **[Save]**, um Ihre Änderungen zu speichern.

Die Eingabeparameter sind im Request Body des Services verfügbar.<br>
Die Ausgabeparameter sind im Response Body des Services verfügbar.

Beispiel: der folgende Screenshot vom Swagger Inspector zeigt, wo Sie den Eingabeparameter *Input_Order* bearbeiten können und wo der Ausgabeparameter *Output_Weight* verfügbar ist.<br>
![transaction-copy-download](/img/content/yunio/transaction-swagger-inspector.png){:class="img-responsive"}


****
#### Weiterführende Links
- [Knowledge Base Article: Working with Transactions](https://kb.theobald-software.com/yunio/working-with-transactions)
- [Knowledge Base Article: Working with Transaction VA02](https://kb.theobald-software.com/yunio/transaction-va02)
- [Knowledge Base Article: Working with Transaction XD02](https://kb.theobald-software.com/yunio/transaction-xd02)
