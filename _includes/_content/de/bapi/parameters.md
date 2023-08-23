Jeder Import, Export und Changings-Parameter kann einen der folgenden Darstellungen haben:

- ein Skalarfeld (z.B., Zeichen, Datum, Uhrzeit, Zahl, Menge, etc.)
- eine Struktur, die mehrere Komponenten beinhaltet
- eine Tabelle

### Import-Parameter

**Imports** repräsentiert die Eingabewerte, die vom Client an SAP gesendet werden. 
Im Tab **Imports** können Sie Eingabeparameter definieren, die entweder als Skalarwerte (1) oder Strukturen (2) übergeben werden.

{% if page.product == "xtract-for-alteryx" %}![Define-Bapi-Data-Source](/img/content/xfa/XfA-BAPI-Parameters.png){:class="img-responsive"}{% elsif page.product == "xtract-is" %}![Define-Bapi-Data-Source](/img/content/xis/XtractBAPI_ImportParams.png){:class="img-responsive"} {% else %}![Define-Bapi-Data-Source](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"} {% endif %}

Um die Filterfunktion zu verwenden, geben Sie in der Kopfzeile der Spalten **Name** und **Description** Suchbegriffe ein.<br>

#### Skalarparameter hinzufügen (1)

Übergeben Sie Skalarparameter über eine der folgenden Optionen: 
- als statischer Wert - ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol oder kein Symbol.
- {% if page.product == "xtract-is" %}als SSIS-Variable / Parameter - ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) Symbol. Diese Option ist nur verfügbar, wenn SSIS-Variablen angelegt sind.{% else %} als Laufzeitparameter - ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) Symbol, siehe [Laufzeitparameter](./edit-runtime-parameters).{% endif %}

Klicken Sie auf das Symbol neben dem Eingabefeld, um zwischen statischen Werten und {% if page.product == "xtract-is" %} SSIS-Variablen{% else %} Laufzeitparametern{% endif %} zu wechseln.
Wenn Sie {% if page.product == "xtract-is" %} SSIS-Variablen{% else %} Laufzeitparameter{% endif %} verwenden, stellen Sie sicher, dass die Eingabe den passenden Datentyp hat. {% if page.product == "xtract-is" %}Beispiel:

![Assigning-SSIS-Variables](/img/content/xis/ssis-variables.gif){:class="img-responsive" style="border:1px solid black;"}
{% endif %}

{: .box-note }
**Note:** Parameter, die von SAP vorausgefüllt sind, werden in einer grauen Schrift angezeigt. <br>
Um diese Parameter zu deaktivieren, haken Sie die Checkbox neben dem Parameter an und lassen Sie das Feld frei.

#### Strukturen als Parameter hinzufügen (2)

Wenn eine Struktur verfügbar ist, können Sie ihr einzelne Elemente hinzufügen wie bei Skalarfeldern. 
Der gesamten Struktur nur einen Wert zuzuweisen ist nicht möglich. 

1. Klicken Sie auf ![pen](/img/content/icons/pen.png). Das Fenster "Edit Structures" öffnet sich.
2. Geben Sie unter **Values** statische Werte ein ( ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol oder kein Symbol) oder weisen Sie den Feldern {% if page.product == "xtract-is" %}SSIS-Variablen / Parameter{% else %} Laufzeitparameter{% endif %} zu ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) Symbol).<br>
![BAPI import parameters](/img/content/BAPI-Edit-Structure.png){:class="img-responsive"}

### Export-Parameter
**Exports** repräsentiert die Ausgabewerte, die von SAP zurück an den Client gesendet werden, nachdem die Funktion ausgeführt wurden.<br>
Im Tab **Exports** können Sie Ausgabeparameter definieren, die entweder als Skalarwerte oder Strukturen übergeben werden.

#### Der Ausgabe Elemente hinzufügen
Aktivieren Sie die Checkbox in der Ausgabespalte, um ein Element der Ausgabe hinzuzufügen.

{% if page.product == "xtract-for-alteryx" %}![BAPI export parameters](/img/content/xfa/XfA-Bapi-Exports-Edit.png){:class="img-responsive"} {% elsif page.product == "xtract-is" %}![Define-ExportParams](/img/content/xis/XtractBAPI_ExportParams.png){:class="img-responsive"}{% else %}![BAPI export parameters](/img/content/Bapi-Exports-Edit.png){:class="img-responsive"} {% endif %}

Um die Filterfunktion zu verwenden, geben Sie in der Kopfzeile der Spalten **Name** und **Description** Suchbegriffe ein.<br>

### Changings-Parameter

**Changings** repräsentiert Parameter, die sowohl für Eingabe als auch Ausgabe verwendet werden können.<br>
Im Tab **Changings** können Sie Import und Export-Parameter definieren. 

### Tables-Parameter

**Tables** enthält Parameter mit einer Tabellenstruktur, die aus mehreren Zeilen besteht. Tabellen können als Eingabe und Ausgabe verwendet werden.

