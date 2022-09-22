---
ref: ec-tools-01
layout: page
title: Transaction-Recorder
description: Transaction-Recoder
product: erpconnect
parent: tools
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=transactionrecorder
---

The *TransactionRecorder* records SAP transactions and generates C# or VB code for the transactions.

### How to Use *Transaction-Recorder*
1. To start the *TransactionRecorder*, run the *TransactionRecorder.exe* in the ERPConnect directory `C:\Program Files\ERPConnect`.
2. Enter the transaction code you want to record in the text field **Transaction Code for recording**.
3. Choose *C#* or *VB* as your target language for the generated code.
4. Click **[Generate Now]** to acccess your SAP system. 
5. The window "SAP Login" opens. Enter your SAP credentials and click **[OK]**.
6. If prompted, allow acces to SAP. Your SAP GUI opens and executes the transaction code.
7. Finish your transaction in SAP. <br>
Once the transaction is finished, the code is generated and displayed in the *Transaction-Recorder*. 
8. Use **[Ctrl+C]** and **[Ctrl+V]** to copy the code to your program via the clipboard.<br>
![Tools-001](/img/content/Tools-001.png){:class="img-responsive" }
