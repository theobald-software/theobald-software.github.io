---
ref: xi-bw-cube-02
layout: page
title: Filter
description: Filter
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=filter
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Für jedes Merkmal (Dimension) einer BEx Query oder eines Infocubes besteht die Möglichkeit, einen Filter zu setzen, um den MDX-Ausdruck für die Datenextraktion mit den ausgewählten Filterwerten im BW auszuführen.

![BWCube-Filter-01](/img/content/BWCube-Filter-01.png){:class="img-responsive"}

Klicken Sie dafür auf Filter, dann erscheint ein Fenster mit den verfügbaren Werte. 

![BWCube-Filter-02](/img/content/BWCube-Filter-02.png){:class="img-responsive"}

Wählen Sie nun die Werte des Merkmals, auf die das Ergebnis gefiltert werden soll. 

![BWCube-Filter-03](/img/content/BWCube-Filter-03.png){:class="img-responsive"}

Sie können Filter für mehrere Merkmale setzen. 

**Filtervariable** <br>
Sie haben die Möglichkeit, eine Variable für die Filterwerte zu defineren. <br>
Dazu setzen Sie ins Feld Variable den Variablennamen z.B. CompanyCode ein.<br>
Beim Aufruf könnten Sie dann einen Filterwert mitgeben, z.B. *CompanyCode=1000* .<br>
Auch mehrere Werte durch Komma getrennt  werden unterstützt, z.B. *CompanyCode=1000,2000* .<br>

Die Option Exclude Values from Resultset ermöglicht, die gewählten Werte aus dem Ergebnis auszuschließen. 

![BWCube-Filter-03-a](/img/content/BWCube-Filter-03-a.png){:class="img-responsive"}

Auch Dimensionen mit einer hierarchischen Darstellung werden unterstützt.

![BWCube_Hierarchy](/img/content/BWCube_Hierarchy.png){:class="img-responsive"}