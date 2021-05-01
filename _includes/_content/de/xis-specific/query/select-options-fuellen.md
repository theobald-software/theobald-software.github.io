In dem Selektionsbildschirm einer Query haben Sie im SAP die Möglichkeit, komplexe Einschränkungen zu hinterlegen. Das geht im Xtract IS Query genauso. Klicken Sie im Editor im gewünschten Parameter auf den Edit-Link.

![Selection-Options-Fill-01](/img/content/Selection-Options-Fill-01.png){:class="img-responsive"}


Das folgende Fenster öffnet sich:

![Selection-Options-Fill-02](/img/content/Selection-Options-Fill-02.png){:class="img-responsive"} 

Die Spalte *Sign* definiert, ob die Ergebnismenge der Einschränkung eingeschlossen (Include) oder ausgeschlossen wird (Exclude). <br>
Die Spalte *Option* ist ein Operator (z.B. =,> oder [] für von ... bis). <br>
In den Spalten *Low Value* und *High Value* sind dann die jeweiligen Werte einzutragen. <br>
Der Screenshot oben beispielsweise selektiert alle Werte von AA bis ZZ (Include, [] -> von ... bis), außer den Einzelwert LH (Exclude, =). <br>
Selbstverständlich können für die Wertfelder auch SSIS-Variablen, beginnend mit @,  verwendet werden.