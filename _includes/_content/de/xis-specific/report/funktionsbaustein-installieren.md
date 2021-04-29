Falls Sie dies nicht selber machen können, bitten Sie einen Kollegen aus Ihrer SAP-Basis-Abteilung, Ihnen zu helfen. Legen Sie zunächst eine Funktionsgruppe (z.B. mit dem Namen ZXTRACT) an, um den Baustein anzulegen. Legen Sie dann einen neuen Funktionsbaustein an. Der Name sollte Z_XTRACT_IS_REMOTE_REPORT sein, kann aber bei Bedarf auch geändert werden. Definieren Sie den Baustein in seinen Attributen als remotefähig und legen Sie die Import-, Export- und Tabellenparameter so an, wie in den nachfolgenden Screenshots gezeigt.

![Report-CustomFunction-01](/img/content/Report-CustomFunction-01.png){:class="img-responsive"}

![Report-CustomFunction-02](/img/content/Report-CustomFunction-02.png){:class="img-responsive"}

![Report-CustomFunction-03](/img/content/Report-CustomFunction-03.png){:class="img-responsive"}

Den Quellcode kopieren Sie bitte per Strg+C und Strg+V aus der Datei Z_XTRACT_IS_REMOTE_REPORT.txt in den Code-Editor (Tab Source Code). Diese Datei finden Sie im Xtract-Installationsverzeichnis. Sichern Sie den Baustein und aktivieren Sie ihn. Nun ist er für die Benutzung bereit.<br>
Im Code sind die einzelnen Schritte (Programmausführung, Spoolabruf, Job-Überwachung usw...) entsprechend dokumentiert. So kann der geneigte Leser leicht herausfinden, wie der ABAP Code funktioniert.