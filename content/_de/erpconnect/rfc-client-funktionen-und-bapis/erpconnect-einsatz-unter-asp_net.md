---
ref: ec-calling-bapis-and-function-modules-04
layout: page
title:  Web-Anwendungen
description: ERPConnect und der Einsatz unter ASP.NET
product: erpconnect
parent: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=erpconnect-einsatz-unter-asp_net
---

Der folgende Abschnitt beschreibt den Entwicklungsprozess eines ASP.NET/ERPConnect-Projekts.

### Voraussetzungen

- Binden Sie die ERPConnect.dll als Referenz in Ihr Projekt ein (sie wird beim Kompilieren dann automatisch in das bin-Verzeichnis auf den Webserver übertragen).
- Kopieren Sie sie librfc32.dll in Ihr Verzeichnis, siehe [Systemvoraussetzungen - 32/64-Bit Umgebung](../voraussetzungen-und-installation/systemvoraussetzungen#3264-bit-umgebung).

{: .box-warning }
**Warnung!** Die Standard Demo-Lizenz unterstützt keine Anwendungen in Web-Umgebungen. 
Um ERPConnect unter ASP.NET zu testen, stellen wir Ihnen gerne eine zeitlich beschränkte Testlizenz zur Verfügung. 
Sie können die Testlizenz formlos per Mail an [sales@theobald-software.com](mailto:sales@theobald-software.com) anfordern.    

### ASP.NET Beispiel

Das folgende Beispiel basiert auf einer ASP-Seite, auf der man Daten eingeben kann, um eine entsprechende Lieferantenbestellung zu generieren, siehe folgenden Screenshot:<br>
![Create-Purchase-Order-IE](/img/content/Create-Purchase-Order-IE.png){:class="img-responsive"}

Die ASP-Seite enthält einen Butoon, einen Statustext und die folgenden Textboxen:
- Lieferantennummer (*txtVendor*)
- Materialnummer (*txtMaterial*)
- gewünschte Bestellmenge (*txtQuan*) 
- das gewünschte Zielwerk (*txtPlant*) beinhaltet

#### Eine Lieferantenbestellung via BAPI generieren
Um eine Lieferantenbestellung mit dem *BAPI_PO_CREATE* BAPI zu erstellen, folgen Sie den folgenden Schritten:

1. Bauen Sie eine Verbindung zu SAP auf.
2. Erstellen Sie ein RFCFunction-Objekt für das BAPI *BAPI_PO_CREATE*.
3. Füllen Sie die Export-Struktur *PO_HEADER* mit folgenden Werten:
- DOC_TYPE -> Bestellart (NB für Nomalbestellung)
- PURCH_ORG -> Einkaufsorganisation
- PUR_GROUP -> Einkaufsgruppe
- DOC_DATE -> Datum 
- VENDOR -> Lieferantennummer 
4. Erfassen Sie die Positionen *PLANT* (Werk) und *PUR_MAT* (Materialnummer) in der Tabelle *PO_ITEMS*. 
5. Erfassen Sie die Werte für *QUANTITY* (Bestellmenge) und *DELIV_DATE* (das gewünschte Lieferdatum) in der Tabelle für die Bestelleinteilungen *PO_ITEM_SHEDULES*. 
6. Führen Sie das BAPI aus und werten Sie die die Return-Nachricht aus.   


<details>
<summary>Klicken Sie hier, um das C# Beispiel zu öffnen.</summary>
{% highlight csharp %}
private void Button1_Click(object sender, System.EventArgs e) 
{ 
	ERPConnect.LIC.SetLic("xxxxxxxxxxxxx"); //Set your ERPConnect License. 
	
	R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");  //Set Connection Properties
	con.Open(false); 
          
    // Create a RFC-Function object 
    RFCFunction func = con.CreateFunction("BAPI_PO_CREATE");

	// Fill header structure
	RFCStructure Header = func.Exports["PO_HEADER"].ToStructure();
	Header["DOC_TYPE"]= "NB";
	Header["PURCH_ORG"] = "1000";
	Header["PUR_GROUP"] = "010";
	Header["DOC_DATE"]= ERPConnect.ConversionUtils.NetDate2SAPDate(DateTime.Now);
	Header["VENDOR"]= this.txtVendor.Text
	
	// Create an Item
	RFCTable items = func.Tables["PO_ITEMS"];
	RFCStructure item = items.AddRow();
	item["PO_ITEM"] = "1";
	item["PUR_MAT"] = this.txtMaterial.Text;
	item["PLANT"] = this.txtPlant.Text;
  
	// Create and fill shedules
	RFCTable shedules = func.Tables["PO_ITEM_SCHEDULES"];
	RFCStructure shedule = shedules.AddRow();
	shedule["PO_ITEM"] = "1";
	shedule["DELIV_DATE"] = ERPConnect.ConversionUtils.NetDate2SAPDate(DateTime.Now);
	shedule["QUANTITY"] = Convert.ToDecimal(this.txtQuan.Text);

	// Exceute Bapi and process return messages
	func.Execut e();
	this.txtReturn.Text = "";
	this.txtReturn.Text += func.Tables["RETURN"].Rows[0, "MESSAGE"] + "\r\n";
}
{% endhighlight %}
</details>

Der folgende Screenshot zeigt die angelegte Bestellung im SAP-System.<br>
![Create-Puchase-Order-ME23](/img/content/Create-Puchase-Order-ME23.png){:class="img-responsive"}