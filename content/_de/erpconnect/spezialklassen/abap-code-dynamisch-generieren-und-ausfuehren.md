---
ref: ec-special-classes-02
layout: page
title: ABAPCode-Klasse
description: ABAP Code dynamisch generieren und ausführen
product: erpconnect
parent: spezialklassen
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=abap-code-dynamisch-generieren-und-ausfuehren
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).


Die Klasse *ABAPCode* bietet die Möglichkeit, den Code von ABAP-Reports an SAP zu übergeben und dort on the fly auszuführen. 
Dadurch ergeben sich nahezu unbegrenzte Möglichkeiten.<br>

Das folgende Beispiel zeigt, wie Sie einen einfachen ABAP-Interpreter erstellen, der ein dynamisches SQL-Statement ausführt.<br>
![AbapPad](/img/content/AbapPad.png){:class="img-responsive"}

### Einen ABAP-Interpreter erstellen

1. Bauen Sie mit der R3Connection-Klasse eine Verbindung zum R/3 System auf.
2. Fügen Sie mit der Methode *AddCodeLine* eine neue Zeile ABAP-Code hinzu. 
3. Ist der gewünschte Code vollständig übergeben, führen Sie ihn mit *Execute* aus. 
4. Lesen und verwerten Sie die Ergebnismenge (die Listausgabe) mit der Methode *GetResultLine*.

```csharp
private void button1_Click(object sender, System.EventArgs e)
{
	using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
            {
                ERPConnect.LIC.SetLic("LicenseNumber");
                con.Open(false);
				
                ERPConnect.Utils.ABAPCode code = new ERPConnect.Utils.ABAPCode();
                code.Connection = con;
				
                foreach (string s in txtABAPCode.Lines)
                {
                    code.AddCodeLine(s);
                }
                if (code.Execute())
                {
                    for (int i = 0; i < code.ResultLineCount; i++)
                        txtResult.Text += code.GetResultLine(i) + "\r\n";
                }
                else
                {
                    txtResult.Text = "ABAP Error: " + code.LastABAPSyntaxError;
                }
            }
}
```

<!---
<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles button1.Click
 
 
    Using con As New ERPConnect.R3Connection
        con.UserName = "erpconnect"
        con.Password = "pass"
        con.Language = "DE"
        con.Client = "800"
        con.Host = "sapserver"
        con.SystemNumber = 11
 
        con.Open(False)
 
        Dim code = New ERPConnect.Utils.ABAPCode
        code.Connection = con
        Dim s As String
        For Each s In textBox1.Lines
            code.AddCodeLine(s)
        Next
 
        Dim i As Integer
        If code.Execute() Then
            For i = 0 To code.ResultLineCount - 1
                textBox2.Text += code.GetResultLine(i) + vbCrLf
            Next
        Else
            textBox2.Text = "ABAP Error:" + code.LastABAPSyntaxError
        End If
    End Using
End Sub
{% endhighlight %}
</details>
-->

