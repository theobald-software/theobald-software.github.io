---
layout: page
title: Nicht-RFC-fähige Bausteine
description: Nicht-RFC-fähige Bausteine
product: erpconnect
parent: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=nicht-rfc-faehige-bausteine
---

Diese Funktionalität ist obsolete und wird von ERPConnect ab Version 4.5 nicht mehr unterstützt.

Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis RFCWrapperReadText 

In den bereits diskutierten Beispielen haben wir immer Funktionsbausteine bzw. BAPIs angesprochen, die das Attribut *RFC-fähig* hatten. Das ist aber nur eine Untermenge aller verfügbaren Bausteine in einem SAP-System. Mit ERPConnect ist es auch möglich, Bausteine auszuführen, die nicht explizit als RFC-fähig gekennzeichnet sind. Zu diesem Zweck wird intern eine Art Wrapper um den Baustein gebildet und führt ihn nicht direkt sondern indirekt aus. Sie als Entwickler merken davon aber fast nichts. Das Einzige, was es zu tun gilt, ist die Eigenschaft *UseRFCWraper* des RFCFunction-Objekts auf *true* zu setzen.

Das folgende Beispiel zeigt den Aufruf des Bausteins READ_TEXT. Er wird von ABAP-Programmen dazu verwendet, auf Textobjekte zu lesen (z.B. die Verkaufsnotiz zu einem Kunden). Er ist standardmäßig nicht RFC-fähig, funktioniert mit ERPConnect aber trotzdem.

**Achtung!!!!** Die Taktik mit dem Wrapper funktioniert leider nur, wenn im SAP-System das Änderungsflag gesetzt ist (siehe Transaktion SE03, Administration). Um herauszufinden, ob dieses Flag gesetzt ist, kann die Eigenschaft *IsSystemEditable* des R3Connection-Objekts abgefragt werden, wie im Folgenden gezeigt.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)  
{  
    using (R3Connection con = new R3Connection("host", 11, "RFCTestUser", "pass01", "EN", "800")) 
       con.Open();  
       // check if system is editable  
       if (con.IsSystemEditable())  
          Console.WriteLine("Dynamic ABAP can be executed");  
        
       Else  
          Console.WriteLine("Sorry, it is forbidden " +  
             "to execute dynamic ABAP.");  
        
       // Create function object an fill parameters  
       RFCFunction readtext = con.CreateFunction("READ_TEXT");  
       readtext.Exports["CLIENT"].ParamValue = "800";  
       readtext.Exports["ID"].ParamValue = "0001";  
       readtext.Exports["LANGUAGE"].ParamValue = "EN";  
       readtext.Exports["NAME"].ParamValue = "0000006001";  
       readtext.Exports["OBJECT"].ParamValue = "KNA1";  
        
       // enable RFC wrapper  
       readtext.UseRFCWrapper = true;  
       readtext.Execute();  
       // process result lines  
       foreach (RFCStructure line in readtext.Tables["LINES"].Rows)  
          Console.WriteLine(line["TDLINE"].ToString());  
       Console.ReadLine();  
    }
}
{% endhighlight %}
</details>

![Dynamic-Abap](/img/content/Dynamic-Abap.png){:class="img-responsive"}
