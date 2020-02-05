Wir legen eine neue Extraktion von Typ OHS an. In dem leeren Dialog haben Sie die Möglichkeit, mit dem Fernglas eine OHS-Extrakion zu suchen. Entweder nach Infospoke, Destination oder Prozesskette. Natürlich können auch * für die Suche verwendet werden (Wildcards). Achtung! Eine Selektion nach Prozessketten ist nur möglich, wenn die jeweilige Prozesskette einen InfoSpoke enthält.

![Look-Up-Infospoke-Destination](/img/content/Look-Up-Infospoke-Destination.png){:class="img-responsive"}

Nach der Selektion werden alle Metadaten vom BW abgerufen und im Editor angezeigt.

![Open-Hub-Service-Data-Source](/img/content/Open-Hub-Service-Data-Source.png){:class="img-responsive"}

Sie können für den Ausführungsmodus (Execution Mode) einen der folgenden Werte wählen: 

**P - Trigger Process Chain**

Die angegebene Prozesskette wird gestartet, die Extraktion durchgeführt und nach Beendigung der Extraktion werden die Daten paketweise extrahiert.

**E – Extract Only**

Es wird weder eine Prozesskette gestartet, noch wird auf eine Extraktionsbenachrichtigung gewartet. Die im Feld *Request ID* eingetragene Request ID wird genutzt, um die Daten abzurufen, die sich hinter dem jeweiligen Request verbergen. Diese Option ist dann sinnvoll, wenn Sie beispielsweise einen abgebrochenen Request neu starten möchten. Es können nur Daten des letzten Requests der OHS Destination extrahiert werden.