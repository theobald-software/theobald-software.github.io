
### Funktionsbaustein Z_XTRACT_IS_TABLE manuell installieren

1. Baustein anlegen: <br>
Starten Sie die Transaktion SE37 und legen Sie einen neuen Baustein namens Z_XTRACT_IS_TABLE an. Sie können den Baustein in eine bestehende Funktionsgruppe ablegen, oder eine neue Funktionsgruppe dafür anlegen. Dasselbe gilt für die Entwicklungsklasse.
Im Tab *Attribute* stellen sie die Ausführungsart *auf remote aufrufbar*.
![Z-Custom-Funcion-01](/img/content/Z_XTRACT_IS_TABLE00.png){:class="img-responsive" }

2. Import-Parameter - Definieren Sie die Import-Parameter: 
![Z-Custom-Function-02](/img/content/Z_XTRACT_IS_TABLE01.png){:class="img-responsive" }

3. Definieren Sie die Tabellenparameter:
![Z-Custom-Function-03](/img/content/Z_XTRACT_IS_TABLE02.png){:class="img-responsive" }

4. Definieren Sie die Exceptions (Ausnahmen):
![Z-Custom-Function-04](/img/content/Z_XTRACT_IS_TABLE03.png){:class="img-responsive" }

5. Code: Den ABAP-Code finden Sie in der Datei [Z_XTRACT_IS_TABLE.txt](/docs/sap-customizing/Z_XTRACT_IS_TABLE.txt){:download="Z_XTRACT_IS_TABLE"} im Installationsverzeichnis. Sie können den Code per **[Strg+C]** und **[Strg+V]** in den Quellcode-Editor übernehmen.

6. Speichern und Aktivieren Sie den Baustein. 
