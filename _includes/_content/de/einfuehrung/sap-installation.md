
### Installation und Konfiguration auf SAP

|Komponente             | SAP Release           | Anforderungen an das SAP-System                                                |
|----------------------|-----------------------|-------------------------------------------------------------------------------|
|Table                 | Rel. > 4.0B       | Die Installation des Funktionsbausteins [/THEO/READ_TABLE](../sap-customizing/funktionsbaustein-fuer-table-extraktion#installation-von-theoread_table) ist empfohlen, aber nicht notwendig. |
|BAPI & Function Module| Rel. > 4.0B       | keine Anforderungen - nur remote-enabled functions werden unterstützt.                            |
|Query                 | Rel. > 4.0B       | keine Anforderungen.                                                                        |
|Report                | Rel. > 4.0B       | Die Installation des Funktionsbausteins [Z_XTRACT_IS_REMOTE_REPORT](../sap-customizing/report-funktionsbaustein-installieren)ist erforderlich.                        |
|BW Cube & InfoProvider| Rel. > BW 3.1     | keine Anforderungen.                                                                         |
|BW Query              | Rel. > BW 3.1     | keine Anforderungen **Hinweis**: Aktivieren Sie die Option "Allow External Access to this Query".                  |
|Hierarchy             | Rel. > BW 3.1     | keine Anforderungen.                                                                         |
|ODP                   | SAP_BASIS >= 730, BW >= 7,3X   | keine Anforderungen.                                                            |
|DeltaQ                | Rel. > 4.6A       | Customizing ist erforderlich, siehe [Customizing für DeltaQ](../sap-customizing/customizing-fuer-deltaq).                         |
|OHS                   | Rel. > BW 3.5     | Customizing ist erforderlich, siehe [Customizing für OHS im BW](../sap-customizing/vorbereitung-fuer-ohs-im-bw).                                                |
{% if page.product != "xtract-is" %} |Table CDC            | Rel. 7.4 oder höher     | Die Installation mehrerer Funktionsbausteinen ist erforderlich, siehe [Table CDC Voraussetzungen](../table-cdc#voraussetzungen).    |{% endif %}


Informationen zur Installation der kundeneigenen Funktionsbausteine und zum SAP-Customizing finden Sie im Abschnitt [SAP-Customizing](../sap-customizing).
