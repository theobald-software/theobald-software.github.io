---
layout: page
title: Hilfsfunktionen
description: Hilfsfunktionen
product: erpconnect
parent: sap-queries
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=query-hilfsfunktionen
---

Die Klasse *ERPConnect.Queries.QueryHelper* bietet verschiedene Hilfsfunktionen im Umfeld von SAP Queries, z.B. Queries generisch suchen oder die zugehörigen Varianten (inkl. Text) ermitteln. Das folgende Beispiel zeigt eine einfache Suchfunktion. Alle Hilfsfunktionen geben immer eine tabellarische Auflistung zurück. Diese Tabellen sind Klassen, die sich im selben Namespace befinden und von der Klasse System.Data.DataTable vererbt sind. So können Sie sehr leicht weiterverarbeitet oder an ein Steuerelement gebunden werden. Im Anschluss an das Beispielprogramm finden Sie eine Auflistung aller Methoden der Klasse QueryHelper und deren Beschreibung. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using ERPConnect;  
using ERPConnect.Queries;  
using ERPConnect.Queries.QueryHelper;  
    
using(R3Connection con = new R3Connection("host", 11, "RFCTestUser", "pass01", "EN", "800"))
{
    con.Open();  
        
    QueryHelper qh = new QueryHelper(con);  
    SearchResultQueryDataTable ret =  
        qh.SearchForQueries(WorkSpace.GlobalArea,"","*MB*","");  
        
    Form1 f1 = new Form1();  
    f1.dataGrid1.DataSource = ret;  
    f1.ShowDialog(); 
}
{% endhighlight %}
</details>

![SAP-Query-Help-Functions](/img/content/SAP-Query-Help-Functions.png){:class="img-responsive"}

**SearchForQueries** <br>
Liest unter Angabe des Arbeitsbereichs, eines Suchpatterns für die Benutzergruppe, eines Suchpatterns für den Querynamen und eines Suchpatterns für den Funktionsbereichnamen alle ausführbaren Queries im System und gibt die Ergebnismenge zurück.

**SearchForUserGroups** <br>
Liest unter Angabe des Arbeitsbereichs und eines Such-Patterns alle passenden Benutzergruppen.

**SearchForVariants** <br>
Liest unter Angabe des Arbeitsbereichs, der Benutzergruppe und des Querynamen alle verfügbaren Varianten zu Query (inkl. Beschreibungstext). Diese Varianten können dann z.B. an die Eigenschaft Variant des Query-Objekts übergeben werden.

