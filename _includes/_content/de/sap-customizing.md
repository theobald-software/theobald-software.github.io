Um mögliche Einschränkungen bei der Extraktion von Tabellen zu umgehen oder andere Xtract Extraktionstypen zu nutzen, müssen Sie in Ihrem SAP-System bestimmte Einstellungen anpassen oder Z-Funktionsbausteine 
bzw. ABAP Framework von Theobald Software installieren.
Der folgende Abschnitt gibt einen Überblick über die Installation von benutzerdefinierten Funktionsbausteinen/ABAP-Framework und das Customizing des SAP-Systems.


### Z-Funktionsbausteine / ABAP Framework auf dem SAP-System

Die Z-Funktionsbausteine / ABAP-Framework werden als Teil der Theobald Software Produkte ausgeliefert und können mithilfe von Transportaufträgen (s.u.) installiert werden.
Für die folgenden Komponenten ist die Installation eines kundenspezifischen Funktionsbausteins/ABAP-Frameworks in SAP erforderlich:

- **Table**: Für die meisten Aktionen ist die Installation eines ABAP Frameworks notwendig. Siehe [Funktionsbaustein für Tabellen-Extraktion](./funktionsbaustein-fuer-table-extraktion). 
- **Report**: Die Installation eines Z-Funktionsbausteins ist notwendig, siehe [Report-Funktionsbaustein installieren](./report-funktionsbaustein-installieren).


### Transportaufträge (Transport requests)
Die Transportaufträge von Theobald Software müssen von Ihrem SAP-Basis-Team in SAP importiert werden.
Die folgenden Transportaufträge finden Sie im ABAP-Unterordner des Installationsordners (z.B. `C:\Programme\XtractProduct\ABAP`):

- thtrans.zip - enthält den Z-Funktionsbaustein für die *Report Komponente*
- Z_THEO_READ_TABLE.zip - enthält den Z-Funktionsbaustein, die ABAP-Klassen und verschiedene DDIC-Objekte für die *Table Komponente*; <br> für SAP_ABA Version >= 740SP05
- Z_THEO_READ_TABLE-before_740SP05.zip - enthält den Z-Funktionsbaustein, die ABAP-Klassen und verschiedene DDIC-Objekte für die *Table Komponente*; <br> für SAP_ABA Version 640 - 740 SP05 

Weiterführende Informationen zur Installation eines Transportauftrags finden Sie im Knowledgebase-Artikel [How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms).


### Konfiguration (Customizing)
Für die folgenden Komponenten ist ein Customizing auf dem SAP-System notwendig. 

- **OHS**: Siehe [Vorbereitung für OHS im BW](./vorbereitung-fuer-ohs-im-bw).
- **DeltaQ**: Siehe [Customizing für DeltaQ](./customizing-fuer-deltaq).
