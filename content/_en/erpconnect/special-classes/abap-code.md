---
ref: ec-special-classes-02
layout: page
title: ABAP Code Class
description: ABAP Code
product: erpconnect
parent: special-classes
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=abap-code
---

**The sample code is located in the ERPConnect installation directory in the AbapPad directory.** 

The class ABAPCode offers nearly unlimited possibilities. You can execute ABAP code on the fly and retrieve the result in a string array.

The example below shows how to create a simple ABAP interpreter that executes a dynamic SQL statement.

Like other client classes, ABAPCode needs a valid R/3 connection. With the help of the method AddCodeLine, a new line of code will be added to the dynamic report. The report will be executed via Execute(). The result set (regarding the ABAP list) can be read by the method GetResultLine.


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)
        {
            using (ERPConnect.R3Connection con = new ERPConnect.R3Connection())
            {
                con.UserName = "erpconnect";
                con.Password = "pass";
                con.Language = "DE";
                con.Client = "800";
                con.Host = "sapserver";
                con.SystemNumber = 11;
 
                con.Open(false);
 
                ERPConnect.Utils.ABAPCode code = new ERPConnect.Utils.ABAPCode();
                code.Connection = con;
                foreach (string s in textBox1.Lines)
                {
                    code.AddCodeLine(s);
                }
 
                if (code.Execute())
                {
                    for (int i = 0; i < code.ResultLineCount; i++)
                        textBox2.Text += code.GetResultLine(i) + "\r\n";
                }
                else
                {
                    textBox2.Text = "ABAP Error: " + code.LastABAPSyntaxError;
                }
            }
        }
{% endhighlight %}
</details>

<details>
<summary>Click to open VB example.</summary>
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

The figure screenshot below shows ABAP Interpreter in action. 

![AbapPad](/img/content/AbapPad.png){:class="img-responsive" width="400px" }
