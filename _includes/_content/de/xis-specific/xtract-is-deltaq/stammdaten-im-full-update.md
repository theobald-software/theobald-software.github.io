### Schritt 1: OLTP Source finden (1)

Suchen Sie im Editor "Look Up OLTP Source" mit Hilfe der **[Suche]** (Lupensymbol) nach **OLTP Source** (Datenquelle). Bei Bedarf können Sie Wildcards (*) verwenden.

Das folgende Beispiel zeigt den Download von Materialstammdaten aus der DataSource *0MATERIAL_ATTR*.

![search-ds-mat-attr](/img/content/search-ds-mat-attr.png){:class="img-responsive"}

![search-ds-mat-attr](/img/content/search-ds-mat-attr2.png){:class="img-responsive"}

### Schritt 2: Aktualisierungsmodus einstellen (2)

**Full Update** fordert alle Daten an, die den von Ihnen eingestellten Auswahlkriterien entsprechen. Um eine echte **Delta**-Prozedur zum Laufen zu bringen, muss Delta zunächst initialisiert werden, siehe unter [Delta](./child-delta).<br>
Um eine Übersicht zu erhalten, welche Aktualisierungsmodi zur Verfügung stehen, siehe unter [Update Mode](./update-modus).

### Schritt 3: Spalten auswählen

Setzen Sie die Häkchen neben den Spalten, die Sie extrahieren möchten. Beispiel:

![Deltaq-Define-Data-Source-Filled](/img/content/Deltaq-Define-Data-Source-Filled.png){:class="img-responsive"}

### Schritt 4: Aktivierung

Wenn die Validierung ohne Fehler abgeschlossen wurde, klicken Sie auf **[Activate]**, um diese Extraktion in SAP zu aktivieren.<br> 
Nach erfolgreicher Aktivierung erscheinen im Laufe einiger Sekunden die entsprechenden Statusmeldungen:

![Deltaq-System-Parameters-Info](/img/content/Deltaq-System-Parameters-Info.png){:class="img-responsive"}

![Deltaq-Generation-Successfull-Info](/img/content/Deltaq-Generation-Successfull-Info.png){:class="img-responsive"}

Die Aktivierung muss nur für die Modi **Delta**, **Full** oder **Init** durchgeführt werden.
Löschen Sie die alte Aktivierung, bevor Sie eine neue starten, siehe unter **[Extraktionseinstellungen]**.
Nehmen Sie keine Aktivierung für den Modus **Delta Update** vor. 

### Variablen und Filter

**Variablen** können für die folgenden Einstellungen verwendet werden:
* **Log. Destination**, 
* **Gateway Host**,
* **Gateway Service**,
* **Program ID**.  

Der **Update Mode** kann auch über eine Variable gesteuert werden, siehe unter **[Extraktionseinstellungen]**.

**Filter** siehe unter [Datasource Parameters](./datasource-parameter).
 
Im Falle von Fehlern siehe [DeltaQ Troubleshooting Guide](https://kb.theobald-software.com/troubleshooting/deltaq-troubleshooting-guide) (in Englisch).