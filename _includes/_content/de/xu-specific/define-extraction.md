
1. Um eine neue Extraktion zu erstellen, klicken Sie im Hauptfenster des Xtract Universal Designers auf **[New]**. Das Fenster “Create Extraction” öffnet sich.<br>
{% if page.product == "xtract-universal" %} ![New](/img/content/xu/xu-intro.png){:class="img-responsive"}
{% elsif page.product == "board-connector" %}![New](/img/content/board/bc-intro.png){:class="img-responsive"} {% endif %}
2. Wählen Sie eine zuvor angelegte [SAP-Verbindung](./einfuehrung/sap-verbindungen-anlegen) aus dem Dropdown-Menü **Source** und geben Sie der Extraktion einen eindeutigen Namen.
3. Wählen Sie einen Extraktionstyp / eine Komponente und klicken Sie auf **[OK]** zum Bestätigen. Das Hauptfenster der Komponente öffnet sich automatisch.

Die Extraktion wird jetzt im Hauptfenster des Designers aufgelistet.
Mit einem Doppelklick auf die Extraktion öffnen Sie das Hauptfenster der Komponente.
Auf die meisten Funktionen der Komponente kann über das Hauptfenster zugegriffen werden.

{% if page.product == "xtract-universal" %}
#### Eine Destination zuweisen
Wenn Sie eine Extraktion anlegen, werden die Daten standardmäßig in die *http-csv* Destination geschrieben.
Um eine andere Destination zu wählen, markieren Sie Ihre Extraktion und klicken Sie auf **[Destination]**. 
Das Fenster "Destination Settings" öffnet sich. 
In dem Fenster "Destination Settings" können Sie eine Destination auswähen, sowie weitere Einstellungen vornehmen.<br>
![Destinations](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

- Für Informationen, wie eine Destination angelegt wird, siehe [Extraktion in eine Datenbank laden](./erste-schritte/eine-extraktion-in-oracle-laden).
- Für Informationen über verfügbare Destinationen, siehe [Destinationen](./destinationen).
{% endif %}