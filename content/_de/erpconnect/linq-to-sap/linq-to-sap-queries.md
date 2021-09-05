---
ref: ec-linq-to-sap-05
layout: page
title: SAP Query
description: Queries
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-queries
---

Der folgende Abschnitt beschreibt die Anwendung der SAP Query Komponente aus der LINQ to ERP Toolbox.

{: .box-note }
**Hinweis:** Die SAP Query Komponente unterstützt keine BW Queries.

#### Über diese Beispiel-Query
Das folgende Beispiel demonstriert die Ansteuerung einer Demo-Query namens *ZVV01* in der Benutzergruppe *ZTHEO*. 
Die folgenden Screenshots zeigen den Auswahldialog der Query, sowie die Listenausgabe in SAP. <br>
![LINQToERP-Queries_001](/img/content/LINQToERP-Queries_001.png){:class="img-responsive"}
![LINQToERP-Queries_002](/img/content/LINQToERP-Queries_002.png){:class="img-responsive"}
Inhaltlich gibt die Query Vertriebsdaten aus (Join aus VBAK und VBAP).

### Eine Query finden

1. Ziehen Sie die SAP Query Komponente in den *LINQ to ERP* DataContext. Ein Suchfenster öffnet sich.
2. Geben Sie in das Feld **Query Name** den Namen des zu extrahierenden SAP Queries ein. Falls nötig, verwenden Sie Wildcards (*).
![LINQToERP-Queries_003](/img/content/LINQToERP-Queries_003.png){:class="img-responsive"}
3. Klicken Sie auf **[Search]** (Fernglassymbol). Die Suchergebnisse werden im Vorschaufenster angezeigt.
4. Wählen Sie eine SAP Query aus und klicken Sie auf **[OK]**.

### Eine Query aufbereiten

1. Optional: Suchen Sie eine Variante, die angewendet oder bearbeitet werden soll.
2. Geben Sie an, welche Werte im Code ansteuerbar sein sollen, indem Sie die Checkbox *Pass* neben den Feldern anhaken.
3. Geben Sie Variablennamen für die ansteuerbaren Werte an. Die Default-Namen sind SAP entnommen.
4. Sie können am oberen rechten Bereich des Fensters die Methode des DataContexts im Feld **Method** umbenennen. 
Sie können außerdem die Klasse, die eine einzelne Zeile repräsentiert im Feld **Object** und die Klasse, die die komplette Ergebnismenge repräsentiert im Feld **Collection** umbenennen.<br>
![LINQToERP-Queries_004](/img/content/LINQToERP-Queries_004.png){:class="img-responsive"}
5. Navigieren Sie zu dem Tab *Fields* und deaktivieren Sie nicht benötigte Felder und/oder benennen Sie Felder um.<br>
![LINQToERP-Queries_005](/img/content/LINQToERP-Queries_005.png){:class="img-responsive"}
6. Die DataContext-Klasse verfügt nun über eine Funktion, um die Query auszuführen. 
Die Übergabeparameter in IntelliSense entsprechen den ausgewählten Optionen aus Schritt 2. Beispiel:<br>
![LINQToERP-Queries_006](/img/content/LINQToERP-Queries_006.png){:class="img-responsive"}
Die beiden Übergabeparameter entsprechen den Range-Objekten, die im Abschnitt [Beispiel für das Aufrufen einer Query](../sap-queries/beispiel-fuer-das-aufrufen-einer-query) vorgestellt wurden. 

Beispiel Code: 

```csharp
private void btnGo_Click(object sender, EventArgs e) 
{ 
   SAPContext sc = new SAPContext("TestUser", "SECRET01"); 
  
   QuerySelectionParameter SoldTo = new QuerySelectionParameter(); 
   SoldTo.AddRange(Sign.Include,RangeOption.Between, 
      txtCustomerLow.Text,txtCustomerHigh.Text); 
  
   QuerySelectionParameter MatNr = new QuerySelectionParameter(); 
   MatNr.AddRange(txtMatnr.Text); 
  
   var MyQueryResult = from res in sc.ZVV01(SoldTo, MatNr) select res; 
   this.dataGridView1.DataSource = MyQueryResult.ToList(); 
}
```

In diesem Beispiel dienen Textboxen als Variablen, siehe Screenshot.

![LINQToERP-Queries_007](/img/content/LINQToERP-Queries_007.png){:class="img-responsive"}