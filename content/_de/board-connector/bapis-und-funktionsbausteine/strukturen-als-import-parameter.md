---
ref: bc-bapis-and-function-modules-03
layout: page
title: Strukturen als Import-Parameter
description: Strukturen als Import-Parameter
product: board-connector
parent: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=strukturen-als-import-parameter
---

Strukturen sind ein Sonderfall der skalaren Parameter. Im Fall von Strukturen darf nicht die ganze Struktur mit einer Variablen / einem Wert versehen werden, sondern jedes einzelne Element. Aus diesem Grund ist das Feld zum Eintragen auch nicht eingabebereit. Stattdessen erscheint in derselben Zeile ein Link mit der Aufschrift Edit. Ein Klick auf den Link öffnet ein neues Fenster, das jedes Element der Struktur und ein entsprechendes Feld für den Wert zeigt. Analog zu rein skalaren Parametern gilt auch für Strukturelemente: Importe können Festwerte oder Variablen enthalten. Selbstverständlich können die Wertfelder in allen Fällen auch leer gelassen werden, wenn der jeweilige Parameter gar nicht benötigt wird.

![BAPI-Structure](/img/content/BAPI-Structure.png){:class="img-responsive"}