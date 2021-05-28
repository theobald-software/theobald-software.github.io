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
Xtract Universal Designer uses [runtime parameters](../../execute-and-automate-extractions/extraction-parameters) for parameterization.

Runtime parameters are accessible in the Query Builder. They can have one of the following **Behaviors**: <br>

- *Default:* Verwendet den Wert, der im Xtract Universal Designer definiert wurde.
- *Constant:* Geben Sie hier einen konstanten Wert ein.
- *Parameterized:* Geben Sie hier den Namen eines dynamischen Query-Parameters ein, der zu Laufzeit übergeben wird.
Der Parameter unterstützt die Verwendung von Formeln.

 {: .box-note }
**Hinweis:** Laufzeitparameter erlauben die Eingabe eines einzelnen Parameters.  
Wenn man mehrere Query Parameter verwenden möchte, kann man mit den Bordmitteln des VS Report Designer einen *Computed Query Parameter* zusammenbauen und diesen als Laufzeitparameter übergeben.


#### How to set dynamic Runtime Parameters

Use VS query parameters as input for Xtract runtime parameters.

1. To create a new query parameter right-click on the data set in the *Report Data* and select **Dataset Properties**. The window "Dataset Properties" opens.
2. Switch to the tab *Parameters* and press **[Add]**.
![Query-Parameter](/img/content/xu/ssrs/query-parameters.png){:class="img-responsive"}
3. Enter a *Parameter Name* (1) and a *Parameter Value* or use the **[f(x)]** button to use formulas and/or combine multiple input values.
4. Confirm your input with **[OK]** and navigate to the *Query Builder*.
![Query-Designer](/img/content/xu/ssrs/QueryDesigner.png){:class="img-responsive"}
5. Select *Parameterized* as the **Behaviour** of the runtime parameter you want to dynamize.
6. Enter the name of the new query parameter (1) under **Value**.

#### How to make Parameters optional

If a query parameter is NULL, that parameter is not passed at runtime and thus will be ignored.

1. Right-click the input field of the parameter you want to be optional and select *Parameter Properties*. The window "Report Parameter Properties" opens.
2. In the *General* tab, activate the checkbox **Allow null value**.
3. Confirm your input with **[OK]**. A checkbox **NULL** appears next to the input field.
4. If the checkbox **NULL** is activated, the parameter will be ignored at runtime.


#### Weiterführende Links
- [Berichtsentwurfstipps (Berichts-Generator und SSRS)](https://docs.microsoft.com/de-de/sql/reporting-services/report-design/report-design-tips-report-builder-and-ssrs?view=sql-server-ver15)
- [Reporting Services-Tutorials (SSRS)](https://docs.microsoft.com/de-de/sql/reporting-services/reporting-services-tutorials-ssrs?view=sql-server-ver15)
- [Hinzufügen eines Abfrageparameters zum Erstellen eines Berichtsparameters](https://docs.microsoft.com/de-de/sql/reporting-services/tutorial-add-a-parameter-to-your-report-report-builder?view=sql-server-ver15#Query)
