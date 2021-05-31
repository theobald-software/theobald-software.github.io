---
ref: xu-ssrs-04
layout: page
title: SSRS in Visual Studio
description: SSRS in Visual Studio
product: xtract-universal
parent: ssrs
permalink: /:collection/:path
weight: 4
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt zeigt, wie man in der SQL Server Reporting Services (SSRS) Umgebung über Xtract Universal auf SAP-Daten zugreift.

### SAP-Daten im Xtract Universal Designer extrahieren

Um SAP-Daten in der SQL Server Report Server (SSRS) Umgebung zur Verfügung zu stellen, wird im ersten Schritt eine entsprechende Extraktion im Xtract Universal Designer erstellt.

Informationen bzgl. der Erstellung von Extraktionen finden Sie unter [Erste Schritte](../../erste-schritte).<br>
Verwenden Sie für die Extraktion die [*SQL Server Reporting Service* Destination](./verbindung).


### Eine Extraktion als Datenquelle in Visual Studio hinzufügen

Die folgenden Schritte beschreiben, wie man eine Xtract Universal Datenquelle in Visual Studio hinzufügt:

1. Erstellen Sie ein neues "Report Server Project" in Visual Studio. <br>
![New-Project](/img/content/xu/ssrs/New-Project.png){:class="img-responsive"}
2. Rechtsklicken Sie auf den Ordner *Shared Data Sources* im *Solution Explorer* und wählen Sie **Add New Data Source**. Das Fenster "Shared Data Source Properties" öffnet sich.
3. Weisen Sie im Tab *General* der neuen Datenquelle einen Namen zu oder verwenden Sie den Standardnamen (1).
4. Wählen Sie den Typ *Xtract Universal* aus der Drop-Down-Liste aus (2). <br>
Falls *Xtract Universal* nicht verfügbar oder in Großbuchstaben ist, prüfen Sie ob die aktuelle Xtract Universal Version und das aktuelle *Microsoft Reporting Services Projects* Plugin installiert sind.
5. Geben Sie einen *connection string* (3) zum Xtract Universal Web-Server im Format `Url=http://[host]:[port]/` ein, z.B. `Url=http://localhost:8065/`.
![Shared-Data-Source-Properties](/img/content/xu/ssrs/Shared-Data-Source-Properties.png){:class="img-responsive"}
6. Optional (nur nötig, wenn die [XU-Serversicherheit](../../sicherheit/serversicherheit) konfiguriert wurde oder an das SAP-Quellsystem entsprechende Credentials übergeben werden müssen): Wechseln Sie in den *Credentials* Tab (4) und geben Sie Ihren [Benutzernamen und Passwort](../../sicherheit/benutzerverwaltung) für Xtract Universal ein.
7. Bestätigen Sie Ihre Eingabe mit **[OK]**.

Wenn *Xtract Universal* trotz aktuellem *Microsoft Reporting Services Projects* Plugin und aktuellem Xtract Universal nicht in der Drop-Down-Liste (2) verfügbar ist, schicken Sie Log-Datei in `C:\Program Files\XtractUniversal\ssrs\log.txt` an den [Theobald Support](mailto:support@theobald-software.com).

 {: .box-note }
**Hinweis:** Abhängig von den Einstellungen des XU [Web-Servers](../../sicherheit/serversicherheit), verwenden Sie entweder `http://` oder `https://` im *connection string*.


### Einen Report mit einer Xtract Universal Datenquelle erstellen

Die folgenden Schritte beschreiben, wie man in Visual Studio einen Report mit einer Xtract Universal Datenquelle erstellt:

