---
layout: page
title: SAP Connection Scope
description: SAP Connection Scope
product: erpconnect-services
parent: sap-connection
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-sap-connection-scope
---

**Connection Scope**


You can define a Connection Scope, e.g. to call several functions in the same connection scope (context). The following example calls a function module followed by a commit transaction call.


<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
using ERPConnectServices;
// ...
ERPConnectServiceClient client = new ERPConnectServiceClient();
   
using(client.BeginConnectionScope())
{
  ERPFunction f = client.CreateFunction("BAPI_GOODSMVT_CREATE");
   
  ERPStructure s = f.Exports["GOODSMVT_HEADER"].ToStructure();
  s["PSTNG_DATE"] = "20110609"; // Posting Date in the Document
  s["PR_UNAME"] = "BAEURLE";    // UserName
  s["HEADER_TXT"] = "XXX";      // HeaderText
  s["DOC_DATE"] = "20110609";   // Document Date in Document
   
  f.Exports["GOODSMVT_CODE"].ToStructure()["GM_CODE"] = "01";
   
  ERPStructure r = f.Tables["GOODSMVT_ITEM"].AddRow();
  r["PLANT"] = "1000";  // Plant
  r["PO_NUMBER"] = "4500017210";     // Purchase Order Number
  r["PO_ITEM"] = "010";      // Item Number of Purchasing Document 
  r["ENTRY_QNT"] = 1;         // Quantity in Unit of Entry
  r["MOVE_TYPE"] = "101";     // Movement Type
  r["MVT_IND"] = "B";         // Movement Indicator
  r["STGE_LOC"] = "0001";     // Storage Location
   
  f.Execute();
   
  ERPFunction fCommit = client.CreateFunction("BAPI_TRANSACTION_COMMIT");
  fCommit.Exports["WAIT"].ParamValue = "X";
  fCommit.Execute();
}
{% endhighlight %}
</details>