---
ref: ec-sap-queries-01
layout: page
title: Beispiel für das Aufrufen einer Query
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

1. Zunächst wird mit Hilfe der Methode CreateQuery des R3Connection-Objekts das Query-Objekt gebildet. Jede SAP Query ist durch drei Angaben eindeutig bestimmt: Der Benutzerbereich (ob lokal oder global), die Benutzergruppe (in unserem Beispiel /SAPQUERY/MB) und der Name der Query selbst (in unserem Fall MEBESTWERTAN).

Danach werden die Ranges gefüllt. Jeder Parameter hat einen eindeutigen technischen Namen. Über den Indexer können Sie unter Angabe des Namens (z.B. SP$00017) auf die Ranges-Collection des Parameters zugreifen und mit Add einen neuen Range hinzufügen. Ein einzelner Range wird bestimmt durch das *Sign* (Include oder Exclude), einen *Operator* (z.B. Equals für die Gleicheit) und einen niedrigen bzw. hohen Wert (*LowValue* und *HighValue*). Da wir in unserem Beispiel nur die Gleichheit verwenden, ist der hohe Wert irrelevant. Beide Werte sind bei speziellen Operatoren nötig (z.B. Between). Falls Sie nicht wissen, wie der technische Name eines SelectionParameters heißt, rufen Sie das Selektionsbild im SAP GUI direkt auf, stellen Sie den Cursor in das Feld und drücken Sie *F1* und dann den Button *technische Info*. Der Name wird ganz unten neben der Bezeichnung *Dynprofeld* angegeben.

Wenn alle Selektionen gefüllt sind, kann die Query mit Hilfe der Methode *Execute* ausgeführt werden. Die Ergebnismenge befindet sich dann in einer ADO.NET DataTable. Sie kann über die Eigenschaft *Result* des Query-Objekts abgerufen werden. 

<details>
<summary>Click to open C# example.</summary>
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
