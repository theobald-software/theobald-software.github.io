Jeder Import, Export und Changings-Parameter kann einen der folgenden Darstellungen haben:

- ein Skalarfeld (z.B., Zeichen, Datum, Uhrzeit, Zahl, Menge, etc.)
- eine Struktur, die mehrere Komponenten beinhaltet
- eine Tabelle

### Import-Parameter

**Imports** repräsentiert die Eingabewerte, die vom Client an SAP gesendet werden. 
Im Tab **Imports** können Sie Eingabeparameter definieren, die entweder als Skalarwerte oder Strukturen übergeben werden.

![BAPI import parameters](/img/content/xis/XtractBAPI_ImportParams.png){:class="img-responsive"}

Um die Filterfunktion zu verwenden, geben Sie in der Kopfzeile der Spalten **Name** und **Description** Suchbegriffe ein.<br>

#### Skalarparameter hinzufügen (1)

Es gibt zwei Möglichkeiten Skalarfelder einzustellen: 
- als statischer Wert (z.B. 1141)
- als dynamischen Wert, der über einen [Parameter](./parametrisierung) während der Laufzeit übergeben wird.

Wenn Sie dynamische Laufzeitparameter verwenden, stellen Sie sicher, dass die Eingabe den passenden Datentyp hat.<br>
Wenn Sie konstante Skalarwerte eingeben, werden Eingaben des falschen Datentyps automatisch rot markiert.

{: .box-note }
**Note:** Parameter, die von SAP vorausgefüllt sind, werden in einer grauen Schrift angezeigt. <br>
Um diese Parameter zu deaktivieren, haken Sie die Checkbox neben dem Parameter an und lassen Sie das Feld frei.

#### Strukturen als Parameter hinzufügen (2)

Wie bei Skalarfeldern werden jedem Skalarfeld, das zu einer Struktur gehört, Werte zugewiesen. 
Der gesamten Struktur nur einen Wert zuzuweisen ist nicht möglich. 

Wenn eine Struktur verfügbar ist, können Sie ihr Elemente hinzuzufügen.
1. Klicken Sie auf das ![pen](/img/content/icons/pen.png) Symbol. Das Fenster "Edit Structures" öffnet sich.
2. Geben Sie unter **Values** Werte oder Parameter ein.

![BAPI import parameters](/img/content/BAPI-Edit-Structure.png){:class="img-responsive"}

### Export-Parameter
**Exports** repräsentiert die Ausgabewerte, die von SAP zurück an den Client gesendet werden, nachdem die Funktion ausgeführt wurden.

Im Tab **Exports** können Sie Ausgabeparameter definieren, die entweder als Skalarwerte oder Strukturen übergeben werden.

#### Der Ausgabe Elemente hinzufügen
Aktivieren Sie die Checkbox in der Ausgabespalte, um ein Element der Ausgabe hinzuzufügen.

![BAPI export parameters](/img/content/xis/XtractBAPI_ExportParams.png){:class="img-responsive"}

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

![BAPI table](/img/content/xis/XtractBAPI_TableParams.png){:class="img-responsive"}

#### Auf Metadaten der Tabelle zugreifen (1)

Klicken Sie auf das ![glasses](/img/content/icons/glasses.png) Symbol, um die Metadaten der ausgewählten Tabelle anzuzeigen, inklusive der Namen und Datentypen aller Felder.
Wenn der Funktionsbaustein in SAP bearbeitet wird, aktualisieren Sie die Daten über **[Refresh metadata**.<br>

![BAPI table metadata](/img/content/BAPI-Table-Metadata.png){:class="img-responsive"}


#### Der Ausgabe Tabellen hinzufügen (2)

Aktivieren Sie die Checkbox in der Ausgabespalte, um Tabellen der Ausgabe hinzuzufügen.
![BAPI table output](/img/content/BAPI-Table-Output.png){:class="img-responsive"}

#### Tabellen bearbeiten (3)

1. Klicken Sie auf das ![pen](/img/content/icons/pen.png) Symbol, um eine Tabelle zu bearbeiten. Das Fenster "Edit Table Contents" öffnet sich.
2. Klicken Sie auf **[Add]**, um neue Parameter hinzuzufügen.
3. Geben Sie Werte oder Parameter ein.<br>
Wenn Sie dynamische Laufzeitparameter verwenden, stellen Sie sicher, dass die Eingabe den passenden Datentyp hat.<br>
Wenn Sie konstante Skalarwerte eingeben, werden Eingaben des falschen Datentyps automatisch rot markiert.<br>
![BAPI edit table](/img/content/BAPI-Edit-Table-Contents.png){:class="img-responsive"}
4. Klicken Sie auf **[Remove]**, um die Eingabezeile zu entfernen.