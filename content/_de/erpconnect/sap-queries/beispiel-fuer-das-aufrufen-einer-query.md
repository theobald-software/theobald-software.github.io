---
ref: ec-sap-queries-01
layout: page
title: SAP-Queries ausführen
description: Beispiel für das Aufrufen einer Query
product: erpconnect
parent: sap-queries
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=beispiel-fuer-das-aufrufen-einer-query
---

Die folgende Beispielanwendung zeigt wie Sie mit ERPConnect Daten aus einer SAP Query auslesen.

### Über die Beispiel-Query

Dieses Beispiel verwendet die Trainings-Query *D3*, die Fluginformationen von Flugzeugen enthält.
Daten, die bestimmten Auswahlkriterien entsprechen (z.B. Fluggesellschaft und Datum) werden ausgelesen und in ein *DataGrid* eingetragen, siehe folgenden Screenshot:

![SAP-Query-Execution](/img/content/SAP-Query-Execution.png){:class="img-responsive"}

{: .box-tip }
**Tipp**: Wenn Sie den techn. Namen eines Parameters nicht kennen, können Sie ihn sich in Ihrem SAP-System anzeigen lassen,
Verwenden Sie die Transaktion **SQ01** oder **SQ02**, um eine Query zu suchen. Öffnen Sie die Beschreibung und scrollen Sie zum Abschnitt *Selections*.
Alle Parametereigenschaften und Namen sind dort aufgelistet.

### Daten einer Query abrufen

1. Bauen Sie mit der R3Connection-Klasse eine Verbindung zum R/3 System auf.
2. Verwenden Sie die Methode *CreateQuery*, um ein Qery-Objekt zu erstellen. 
Jede SAP Query ist durch drei Angaben eindeutig definiert: 
- Der Workspace (lokal oder global)
- die Benutzergruppe (in diesem Beispiel *BT*) 
- der Name der Query selbst (in diesem Beispiel *D3*).
3. Definieren Sie die Parameter der Query.
Jeder Parameter hat einen eindeutigen technischen Namen. 
Über den Indexer können Sie auf die Range-Collection eines Parameters zugreifen.
Fügen Sie den Parametern "SP$00017" (Materialnummer) und "S_WAERS" (Währung) mit *Add* eine neue Range hinzu. <br>
Ein einzelner Range wird bestimmt durch das 
- ein *Sign* (Include oder Exclude)
- ein Operator (z.B. *equals* für Gleichheit)
- ein niedriger bzw. hoher Wert (LowValue und HighValue oder nur LowValue bei Gleichheit). 
4. Wenn alle Selektionen gefüllt sind, führen Sie die Query mit der Methode *Execute* aus.<br>
Die Ergebnismenge befindet sich in einer ADO.NET DataTable. 
Sie kann über die Eigenschaft *Result* des Query-Objekts abgerufen werden. 

### Beispielcode
```csharp
private void btnFetchQueryData_Click(object sender, System.EventArgs e)
    {
      R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
      con.Open(false);
 
      // Create Query object Query q; 
        try
        {
            Query q = con.CreateQuery(WorkSpace.GlobalArea, "BT", "D3");

            // Add a criteria (in this case the airline) 
            q.SelectionParameters["CARRID"].Ranges.Add(
                Sign.Include, RangeOption.Equals, inputAirline.Text);

            // Add a second criteria (in this case the date) 
            q.SelectionParameters["FLDATE"].Ranges.Add(
                Sign.Include, RangeOption.Between, inputStartDate.Text, inputEndDate.Text);

            // Run the Query 
            q.Execute();

            // Bind result to datagrid 
            this.dataGridView1.DataSource = q.Result;
        }
        catch (Exception e1)
        {
            MessageBox.Show(e1.Message);
            return;
        }
    }
```

<!---
<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Using con As New R3Connection
  
	con.UserName = "erpconnect"
    con.Password = "pass"
    con.Language = "DE"
    con.Client = "800"
    con.Host = "sapserver"
    con.SystemNumber = 11

    con.Open(False)

    ' Create Query object
    Dim q As Query
    Try
        q = con.CreateQuery(WorkSpace.GlobalArea, _
           "/SAPQUERY/MB", "MEBESTWERTAN")
    Catch e1 As Exception
        MessageBox.Show(e1.Message)
        Exit Sub
    End Try

    ' Add a criteria (in this case the material number)
    q.SelectionParameters("SP$00017").Ranges.Add( _
       Sign.Include, RangeOption.Equals, "100-100")

    ' Add a second criteria (in this case the currency)
    q.SelectionParameters("S_WAERS").Ranges.Add( _
       Sign.Include, RangeOption.Equals, "EUR")

    ' Run the Query
    q.Execute()

    ' Bind result to datagrid
    dataGrid1.DataSource = q.Result
End Using
{% endhighlight %}
</details>
-->
