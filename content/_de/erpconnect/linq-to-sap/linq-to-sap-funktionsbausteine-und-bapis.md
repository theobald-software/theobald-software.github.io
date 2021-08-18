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

{: .box-warning }
**Warnung! Veraltete Komponente** 
Das Add-On *LINQ to SAP* wird ab Visual Studio Version 2019 und .NET4.5 nicht mehr unterstützt.

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis LINQBapi** 

Da die beiden Begriffe Funktionsbausteine und BAPIs fast äquivalent sind, sprechen wir im Folgenden nur noch von BAPIs. BAPIs werden bei der LINQ-Anwendung nahezu genauso gehandhabt wie Stored Procedures beim LINQ to SQL. Ziehen Sie ein Function-Objekt aus der Toolbox in den vorbereiteten DataContext. Die Auswahl des BAPIs erfolgt mit dem Such-Dialog.

![LINQToERP-Function-Modules-001](/img/content/LINQToERP-Function-Modules-001.png){:class="img-responsive"}

Der folgende Screenshot zeigt den Dialog zum Editieren des Function-Objekts. Wenn ein Parameter später beim Aufruf dynamisch im Code gefüllt werden soll, muss in der Pass-Spalte ein Häkchen gesetzt sein, alternativ kann auch in der Value-Zelle ein statischer Wert hinterlegt werden.

![LINQToERP-Function-Modules-002](/img/content/LINQToERP-Function-Modules-002.png){:class="img-responsive"}

Ähnlich funktioniert es mit den Tabellen. Sie können entweder als Tabellenobjekte an die Funktion übergeben werden, oder als Rückgabewert zurückkommen. Der Variablen-Name, der Name der Tabellenklasse und der Name der Zeilenklasse können ebenfalls vorgegeben werden. Bleiben die Felder leer, werden Defaultnamen generiert. 

![LINQToERP-Function-Modules-003](/img/content/LINQToERP-Function-Modules-003.png){:class="img-responsive"}

Der folgende Code zeigt die Ansteuerung des obigen Beispiels mit jeweils einem Übergabewert und einer Rückgabetabelle. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
SAPContext sc = new SAPContext("TestUser","SECRET01");
var MyEmpls = sc.BAPI_EMPLOYEE_GETLIST("T*"); 
foreach (var Empl in MyEmpls) 
   Console.WriteLine(Empl.PERNR + " " + Empl.ENAME); 
Console.ReadLine();
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
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
