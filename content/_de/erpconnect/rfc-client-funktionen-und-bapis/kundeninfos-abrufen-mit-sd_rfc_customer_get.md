---
ref: ec-calling-bapis-and-function-modules-02
layout: page
title: Kundeninfos abrufen mit SD_RFC_CUSTOMER_GET
description: Kundeninfos abrufen mit SD_RFC_CUSTOMER_GET
product: erpconnect
parent: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=kundeninfos-abrufen-mit-sd_rfc_customer_get
---

Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis RFCClientGetCustomer

Der Baustein SD_RFC_CUSTOMER_GET ist ein Demo-Baustein für RFC-Anwendungen, der in jedem SAP-System vorhanden sein sollte. Er empfängt als Eingabeparameter eine Kundennummer und gibt die zugehörige Adresse in Form einer Tabelle zurück (es ist deshalb eine Tabelle, weil Sie theoretisch auch mit Wildcards suchen können; das Resultat wäre dann mehr als eine Kundenadresse).

Der folgende Code zeigt zunächst die Anmeldung am SAP-System. Ein *RFCFunction-Objekt* wird dann mit Hilfe der Funktion CreateFunction gebildet.

Der Import-Parameter KUNNR wird mit der Benutzereingabe gefüllt. *Execute* führt den Baustein aus.

Nach dem Aufruf gilt es nur noch, die Ergebnistabelle auszulesen und auszugeben. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args) 
 { 
  using( R3Connection con = 
     new R3Connection("hamlet", 11, "theobald", "pw", "DE", "800"))
    { 
       con.Open(false);  
    
       // Create a function object  
       RFCFunction func = con.CreateFunction("SD_RFC_CUSTOMER_GET");  
    
       Console.WriteLine("Please enter cutomer number ...");  
       Console.WriteLine("and do not forget the leading zeros ..."); 
    
        // fill the export parameter  
       StringBuilder CustomerNo =  
          new StringBuilder(Console.ReadLine());  
    
       func.Exports["KUNNR"].ParamValue = CustomerNo.ToString();  
       try 
       {  
          func.Execute();  
       }  
       catch (ERPException e)  
       {  
          Console.WriteLine(e.Message);  
          Console.ReadLine();  
          return;  
       }  
       // Output the result of the function module  
       Console.WriteLine("Name of customer:");  
       Console.WriteLine(func.Tables["CUSTOMER_T"].Rows[0, "NAME1"]);  
       Console.ReadLine();  
    }
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Sub Main()  
   Using con As New R3Connection("host", 11, "user", "pw", _  
      "DE", "800")  
       con.Open(False)  
       ' Create a function object  
       Dim func = con.CreateFunction("SD_RFC_CUSTOMER_GET") 
       Console.WriteLine("Please enter cutomer number ...")  
       Console.WriteLine("and do not forget the leading zeros ...")  
     ' fill the export parameter  
       Dim CustomerNo As New StringBuilder(Console.ReadLine())  
       func.Exports("KUNNR").ParamValue = CustomerNo.ToString()  
       Try 
          func.Execute()  
       Catch e As ERPException  
          Console.WriteLine(e.Message)  
          Console.ReadLine()  
          Return 
       End Try 
    
       ' Output the result of the function module  
       Console.WriteLine("Name of customer:")  
       Console.WriteLine(func.Tables("CUSTOMER_T").Rows(0, "NAME1"))  
       Console.ReadLine()  
  
    End Using
End Sub
{% endhighlight %}
</details>

![Calling-Client-BAPI-From-Console](/img/content/Calling-Client-BAPI-From-Console.png){:class="img-responsive"}
