---
ref: xi-sap-connection-02
layout: page
title: SAP-Verbindung mit SNC
description: SAP-Verbindung mit SNC
product: xtract-is
parent: sap-verbindung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=sap-verbindung-mit-snc
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Um die verschlüsselte Kommunikation zwischen Xtract IS und SAP zu nutzen, können Sie die Secure Network Communication (SNC) für die Verbindung zu Ihrem SAP-System verwenden. 
Der folgende Abschnitt erläutert die erforderliche Konfiguration des "Connection Managers" in Abhängigkeit von Ihrem SAP-System. Weitere Informationen zur SNC-Konfiguration finden Sie auf der offiziellen [Hilfe-Seite von SAP](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm). 

### Connection Manager konfigurieren

{: .box-tip }
**Tipp:** Falls Sie nicht wissen, welche Parameter einzugeben sind, können Sie die Informationen im SAP-Logon-Pad in den Properties nachschauen. Ansonsten fragen Sie Ihre SAP-Basis.

 1. Klicken Sie innerhalb des "Xtract IS Connection Manager" Fensters auf **[Additions]**. Das Fenster "Xtract IS Connection Manager Additions" wird geöffnet. 
![SNC](/img/content/SNC.png){:class="img-responsive"}
2. Aktivieren Sie die Checkbox **SNC enabled**. Die Felder **SNC Library (32 Bit. & 64 Bit)**, **Partner Name** und **Quality of Protection** sind aktiv. 
![SNC](/img/content/SNC_fields.png){:class="img-responsive"}
3. Überprüfen Sie den SAP parameter *snc/gssapi_lib* um zu bestimmen, welche Bibliothek für die Verschlüsselung in Ihrem SAP System verwendet wird. <br>
Ihre SAP-Basis muss auf dem Applikationsserver und auf dem Rechner, auf dem Xtract IS läuft, die gleiche Bibliothek importieren und konfigurieren.   
4. Geben Sie in den SNC-Bibliotheksfeldern (1) den vollständigen Pfad zum Speicherort der Bibliotheken für 32 Bit & 64 Bit ein z.B., `C:\Program Files (x86)\SAP\FrontEnd\SecureLogin\sapcrypto.dll`.
5. Geben Sie den SAP-Partnernamen (2) ein, der für den SAP-Anwendungsserver konfiguriert ist z.B. `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL`.
7. Definieren Sie das SNC-Schutzniveau z.B. *9 - Maximum* Standardwert. <br>
Die bevorzugte Sicherheitsstufe kann in der Einstellung **Quality Of Protection** angepasst werden. Weitere Informationen finden Sie auf der offiziellen [Hilfe-Seite von SAP](http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm).
9. Klicken Sie auf **[OK]** zum Bestätigen.
10. Klicken Sie auf **[Test Connection]**, um die erfolgreiche Verbindung zu überprüfen.
Das Bestätigungsfenster wird geöffnet.
11. Klicken Sie auf **[OK]** zum Bestätigen.

### Kerberos DLLs herunterladen
Es ist auch möglich, Kerberos-Bibliotheken zur Verschlüsselung zwischen Client und SAP-Server zu verwenden.
Weitere Informationen finden Sie auf offiziellen [Hilfe-Seite von SAP](https://launchpad.support.sap.com/#/notes/2115486). 
Verschiedene DLLs für 32-Bit- (`gsskrb5.dll`) und 64-Bit-Plattformen (`gx64krb5.dll`) werden mit der [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486) ausgeliefert.





