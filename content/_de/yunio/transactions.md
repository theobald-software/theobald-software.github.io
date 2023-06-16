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
Der folgende Abschnitt beschreibt die Anwendung des Integrationstyps *Transaction*.<br>
Verwenden Sie *Transaction*, um auf SAP Transaktionen zuzugreifen und sie für die Automatisierung zu konfigurieren.

### Voraussetzungen

Transaktionen erfordern zwingend die Verwendung eines SAP-Dialogbenutzers in den Verbindungseinstellungen.

{: .box-tip }
**Tipp:** *Transaction* bietet dieselbe Funktionalität wie die SAP GUI.
Wenn Sie mit der Navigation der SAP GUI vertraut sind, vereinfacht das die Erstellung eines *Transaction* Services.


### Transaktionen Aufzeichnen

1. Erstellen Sie einen neuen *Service* vom Typ *Transaction*.  
2. Geben Sie einen Transaktionscode ein (1). <br>
![transaction](/img/content/yunio/transaction.png){:class="img-responsive"}
3. Klicken Sie auf **[Start]**, um die Transaktion auszuführen.
Der Inhalt der SAP GUI wird angezeigt.
4. Füllen Sie die Eingabefelder so aus, wie Sie es in der SAP GUI tun würden. Die Felder können parametrisiert werden, sobald die Transaktion aufgezeichnet wurde.
5. Klicken Sie auf **[Submit]** (2), um Ihre Eingaben zu übergeben.
Alle Aktionen die Sie ausführen, werden im Abschnitt *GUI Steps* aufgezeichnet (3). <br>
![transaction-ie01](/img/content/yunio/transaction-ie01.png){:class="img-responsive"}
6. Klicken Sie auf **[Save]**, sobald alle Eingaben erledigt sind. <br>
Alternativ, klicken Sie auf **[Stop]**, um die Transaktion zu parametrisieren, siehe [Transaktionen Parametrisieren](#transaktionen-parametrisieren).

### Transaktionen Parametrisieren

{: .box-note }
**Hinweis:** Alle Felder, die Sie parametrisieren möchten, müssen im Transaktions-Service über den Abschnitt *GUI Steps* verfügbar sind. Um ein Feld in einem bestimmten Reiter oder einem Menü zu parametrisieren, muss der Reiter / das Menü geöffnet werden, wenn die Transaktion aufgezeichnet wird.

Führen Sie die folgenden Schritte aus, um eine Transaktion zu parametrisieren.

1. Öffnen Sie den Transaktions-Service. 
2. In dem Abschnitt *SAP GUI* klicken Sie auf die Aktion, die Sie parametrisieren möchten. Der dazugehörige Eingabebildschirm öffnet sich.
3. Klicken Sie auf die Felder, die Sie parametrisieren möchten.<br>
Alle Felder, die parametrisiert werden können, werden grün markiert, wenn Sie mit dem Cursor darüber fahren.<br>
![transaction-actions](/img/content/yunio/va02param.gif)
4. Wählen Sie **Input**, um Werte zur Laufzeit überschreiben. Felder, die als **Input** markiert sind, sind als Eingabeparameter im Request Body des Services verfügbar.
5. Wählen Sie **Output**, um Werte nach Ausführung des Services zurückzugeben. Felder, die als **Output** markiert sind, sind im Response Body des Services verfügbar.
6. Optional: Unter **Parameter name** können Sie den Namen des Parameters bearbeiten.<br>
![transaction-parameterize](/img/content/yunio/transaction-parameterize.png){:class="img-responsive"}
7. Klick Sie auf **[OK]**, um ihre Eingabe zu bestätigen.
8. Klicken Sie auf **[Save]**, um Ihre Änderungen zu speichern.

Die Eingabeparameter sind im Request Body des Services verfügbar.<br>
Die Ausgabeparameter sind im Response Body des Services verfügbar.

Beispiel<br>
Der folgende Screenshot vom Swagger Inspector zeigt, wo Sie den Eingabeparameter *Input_Order* bearbeiten können und wo der Ausgabeparameter *Output_Weight* verfügbar ist.<br>
![transaction-copy-download](/img/content/yunio/transaction-swagger-inspector.png){:class="img-responsive"}


****
#### Weiterführende Links
- [Knowledge Base Article: Working with Transactions - Table Parameters](https://kb.theobald-software.com/yunio/transaction-table-parameters)
- [Knowledge Base Article: Working with Transaction IE01](https://kb.theobald-software.com/yunio/transaction-ie01)
- [Knowledge Base Article: Working with Transaction VA02](https://kb.theobald-software.com/yunio/transaction-va02)
- [Knowledge Base Article: Working with Transaction XD02](https://kb.theobald-software.com/yunio/transaction-xd02)
