---
ref: ecs-runtime-sap-connection-01
layout: page
title: SAP-Verbindungskontext
description: SAP-Verbindungskontext
product: erpconnect-services
parent: ecs-sap-verbindung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-sap-verbindungskontext
---

Sie haben die Möglichkeit, einen Verbindungskontext (Connection Scope) zu definieren, um beispielsweise mehrere Funktionsaufrufe im selben Verbindungskontext aufzurufen. Das wäre der Fall, wenn Sie eine Funktion und anschließend ein Commit ausführen.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
ERPConnectServiceClient client = new ERPConnectServiceClient();
using(client.BeginConnectionScope())
{
ERPFunction f = client.CreateFunction("BAPI_GOODSMVT_CREATE");
ERPStructure s = f.Exports["GOODSMVT_HEADER"].ToStructure();
s["PSTNG_DATE"] = "20110609"; // Posting Date in the Document
s["PR_UNAME"] = "BAEURLE"; // UserName
s["HEADER_TXT"] = "XXX"; // HeaderText
s["DOC_DATE"] = "20110609"; // Document Date in Document
f.Exports["GOODSMVT_CODE"].ToStructure()["GM_CODE"] = "01";
ERPStructure r = f.Tables["GOODSMVT_ITEM"].AddRow();
r["PLANT"] = "1000"; // Plant
r["PO_NUMBER"] = "4500017210"; // Purchase Order Number
r["PO_ITEM"] = "010"; // Item Number of Purchasing Document
r["ENTRY_QNT"] = 1; // Quantity in Unit of Entry
r["MOVE_TYPE"] = "101"; // Movement Type
r["MVT_IND"] = "B"; // Movement Indicator
r["STGE_LOC"] = "0001"; // Storage Location
f.Execute();
ERPFunction fCommit = client.CreateFunction("BAPI_TRANSACTION_COMMIT");
fCommit.Exports["WAIT"].ParamValue = "X";
fCommit.Execute();
}
{% endhighlight %}
</details>
