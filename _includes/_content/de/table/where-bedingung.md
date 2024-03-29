
### Verwendung einer WHERE-Bedingung

{% if page.product == "xtract-universal" or page.product == "board-connector" %}1. Öffnen Sie eine Table(CDC) Extraktion. {% else %}1. Öffnen Sie eine Xtract Table Komponente.{% endif %}
2. Navigieren Sie zum Tab *WHERE Clause*.
{% if page.parent == "table-cdc" %}3. Geben Sie über den [WHERE Clause Editor](#where-clause-editor) die WHERE-Bedingung ein {% else %}3. Geben Sie die WHERE-Bedingung entweder über die [manuelle Texteingabe](#syntax-der-where-bedingung) oder über den [WHERE Clause Editor](#where-clause-editor) ein.{% endif %}
4. Um die Ergebnisse im Abschnitt **Preview** anzuzeigen, klicken Sie auf **[Load live preview]**.

{% if page.parent != "table-cdc" %}

{: .box-note }
**Hinweis:** Wenn der Feldname nicht eindeutig ist, muss der Tabellenname dem Feldnamen vorangestellt werden, z.B. MAKT~MATNR. Dies kann z.B. bei der Extraktion mehrerer Tabellen der Fall sein.
{% endif %}

{% if page.product == "xtract-for-alteryx" %}
![Extraction-Settings-01](/img/content/xfa/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% elsif page.product == "xtract-is" and page.parent == "xtract-is-table"%}
![Extraction-Settings-01](/img/content/xis/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% elsif page.product == "xtract-is" and page.parent == "table-cdc" %}
![Extraction-Settings-01](/img/content/tablecdc/xis-Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% else %}
{% if page.parent == "table-cdc" %}
![Extraction-Settings-01](/img/content/tablecdc/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% else %}
![Extraction-Settings-01](/img/content/xu/Table-Extraction-Where-Clause.png){:class="img-responsive"}
{% endif %} {% endif %}

{% if page.parent != "table-cdc" %}
**[Text mode]** <br>
Ermöglicht die direkte Eingabe einer WHERE-Bedingung. **[Text mode]** ist der Standart-Eingabemodus.

**[Editor mode]** <br>
Öffnet den WHERE Clause Editor. Der WHERE Clause Editor bietet ein Toolkit, um WHERE-Bedingungen zu erstellen, siehe [WHERE Clause Editor](#where-clause-editor).
{% endif %}

{% if page.product == "xtract-for-alteryx" %}
**[Extraction Settings]** <br>
Öffnet das Menü für die Extraktionseinstellungen, siehe [Extraktionseinstellungen](./extraktionseinstellungen).

**[Edit Parameters]** <br>
Öffnet das Menü für Laufzeitparameter, siehe [Laufzeitparameter im WHERE Clause Editor](./edit-runtime-parameters#laufzeitparameter-im-WHERE-Clause-editor)
{% endif %}

**[Load live preview]** <br>
Ermöglicht eine Echtzeit-Vorschau der Extraktionsdaten ohne dafür die Extraktion auszuführen. <br>
Daten mit Aggregatfunktionen lassen sich auch als Vorschau anzeigen. 

{% if page.parent != "table-cdc" %}
**[Count rows]** <br>
Gibt die Anzahl der Zeilen/Datensätze einer Extraktion aus unter Berücksichtigung der hinterlegten WHERE- und HAVING-Bedingungen. 
{% endif %}

{% if page.product != "xtract-for-alteryx" %}
**[Refresh Metadata]** <br>
Durchführung eines erneuten Lookups auf die selektierte(n) Tabelle(n). Bestehende Mappings und Feldselektionen bleiben dabei erhalten, anders als beim erneuten Hinzufügen.<br>
Die *Refresh Metadata* Funktionalität kann z.B. notwendig sein, wenn eine Tabelle SAP-seitig angepasst, ein anderes Quellsystem angebunden, oder ein Update des Quellsystems durchgeführt wurde. In solchen Fällen kann es zu Datenschiefständen kommen, die durch diese Funktion bereinigt werden.   
{% endif %}

<!--- Open TableCDC condition-->
{% if page.parent != "table-cdc" %}
### Einschränkungen bei WHERE-Bedingungen

{: .box-note }
**Hinweis:** 
Bei Verwendung von Table Joins können Felder der rechten Tabelle eines LEFT OUTER JOIN erst ab SAP-Release 7.40, SP05 eingeschränkt werden. <br>

Wenn Ihr SAP-System älter als Release 7.40, SP05 ist, erscheint folgender Fehler:
*RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN*<br>
(Unzulässiger Zugriff auf die rechte Tabelle eines LEFT OUTER JOIN)

Weitere Informationen über die Änderungen in Release 7.40, SP05 erhalten Sie auf der [SAP Helpseite](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/de-DE/abennews-740_sp05-open_sql.htm#!ABAP_MODIFICATION_5@5@).
<!--- Close TableCDC condition-->
{% endif %}