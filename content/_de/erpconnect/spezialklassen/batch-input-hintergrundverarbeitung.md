---
ref: ec-special-classes-04
layout: page
title: BatchReturn-Klasse
description: Batch Input Hintergrundverarbeitung
product: erpconnect
parent: spezialklassen
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=batch-input-hintergrundverarbeitung
---

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis BatchInputCreatePurchaseOrder** 

Im letzten TeilAbschnitt haben wir einen Absprung in den SAP GUI entwickelt; das nachfolgende Beispiel hingegen zeigt eine Verarbeitung, die komplett im Hintergrund stattfinden soll, nämlich das Anlegen einer Lieferanten-Bestellung mit der Transaktion ME21.

Dazu nutzen wir den TransactionRecorder, um gleich die wichtigsten Transaktionsschritte als VB- oder C#-Quellocde automatisch zu erstellen (siehe Abschnitt [TransactionRecorder](../tools/transactionrecorder)).

Der Code kann nicht 1 zu 1 übernommen werden, sondern muss noch minimal angepasst werden. Die angepassten Stellen sind im Folgenden markiert. Am Ende des Codes sehen Sie auch, wie die Rückgabe-Nachrichten in Form von BatchReturn Objekten über die Returns-Collection ausgewertet werden.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using (ERPConnect.R3Connection con = new ERPConnect.R3Connection())
{
   con.UserName = "erpconnect";
   con.Password = "pass";
   con.Language = "DE";
   con.Client = "800";
   con.Host = "sapserver";
   con.SystemNumber = 11;

   con.Open(false);

   Transaction trans = new Transaction();

   trans.Connection = con;
   trans.TCode = "ME21";

   //Begin a new Dynpro 
   trans.AddStepSetNewDynpro("SAPMM06E", "0100");
   trans.AddStepSetCursor("EKKO-EKGRP");
   trans.AddStepSetOKCode("/00"); // Enter 
   trans.AddStepSetField("EKKO-LIFNR", "1070"); // Vendor
   trans.AddStepSetField("RM06E-BSART", "NB"); // Order Type 
   trans.AddStepSetField("RM06E-BEDAT", "01.01.2006"); //Purch.Date 
   trans.AddStepSetField("EKKO-EKORG", "1000"); // Purchase Org 
   trans.AddStepSetField("EKKO-EKGRP", "010"); // Purchase Group 
   trans.AddStepSetField("RM06E-LPEIN", "T");

   //Begin a new Dynpro 
   trans.AddStepSetNewDynpro("SAPMM06E", "0120");
   trans.AddStepSetCursor("EKPO-WERKS(01)");
   trans.AddStepSetOKCode("=BU");
   trans.AddStepSetField("EKPO-EMATN(01)", "B-7000"); // Material 
   trans.AddStepSetField("EKPO-MENGE(01)", "20"); // Quantity 
   trans.AddStepSetField("EKPO-WERKS(01)", "1000"); // Plant 
   trans.Execute();

   foreach (ERPConnect.Utils.BatchReturn br in trans.Returns)
       MessageBox.Show(br.Message);
   if (trans.Returns.Count == 0)
       MessageBox.Show("No Messages");
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Using con As New ERPConnect.R3Connection
 
     con.UserName = "erpconnect"
     con.Password = "pass"
     con.Language = "DE"
     con.Client = "800"
     con.Host = "sapserver"
     con.SystemNumber = 11
 
     con.Open(False)
     Dim trans As New Transaction

     trans.Connection = con
     trans.TCode = "ME21"
 
     'Begin a new Dynpro 
     trans.AddStepSetNewDynpro("SAPMM06E", "0100")
     trans.AddStepSetCursor("EKKO-EKGRP")
     trans.AddStepSetOKCode("/00")
     trans.AddStepSetField("EKKO-LIFNR", "1070")
     trans.AddStepSetField("RM06E-BSART", "NB")
     trans.AddStepSetField("RM06E-BEDAT", "01.01.2006")
     trans.AddStepSetField("EKKO-EKORG", "1000")
     trans.AddStepSetField("EKKO-EKGRP", "010")
     trans.AddStepSetField("RM06E-LPEIN", "T")
 
     'Begin a new Dynpro 
     trans.AddStepSetNewDynpro("SAPMM06E", "0120")
     trans.AddStepSetCursor("EKPO-WERKS(01)")
     trans.AddStepSetOKCode("=BU")
     trans.AddStepSetField("EKPO-EMATN(01)", "B-7000")
     trans.AddStepSetField("EKPO-MENGE(01)", "20")
     trans.AddStepSetField("EKPO-WERKS(01)", "1000")
 
     trans.Execute()
 
     Dim br As BatchReturn
     For Each br In trans.Returns
         MessageBox.Show(br.Message)
     Next
     If trans.Returns.Count = 0 Then
         MessageBox.Show("No Messages")
     End If
 End Using
{% endhighlight %}
</details>