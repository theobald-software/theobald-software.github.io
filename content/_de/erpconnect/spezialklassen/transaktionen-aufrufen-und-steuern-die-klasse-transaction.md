---
ref: ec-special-classes-03
layout: page
title: Transaction-Klasse
description: Transaktionen aufrufen und steuern- Die Klasse Transaction
product: erpconnect
parent: spezialklassen
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=transaktionen-aufrufen-und-steuern-die-klasse-transaction
---

Mit der Klasse Transaction des ERPConnect-Toolkits haben Sie die Möglichkeit, eine Transaktion - sichtbar oder im Hintergrund - fernzusteuern.
Dieses Verfahren heißt im SAP-Jargon Batch Input. 
Die Hintergrundverarbeitung eignet sich dazu, Massendaten ins SAP zu übernehmen. 
Insbesondere, wenn es kein BAPI für die gewünschte Tätigkeit gibt, kann Batch Input ein sinnvoller Weg für die Datenerfassung sein.

Die andere Möglichkeit, die sich durch diese Technik bietet, ist der direkte Absprung aus Ihrem .Net-Programm heraus in eine SAP-Transaktion.

### SAP-Transaktionen aufrufen
Das folgende Beispiel zeigt diese Anwendungsmöglichkeit.

Artikelnummer und Werk werden eingetragen, der Knopf betätigt, 
um danach den Bestand anzuzeigen.  


Wir wollen dem Benutzer in einer Windows Form die Möglichkeit geben, eine Materialnummer und ein Werk zu erfassen. 
Danach drückt er auf den Knopf, der SAP GUI öffnet sich und zeigt die Transaktion MMBE (Bestandsanzeige) genau für den eingegebenen Artikel im eingegebenen Werk. 


![Call-Transaction-002](/img/content/Call-Transaction-002.png){:class="img-responsive"}

Der folgende Beispielcode zeigt zunächst, wie die einzelnen Batch-Schritte mit Hilfe der Funktionen *AddStep*... gesetzt werden.
Wichtig ist, dass die Eigenschaft *UseGui* auf true gesetzt wird. Der SAP GUI soll ja schließlich bei *Execute* aufgehen, um die Transaktion anzuzeigen. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)
{
    Transaction transaction1 = new Transaction();
    R3Connection r3Connection1 = new R3Connection("SAPServer", 00, "User", "Pass", "EN",800");
    transaction1.Connection = r3Connection1;
    // Reset the batch steps
    transaction1.BatchSteps.Clear();

    // fill new steps
    transaction1.ExecutionMode = ERPConnect.Utils.TransactionDialogMode.ShowOnlyErrors;
    transaction1.TCode = "MMBE";
    transaction1.AddStepSetNewDynpro("RMMMBEST", "1000");
    transaction1.AddStepSetOKCode("ONLI");
    transaction1.AddStepSetCursor("MS_WERKS-LOW");
    transaction1.AddStepSetField("MS_MATNR-LOW", textBox1.Text);
    transaction1.AddStepSetField("MS_WERKS-LOW", textBox2.Text);

    // connect to SAP
    r3Connection1.UseGui = true;
    r3Connection1.Open(false);
    // Run
    transaction1.Execute();
}
{% endhighlight %}
</details>
<!---
<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles button1.Click
    Dim r3Connection1 As R3Connection = New R3Connection("SAPServer", 0, "SAPUser", "Password", "EN", "800")
    Dim transaction1 As Transaction = New Transaction()
    transaction1.Connection = r3Connection1
    ' Reset the batch steps
    transaction1.BatchSteps.Clear()
    ' fill new steps
    transaction1.ExecutionMode = _
       ERPConnect.Utils.TransactionDialogMode.ShowOnlyErrors
    transaction1.TCode = "MMBE"
    transaction1.AddStepSetNewDynpro("RMMMBEST", "1000")
    transaction1.AddStepSetOKCode("ONLI")
    transaction1.AddStepSetCursor("MS_WERKS-LOW")
    transaction1.AddStepSetField("MS_MATNR-LOW", "100-100")
    transaction1.AddStepSetField("MS_WERKS-LOW", "100-200")
    ' connect to SAP
 
 
    r3Connection1.UseGui = True
    r3Connection1.Open(False)
    ' Run
    transaction1.Execute()
 
End Sub
{% endhighlight %}
</details>
-->


{: .box-note }
**Note**: Falls Sie nur in eine Zieltransaktion abspringen möchten, ohne Schritte automatisch zu erledigen, reicht es, die Eigenschaft *TCode* zu füllen und die Transaktion per *Execute* zu starten.  

Der folgende Screenshot zeigt das Programm in Aktion. 

![Call-Transaction-003](/img/content/Call-Transaction-003.png){:class="img-responsive"}


### Batch Input Hintergrundverarbeitung

Im letzten TeilAbschnitt haben wir einen Absprung in den SAP GUI entwickelt; 
das nachfolgende Beispiel hingegen zeigt eine Verarbeitung, 
die komplett im Hintergrund stattfinden soll, nämlich das Anlegen einer 
Lieferanten-Bestellung mit der Transaktion ME21.

Dazu nutzen wir den TransactionRecorder, um gleich die wichtigsten Transaktionsschritte als VB- oder C#-Quellocde automatisch zu erstellen (siehe Abschnitt [TransactionRecorder](../tools/transactionrecorder)).

Der Code kann nicht 1 zu 1 übernommen werden, sondern muss noch minimal angepasst werden. 
Die angepassten Stellen sind im Folgenden markiert. 
Am Ende des Codes sehen Sie auch, wie die Rückgabe-Nachrichten in Form von BatchReturn Objekten 
über die Returns-Collection ausgewertet werden.

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
<!---
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
-->