1. [Fügen Sie eine Extraktion als Datenquelle in Visual Studio hinzu](./ssrs-in-vs#eine-extraktion-als-datenquelle-in-visual-studio-hinzufügen).
2. Rechtsklicken Sie auf den Ordner *Reports* im *Solution Explorer* und wählen Sie **Add New Report**. Das Fenster "Report Wizard" öffnet sich.
3. Wählen Sie im Assistenten eine Datenquelle und klicken Sie auf **[Next]**.
4. Klicken Sie auf **[Query Builder...]**. Das Fenster "Query Designer" öffnet sich.
5. Wählen Sie eine Xtract Universal Extraktion aus dem Drop-Down-Menü aus (5). <br>
Wenn keine Extraktionen angezeigt werden, prüfen Sie den *connection string* (3) in der Datenquelle und prüfen Sie, ob in Xtract Universal eine Extraktion mit einer *SQL Server Reporting Services* Destination existiert.
Wenn Ihnen der unten abgebildete Editor nicht angezeigt wird, klicken Sie auf **Edit as Text**.
![Query-Designer](/img/content/xu/ssrs/Query-Designer.png){:class="img-responsive"}
6. Optional: Bearbeiten Sie die [Laufzeitparameter](../../extraktionen-ausfuehren-und-einplanen/extraktionsparameter) der Extraktion (6). 
Parameteränderungen werden im Query string angezeigt (7). Ungültige Eingaben werden rot markiert. Eine Fehlermeldung erhalten Sie, wenn Sie den Mauszeiger auf die Markierung bewegen.
7. Klicken Sie auf **[Preview]** (8) um die Extraktion im *Preview Mode* auszuführen. 
Wenn der Laufzeitparameter *preview* auf True steht, zeigt die Vorschau Daten der Extraktion an.
8. Bestätigen Sie Ihre Eingabe mit **[OK]**. Der Query Builder schließt sich. 
9. Prüfen Sie, dass der Query string aus dem Query Builder im Report-Assistenten angezeigt wird, befür Sie auf **[Next]** klicken.
![Report-Wizard](/img/content/xu/ssrs/Report-Wizard.png){:class="img-responsive"}
10. Richten Sie den Report entsprechend Ihrer Anwendung ein und beenden Sie den Report-Assistenten.

Nachdem der Report erstellt wurde, können Sie auf den Query Builder zugreifen, indem Sie unter *Report Data* über Rechtklick auf *Dataset* **Query...** auswählen. 

 {: .box-tip }
**Tipp:** Erfahrene Benutzer können den Query string direkt in den Report-Assistenten eingeben, ohne den Query Builder zu verwenden, siehe [Metadata-Zugriff über HTTP](../../fortgeschrittene-techniken/metadata-zugriff-ueber-http-json).


### Parametrisierung

Der Xtract Universal Designer verwendet für die Parametriesierung [Laufzeitparameter](../../extraktionen-ausfuehren-und-einplanen/extraktionsparameter).

Die Laufzeitparameter sind im Query Builder verfügbar. Sie können eine der folgenden Eigenschaften (**Behaviours**) annehmen: <br>

- *Default:* Verwendet den Wert, der im Xtract Universal Designer definiert wurde.
- *Constant:* Geben Sie hier einen konstanten Wert ein für den Parameter ein.
- *Parameterized:* Geben Sie hier den Namen eines dynamischen Abfrageparameters ein, der zu Laufzeit übergeben wird.
Der Parameter unterstützt die Verwendung von Formeln.

 {: .box-note }
**Hinweis:** Laufzeitparameter erlauben die Eingabe eines einzelnen Parameters.  
Wenn man mehrere Abfrageparameter verwenden möchte, kann man mit den Bordmitteln des VS Report Designers einen *berechneten Abfrageparameter* zusammenbauen und diesen als Laufzeitparameter übergeben.

#### Dynamische Laufzeitparameter definieren

Verwenden Sie VS Abfrageparameter als Eingabe für Xtract Laufzeitparameter.

1. Um einen neuen Abfrageparameter zu erstellen, rechtklicken Sie auf das Dataset im Fenster *Report Data* und wählen Sie **Dataset Properties** Das Fenster "Dataset Properties" öffnet sich.
2. Wechseln Sie in den Tab *Parameters* und klicken Sie auf **[Add]**.
![Query-Parameter](/img/content/xu/ssrs/query-parameters.png){:class="img-responsive"}
3. Geben Sie einen *Parameter Name*(1) und einen *Parameter Value* ein oder verwenden Sie **[f(x)]**, um Formeln hinzuzufügen oder mehrere Eingaben zu kombinieren.
4. Wechseln Sie in den Tab *Query* und klicken Sie auf **[Query Designer...]**. Das Fenster "Query Designer" öffnet sich.
![Query-Designer](/img/content/xu/ssrs/QueryDesigner.png){:class="img-responsive"}
5. Wählen Sie *Parameterized* als **Behaviour** des Laufzeitparameters aus, den Sie dynamisieren möchten.
6. Geben Sie den Namen des Abfrageparameters (1) unter **Value** ein.
7. Bestätigen Sie Ihre Eingabe mit **[OK]**.


#### Optionale Parameter

Wenn ein Abfrageparameter NULL ist, wird der Parameter zu Laufzeit nicht übergeben und der Parameter wird ignoriert.

 {: .box-note }
**Hinweis:** Abhängig vom Extraktionstyp können einige Laufzeitparameter nicht ignoriert werden. Insbesondere *Custom Parameters* sind i.d.R. verpflichtend.

1. Rechtsklicken Sie auf das Eingabefeld, das optional sein soll und wählen Sie *Parameter Properties*. Das Fenster "Report Parameter Properties" öffnet sich.
![Input-Field](/img/content/xu/ssrs/optional-params.png){:class="img-responsive"}
2. Aktivieren Sie die Checkbox **Allow null value** im Tab *General*.
3. Bestätigen Sie Ihre Eingabe mit **[OK]**. Eine Checkbox **NULL** wird neben Ihrem Eingabefeld angezeigt.
4. Wenn die Checkbox **NULL** aktiv ist, wird der Parameter zur Laufzeit ignoriert.

 {: .box-tip }
**Tipp:** Sie können auch einen berechneten Abfrageparameter verwenden, um den Wert NULL zu erhalten. Erstellen Sie eine Formel, die *Nothing* als Wert zurückgibt.


#### Weiterführende Links
- [Berichtsentwurfstipps (Berichts-Generator und SSRS)](https://docs.microsoft.com/de-de/sql/reporting-services/report-design/report-design-tips-report-builder-and-ssrs?view=sql-server-ver15)
- [Reporting Services-Tutorials (SSRS)](https://docs.microsoft.com/de-de/sql/reporting-services/reporting-services-tutorials-ssrs?view=sql-server-ver15)
- [Hinzufügen eines Abfrageparameters zum Erstellen eines Berichtsparameters](https://docs.microsoft.com/de-de/sql/reporting-services/tutorial-add-a-parameter-to-your-report-report-builder?view=sql-server-ver15#Query)
