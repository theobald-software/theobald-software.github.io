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

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis PopUpMMBE**

Mit der Klasse Transaction des ERPConnect-Toolkits haben Sie die Möglichkeit, eine Transaktion - sichtbar oder im Hintergrund - fernzusteuern. Dieses Verfahren heißt im SAP-Jargon Batch Input. Die Hintergrundverarbeitung eignet sich dazu, Massendaten ins SAP zu übernehmen. Insbesondere, wenn es kein BAPI für die gewünschte Tätigkeit gibt, kann Batch Input ein sinnvoller Weg für die Datenerfassung sein.

Die andere Möglichkeit, die sich durch diese Technik bietet, ist der direkte Absprung aus Ihrem .Net-Programm heraus in eine SAP-Transaktion.

Das folgende Beispiel zeigt diese Anwendungsmöglichkeit.

Wir wollen dem Benutzer in einer Windows Form die Möglichkeit geben, eine Materialnummer und ein Werk zu erfassen. Danach drückt er auf den Knopf, der SAP GUI öffnet sich und zeigt die Transaktion MMBE (Bestandsanzeige) genau für den eingegebenen Artikel im eingegebenen Werk. 


![Call-Transaction-001](/img/content/Call-Transaction-001.png){:class="img-responsive"}

Der folgende Beispielcode zeigt zunächst, wie die einzelnen Batch-Schritte mit Hilfe der Funktionen *AddStep*... gesetzt werden. Wichtig ist, dass die Eigenschaft *UseGui* auf true gesetzt wird. Der SAP GUI soll ja schließlich bei Execute aufgehen, um die Transaktion anzuzeigen. 

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

Das Bild zeigt das Programm in Aktion. Artikelnummer und Werk werden eingetragen, der Knopf betätigt, um danach den Bestand anzuzeigen.  

Natürlich müssen Sie nicht unbedingt die Batch-Steps füllen. Falls es Ihnen genügt, einfach nur in eine Zieltransaktion abzuspringen, ohne dort irgendwelche Schritte automatisch zu erledigen, reicht es, die Eigenschaft *TCode* zu füllen und die Transaktion per *Execute* zu starten.  

![Call-Transaction-002](/img/content/Call-Transaction-002.png){:class="img-responsive"}

![Call-Transaction-003](/img/content/Call-Transaction-003.png){:class="img-responsive"}