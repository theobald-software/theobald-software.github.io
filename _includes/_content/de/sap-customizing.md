Um mögliche Einschränkungen bei der Extraktion von Tabellen zu umgehen oder andere Xtract Extraktionstypen zu nutzen, müssen Sie in Ihrem SAP-System bestimmte Einstellungen vornehmen oder unsere Z-Funktionsbausteine installieren. In diesem Abschnitt stellen wir die Schritte vor, welche Sie für die jeweiligen Xtract Komponente in Ihrem SAP-System durchführen müssen.


**Installation eines Z-Funktionsbausteins auf dem SAP-System**

*Table*: In den meisten Fällen ist die Installation eines Z-Funktionsbausteins notwendig. Siehe [Funktionsbaustein für Tabellen-Extraktion](https://help.theobald-software.com/de/xtract-is/sap-customizing/funktionsbaustein-fuer-table-extraktion) . 

*Table Join*: Die Installation eines Z-Funktionsbausteins ist notwendig, siehe [Funktionsbaustein für Table-Join](https://kb.theobald-software.com/sap/installation-of-the-function-module-z_xtract_is_table_join).

*Report*: Die Installation eines Z-Funktionsbausteins ist notwendig, siehe [Report-Funktionsbaustein installieren](./sap-customizing/report-funktionsbaustein-installieren).

Um die Z-Funktionsbausteine manuell zu installieren, folgen Sie den Anweisungen in unserem Knowledgebase-Artikel (tbd).

Alternativ können Sie die Funktionsbausteine mit Hilfe der mitgelieferten Transportaufträge installieren, die Sie im Unterordner ABAP des Xtract Installationsordners finden.<br>

* **thtrans.zip** (enthält die Z-Funktionsbausteine für *Report* und *Table Join*)
* **Z_THEO_READ_TABLE.zip** (enthält einen Z-Funktionsbaustein für *Table*, für SAP-Releases >= 740SP05) 
* **Z_THEO_READ_TABLE-before_740SP05.zip** (enthält einen Z-Funktionsbaustein für *Table*, für SAP-Releases < 740SP05) 


Weiterführende Informationen zur Installation eines Transportauftrags finden Sie im folgenden [Knowledgebase-Artikel](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)

**Konfiguration (Customizing)**

Für die folgenden Komponenten ist ein Customizing auf dem SAP-System notwendig. 

*OHS*: Siehe [Vorbereitung für OHS im BW](https://help.theobald-software.com/de/xtract-is/sap-customizing/vorbereitung-fuer-ohs-im-bw).

*DeltaQ*: Refer to [Customizing für DeltaQ](https://help.theobald-software.com/de/xtract-is/sap-customizing/customizing-fuer-deltaq).
