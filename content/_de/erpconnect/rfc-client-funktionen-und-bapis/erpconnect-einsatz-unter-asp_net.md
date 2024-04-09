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
Das folgende Beispiel zeigt, wie Sie mit *BAPI_PO_CREATE* eine Bestellng erstelen.<br>
Das Beispiel basiert auf einer ASP-Seite, auf der man Daten eingeben kann, um eine entsprechende Lieferantenbestellung zu generieren, siehe folgenden Screenshot:<br>
![Create-Purchase-Order-IE](/img/content/Create-Purchase-Order-IE.png){:class="img-responsive"}

Eingabe:
```
Vendor: 0000001070
Material: B-7000
Plant: 1000
Quantity: 10
```

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

```csharp
private void Button1_Click(object sender, System.EventArgs e)
{
   // Set your ERPConnect license
	LIC.SetLic("xxxx");

	using var connection = new R3Connection(
		host: "server.acme.org",
		systemNumber: 00,
		userName: "user",
		password: "passwd",
		language: "EN",
		client: "001")
	{
		Protocol = ClientProtocol.NWRFC,
	};

	connection.Open();
   
   // Create a RFC-Function object
   RFCFunction func = connection.CreateFunction("BAPI_PO_CREATE");
   
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
 
   // Exceute BAPI and process return messages
   func.Execute();
   this.txtReturn.Text = "";
   this.txtReturn.Text += func.Tables["RETURN"].Rows[0, "MESSAGE"] + "\r\n";
}
```

Ausgabe:

```
Message: Standard PO created under the number 4500018292
```

![purchase-order2](/img/content/create-purchase-order-ie_02.png){:class="img-responsive"}  
  

****
#### Weiterführende Links
- [Implement a connection pool](https://kb.theobald-software.com/erpconnect-samples/implement-a-connection-pool)