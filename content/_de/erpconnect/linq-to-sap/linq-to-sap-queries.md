---
ref: ec-linq-to-sap-05
layout: page
title: Queries
description: Queries
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-queries
---

{: .box-warning }
**Warnung! Veraltete Komponente** 
Das Add-On *LINQ to SAP* wird ab Visual Studio Version 2019 und .NET4.5 nicht mehr unterstützt.


**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis LINQQuery**

Neben der Tabellenintegration aus den letzten beiden TeilAbschnittn unterstützt LINQ to SAP auch SAP-Queries als LINQ-fähige Datenquelle (Achtung! Bitte nicht mit BW-Queries verwechseln). Das folgende Beispiel demonstriert die Ansteuerung einer Demo-Query namens ZVV01 in der Benutzergruppe ZTHEO. Der folgende Screenshot zeigt den Selection Screen der Query, sowie die Listausgabe. Inhaltlich gibt die Query Vertriebsdaten aus (Join aus VBAK und VBAP).

![LINQToERP-Queries_001](/img/content/LINQToERP-Queries_001.png){:class="img-responsive"}

![LINQToERP-Queries_002](/img/content/LINQToERP-Queries_002.png){:class="img-responsive"}

Um eine Query auf .NET-Seite anzusteuern, ziehen Sie das Query-Symbol aus der Toolbox auf den Datenkontext. Nach der Anmeldung steht Ihnen die Suchmaske zur Verfügung.

![LINQToERP-Queries_003](/img/content/LINQToERP-Queries_003.png){:class="img-responsive"}

Im Dialog kann dann angegeben werden, ob die Werte der jeweiligen Select Option im Code ansteuerbar sein sollen (Pass ist angekreuzt) und falls ja, wie der Variablenname lauten soll (ggfs. ist der Default-Name aus dem SAP recht kryptisch). Außerdem kann noch eine Variante angewendet werden. Im oberen rechten Bereich wird definiert, wie die spätere Methode des DataContext heißen soll (*Method*), wie die Klasse heißen soll, die eine einzelne Zeile repräsentiert (*Object*) und wie die Klasse heißen soll, die die komplette Ergebnismenge repräsentiert (*Collection*).

![LINQToERP-Queries_004](/img/content/LINQToERP-Queries_004.png){:class="img-responsive"}

Im *Fields*-Tab können nicht benötigte Felder ausgeklammert oder umbenannt werden.

![LINQToERP-Queries_005](/img/content/LINQToERP-Queries_005.png){:class="img-responsive"}

Wie der folgende Code-Ausschnitt zeigt, bietet die DataContext-Klasse nun eine Funktion an, um die Query auszuführen. Als Übergabeparameter erkennen wir im Intellisense die beiden Select Options wieder.

![LINQToERP-Queries_006](/img/content/LINQToERP-Queries_006.png){:class="img-responsive"}

Die beiden Übergabe-Parameter entsprechen den Range-Objekten wie sie bereits in Abschnitt [Beispiel für das Aufrufen einer Query](../sap-queries/beispiel-fuer-das-aufrufen-einer-query)  vorgestellt wurden. Hier folgt nun der Code für die Ansteuerung. Als Variable dienen Textboxen (siehe folgender Screenshot).

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void btnGo_Click(object sender, EventArgs e) 
{ 
   SAPContext sc = new SAPContext("TestUser", "SECRET01"); 
  
   QuerySelectionParameter SoldTo = new QuerySelectionParameter(); 
   SoldTo.AddRange(Sign.Include,RangeOption.Between, 
      txtCustomerLow.Text,txtCustomerHigh.Text); 
  
   QuerySelectionParameter MatNr = new QuerySelectionParameter(); 
   MatNr.AddRange(txtMatnr.Text); 
  
   var MyQueryResult = from res in sc.ZVV01(SoldTo, MatNr) select res; 
   this.dataGridView1.DataSource = MyQueryResult.ToList(); 
}
{% endhighlight %}
</details>

![LINQToERP-Queries_007](/img/content/LINQToERP-Queries_007.png){:class="img-responsive"}