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

Der folgende Abschnitt beschreibt die Anwendung der IDoc Komponente aus der *LINQ to ERP* Toolbox.
Mit der IDoc Komponente können Sie IDocs an Ihr SAP senden. 
Die Segmente des gewünschten IDocs können in den SAP-Kontext übernommen und verwendet werden.

### Ein IDoc finden 
1. Ziehen Sie die IDoc Komponente in den *LINQ to ERP* DataContext. Ein Suchfenster öffnet sich.
2. Geben Sie in das Feld **IDoc** (1) den Namen des IDocs ein, das an SAP versendet werden soll. Falls nötig, verwenden Sie Wildcards (*).
![LINQToERP-Tables-001](/img/content/LINQToERP-Tables-001.png){:class="img-responsive"}
3. Klicken Sie auf **[Search]** (Fernglassymbol)(2). Die Suchergebnisse werden im Vorschaufenster angezeigt.
4. Wählen Sie ein IDoc (3) aus und klicken Sie auf **[OK]** (4).

### Ein IDoc bearbeiten
Nachdem ein IDoc geladen wurde, öffnet sich das Fenster "LINQ to ERP IDocs".
Verwenden Sie es, um den Inhalt des IDocs zu filtern und umzubenennen:

1. Wählen Sie ein Segment aus der Baumansicht aus, das editiert werden soll (5).
Die Felder des ausgewählten Segments werden um unteren Bereich des Fensters angezeigt. <br>
![LINQToERP-IDocs_002](/img/content/LINQToERP-IDocs_002.png){:class="img-responsive" }
2. Deaktivieren Sie ungenutzte Felder in der Spalte **Selected** oder vergeben Sie neue Namen in der Spalte **Member** (6).
3. Optional: Vergeben Sie neue Namen für die Klassen und Collections des Segments (7).
4. Verwenden Sie die Checkbox **Selected**, um Segmente, die im Code später nicht verwendet werden, zu deaktivieren (8).
Deaktivierte Segmente werden in der Baumansicht *kursiv* angezeigt.
5. Bestätigen Sie Ihre Eingaben mit **[OK]**. Das Fenster "LINQ to ERP IDocs" schließt sich und im Designer wird ein entsprechendes Icon erstellt.

Um das IDoc zu bearbeiten, doppelklicken Sie auf das IDoc Icon im Designer.

### Die Klasse im Code verwenden
Speichern Sie die .erp-Datei, um die Code-Generierung der Proxy-Klasse im Hintergrund anzustoßen. 

In diesem Beispiel generiert die IDoc Komponente die folgenden Objekte:
- ein IDoc Objekt (MATMAS05) mit den wichtigsten Kopfinformationen (Absender und Empfänger-Infos wie RCVPRN oder SNDPRN).
- 2 Segmente, E1MARAM (Grunddaten) und E1MAKTM (Kurztext) mit ausgefüllten Pflichtfeldern, die dem IDoc hinzugefügt werden.

Das IDoc wird mit *Send()* versenden.<br>
Der folgende Code zeigt die Anwendung der generierten Klassen:

<details>
<summary>Klicken Sie hier, um das C# Beispiel zu öffnen</summary>
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

#### Ergebnis in SAP prüfen

Die SAP-Transaktion WE02 zeigt alle eingehenden IDocs. 
Wenn der Status grün ist, werden die IDocs ordnungsgemäß verarbeitet.

![LINQToERP-IDocs_003](/img/content/LINQToERP-IDocs_003.png){:class="img-responsive"}

