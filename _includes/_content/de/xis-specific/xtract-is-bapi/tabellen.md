Tabellen können sowohl in den Baustein hinein, als auch aus ihm heraus 'fließen'. Im unteren Bereich des Editors können Sie für jede Tabelle des BAPI einen Input- und OutputType definieren.

![BAPI-Tables](/img/content/BAPI-Tables.png){:class="img-responsive"}

Folgende Optionen sind möglich:

**Pipeline**

bedeutet, dass die Tabelle innerhalb des SSIS-Datenflusstask mit einem ein- bzw. ausgehenden Datenfluss verknüpft wird. Es lässt sich über den *Edit*-Link ein neues Fenster öffnen, in dem die Elemente der Input-Pipeline auf Spalten der Tabelle gemappt werden.

**Static**

bedeutet, dass die Tabelle nur Festwerte enthält. Diese Option steht nur beim InputType zu Verfügung. Beim Output macht es keinen Sinn. Öffnen Sie mit dem *Edit*-Link das Eingabefenster für die Festwerte. Die Option Static ist natürlich nur für Tabellen interessant, die an den Baustein übergeben werden, nicht für die, die zurückkommen.

**Skip**

bedeutet, dass die Tabelle ignoriert wird.