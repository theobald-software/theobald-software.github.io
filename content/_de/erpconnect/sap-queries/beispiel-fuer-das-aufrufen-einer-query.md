---
ref: ec-sap-queries-01
layout: page
title: Eine Query aufragen
description: Beispiel für das Aufrufen einer Query
product: erpconnect
parent: sap-queries
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=beispiel-fuer-das-aufrufen-einer-query
---

Der folgende Abschnitt beschreibt, wie man eine SAP Query aufruft.

### Daten Abrufen
Im folgenden Beispiel werden die Daten einer Beispielquery aus dem Bereich Materialwirtschaft extrahiert, siehe folgende Grafik. 

![SAP-Query-Execution](/img/content/SAP-Query-Execution.png){:class="img-responsive"}

{: .box-note }
**Hinweis**: Wenn Sie den techn. Namen eines Parameters nicht kennen, können Sie ihn sich in Ihrem SAP-System anzeigen lassen,
Verwenden Sie die Transaktion **SQ01** oder **SQ02**

1. Bauen Sie mit der R3Connection-Klasse eine Verbindung zum R/3 System auf.
2. Verwenden Sie die Methode *CreateQuery*, um ein Qery-Objekt zu erstellen. 
Jede SAP Query ist durch drei Angaben eindeutig definiert: 
- Der Workspace (lokal oder global)
- die Benutzergruppe (in diesem Beispiel */SAPQUERY/MB*) 
- der Name der Query selbst (in diesem Beispiel *MEBESTWERTAN*).
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

<details>
<summary>Klicken Sie hier, um das C# zu öffnen.</summary>
{% highlight csharp %}
private void btnFetchQueryData_Click(object sender, System.EventArgs e)
    {
      R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
      con.Open(false);
 
      // Create Query object Query q; 
         try
         {
            q = con.CreateQuery(WorkSpace.GlobalArea,
             "/SAPQUERY/MB", "MEBESTWERTAN");
 
			// Add a criteria (in this case the material number) 
            q.SelectionParameters["SP$00017"].Ranges.Add(
                Sign.Include, RangeOption.Equals, "100-100");
 
            // Add a second criteria (in this case the currency) 
            q.SelectionParameters["S_WAERS"].Ranges.Add(
                Sign.Include, RangeOption.Equals, "USD");
 
            // Run the Query 
            q.Execute();
 
            // Bind result to datagrid 
            this.dgvQuery.DataSource = q.Result;
         }
         catch (Exception e1)
         {
            MessageBox.Show(e1.Message);
            return;
         }
    }
{% endhighlight %}
</details>

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
