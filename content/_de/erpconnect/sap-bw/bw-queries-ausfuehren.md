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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).


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

1. Bauen Sie mit der *R3Connection-Klasse* eine Verbindung zum R/3 System auf.
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
using System;
using System.Data;
using ERPConnect;
using ERPConnect.BW;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open();

BWCube cube = connection.CreateBWCube("0D_DECU/DECUQUERY1");

cube.Dimensions["0D_MATERIAL"].SelectForFlatMDX = true;
cube.Dimensions["0D_SOLD_TO"].SelectForFlatMDX = true;

cube.Measures[0].SelectForFlatMDX = true;
cube.Measures[1].SelectForFlatMDX = true;

DataTable result = cube.Execute();
foreach (DataRow row in result.Rows)
{
    foreach (DataColumn column in result.Columns)
    {
        Console.WriteLine($"{column.Caption}: {row[column]}");
    }

    Console.WriteLine();
}
```

Ausgabe:

```
Material (SAP Demo): M18
Sold-to-Party (SAP Demo): Thomas Bush Inc.
Net&value of the invoice item in the docCurrency (SAP Demo): 398403,00
Clearing value in document currency (SAP Demo): 328206,00

Material (SAP Demo): M18
Sold-to-Party (SAP Demo): Toro Motor Company
Net&value of the invoice item in the docCurrency (SAP Demo): 234234,00
Clearing value in document currency (SAP Demo): 196959,00

Material (SAP Demo): M18
Sold-to-Party (SAP Demo): Calorad Inc.
Net&value of the invoice item in the docCurrency (SAP Demo): 111921,00
Clearing value in document currency (SAP Demo): 96837,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Infix Co.
Net&value of the invoice item in the docCurrency (SAP Demo): 84564,00
Clearing value in document currency (SAP Demo): 0,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Lampen-Markt GmbH
Net&value of the invoice item in the docCurrency (SAP Demo): 2826,00
Clearing value in document currency (SAP Demo): 0,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Minerva Industries
Net&value of the invoice item in the docCurrency (SAP Demo): 27759,00
Clearing value in document currency (SAP Demo): 0,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Nobil North Sea Limi
Net&value of the invoice item in the docCurrency (SAP Demo): 11118,00
Clearing value in document currency (SAP Demo): 0,00
```

<!---
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
-->

****
#### Weiterführende Links
- [Execute BW Queries](https://kb.theobald-software.com/erpconnect-samples/execute-bw-queries)
