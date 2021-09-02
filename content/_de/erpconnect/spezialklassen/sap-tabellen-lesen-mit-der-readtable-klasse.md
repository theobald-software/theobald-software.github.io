---
ref: ec-special-classes-01
layout: page
title: ReadTable-Klasse
description: SAP-Tabellen lesen mit der ReadTable-Klasse
product: erpconnect
parent: spezialklassen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sap-tabellen-lesen-mit-der-readtable-klasse
---

Dieser Abschnitt beschreibt die Verwendung der *ReadTable*-Klasse.<br>
Eine oft wiederkehrende Aufgabe bei der Arbeit mit .NET und SAP ist das direkte Lesen von Daten aus der SAP-Datenbank.
Die Klasse *ReadTable* ermöglicht den Zugriff auf diese Daten.

### Daten aus Tabellen auslesen

Das folgende Beispiel zeigt, wie Sie die *ReadTable*-Klasse verwenden, um eine Selektion auf eine Tabelle zu erstellen und die zurückgegebenen Daten in Form einer 
ADO-DataTable auswerten.

- Im dem Beispiel werden Materialtexte aus der Tabelle *MAKT* ausgelesen. 
Benötigt werden die beiden Spalten *MATNR* (Materialnummer) und *MAKTX* (Materialtext).
- Um nur die englischen Textbausteine auszulesen, schränken Sie die Selektion mit dem WHERE-Kriterium `SPRAS = 'EN'` ein (*SPRAS* ist die Spalte für den Sprachenschlüssel). 

```csharp
static void Main(string[] args) 
{ 
    ERPConnect.LIC.SetLic("xxxxxxxxxxxxx"); //Set your ERPConnect License.
    ERPConnect.R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
    con.Open();  //Open the connection to SAP.

    ERPConnect.Utils.ReadTable table = new ERPConnect.Utils.ReadTable(con);
    table.AddField("MATNR"); 
    table.AddField("MAKTX"); 
    table:WhereClause = "SPRAS = 'EN' AND MATNR LIKE '%23'";
    table.TableName = "MAKT"; 
    table.RowCount = 10; 

    table.Run(); 
    DataTable resulttable = table.Result; 
         
    for(int i=0; i < resulttable.Rows.Count;i++) 
        { 
            Console.WriteLine( 
            resulttable.Rows[i]["MATNR"].ToString() + " " + 
            resulttable.Rows[i]["MAKTX"].ToString()); 
        }
          
    Console.ReadLine(); 
}
```
<!---
<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Module Module1 
  
   Sub Main() 
  
      Using con As New R3Connection 
      con.Host = "Hamlet" 
      con.SystemNumber = 11 
      con.UserName = "Theobald" 
      con.Password = "pw" 
      con.Client = "800" 
      con.Language = "DE" 
  
      con.Open(False) 
  
      Dim table As New ReadTable(con) 
  
      table.AddField("MATNR") 
      table.AddField("MAKTX") 
      table.AddCriteria("SPRAS = 'EN'") 
      table.TableName = "MAKT" 
  
      table.RowCount = 10 
  
       table.Run() 
  
       Dim resulttable As DataTable resulttable = table.Result 
  
       Dim i As Integer
       For i = 0 To resulttable.Rows.Count - 1 
          Console.WriteLine( _ CStr(resulttable.Rows(i)(0)) + " " + _ 
             CStr(resulttable.Rows(i)(1))) 
       Next 
  
       Console.ReadLine() 
        End Using  
   End Sub 
End Module
{% endhighlight %}
</details>
-->
Der folgende Screenshot zeigt die Konsolenausgabe des Beispielprogramms. 

![ReadTable-Console](/img/content/ReadTable-Console.png){:class="img-responsive"  }


### Einschränkungen beim Tabellenzugriff 
Bei der Extraktion von Tabellen aus älteren SAP-Systemen können Sie bei der Verwendung des SAP-Standardfunktionsbausteins (RFC_READ_TABLE) auf folgende Einschränkungen stoßen:
- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten
- Fehler können auftreten bei der Extraktion von Tabellen, die eine oder mehrere Spalten vom Typ f (FLTP, floating point), DEC (Decimal und Prozentzahl z.B.) oder x (RAW, LRAW) haben.
- Schlechte Extraktionsperformance bei Extraktion großer Tabellen.

Um die o.g. Einschränkungen zu umgehen, installieren Sie den Z-Funktionsbaustein *Z_THEO_READ_TABLE* von Theobald Software auf Ihrem SAP-System.

{: .box-warning }
**Warnung! Error while converting value '\*.0' of row 1530, column 3** <br>
Der SAP-Standardbaustein *RFC_READ_TABLE* zur Tabellenextraktion kann den ABAP-Datentyp DEC nur bedingt extrahieren. Dies führt zu dem genannten Beispielfehler bei der Extraktion.<br>
Verwenden Sie den Funktionsbaustein von Theobald Software *Z_THEO_READ_TABLE*. 

#### Z_THEO_READ_TABLE installieren

Kontaktieren Sie den [Theobald Support](mailto:support@theobald-software.com), um den SAP-Transportauftrag *Z_THEO_READ_TABLE* anzufordern.<br>
Sobald der Funktionsbaustein im System verfügbar ist, können Sie ihn aktivieren, indem Sie den Namen des Funktionsbausteins im LINQ-Table Fenster eintragen. <br>
![LINQToERP-Tables-004](/img/content/LINQToERP-Tables-004.png){:class="img-responsive"}


****
#### Weiterführende Links
- [Transferring data packets with ReadTable class](https://kb.theobald-software.com/erpconnect-samples/transferring-data-packets-with-readtable-class)
- [Get meta data of a table](https://kb.theobald-software.com/erpconnect-samples/get-meta-data-of-a-table)
- [Get CostCenter hierarchies](https://kb.theobald-software.com/erpconnect-samples/get-costcenter-hierarchies)