---
ref: ec-calling-bapis-and-function-modules-03
layout: page
title: ERPConnect und der Einsatz unter ASP.NET
description: ERPConnect und der Einsatz unter ASP.NET
product: erpconnect
parent: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=erpconnect-einsatz-unter-asp_net
---

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis ASPCreatePurchaseOrder**


ERPConnect ist selbstverständlich auch ASP.NET-tauglich und bietet so die Möglichkeit, mächtige Web-Applikationen mit direkter SAP-Verbindung zu entwickeln.

Das folgende Beispiel soll die Entstehung eines ASP.NET-Projektes zeigen.

Die ERPConnect.dll muss in das aktuelle Projekt als Referenz eingebunden werden. Sie wird beim Kompilieren dann automatisch in das bin-Verzeichnis auf den Webserver mit übertragen.

Darüber hinaus wird noch eine weitere dll benötigt: librfc32.dll. Diese Bibliothek ist im RFCSDK von SAP enthalten und wird automatisch in Ihr System32-Verzeichnis mitinstalliert, falls ein SAP GUI auf Ihrem Client-Rechner läuft. Falls der Webserver ein echter Server ist, auf dem nicht gearbeitet wird (und nicht der localhost ist), muss die dll manuell in das bin-Verzeichnis der Zielanwendung kopiert werden.

Achtung!! Die Demoversion funktioniert unter ASP.NET nicht und weigert sich mit einer Exception aufgrund der fehlenden Lizenz zu SAP zu verbinden. Gerne stellen wir Ihnen unbürokratisch eine zeitlich beschränkte Testlizenz zur Verfügung. Bitte fordern Sie diese einfach formlos per Mail an (https://support.theobald-software.com).


**ASP.NET-Beispiel: Eine Lieferantenbestellung per BAPI anlegen.** 

Das folgende Beispiel basiert auf einer ASP-Seite, die Textfelder für die Eingabe von Lieferantennummer (txtVendor), Materialnummer (txtMaterial), gewünschte Bestellmenge (txtQuan) und das gewünschte Zielwerk (txtPlant) beinhaltet. 

Hinter dem Button zur Anlage einer Bestellung befindet sich der folgende Code. Zunächst wird eine Verbindung zum SAP aufgebaut und ein Objekt der Klasse *BusinessObjectMethod* erzeugt (das zugehörige BAPI heißt *PuchaseOrder.CreateFromData*).

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void Button1_Click(object sender, System.EventArgs e)  
{  
  using( R3Connection con = new 
      R3Connection("host",11,"user","pw","EN","800");  
   ERPConnect.LIC.SetLic("TempLicNumber"))
    {
       con.Open(false);  
    
       // Create a BAPI object  
       ERPConnect.BusinessObjectMethod bapi = con.CreateBapi("PurchaseOrder","CreateFromData");
    }
}
{% endhighlight %}
</details>

Nun wird zunächst die Export-Struktur PO_HEADER gefüllt.

DOC_TYPE -> Bestellart (NB für Nomalbestellung)

PURCH_ORG -> Einkaufsorganisation

PUR_GROUP -> Einkaufsgruppe

DOC_DATE -> Belegdatum

VENDOR -> Lieferantennummer 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// Fill header structure 
RFCStructure Header = bapi.Exports["PO_HEADER"].ToStructure(); 
Header["DOC_TYPE"]= "NB"; 
Header["PURCH_ORG"] = "1000"; 
Header["PUR_GROUP"] = "010"; 
Header["DOC_DATE"]= ERPConnect.ConversionUtils.NetDate2SAPDate(DateTime.Now); 
Header["VENDOR"]= this.txtVendor.Text;
{% endhighlight %}
</details>

Jetzt werden die einzelnen Positionen erfasst (Tabelle PO_ITEMS). Die nötigen Werte sind das Werk (PLANT) und die Materialnummer (PUR_MAT). In der Tabelle für die Bestelleinteilungen (PO_ITEM_SHEDULES) wird die Menge (QUANTITY) und das gewünschte Lieferdatum (DELIV_DATE) erfasst. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// Create an Item 
RFCTable items = bapi.Tables["PO_ITEMS"]; 
RFCStructure item = items.AddRow(); item["PO_ITEM"] = "1"; 
item["PUR_MAT"] = this.txtMaterial.Text; 
item["PLANT"] = this.txtPlant.Text; 
  
// Create and fill shedules 
RFCTable shedules = bapi.Tables["PO_ITEM_SCHEDULES"]; 
RFCStructure shedule = shedules.AddRow(); 
shedule["PO_ITEM"] = "1"; 
shedule["DELIV_DATE"] = ERPConnect.ConversionUtils.NetDate2SAPDate(DateTime.Now); 
shedule["QUANTITY"] = Convert.ToDecimal(this.txtQuan.Text); 
{% endhighlight %}
</details>

Zu guter Letzt gilt es nur, das BAPI auszuführen und die Return-Nachrichten auszuwerten.   

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// Exceute Bapi and process return messages 
   bapi.Execute (); 
    this.txtReturn.Text = ""; 
   foreach(BapiReturn ret in bapi.Returns) 
   this.txtReturn.Text += ret.Message + "\r\n";
}
{% endhighlight %}
</details>

Das Bild zeigt die ASP.NET-Anwendung nach erfolgreichem Anlegen der Bestellung im System.  

![Create-Purchase-Order-IE](/img/content/Create-Purchase-Order-IE.png){:class="img-responsive"}

![Create-Puchase-Order-ME23](/img/content/Create-Puchase-Order-ME23.png){:class="img-responsive"}