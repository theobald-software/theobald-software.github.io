Um mögliche Einschränkungen bei der Extraktion von Tabellen zu umgehen oder andere Xtract Extraktionstypen zu nutzen, 
müssen in Ihrem SAP-System bestimmte Einstellungen anpasst oder Z-Funktionsbausteine von Theobald Software installiert werden.

Der folgende Abschnitt gibt einen Überblick über die Installation von benutzerdefinierten Funktionsbausteinen und das Customizing des SAP-Systems.


### Z-Funktionsbausteine auf dem SAP-System

Die Z-Funktionsbausteine / ABAP-Framework werden als Teil der Theobald Software Produkte ausgeliefert und können mithilfe von Transportaufträgen installiert werden.
Für die folgenden Komponenten ist die Installation eines kundenspezifischen Funktionsbausteins in SAP erforderlich:

- **Table**: Für die meisten Aktionen ist die Installation eines ABAP Frameworks notwendig. Siehe [Funktionsbaustein für Tabellen-Extraktion](./sap-customizing/funktionsbaustein-fuer-table-extraktion). 
{% if page.product != "xtract-for-alteryx" %}- **TableCDC**: Die Installation von zwei Z-Funktionsbausteinen ist notwendig, siehe [Funktionsbaustein für TableCDC](./sap-customizing/funktionsbaustein-fuer-tablecdc).{% endif %}
- **Report**: Die Installation eines Z-Funktionsbausteins ist notwendig, siehe [Report-Funktionsbaustein installieren](./sap-customizing/report-funktionsbaustein-installieren).

### Transportaufträge (Transport requests)
Die Transportaufträge von Theobald Software müssen von Ihrem SAP-Basis-Team in SAP importiert werden.<br>
Die folgenden Transportaufträge finden Sie im ABAP-Unterordner des Installationsordners (z.B. `C:\Programme\XtractProduct\ABAP`):

- `Z_XTRACT_IS_REMOTE_REPORT-transport.zip` - enthält den Z-Funktionsbaustein für die *Report Komponente*
- `THEO_READ_TABLE_740SP05.zip` - enthält den aktuellen Z-Funktionsbaustein für die *Table Komponente*; <br>kompatibel mit ABAP Version 7.40 SP05 und höher
- `THEO_READ_TABLE_710.zip` - enthält den aktuellen Z-Funktionsbaustein für die *Table Komponente*; <br>kompatibel mit ABAP Version 7.10 und höher
- `THEO_READ_TABLE_640.zip` - enthält den aktuellen Z-Funktionsbaustein für die *Table Komponente*; <br>kompatibel mit ABAP Versionen von 6.40 bis 7.03
- `THEO_READ_TABLE_46C.zip` - enthält den aktuellen Z-Funktionsbaustein für die *Table Komponente*; <br>kompatibel mit ABAP Versionen von 4.6C bis 6.40
- `Z_THEO_READ_TABLE-transport.zip` - enthält den Z-Funktionsbaustein für die *Table Komponente*; <br>kompatibel mit ABAP Version 7.40 SP05 und höher
- `Z_THEO_READ_TABLE-transport-before-740SP05.zip` - enthält den Z-Funktionsbaustein für die *Table Komponente*; <br> kompatibel mit ABAP Version 640 - 740 SP04 
{% if page.product != "xtract-for-alteryx" %}- `THEO_CDC_ECC.zip` - enthält den aktuellen Z-Funktionsbaustein für die *Table CDC Komponente*; <br>kompatibel mit SAP ECC Systemen
- `THEO_CDC_S4.zip` - enthält den aktuellen Z-Funktionsbaustein für die *Table CDC Komponente*; <br>kompatibel mit SAP S/4 Systemen {% endif %}

Weiterführende Informationen zur Installation eines Transportauftrags finden Sie im Knowledge Base-Artikel [How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms). <br>

Um die o.g. Komponenten zu deinstallieren, importieren Sie den Transportauftrag `Z_THEO_READ_TABLE-deletion_request.zip`.
