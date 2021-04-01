---
ref: xi-bapi-02
layout: page
title: Skalare Parameter
description: Skalare Parameter
product: xtract-is-for-azure
parent: xtract-is-for-azure-bapi
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=skalare-parameter
---

Skalare Parameter (also Import- und Export-Werte des Bausteins) werden in der Regel mit SSIS-Variablen verknüpft. Bei Import-Parametern werden die Werte der Variablen gelesen; bei Export-Parametern werden die Ergebnis-Parameter des Bausteins in die Variable abgelegt. Das Bild zeigt einen Ausschnitt des Editor-Fensters. Es ist zu sehen, dass der eine Parameter (MAXROWS) mit einer Variablen verknüpft ist (ersichtlich an dem @), während der andere Parameter (CPDONLY) mit einem festen Wert versehen wurde. Im Fall von Export-Parametern sind natürlich nur Variablen, keine statischen Werte möglich.

![BAPI-Scalar-Parameters](/img/content/BAPI-Scalar-Parameters.png){:class="img-responsive"}
