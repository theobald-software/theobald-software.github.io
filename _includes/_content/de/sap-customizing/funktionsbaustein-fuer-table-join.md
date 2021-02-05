{: .box-note }
**Hinweis** Die Table-Join Komponente wurde als *deprecated* (veraltet) gekennzeichnet. Verwenden Sie daher die Table-Komponente mit dem Z-Baustein Z_THEO_READ_TABLE, um SAP-Tabellen zu joinen.

### Manuelle Installation des Funktionsbausteins Z_XTRACT_IS_TABLE_JOIN

Die Table Join-Komponente dient dazu, mehrere Tabellen oder Views auf SAP-Seite zusammenzufassen (Join).  

Voraussetzung dafür ist die Installation eines Z-Funktionssbausteins auf der SAP-Seite.

### DDIC-Strukturen anlegen

In diesem Schritt müssen fünf Strukturen über die Transaktion *SE11* angelegt werden, siehe nachfolgende Screenshots. <br>
Die benötigten Textdateien sind als Pfade gekennzeichnet.

`"C:\Program Files\[Xtract Product]\ABAP\Z_XTRACT_IS_TABLE_JOIN - ZXTRACTTABLEFIELDS.txt"`
![Z_XTRACT_TABLE_JOIN_01](/img/content/table_join_structure1.png){:class="img-responsive"}
`"C:\Program Files\[Xtract Product]\ABAP\Z_XTRACT_IS_TABLE_JOIN - ZXTRACTTABLEJOINDEF.txt"`
![Z_XTRACT_TABLE_JOIN_02](/img/content/table_join_structure2.png){:class="img-responsive"}
`"C:\Program Files\[Xtract Product]\ABAP\Z_XTRACT_IS_TABLE_JOIN - ZXTRACTTABLECODELINE.txt"`
![Z_XTRACT_TABLE_JOIN_03](/img/content/table_join_structure3.png){:class="img-responsive"}
`"C:\Program Files\[Xtract Product]\ABAP\Z_XTRACT_IS_TABLE_JOIN - ZXTRACTRANGE.txt"`
![Z_XTRACT_TABLE_JOIN_04](/img/content/table_join_structure4.png){:class="img-responsive"}
![Z_XTRACT_TABLE_JOIN_05](/img/content/table_join_structure5.png){:class="img-responsive"}

### Funktionsbaustein anlegen

1. Auruf der Transaktion *SE80 - Object Navigator* zur Erstellung einer neuen Funktionsgruppe, z.B. ZXTRACT
![Create_new_function_group](/img/content/create_function_group.png){:class="img-responsive"}
2. Aufruf der Transaktion *SE37* zur Anlage eines neuen Funktionsbausteins. Der Name sollte *Z_XTRACT_IS_TABLE_JOIN* lauten, kann aber bei Bedarf auch geändert werden. 
3. Den Processing Type des Bausteins auf *Remote-Enabled Module* (remotefähig) setzen. 
![Table-Join_function_attributes](/img/content/table-join_attributes.png){:class="img-responsive"}
4. Anlage der Bausteinsignatur gemäß nachfolgender Screenshots.
![Table-Join_function_import](/img/content/table-join_import.png){:class="img-responsive"}
![Table-Join_function_export](/img/content/table-join_export.png){:class="img-responsive"}
![Table-Join_function_tables](/img/content/table-join_tables.png){:class="img-responsive"}
5. Kopieren Sie den Quellcode per **[Ctrl+C]** und **[Ctrl+V]** aus der Datei `"C:\Program Files\[Xtract Product]\ABAP\Z_XTRACT_IS_TABLE_JOIN.txt"` in den Code-Editor - Tab *Source Code*.
![Table-Join_function_source](/img/content/table-join_source.png){:class="img-responsive"}
6. Kopieren Sie den Quellcode per **[Ctrl+C]** und **[Ctrl+V]** aus der Datei `"C:\Program Files\[Xtract Product]\ABAP\Z_XTRACT_IS_TABLE_JOIN - Global Data.txt"` in den Code-Editor **Goto > Global Data**.
7. Sicherung sowie Aktivierung des Bausteins.

