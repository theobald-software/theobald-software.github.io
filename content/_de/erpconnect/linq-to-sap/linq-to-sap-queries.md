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

### Über die Beispiel-Query

Dieses Beispiel verwendet die Trainings-Query *D3*, die Fluginformationen von Flugzeugen enthält.
Daten, die bestimmten Auswahlkriterien entsprechen (z.B. Fluggesellschaft und Datum) werden ausgelesen und in ein *DataGrid* eingetragen, siehe folgenden Screenshot:

![SAP-Query-Execution](/img/content/SAP-Query-Execution.png){:class="img-responsive"}

### Eine Query finden

1. Ziehen Sie die SAP Query Komponente in den *LINQ to ERP* DataContext. Ein Suchfenster öffnet sich.
2. Geben Sie in das Feld **Query Name** den Namen des zu extrahierenden SAP Queries ein (1). Falls nötig, verwenden Sie Wildcards (*).
![LINQToERP-Queries_003](/img/content/LINQToERP-Queries_003.png){:class="img-responsive"}
3. Klicken Sie auf **[Search]** (Fernglassymbol) (2). Die Suchergebnisse werden im Vorschaufenster angezeigt.
4. Wählen Sie eine SAP Query (3) aus und klicken Sie auf **[OK]** (4), um fortzufahren.

### Eine Query aufbereiten

1. Optional: Suchen Sie eine Variante, die angewendet oder bearbeitet werden soll.
2. Geben Sie an, welche Werte im Code ansteuerbar sein sollen, indem Sie die Checkbox *Pass* neben den Feldern anhaken (5).
3. Geben Sie Variablennamen für die ansteuerbaren Werte an. Die Default-Namen sind SAP entnommen.
4. Sie können die Methode des DataContexts im Feld **Method** umbenennen (6). <br>
Sie können außerdem die Klasse, die eine einzelne Zeile repräsentiert im Feld **Object** und die Klasse, die die komplette Ergebnismenge repräsentiert im Feld **Collection** umbenennen.<br>
![LINQToERP-Queries_004](/img/content/LINQToERP-Queries_004.png){:class="img-responsive" width="600px"}
5. Navigieren Sie zu dem Tab *Fields* und deaktivieren Sie nicht benötigte Felder und/oder benennen Sie Felder um.
6. Die DataContext-Klasse verfügt nun über eine Funktion, um die Query auszuführen. 
Die beiden Übergabeparameter entsprechen den Range-Objekten, die im Abschnitt [SAP-Queries ausführen](../sap-queries/beispiel-fuer-das-aufrufen-einer-query) vorgestellt wurden. 

### Die Klasse im Code verwenden
Speichern Sie die .erp-Datei, um die Code-Generierung der Proxy-Klasse im Hintergrund anzustoßen.<br>
Der folgende Code zeigt die Anwendung der generierten Klassen anhand der Beispiel-Query:
```csharp
private void btnGo_Click(object sender, EventArgs e) 
{ 
            SAPContext sc = new SAPContext("SAPUser", "Password");
            
            // Create Query object Query q; 
            try
            {
                QuerySelectionParameter airline = new QuerySelectionParameter();
                airline.AddRange(inputAirline.Text);
				
				QuerySelectionParameter date = new QuerySelectionParameter();
                date.AddRange(Sign.Include, RangeOption.Between, inputStartDate.Text, inputEndDate.Text);

                var MyQueryResult = from res in sc.D3(airline, date) select res;
                this.dataGridView1.DataSource = MyQueryResult.ToList();
            }
            catch (Exception e1)
            {
                MessageBox.Show(e1.Message);
                return;
            }
}
```
