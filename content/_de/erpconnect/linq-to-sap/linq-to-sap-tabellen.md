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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

{: .box-warning }
**Warnung! Veraltete Komponente** 
Das Add-On *LINQ to SAP* wird ab Visual Studio Version 2019 und .NET4.5 nicht mehr unterstützt.

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis LINQTable**

Anknüpfend an das letzte TeilAbschnitt öffnet sich nun die Suchmaske für die Tabellenauswahl. Übernehmen Sie die gewünschte Tabelle, indem Sie mit OK bestätigen.

![LINQToERP-Tables-001](/img/content/LINQToERP-Tables-001.png){:class="img-responsive"}

Nachdem die gewünschte Tabelle selektiert wurde, öffnet sich der folgende Auswahldialog. Hier können Sie die gewünschten Spalten ankreuzen, die später in der Ergebnismenge zur Verfügung stehen sollen. Außerdem können Sie noch den Namen der Proxy-Klasse ändern, die intern generiert wird. Standardmäßig entsprechen die Namen der Spalten auch den späteren Properties der Proxy-Klasse. Sie können einen eigenen Namen vergeben, indem Sie die Angabe in der Spalte Member überschreiben. 

![LINQToERP-Tables-002](/img/content/LINQToERP-Tables-002.png){:class="img-responsive"}

Bestätigen Sie mit *OK*. Es ist nun ein entsprechendes Icon im Designer zu sehen. Speichern Sie die .erp-Datei um die Code-Generierung der Proxy-Klasse im Hintergrund zu veranlassen. (Der geneigte Leser kann sich die implizit generierte Datei .Designer.cs/vb gerne einmal näher ansehen, sie zeigt, wie die LINQ-Logik auf die tradionelle ERPConnect-Logik gemappt wird.)

![LINQToERP-Tables-003](/img/content/LINQToERP-Tables-003.png){:class="img-responsive"}


Um nun die LINQ-fähige Klasse im Code anzusteuern, muss zunächst der Data-Kontext instanziiert werden. Dies geschieht entweder unter Angabe von Benutzer und Passwort (mit den bereits hinterlegten Systemparametern) oder alternativ unter Angabe der kompletten Anmeldeinfos (der Konstruktor der DataContext-Klasse ist entsprechend überladen, alternativ kann auch das bereits bekannte R3Connection-Objekt direkt über DataContext.Connection angesprochen werden). Mit DataContext können nun entsprechende LINQ-Abfragen formuliert werden: 

<details>
<summary>[C#]</summary>
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
<summary>[VB]</summary>
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
