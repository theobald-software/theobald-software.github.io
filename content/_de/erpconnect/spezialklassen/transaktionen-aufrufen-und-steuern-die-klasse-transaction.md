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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

Dieser Abschnitt zeigt, wie Sie die *Transaction*-Klasse verwenden, um SAP-Transaktionen sowohl direkt als auch als Hintergrundprozess (Batch Input) auszuführen.<br>
Die Hintergrundverarbeitung eignet sich zur Verarbeitung und Sendung von Massendaten an Ihr SAP-System. 
Dieses Technik wird häufig verwendet, wenn es für die Datenerfassung kein geeignetes BAPI gibt.


### SAP-Transaktionen aufrufen
Die folgende Beispielanwendung zeigt, wie Sie die *Transaction*-Klasse verwenden, um SAP-Transaktionen direkt aus Ihrem .NET-Programm heraus ausführen.<br>
In dieser Anwendung kann der Benutzer eine Artikelnummer und den Namen eines Werks eingeben.
Über eine Schaltfläche wird die SAP GUI gestartet und die Transaktion **MMBE** (Bestandsübersicht) für die eingegebenen Artikel und Werke ausgeführt.

![Call-Transaction-002](/img/content/Call-Transaction-002.png){:class="img-responsive"}

{: .box-tip }
**Tipp**: Im Installatiionspaket von ERPConnect ist das Tool *Transaction-Recorder* enthalten. 
Das Tool zeichnet SAP-Transaktionen auf und erstellt automatisch einen entsprechenden VB- oder C#-Quellocde für die Transaktion, siehe [Transaction-Recorder](../tools/transactionrecorder).


Der Beispielcode zeigt wie die einzelnen Batch-Schritte mit der Funktionen *AddStep* gesetzt werden.
Wichtig ist, dass bei der Verbindung zu SAP die Eigenschaft *UseGui* auf true gesetzt wird. 
Der SAP GUI wird über die Methode *Execute* gestartet. 
```csharp
private void button1_Click(object sender, System.EventArgs e)
    {
    using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
        {
            Transaction transaction1 = new Transaction();
            transaction1.Connection = con;
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
            con.UseGui = true;
            con.Open(false);
            // Run
            transaction1.Execute();
        }
    }
```s

<!---
<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles button1.Click
    Dim R3Connection1 As R3Connection = New R3Connection("SAPServer", 0, "SAPUser", "Password", "EN", "800")
    Dim transaction1 As Transaction = New Transaction()
    transaction1.Connection = R3Connection1
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
 
 
    R3Connection1.UseGui = True
    R3Connection1.Open(False)
    ' Run
    transaction1.Execute()
 
End Sub
{% endhighlight %}
</details>
-->


{: .box-note }
**Note**: Falls Sie nur in eine Zieltransaktion abspringen möchten, ohne Schritte automatisch zu erledigen, reicht es, die Eigenschaft *TCode* zu füllen und die Transaktion zu starten.  

Der folgende Screenshot zeigt das Programm in Aktion. 

![Call-Transaction-003](/img/content/Call-Transaction-003.png){:class="img-responsive"}


### Batch Input Hintergrundverarbeitung

Das folgende Beispiel zeigt, wie man als Hintergrundverarbeitung (Batch Input) eine Lieferanten-Bestellung erstellt.
Die Transaktion zum Erstellen einer Lieferanten-Bestellung ist **ME21**.

 
Am Ende des Codes werden die *BatchReturn*-Objekte, die die Rückgabe-Nachrichten des Hintergrundprozesses beinhalten,
über eine Schleife auf die Returns-Collection ausgewertet.

```csharp
using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
    {
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
```

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