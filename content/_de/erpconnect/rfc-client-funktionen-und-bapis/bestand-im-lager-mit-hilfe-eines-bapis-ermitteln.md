---
ref: ec-calling-bapis-and-function-modules-03
layout: page
title: Bestand im Lager mit Hilfe eines BAPIs ermitteln
description: Bestand im Lager mit Hilfe eines BAPIs ermitteln
product: erpconnect
parent: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=bestand-im-lager-mit-hilfe-eines-bapis-ermitteln
---

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis BapiGetQty**  

Ein so genanntes BAPI ist per Definition die Methode eines Business Objekts. Es gibt hunderte von Business Objekten in einem SAP-System, eines davon ist *Material. Material* repräsentiert einen einzelnen Artikel, auf den man verschiedene Methoden anwenden kann. Eine dieser Methoden ist *Availability*; sie ruft die Verfügbarkeit des Artikels ab, sprich den Bestand im Lager.

Sie können Business Objekte und deren Methoden im Business Object Repository (Transaktion BAPI) recherchieren, ansehen und ausprobieren.

Das folgende Beispiel wird nun das BAPI *Material.Availability* in einer Windows Forms Anwendung ansteuern. Wichtigste Basis ist das Steuerelement *ERPConnect.R3Connection*. Ziehen Sie es aus der Toolbox auf die Form. Die nachfolgende Abbildung zeigt die Form der Beispielanwendung. Die Verbindungseigenschaften werden schon zur Design-Zeit gesetzt, dann brauchen wir uns später im Code nicht darum zu kümmern. 

![Calling-Client-BAPI-Stock-001](/img/content/Calling-Client-BAPI-Stock-001.png){:class="img-responsive"}

Im Aufruf des BAPIs sind das Werk (PLANT), die Materialnummer (MATERIAL) und die gewünschte Einheit (UNIT) zwingend zu übergeben. Der nachfolgende Code zeigt, wie aus dem *R3Connection-Objekt* per *CreateBapi* ein BAPI-Objekt erzeugt wird. Analog zu ganz normalen Funktionsbausteinen werden die Export-Parameter anhand der Benutzereingaben gefüllt und das BAPI dann ausgeführt. 

Die Rückgabe besteht aus einem Wert (AV_QTY_PLT) und einer Return-Struktur, wie bei BAPIs üblich. Die Return-Struktur enthält möglicherweise Fehlermeldungen oder andere Hinweise, aus diesem Grund wird das Element MESSAGE ebenfalls in eine Textbox geschrieben.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e) 
{ 
   try 
   { 
      con.Open(false); 
      // Create a Bapi object, fill parameters and execute 
      BusinessObjectMethod f = 
         con.CreateBapi("Material", "Availability"); 
      f.Exports["PLANT"].ParamValue = textBox1.Text; 
      f.Exports["MATERIAL"].ParamValue = textBox2.Text; 
      f.Exports["UNIT"].ParamValue = textBox3.Text; 
      f.Execute(); 
      /* Read the import structure RETURN to provide possible Messages */ 
      RFCStructure BapiRet = f.Imports["RETURN"].ToStructure(); 
      textBox5.Text = BapiRet["MESSAGE"].ToString(); 
      // Fill textbox with stock quantity 
      textBox4.Text = f.Imports["AV_QTY_PLT"].ToString(); 
   } 
   catch (ERPException e1) 
   { 
      MessageBox.Show(e1.Message); 
   } 
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub Button1_Click(ByVal sender As System.Object, _ 
    ByVal e As System.EventArgs) Handles Button1.Click 
   Try 
      Dim con As R3Connection = New R3Connection 
      con.Open(False) 
      'Create a Bapi object, fill parameters and execute 
      Dim f As BusinessObjectMethod = _ 
         con.CreateBapi("Material", "Availability") 
  
      f.Exports("PLANT").ParamValue = TextBox1.Text 
      f.Exports("MATERIAL").ParamValue = TextBox2.Text 
      f.Exports("UNIT").ParamValue = TextBox4.Text
      f.Execute() 
      ' Read the import structure RETURN to provide possible 
      ' Messages 
  
      Dim BapiRet As RFCStructure = _ f.Imports("RETURN").ToStructure() 
  
      TextBox5.Text = BapiRet("MESSAGE").ToString() 
  
      ' Fill textbox with stock quantity 
      TextBox4.Text = f.Imports("AV_QTY_PLT").ToString() 
   Catch e1 As ERPException 
      MessageBox.Show(e1.Message) 
   End Try 
End Sub
{% endhighlight %}
</details> 

Die beiden nachfolgenden Abbildungen zeigen das Programm in Aktion. Beim ersten Versuch wird eine ungültige Materialnummer eingegeben. Die RETURN-Message zeigt die Meldung. Beim zweiten Bild wird ein korrekter Lagerbestand ermittelt und ausgegeben.


![Calling-Client-BAPI-Stock-002](/img/content/Calling-Client-BAPI-Stock-002.png){:class="img-responsive"} 

![Calling-Client-BAPI-Stock-003](/img/content/Calling-Client-BAPI-Stock-003.png){:class="img-responsive"}
