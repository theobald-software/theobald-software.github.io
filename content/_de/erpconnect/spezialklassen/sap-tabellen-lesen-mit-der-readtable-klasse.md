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

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis ReadSAPTable** 

Eine oft wiederkehrende Aufgabe in der täglichen Arbeit mit .Net und SAP ist das direkte Lesen von Daten aus der SAP-Datenbank.

Diesem Anspruch wird die Klasse *ReadTable* gerecht.

Wie das folgende Beispiel zeigt, ist es mit wenigen Zeilen Code möglich, eine Selektion auf eine Tabelle zu erstellen und die zurückgegebenen Daten in Form einer wohlbekannten ADO-DataTable auszuwerten.

Im folgenden Beispiel sollen Materialtexte ausgelesen werden. Diese befinden sich in der Tabelle MAKT. Benötigt werden die beiden Spalten MATNR (Materialnummer) und der Text (Spalte MAKTX).

Da wir nur die englischen Textbausteine auslesen möchten, schränken wir die Selektion mit dem Kriterium SPRAS = 'EN' ein. SPRAS ist die Spalte für den Sprachenschlüssel in der Tabelle MAKT. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using System;  
using ERPConnect;  
using ERPConnect.Utils;  
using System.Data;  
    
class Class1 
 {  
   static void Main(string[] args)  
   {  
       using(R3Connection con = new R3Connection("hamlet",11,"theobald","pw","DE","800"))
       {
           con.Open(false); 
           ReadTable table = new ReadTable(con);  
           table.AddField("MATNR");  
           table.AddField("MAKTX");  
           table.WhereClause = "SPRAS = 'EN' AND SPRAS = 'DE'";  
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
   } 
}
{% endhighlight %}
</details>

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

Das Bild unten zeigt die Konsolenausgabe des Beispielprogramms. 

![ReadTable-Console](/img/content/ReadTable-Console.png){:class="img-responsive"}

**Einschränkungen beim Tabellenzugriff** 

Leider gibt es beim Lesen von Tabellen mit der ReadTable-Klasse folgende Einschränkungen:   

- Zu lesende Tabellen dürfen keine Spalten vom Typ Fließkommazahl (FLTP) enthalten (wie zum Beispiel bei der Tabelle VBAK) 
- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht übersteigen.
- Spezialtabellen wie TCURR liefern abgehackte Werte.

Sollte eine der obigen Punkte eintreten, wird der Tabellenzugriff mit einer entsprechenden Exception abstürzen. Um dieses Problem zu lösen, müssen Sie einen Z-Baustein im SAP-System installieren. Siehe dazu das Abschnitt [Z-Baustein installieren](../sap-customizing/umgehung-der-einschraenkungen-bei-der-tabellenextraktion).

Um die ReadTable-Klasse zu veranlassen, einen installierten Z-Baustein, z.B. Z_XTRACT_IS_TABLE, anstelle des SAP-Standards zu nutzen, benutzen Sie die Methode: *ReadTable.SetCustomFunctionName("Z_XTRACT_IS_TABLE")*;

**Links**<br>
Online Hilfe: [Installation des Z-Funktionsbausteins](../sap-customizing/umgehung-der-einschraenkungen-bei-der-tabellenextraktion)<br>
KnowledgeBase: [Transferring data packets with ReadTable class](https://kb.theobald-software.com/erpconnect-samples/transferring-data-packets-with-readtable-class)<br>
KnowledgeBase: [Get meta data of a table](https://kb.theobald-software.com/erpconnect-samples/get-meta-data-of-a-table)<br>

