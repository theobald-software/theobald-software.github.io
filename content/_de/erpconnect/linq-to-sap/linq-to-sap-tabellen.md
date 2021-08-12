---
ref: ec-linq-to-sap-02
layout: page
title: Tabellen
description: Tabellen
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-tabellen
---

Der folgende Abschnitt beschreibt die Anwendung der Table Komponente aus der *LINQ to ERP* Toolbox.

### Eine Tabelle finden 
1. Ziehen Sie die Table Komponente in den *LINQ to ERP* DataContext. Ein Suchfenster öffnet sich.
2. Geben Sie in das Feld **Table** (1) den Namen der zu extrahierenden Tabelle ein. Falls nötig, verwenden Sie Wildcards (*).
![LINQToERP-Tables-001](/img/content/LINQToERP-Tables-001.png){:class="img-responsive"}
3. Klicken Sie auf **[Search]** (Fernglassymbol)(2). Die Suchergebnisse werden im Vorschaufenster angezeigt.
4. Wählen Sie eine Tabelle (3) aus und klicken Sie auf **[OK]** (4).

### Spalten Filtern
Nachdem eine Tabelle geladen wurde, öffnet sich das Fenster "LINQ to ERP Tables".

1. Markieren Sie alle Spalten, die in der Ergebnismenge zur Verfügung stehen sollen (5).
2. Optional: Sie können den Namen der Proxy-Klasse ändern, die intern generiert wird. 
Standardmäßig entsprechen die Namen der Spalten den späteren Properties der Proxy-Klasse. 
Sie können einen eigenen Namen vergeben, indem Sie die Angabe in der Spalte **Member** überschreiben (6). 
![LINQToERP-Tables-002](/img/content/LINQToERP-Tables-002.png){:class="img-responsive"}
3. Klicken Sie auf **[Preview]**, um die Ergebnistabelle zu prüfen.
4. Bestätigen Sie Ihre Eingaben mit **[OK]**. Das Fenster "LINQ to ERP Tables" schließt sich und im Designer wird ein entsprechendes Icon erstellt.<br>
![LINQToERP-Tables-003](/img/content/LINQToERP-Tables-003.png){:class="img-responsive"}

Um die Tabelle zu bearbeiten, doppelklicken Sie auf das Table Icon im Designer.

### Die Klasse im Code verwenden
Speichern Sie die .erp-Datei, um die Code-Generierung der Proxy-Klasse im Hintergrund anzustoßen. 

{: .box-tip }
**Tipp:** Erfahrene BenutzerInnen können sich die implizit generierte Datei `.Designer.cs/vb` näher ansehen, die zeigt wie die LINQ-Logik auf die tradionelle ERPConnect-Logik gemappt wird.

Um die LINQ-fähige Klasse im Code anzusteuern, instanziieren Sie den DataContext. <br>
Das geht über folgende Angaben:
- Angabe von Benutzer und Passwort mit den bereits hinterlegten Systemparametern. 
- Angabe der kompletten Anmeldeinformationen. Der Konstruktor der DataContext-Klasse ist entsprechend überladen.
- Wenn das R3Connection-Objekt bereits bekannt ist, sprechen Sie DataContext.Connection direkt an. 
 
Mit dem DataContext können nun entsprechende LINQ-Abfragen formuliert werden: <br>
<details>
<summary>Klicken Sie hier, um das C# Beispiel zu öffnen</summary>
{% highlight csharp %}
static void Main(string[] args) 
{ 
   SAPContext sc = new SAPContext("TestUser", "SECRET01"); 
  
   var MyTexts = from t in sc.MAKTList 
             where t.MATNR.StartsWith("100") 
             && t.SPRAS == "D" 
             select t; 
  
   foreach (var MyText in MyTexts) 
      Console.WriteLine(MyText.MATNR + " " + MyText.MAKTX); 
   Console.WriteLine("Press any key to exit"); 
   Console.ReadLine(); 
}
{% endhighlight %}
</details>

<details>
<summary>Klicken Sie hier, um das VB Beispiel zu öffnen</summary>
{% highlight visualbasic %}
Sub Main() 
   Dim sc As New LINQTable.SAPContext("TestUser", "SECRET01") 
   Dim MyTexts = From t In sc.MAKTList _ 
            Where t.MATNR.StartsWith("100") _ 
            And t.SPRAS = "D" 
  
   For Each MyText In MyTexts 
      Console.WriteLine(MyText.MATNR & " " & _ 
      MyText.MAKTX) 
   Next 
  
   Console.WriteLine("Press any key to exit") 
   Console.ReadLine() 
End Sub
{% endhighlight %}
</details>
