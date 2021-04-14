Variablen können als benutzerdefinierte (Custom) Laufzeitparameter an Extraktionen übergeben werden.
Das nachfolgende Beispiel zeigt die Verwendung von benutzerdefinierten Variablen als Filterwerte einer WHERE-Bedingung.

In den nachfolgenden Schritten wird die SAP-Standardtabelle T001W (Plants/Branches) verwendet. Die grundlegende Einrichtung einer Tabellenextraktion ist in Abschnitt [Eine neue Extraktion anlegen](../erste-schritte/eine-neue-extraktion-anlegen) beschrieben.

### Erstellung von benutzerdefinierten Variablen

1. Wählen Sie den Tab *WHERE Clause* und geben Sie die benutzerdefinierten Variablen *@PlantLow* und *@PlantHigh* ein, sowie Open-SQL Operatoren, z.B. `T001W~WERKS BETWEEN @PlantLow AND @PlantHigh`.
![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}
2. Bestätigen Sie die Eingabe mit **[OK]**.
3. Klicken Sie auf **[Run]**. Das Fenster 'Run Extraction' öffnet sich.
4. Wechsel Sie zum Tab *Custom* (1) der Laufzeitparameter. Anhand des @-Zeichens werden die Variablen erkannt.
5. Tragen Sie die Werte ein und bestätigen Sie über die Eingabetaste.
![Run-Extraction-Custom-Defined-Parameters](/img/content/Run-Extraction-Custom-Defined-Parameters.png){:class="img-responsive"}
6. Die Werte für die Laufzeitparameter werden in der Extraktions-URL übernommen.
7. Klicken Sie auf **[Run]**, um die Extraktion auszuführen (2).

{: .box-note }
**Hinweis** Das Überschreiben der Variablen mit den Echtwerten wird ebenfalls im Log der Extraktion dokumentiert.

![Extraction-User-Variables-Log](/img/content/Extraction-User-Variables-log.png){:class="img-responsive"}

****
#### Weiterführende Links:
- [XU Custom Parameter in Power BI](../xu-destinationen/Power-BI-Connector/pbi-xu-parameter)
- [Erläuterung des QlikSense Datenlade-Skripts](../xu-destinationen/qlik/einstellungen_in_qlik_sense#erläuterung-des-qliksense-datenlade-skripts)
- [WHERE Bedingung](../table/where-bedingung)
- [Extraktion einplanen](./extraktion_einplanen)
