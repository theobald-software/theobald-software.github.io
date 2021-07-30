### Eine OHS finden
1. Im Hauptfenster der Komponente klicken Sie auf **[Suche]** (Fernglassymbol).
Der Dialog "Look Up Infospoke/Destination" öffnet sich.
![Look-Up-Infospoke-Destination](/img/content/Look-Up-Infospoke-Destination.png){:class="img-responsive"}

2. Sie können entweder nach **InfoSpoke**, **Destination** oder **Process Chain** suchen. Sie können Platzhalter verwenden(*), wenn gewünscht.

{:.box-warning}
**Achtung!**<br> Eine Selektion nach Prozessketten ist nur möglich, wenn die jeweilige Prozesskette einen InfoSpoke enthält.

3. Klicken Sie auf **[OK]**, um die Auswahl zu bestätigen.
Nach der Selektion werden alle Metadaten vom BW abgerufen und im Editor angezeigt.

![Open-Hub-Service-Data-Source](/img/content/Open-Hub-Service-Data-Source.png){:class="img-responsive"}

Sie können für den Ausführungsmodus (Execution Mode) einen der folgenden Werte wählen: 

**P - Trigger Process Chain**
Die angegebene Prozesskette wird gestartet, die Extraktion durchgeführt und nach Beendigung der Extraktion werden die Daten paketweise extrahiert.

**E – Extract Only**
Es wird weder eine Prozesskette gestartet, noch wird auf eine Extraktionsbenachrichtigung gewartet. Die im Feld *Request ID* eingetragene Request ID wird genutzt, um die Daten abzurufen, die sich hinter dem jeweiligen Request verbergen. Diese Option ist dann sinnvoll, wenn Sie beispielsweise einen abgebrochenen Request neu starten möchten. Es können nur Daten des letzten Requests der OHS Destination extrahiert werden.