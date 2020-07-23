Die BAPI Datenquelle wurde entwickelt, um BAPIs und RFC-Funktionsbausteine im SAP aufzurufen. So lassen sich sehr einfach Logiken in ABAP kodieren und den Output in Form von Tabellen nutzen. SAP-Standard-BAPIs und bundeseigene BAPIs werden gleichermaßen unterstützt. Es ist sinnvoll (aber nicht zwingend notwendig), bei selbstgeschriebenen BAPIs darauf zu achten, dass die Signatur der Bausteine so gestaltet ist, dass genau eine Ausgabe-Tabelle die gewünschten Daten enthält.  Die Begriffe BAPI und RFC-Funktionsbaustein können im Übrigen äquivalent verwendet werden. Es besteht zwischen beiden Begriffen kein substanzieller Unterschied.

Erstellen Sie mit Hilfe des Clients eine neue Extraktion vom Typ BAPI. Der folgende Dialog öffnet sich.

![Define-Bapi-Data-Source](/img/content/Define-Bapi-Data-Source.png){:class="img-responsive"}

Um ein BAPI oder einen RFC-Funktionsbaustein zu suchen, klicken Sie bitte auf den Button mit dem Fernglas. Bei der Suche nach Namen können auch Wildcards (z.B. * ) genutzt werden. 

![Look-Up-Function-Module](/img/content/Look-Up-Function-Module.png){:class="img-responsive"}

Die Metadaten des Bausteins werden vom SAP geholt. Es gibt skalare und strukturierte Parameter, die sich jeweils in Imports und Exports aufteilen (siehe Tab im oberen Bereich), sowie Tabellen (unterer Bereich). 

![XU-BAPI-Parameters](/img/content/XU-BAPI-Parameters.png){:class="img-responsive"}

