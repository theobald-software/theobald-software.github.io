
### WHERE Clause Editor

{% if page.parent != "table-cdc" %}
Der WHERE Clause Editor stellt ein Toolkit zur Verfügung, mit dem WHERE-Bedingungen auch ohne nähere Kenntnisse über die Syntax erstellt werden können.
{% if page.product == "yunio" %}Wechseln Sie zum *Editor mode*, um den WHERE Clause Editor zu öffnen. <br>
![WHERE-Clause-Builder-01](/img/content/yunio/where-clause-editor-mode.png){:class="img-responsive"}{% else %}Klicken Sie auf **[Editor mode]**, um das Toolit zu öffnen.<br>
![WHERE-Clause-Builder-01](/img/content/where-clause-builder.png){:class="img-responsive"}
{% endif %} {% endif %}

Es gibt 2 Optionen, um der WHERE-Bedingung neue Kriterien hinzuzufügen:
- **[Add Criteria]** fügt ein einzelnes Kriterium hinzu. <br>
	- Der Standardaufbau für ein Kriterium mit statischen Werten ist `[Spalte][Operator][Wert]`, z.B. *MARC~WERKS = 1000*.
	{% if page.product != "yunio" and page.parent != "table-cdc" %}- Der Standardaufbau für ein Kriterium mit Parametern ist `[Spalte][Operator][Parameter]`, z.B. *MARC~WERKS = [p_WERKS]*. {% endif %} 
- **[Add Criteria Group]** fügt eine Gruppe hinzu, die mehrere Kriterien beinhaltet.
	- Der Standardaufbau für eine Kriteriengruppe ist `([Spalte1][Operator1][Wert1][Logik][Spalte2][Operator2][Wert2])`, z.B. *(MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')*.

{: .box-tip }
**Tipp:** Kombinieren Sie einzelne Kriterien mit Kriteriengruppen, um komplexe Filter zu erstellen. <br>
Beispiel:
*MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')* extrahiert nur Daten, bei denen die Spalte WERKS einen Wert von 1000 hat und die Spalte PSTAT entweder den Wert 'L' oder 'LB' hat.


#### Komponenten des WHERE Clause Editors

{% if page.product == "yunio" %}
![WHERE-Clause-Builder-Example](/img/content/yunio/where-clause-editor.png){:class="img-responsive"}
{% else %}
![WHERE-Clause-Builder-Example](/img/content/where-clause-builder-2.png){:class="img-responsive"}
{% endif %}

Folgende Komponenten stehen im Editor zur Verfügung:

| Symbol | Komponente    | Funktion          | 
|-----|-------------- |-------------| 
| {% if page.product == "yunio" %}![WHERE-Clause-Builder-Example](/img/content/icons/delete.png){% else %}![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-delete.png){% endif %} | Delete row   | löscht ein Kriterium. | 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-up.png)| Move row up       | ändert die Reihenfolge der Kriterien. Das ausgewählte Kriterium wird um 1 nach oben verschoben. <br>Die Reihenfolge der Kriterien kann auch per Drag&Drop bearbeitet werden.   |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-down.png)| Move row down  | ändert die Reihenfolge der Kriterien. Das ausgewählte Kriterium wird um 1 nach unten verschoben. <br>Die Reihenfolge der Kriterien kann auch per Drag&Drop bearbeitet werden.|  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-column.png)| Column    | fügt die Spalte einer Tabelle hinzu. Klicken Sie auf die Komponente, um eine Spalte aus den verfügbaren Tabellen auszuwählen. | 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-sql.png)| SQL       | fügt eine Open SQL-Anweisung hinzu, siehe [SAP Dokumentation: Open SQL](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/de-de/abenopensql.htm).      |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-operator.png)| Operator  | fügt einen Operator hinzu, z.B. =, <, >, etc. |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-literal.png)| Value | fügt einen statischen Wert vom Typ *String*, *Number*, *Flag* oder *List* hinzu. *List* bietet einen separaten Editor, um Listen vom Typ *String*, *Number* oder *Select* zu erstellen. *Select* ermöglicht die Eingabe einer SELECT-Anweisung. Mehr Informationen zu Listen, finden Sie im Knowledge Base Artikel [Working with Lists in the WHERE-Clause Editor](https://kb.theobald-software.com/tables/where-clause-editor-lists).|
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add.png) | Criteria | fügt der WHERE-Bedingung ein neues Kriterium hinzu. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-group.png) | Group | fügt der WHERE-Bedingung eine neue Gruppe hinzu.| 
{% if page.product != "yunio" and page.parent != "table-cdc" %}| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-param.png)| Parameter | fügt einen zuvor definierten Laufzeitparameter hinzu, siehe [Laufzeitparameter im WHERE Clause Editor](#laufzeitparameter-im-where-clause-editor).|{% endif %} 

{: .box-note }
**Hinweis**: Wenn neue Kriterien hinzugefügt oder bearbeitet werden, werden nur relevante Komponenten angezeigt.
Beispiel: **Operator** ist nur verfügbar, wenn eine Spalte oder eine SQL-Anweisung existiert, auf die ein Operator angewendet werden kann.

#### Komponenten Bearbeiten und Löschen

- Klicken Sie auf eine vorhandene Komponente, um sie zu bearbeiten.
Alle grün markierten Flächen können bearbeitet werden.<br>
- Klicken Sie auf das {% if page.product == "yunio" %}![WHERE-Clause-Builder-Example](/img/content/icons/delete.png) Icon, das eingeblendet wird, wenn Sie über die Komponente hovern,{% else %}(x) Icon über einer Komponente,{% endif %} um die Komponente zu löschen.


### Verwendung von SAP Systemfeldern

{: .box-note }
**Hinweis**: Systemfelder können nur mit SAP NW 7.4 SP5 oder höher und mit den Funktionsbausteinen Z_THEO_READ_TABLE oder /THEO/READ_TABLE verwendet werden.

Sie können [SAP Systemfelder für Datum und Zeit](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/de-DE/abentime_system_fields.htm) verwenden.

*Beispiel:*
1. Im [WHERE-Clause-Editor](#where-clause-editor) wählen Sie eine Spalte vom Typ Datum aus *hier: BUDAT*. 
![img-01](/img/content/table/table_where_syst_field_1.png){:class="img-responsive"}
2. Löschen Sie das Kriterium "Value" und verwenden Sie das Kriterium "SQL".
![img-02](/img/content/table/table_where_syst_field_2.png){:class="img-responsive"}
3. Innerhalb des Kriteriums "SQL" verwenden Sie die unterstützten Systemfelder für Datum und Zeit mit einem vorangestellten "@"-Zeichen, *hier: @sy-datum*.
![img-03](/img/content/table/table_where_syst_field_3.png){:class="img-responsive"}
4. Klicken Sie auf **[Load Live Preview]**, um das Ergebnis zu überprüfen. 
5. Führen Sie eine Extraktion aus. 

