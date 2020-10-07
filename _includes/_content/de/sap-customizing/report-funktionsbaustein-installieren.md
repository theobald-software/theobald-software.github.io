Die Report Komponente benötigt die Installation eines Z-Funktionsbausteins auf Ihrem SAP-System.<br>

Falls Sie den Z-Funktionsbaustein nicht selbst installieren können, bitten Sie einen Kollegen aus Ihrer SAP-Basis-Abteilung, Ihnen zu helfen. 


### Installation mit Hilfe von SAP Transport
Sie können den Funktionsbaustein mit Hilfe des mitgelieferten Transportauftrags (*thtrans.zip*) installieren. *thtrans.zip* finden Sie im Unterverzeichnis ABAP des Programmverzeichnisses: `C:\Program Files\XtractProduct\ABAP` (standartmäßig).

### Manuelle Installation

1. Legen Sie eine Funktionsgruppe (z.B. mit dem Namen ZXTRACT) an, um den Baustein hinzulegen. 
2. Legen Sie einen neuen Funktionsbaustein an. Der Name sollte Z_XTRACT_IS_REMOTE_REPORT lauten, kann aber bei Bedarf auch geändert werden. 
3. Setzen Sie das Attribut *remote enabled* (remotefähig) auf true. 
4. Legen Sie die Import-, Export- und Tabellenparameter entsprechend den nachfolgenden Screenshots.

![Report-Custom-Function-01](/img/content/Report-Custom-Function-01.png){:class="img-responsive"}

![Report-Custom-Function-02](/img/content/Report-Custom-Function-02.png){:class="img-responsive"}

![Report-Custom-Function-03](/img/content/Report-Custom-Function-03.png){:class="img-responsive"}

![Report-Custom-Function-04](/img/content/Report-Custom-Function-04.png){:class="img-responsive"}

5. Kopieren Sie den Quellcode per **[Strg+C]** und **[Strg+V]** aus der Datei Z_XTRACT_IS_REMOTE_REPORT.txt in den Code-Editor (Tab *Source Code*). 
6. Sichern und aktivieren Sie den Baustein. <br>

Wenn Sie daran interessiert sind, wie der Funktionsbaustein funktioniert, schauen Sie sich den Quellcode an. Jeder Schritt (Ausführung, Job-Überwachung, Spool-Abruf usw.) ist im Quellcode kommentiert.
![Report-Custom-Function-Source-Code](/img/content/Report-Custom-Function-Source-Code.png){:class="img-responsive"}


### LIST_OUTPUT

Anstatt den SAP Standard Datentyp TAB512 für den LIST_OUTPUT Tabellen Parameter zu verwenden, können Sie einen eigenen Z-Datentyp erstellen. Das ist notwendig sofern die Output Länge einer Report-Zeile mehr als 512 Zeichen beträgt. Die maximal mögliche Länge beträgt 1023 Zeichen.
![SAPCust-Report-ListOutput](/img/content/SAPCust-Report-ListOutput.png){:class="img-responsive"}


{: .box-warning}
**Hinweis: Exceptions (Ausnahmen)** <br>
Die Exception LIST_FROM_MEMORY_NOT_FOUND wird geworfen, wenn der Report kein Ergebnis liefert.



