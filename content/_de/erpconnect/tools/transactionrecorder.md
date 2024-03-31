---
ref: ec-tools-01
layout: page
title: Transaction-Recorder
description: Transaction-Recorder
product: erpconnect
parent: tools
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=transactionrecorder
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für ERPConnect.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

Der *Transaction-Recorder* zeichnet SAP-Transaktionen auf und generiert einen entsprechenden C# oder VB Code für die Transaktionen.

### *TransactionRecorder* verwenden

1. Um den *Transaction-Recorder* zu starten, führen Sie die *TransactionRecorder.exe* aus dem ERPConnect-Verzeichnis `C:\Program Files\ERPConnect` aus.
2. Geben Sie den Transaktioncode ein, den Sie aufzeichnen möchten in das Textfeld **Transaction Code for recording** ein. 
3. Wählen Sie entweder *C#* oder *VB* als Zielsprache für den generierten Code aus.
4. Klicken Sie auf **[Generate Now]**, um Verbindung mit Ihrem SAP-System herzustellen.
5. Das Fenster "SAP Login" öffnet sich. Geben Sie Ihre SAP Benutzerdaten ein und klicken Sie auf **[OK]**.
6. Falls aufgefordert, erlauben Sie den Zugriff auf SAP. Ihre SAP GUI öffnet sich und führt den Transaktionscode aus.
7. Beenden Sie die Transaktion in SAP. <br>
Sobald die Transaktion beendet ist, wird der entsprechende Code generiert und im *Transaction-Recorder* angezeigt.
8. Verwenden Sie **[Ctrl+C]** und **[Ctrl+V]**, um den Code in Ihr Programm zu kopieren.<br>
![Tools-001](/img/content/Tools-001.png){:class="img-responsive" }