Im Tab **Tables** können Sie Tabellen-Parameter für Import und Export zu und von einer SAP BAPI definieren.
Tabellen repräsentieren hier eine Struktur mehrerer Zeilen desselben Datentyps.

Um die Filterfunktion zu verwenden, geben Sie in der Kopfzeile der Spalten **Name** und **Description** Suchbegriffe ein.<br>

{: .box-note }
**Hinweis:** Nur **5** Tabellen stehen für einen parallelen Export zur Verfügung.

- Klicken Sie auf ![glasses](/img/content/icons/glasses.png), um die Namen und Datentypen der Tabellenfelder zu prüfen (1).<br>
- Aktivieren Sie die Checkbox (2) neben den aufgelisteten Tabellen, um sie der Ausgabe hinzuzufügen.<br>
- Klicken Sie auf ![pen](/img/content/icons/pen.png), um die Tabelle zu bearbeiten (3).

{% if page.product == "xtract-for-alteryx" %}![BAPI table](/img/content/xfa/XfA-Bapi-Table-Type.png){:class="img-responsive"} {% elsif page.product == "xtract-is" %}![Define-ExportParams](/img/content/xis/XtractBAPI_TableParams.png){:class="img-responsive"} {% else %}![BAPI table](/img/content/Bapi-Table-Type.png){:class="img-responsive"} {% endif %}

### Auf Metadaten der Tabelle zugreifen (1)

Klicken Sie auf ![glasses](/img/content/icons/glasses.png), um die Metadaten der ausgewählten Tabelle anzuzeigen, inklusive der Namen und Datentypen aller Felder.
{% if page.product != "xtract-for-alteryx" %}
Wenn der Funktionsbaustein in SAP bearbeitet wurde, aktualisieren Sie die Daten über **Refresh metadata**.<br>
![BAPI table metadata](/img/content/BAPI-Table-Metadata.png){:class="img-responsive"}
{% endif %}

### Der Ausgabe Tabellen hinzufügen (2)

Aktivieren Sie die Checkbox in der Ausgabespalte, um Tabellen der Ausgabe hinzuzufügen.
![BAPI table output](/img/content/BAPI-Table-Output.png){:class="img-responsive"}

### Tabellen bearbeiten (3)

1. Klicken Sie auf das ![pen](/img/content/icons/pen.png) Symbol, um eine Tabelle zu bearbeiten. Das Fenster "Edit Table Contents" öffnet sich.
2. Klicken Sie auf **[Add]**, um neue Parameter hinzuzufügen.
3. Geben Sie Werte oder {% if page.product == "xtract-is" %} SSIS-Variablen{% else %} Laufzeitparameter{% endif %} an.<br>
Wenn Sie {% if page.product == "xtract-is" %} SSIS-Variablen{% else %} Laufzeitparameter{% endif %} verwenden, stellen Sie sicher, dass die Eingabe den passenden Datentyp hat.<br>
![BAPI edit table](/img/content/BAPI-Edit-Table-Contents.png){:class="img-responsive"}
4. Klicken Sie auf **[Remove]**, um die Eingabezeile zu entfernen.

{% if page.product == "xtract-is" %}
### Tabellen Mappen

Wenn Sie Tabellen an die Xtract BAPI Komponente übergeben, wird automatisch ein Datenmapping durchgeführt.

![BAPI table mapping](/img/content/ssis-write-xtractis-fuba-02.png){:class="img-responsive"}

Damit die Tabellenfelder korrekt zugewiesen werden, müssen folgende Voraussetzungen erfüllt sein:

- Die Spaltennamen der Eingangstabelle müssen mit denen in der Xtract BAPI Komponente überein stimmen.
- Die Datentypen in der Eingangstabelle müssen mit denen in der Xtract BAPI Komponente übereinstimmen

Klicken Sie auf das ![glasses-icon](/img/content/icons/glasses.png) Symbol neben einer Tabelle, um die Spaltennamen und Datentypen in der Tabelle einzusehen.

{: .box-tip }
**Tipp:** Wenn die Spaltennamen und / oder die Datentypen der Eingangstabelle nicht mit der Xtract BAPI Tabelle übereinstimmt, fügen Sie eine *Derived Column* Komponente hinzu, um die Eingangsdaten zu konvertieren.

{% endif %}

### Exceptions - Ausnahmen

**Exceptions** bezieht sich auf die ABAP Exceptions / Fehlermeldungen eines BAPIs. 
Wenn zur Laufzeit eine Ausnahme auftritt, gibt {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} eine entsprechende Fehlermeldung zurück.

- Standardmäßig resultieren alle Ausnahmen in Fehlern, wenn die {% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%}Xtract {% endif %}BAPI Komponente ausgeführt wird.
- Um Ausnahmen zur Laufzeit zu ignorieren, deaktivieren Sie die Ausnahmen im Tab **Extractions**.

![BAPI edit table](/img/content/extractors.bapi/XU-BAPI-Exceptions.png){:class="img-responsive"}

