Im Gegensatz zu den meisten anderen Komponenten ist es bei der Xtract QV Report Komponente nötig, einen kundeneigenen Funktionsbaustein im SAP-System zu installieren.<br>
Falls Sie dies nicht selber machen können, bitten Sie einen Kollegen aus Ihrer SAP-Basis-Abteilung, Ihnen zu helfen. Legen Sie zunächst eine Funktionsgruppe (z.B. mit dem Namen ZXTRACT) an, um den Baustein hinzulegen. Legen Sie dann einen neuen Funktionsbaustein an. Der Name sollte Z_XTRACT_IS_REMOTE_REPORT sein, kann aber bei Bedarf auch geändert werden. Definieren Sie den Baustein in  einen Attributen als Remotefähig und legen Sie die Import-, Export- und Tabellenparameter so an, wie in den nachfolgenden Screenshots gezeigt.

![Report-Custom-Function-01](/img/content/Report-Custom-Function-01.jpg){:class="img-responsive"}

![Report-Custom-Function-02](/img/content/Report-Custom-Function-02.png){:class="img-responsive"}

![Report-Custom-Function-03](/img/content/Report-Custom-Function-03.png){:class="img-responsive"}

![Report-Custom-Function-04](/img/content/Report-Custom-Function-04.jpg){:class="img-responsive"}

Den Quellcode kopieren Sie bitte per Strg+C und Strg+V aus der Datei Z_XTRACT_IS_REMOTE_REPORT.txt in den Code-Editor (Reiter  Source Code). Diese Datei finden Sie im Xtract-Installationsverzeichnis. Alternativ können Sie auch den Quellcode [herunterladen]().<br>
Sichern Sie den Baustein und aktivieren Sie ihn. Nun ist er für die Benutzung bereit.<br>
Im Code sind die einzelnen Schritte (Programmausführung, Spoolabruf, Job-Überwachung usw...) entsprechend dokumentiert. So kann der geneigte Leser leicht herausfinden, wie der ABAP Code funktioniert. 

![Report-Custom-Function-Source-Code](/img/content/Report-Custom-Function-Source-Code.jpg){:class="img-responsive"}

**LIST_OUTPUT**

Anstatt den SAP Standard Datentyp TAB512 für den LIST_OUTPUT Tabellen Parameter zu verwenden, können Sie einen eigenen Z-Datentyp erstellen. Das ist notwendig sofern die Output Länge einer Report-Zeile mehr als 512 Zeichen beträgt. Die maximal mögliche Länge beträgt 1023 Zeichen.


![SAPCust-Report-ListOutput](/img/content/SAPCust-Report-ListOutput.jpg){:class="img-responsive"}

**Exceptions**

Achtung: Die Exception LIST_FROM_MEMORY_NOT_FOUND wird geworfen, wenn der Report kein Ergebnis liefert. 

