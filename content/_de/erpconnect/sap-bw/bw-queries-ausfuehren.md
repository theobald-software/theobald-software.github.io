---
ref: ec-sap-bw-01
layout: page
title: BW-Queries ausführen
description: BW-Queries ausführen
product: erpconnect
parent: sap-bw
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=bw-queries-ausfuehren
---

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis BWQuery** 

Das folgende Beispiel zeigt die Ausführung der Query unter .NET.

Zunächst wird ein BWCube-Objekt mit Hilfe der CreateCube-Funktion gebildet. Der Name setzt sich dabei aus dem Cubenamen und dem Querynamen zusammen.

Das Cube-Objekt bietet eine Collection für alle enthaltenen Dimensionen (*Dimensions*) und für alle enthaltenen Kennzahlen (*Measures*). Die Eigenschaft *SelectForFlatMDX* definiert, ob die jeweilige Komponente in der Egebnismenge enthalten sein soll. Sie wird im Beispiel auf *true* gesetzt. Bitte beachten Sie, dass die Benennung der Kennzahlen durch die Query-Generierung im Designer nicht den originalen, technischen Namen folgt, daher werden die Kennzahlen hier im Beispiel über die Ordinalzahl und nicht über den Namen angesprochen.

Um die Variable mit Werten zu füllen, wird sie über die Variables-Collection angesprochen. Hinter einer Variablen liegen immer Range-Tabellen, die wir bereits aus dem SAP Query Abschnitt kennen.

Die BW-Query kann über *Execute()* ausgeführt werden und liefert eine Tabelle vom Typ DataTable zurück. Der Screenshot des Beispiels zeigt die Ergebnismenge im Grid.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void Go_Click(object sender, System.EventArgs e)
{
   using (R3Connection con = new R3Connection())
   {
       con.UserName = "erpconnect";
       con.Password = "pass";
       con.Language = "DE";
       con.Client = "800";
       con.Host = "sapserver";
       con.SystemNumber = 11;

       con.Open(false);

       BWCube query = con.CreateBWCube("0D_DECU/ZSIMPLEQUERY");
       query.Dimensions["0D_MATERIAL"].SelectForFlatMDX = true;
       query.Dimensions["0D_SOLD_TO"].SelectForFlatMDX = true;
       query.Measures[0].SelectForFlatMDX = true;
       query.Measures[1].SelectForFlatMDX = true;

       query.Variables["MAT01"].SingleRange.LowValue = this.txtMatNr.Text;

       this.dataGrid1.DataSource = query.Execute();
   }
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub Go_Click(ByVal sender As Object, ByVal e As System.EventArgs)
  
    Using con As R3Connection = New R3Connection
  
  
        con.UserName = "erpconnect"
        con.Password = "pass"
        con.Language = "DE"
        con.Client = "800"
        con.Host = "sapserver"
        con.SystemNumber = 11
  
        con.Open(False)
  
        Dim query As BWCube = _
           con.CreateBWCube("0D_DECU/ZSIMPLEQUERY")
  
        query.Dimensions("0D_MATERIAL").SelectForFlatMDX = True
        query.Dimensions("0D_SOLD_TO").SelectForFlatMDX = True
        query.Measures(0).SelectForFlatMDX = True
        query.Measures(1).SelectForFlatMDX = True
        query.Variables("MAT01").SingleRange.LowValue = _ Me.txtMatNr.Text
        Me.dataGrid1.DataSource = query.Execute
    End Using
  
End Sub
{% endhighlight %}
</details>

![BW-002](/img/content/BW-002.png){:class="img-responsive"}

****
#### Weiterführende Links
- [Executing BW Queries](https://kb.theobald-software.com/erpconnect-samples/executing-bw-queries)
- [Transferring data packets with BWQuery class](https://kb.theobald-software.com/erpconnect-samples/transferring-data-packets-with-bwquery-class)