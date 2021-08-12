---
ref: ec-linq-to-sap-04
layout: page
title: Funktionsbausteine und BAPIs
description: Funktionsbausteine und BAPIs
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-funktionsbausteine-und-bapis
---

Der folgende Abschnitt beschreibt die Anwendung der Function Komponente der *LINQ to ERP* Toolbox. <br>
Die Komponente deck Funktionsbausteine und BAPIs ab.
Funktionsbausteine und BAPIs werden bei der LINQ-Anwendung nahezu gleich gehandhabt wie Stored Procedures bei *LINQ to SQL*. 

### Einen BAPI\Funktionsbaustein finden
1. Ziehen Sie die Table Komponente in den *LINQ to ERP* DataContext. Ein Suchfenster öffnet sich.
2. Geben Sie in das Feld Function (1) den Namen des zu extrahierenden Funktionsbausteins/BAPIs ein. Falls nötig, verwenden Sie Wildcards (*).
![LINQToERP-Function-Modules-001](/img/content/LINQToERP-Function-Modules-001.png){:class="img-responsive" }
3. Klicken Sie auf **[Search]** (Fernglassymbol)(2). Die Suchergebnisse werden im Vorschaufenster angezeigt.
4. Wählen Sie einen Funktionsbaustein/BAPI (3) aus und klicken Sie auf **[OK]** (4).

### Export, Import, Changings und Tables definieren
Nachdem ein Funktionsbaustein/BAPI geladen wurde, öffnet sich das Fenster “RFC Function Modules/BAPIs”.

1. Im *Export* Tab können Sie die Ausgabewerte definieren, die von SAP zurück an den Client gesendet werden, nachdem die Funktion ausgeführt wurden. <br>
Um einen Parameter beim Aufruf im Code dynamisch zu setzen, haken Sie in der Spalte **Pass** die entsprechende Checkbox an (5).
Um einen statischen Wert zu hinterlegen, geben Sie den neuen Wert in der Spalte **Value** ein (6).<br>
![LINQToERP-Function-Modules-002](/img/content/LINQToERP-Function-Modules-002.png){:class="img-responsive" }
2. Im *Import* Tab können Sie Eingabewerte definieren, die vom Client an SAP gesendet werden.
3. Im *Changings* Tab können Sie Parameter definieren, die sowohl für Eingabe als auch Ausgabe verwendet werden können.
4. Im *Tables* Tab können Sie Parameter mit einer Tabellenstruktur, die aus mehreren Zeilen besteht definieren. 
Tabellen können als Eingabe verwendet werden, indem Sie die Checkbox in der Spalte **Pass** anhaken und sie können als Ausgabe verwendet werden, indem Sie die Checkbox in der Spalte **Result** anhaken.<br>
Der Variablen-Name, der Name der Tabellenklasse und der Name der Zeilenklasse können ebenfalls angegeben werden. 
Bleiben die Felder leer, werden Standardnamen generiert. <br>
![LINQToERP-Function-Modules-003](/img/content/LINQToERP-Function-Modules-003.png){:class="img-responsive" }
5. Um eine Tabelle zu bearbeiten, klicken Sie auf **Edit** (8).
6. Klicken Sie auf **[OK]**, um Ihre Eingabe zu bestätigen. Das Fenster "RFC Function Modules/BAPIs" schließt sich und im Designer wird ein entsprechendes Icon erstellt.<br>

Um den Funktionsbaustein/BAPI zu bearbeiten, doppelklicken Sie auf das Function Icon im Designer.

### Die Klasse im Code verwenden
Speichern Sie die .erp-Datei, um die Code-Generierung der Proxy-Klasse im Hintergrund anzustoßen. 

Der folgende Code zeigt die Ansteuerung des obigen Beispiels mit jeweils einem Übergabewert und einer Rückgabetabelle:

<details>
<summary>Klicken Sie hier, um das C# Beispiel zu öffnen</summary>
{% highlight csharp %}
SAPContext sc = new SAPContext("TestUser","SECRET01");
var MyEmpls = sc.BAPI_EMPLOYEE_GETLIST("T*"); 
foreach (var Empl in MyEmpls) 
   Console.WriteLine(Empl.PERNR + " " + Empl.ENAME); 
Console.ReadLine();
{% endhighlight %}
</details>

<details>
<summary>Klicken Sie hier, um das VB Beispiel zu öffnen</summary>
{% highlight visualbasic %}
Dim sc As New LINQTable.SAPContext("TestUser", "SECRET01") 
  
Dim MyEmpls = From t In sc.BAPI_EMPLOYEE_GETLIST("T*") Select t 
  
For Each Empl In MyEmpls 
   Console.WriteLine(Empl.PERNR & " " & Empl.ENAME) 
Next 
  
Console.ReadLine()
{% endhighlight %}
</details>

![LINQToERP-Function-Modules-004](/img/content/LINQToERP-Function-Modules-004.png){:class="img-responsive"}
