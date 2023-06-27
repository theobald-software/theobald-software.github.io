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
Die folgende Beispielanwendung zeigt wie Sie mit ERPConnect Daten aus einer BW Query auslesen.

### Über die Beispiel-Query

Dieses Beispiel verwendet eine BW-Query *ZSIMPLEQUERY*, die auf dem Cube *0D_DECU* basiert. 
Die folgende Abbildung zeigt die Query im Designer. <br>

![BW-001](/img/content/BW-001.png){:class="img-responsive" }

{: .box-note }
**Hinweis**: Beachten Sie, dass in den Einstellungen der Query das Häkchen **Externen Zugriff zulassen** gesetzt sein muss.

Die Dimensionen *Material* und *Auftraggeber*, sowie die Kennzahlen *Fakturierte Menge* und *Kosten* werden in die Ergebnismenge übergeben, siehe Screenshot. 
Die Dimension hat die Variable *MAT01*, die Einschränkungen auf die Materialnummer erlaubt. 

![BW-002](/img/content/BW-002.png){:class="img-responsive" width="600px" }


### Queries ausführen

1. Bauen Sie mit der *ParseConnectionString-Klasse* eine Verbindung zum R/3 System auf.
2. Erstellen Sie mit der *CreateCube*-Funktion ein BWCube-Objekt. 
Der Name setzt sich dabei aus dem Cubenamen und dem Querynamen zusammen.
3. Das Cube-Objekt bietet eine Sammlung für alle enthaltenen Dimensionen (*Dimensions*) und für alle enthaltenen Kennzahlen (*Measures*). 
Wenn die Eigenschaft *SelectForFlatMDX* auf true gesetzt ist, wird die jeweilige Komponente in die Egebnismenge aufgenommen. <br>
Fügen Sie die Dimensionen *Material* und *Auftraggeber*, sowie die Kennzahlen *Fakturierte Menge* und *Kosten* der Ergebnismenge hinzu.
4. Um die Variable mit Werten zu füllen, greifen Sie über die Variables-Collection auf sie zu. 
Hinter einer Variable liegen immer Range-Tabellen.
5. Führen Sie die BW-Query über *Execute* aus. Die BW-Query gibt eine Tabelle vom Typ *DataTable* zurück. 

{: .box-note }
**Hinweis**: Beachten Sie, dass die Benennung der Kennzahlen durch die Query-Generierung im Designer nicht den originalen, 
technischen Namen entspricht. Die Kennzahlen werden daher über die Ordinalzahl und nicht über den Namen angesprochen.

### Beispielcode

```csharp
private void Go_Click(object sender, System.EventArgs e)
       {
		using var con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800")             
			 { 
                 BWCube query = con.CreateBWCube("0D_DECU/ZSIMPLEQUERY");
                 query.Dimensions["0D_MATERIAL"].SelectForFlatMDX = true;
                 query.Dimensions["0D_SOLD_TO"].SelectForFlatMDX = true;
                 query.Measures[0].SelectForFlatMDX = true;
                 query.Measures[1].SelectForFlatMDX = true;
 
                 query.Variables["MAT01"].SingleRange.LowValue = this.txtMatNr.Text;
			 
                 this.dataGrid1.DataSource = query.Execute();
             }
       }
```
<!---
<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub Go_Click(ByVal sender As Object, ByVal e As System.EventArgs)
  
    Using con As ParseConnectionString = New ParseConnectionString
  
  
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
-->

****
#### Weiterführende Links
- [Executing BW Queries](https://kb.theobald-software.com/erpconnect-samples/executing-bw-queries)
- [Transferring data packets with BWQuery class](https://kb.theobald-software.com/erpconnect-samples/transferring-data-packets-with-bwquery-class)