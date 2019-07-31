Jeder Extraktionsdialog hat den Link General Settings, der allgemeine Einstellungen beinhaltet, die vom jeweiligen Extraktionstyp unabhängig sind.

**Misc. Reiter** 

![General-Settings](/img/content/General-Settings.jpg){:class="img-responsive"}

**Disable Buffer**

Schaltet die Pufferung der Extraktion aus. Diese Einstellung überschreibt die Einstellungen des Servers *BufferExtractionCount* und *BufferLifespanMinutes*.<br>
Wenn in sehr kurzen Zeitabständen (siehe Server-Einstellung BufferLifespanMinutes) die Daten abgerufen werden, werden die Daten aus dem Puffer geliefert. Das steigert die Performance und limitiert den Impact auf das SAP-System. <br>Wenn dieses Verhalten nicht gewünscht ist (z.B. weil die Daten immer 100% aktuell sein müssen), muss die Pufferung explizit ausgeschaltet werden

Bei DeltaQ-Extraktionen kann der Buffer nur für den Update Modus 'F' aktiviert werden.

**Preview Mode**

Wenn diese Option aktiviert ist, dann wird entweder eine kleine Datenmenge (wenn möglich) aus SAP extrahiert oder Testdaten generiert.

**Keywords**

Sie können einer Extraktion ein oder mehrere Keywords (Tags) zuweisen. Im Designer könnten Sie dann die Extraktionen nach diesen Keywords filtern. 

**Primary Key Reiter**

Hier werden die Schlüsselfelder definiert. Dieser Schritt ist nötig für die Merge-Operation.

**Security Reiter**

Der Security Reiter ist im Kapitel [Zugriffsverwaltung](../xu-specific/sicherheit/zugriffsverwaltung1) beschrieben. 
