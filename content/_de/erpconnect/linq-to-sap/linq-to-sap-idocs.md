---
ref: ec-linq-to-sap-06
layout: page
title: IDocs
description: IDocs
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-idocs
---

{: .box-warning }
**Warnung! Veraltete Komponente** 
Das Add-On *LINQ to SAP* wird ab Visual Studio Version 2019 und .NET4.5 nicht mehr unterstützt.


IDocs können mit Hilfe von LINQ to SAP ins SAP versendet werden. Die Segmente des gewünschten IDocs können in den Context übernommen und verwendet werden.

Um ein IDoc auf .NET-Seite anzusteuern, ziehen Sie das IDoc-Symbol aus der Toolbox auf den Datenkontext. Die Auswahl des IDocs erfolgt über den Suchdialog.

![LINQToERP-IDocs_001](/img/content/LINQToERP-IDocs_001.png){:class="img-responsive"}

Anschließend erscheint im Dialog in der linken Baumstruktur unter *Segments* die Gesamtstruktur des ausgewählten IDocs. Im unteren Fenster sind die Felder des Segments gelistet, das jeweils in der Baumstruktur ausgewählt ist. Man kann Felder, die später nicht verwendet werden sollen, ausklammern oder umbenennen. Im rechten oberen Bereich befinden sich die Klassen und die Collections, deren Namen automatisch aus den jeweiligen Segmenten zusammen gesetzt werden. Eine Änderung der Namen ist hier möglich.

![LINQToERP-IDocs_002](/img/content/LINQToERP-IDocs_002.png){:class="img-responsive"}

Die Checkbox *Selected* steuert, ob ein Segment später im Code Verwendung finden kann, oder ob es aus Gründen der Übersichtlichkeit deaktiviert wird. Deaktivierte Segmente erscheinen in der Baumstruktur in kursiv.<br>
Der folgende Code zeigt die Anwendung der generierten Klassen. Zunächst wird ein IDoc-Objekt erzeugt (MATMAS5) und die wichtigsten Kopfinformationen gefüllt (Absender und Empfänger-Infos wie RCVPRN oder SNDPRN).<br>
Es werden 2 Segmente, E1MARAM (Grunddaten) und E1MAKTM (Kurztext) erstellt, mit den Pflichtfeldern gefüllt und anschließend dem IDoc hinzugefügt. Mit Send() versenden wir das IDoc.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args) 
{ 
   try 
   { 
      SAPContext sc = new SAPContext("User", "password"); 
      sc.Connection.Open(); 
  
      SAPContext.MATMAS05 MATMAS5 = new SAPContext.MATMAS05(sc.Connection); 
      SAPContext.E1MARAM E1MARAM = new SAPContext.E1MARAM(); 
      SAPContext.E1MAKTM E1MAKTM = new SAPContext.E1MAKTM(); 
  
      MATMAS5.RCVPRN = "T90CLNT090"; 
      MATMAS5.RCVPRT = "LS"; 
      MATMAS5.SNDPOR = "ERPTEST"; 
      MATMAS5.SNDPRN = "ERPTEST"; 
      MATMAS5.SNDPRT = "LS"; 
      MATMAS5.MESTYP = "MATMAS"; 
  
      E1MARAM.MATNR = "100-890"; 
      E1MARAM.MEINS = "KG"; 
      E1MARAM.MATKL = "001"; 
      E1MARAM.GEWEI = "KG"; 
      E1MARAM.MTART = "ROH"; 
  
      E1MAKTM.MAKTX = "TestMat"; 
  
      MATMAS5.E1MARAMList.Add(E1MARAM); 
      E1MARAM.E1MAKTMList.Add(E1MAKTM); 
      MATMAS5.Send(); 
  
      Console.WriteLine("IDoc sent successfully"); Console.ReadLine(); 
      } 
      catch (Exception e1) 
      { 
         Console.WriteLine(e1.Message); Console.ReadLine(); 
      } 
}
{% endhighlight %}
</details>

In der Transaktion WE02 sehen wir die eingehenden IDocs und die ordentliche Verarbeitung, wenn der Status auf grün ist.

![LINQToERP-IDocs_003](/img/content/LINQToERP-IDocs_003.png){:class="img-responsive"}

