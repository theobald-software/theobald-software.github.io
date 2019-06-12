
Mit Hilfe des *Variables*-Links im Editor können Sie – wenn die BEx Query Variablen enthält - in das Variablen-Fenster abspringen. 

![Define-Data-Source-for-Cube](/img/content/Define-Data-Source-for-Cube.png){:class="img-responsive"}

Je nach dem, ob es sich um eine Einzel- oder Mehrfachwertvariable, eine Intervallvariable oder eine Variable mit komplexer Selektion handelt, sind die entsprechenden Felder für die Eingabe freigegeben oder sind grau hinterlegt. Im Fall einer komplexen Selektion oder Mehrfachwertvariable springen Sie über den Edit-Link in ein neues Fenster ab, in dem Sie die Variablenwerte eintragen können.

Neben hart codierten Werten für die BEx-Variablen können in die Eingabefelder auch benutzerdefinierte Variablen eingetragen werden.<br>
Dies gilt für die reguläre Extraktion als auch für den [MDX Extraktionsmodus](https://help.theobald-software.com/de/board-connector/bw-infocube-und-bex-queries/bw-extraktionseinstellungen). Das vorangestellte @ kennzeichnet den eingetragenen Wert als benutzerdefinierte Variable. Die Werte für diese Variablen werden dann später beim Auslösen der Extraktion über [URL-Parameter](../fortgeschrittene-techniken/benutzerdefinierte-variablen) übergeben.

![Cube-Variables](/img/content/Cube-Variables.png){:class="img-responsive"}

Variablen bei der regulären Extraktion (oben) und im MDX Modus (unten).

![XU_MDX_Var_1](/img/content/XU_MDX_Var_1.png){:class="img-responsive"}

Das folgende Bild zeigt den Absprung in eine komplexe Selektion wie sie bei der Variable MAT03 im vorherigen Bild vorliegt:

![Cube-Variables-Edit-Range](/img/content/Cube-Variables-Edit-Range.png){:class="img-responsive"}
