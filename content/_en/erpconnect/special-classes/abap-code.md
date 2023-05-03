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

The class ABAPCode offers nearly unlimited possibilities. 
You can execute ABAP code on the fly and retrieve the result in a string array.<br>
The following sample shows how to create a simple ABAP interpreter that executes a dynamic SQL statement, see screenshot below.<br>
![AbapPad](/img/content/AbapPad.png){:class="img-responsive"  }


### Creating an ABAP Interpreter

1. Open a client connection to the R/3 system using the ParseConnectionString class. 
2. Use the method *AddCodeLine* to add a new line of code to the dynamic report. 
3. Execute the report via *Execute*. 
4. Read the result set (regarding the ABAP list) by using the method *GetResultLine*.


```csharp
private void button1_Click(object sender, System.EventArgs e)
{
	using (ParseConnectionString con = new ParseConnectionString("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
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
<summary>Click to open VB example.</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles button1.Click
 
 
    Using con As New ERPConnect.ParseConnectionString
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
