
### Eine BW Hierarchy finden

1. Im Hauptfenster des Designers klicken Sie auf  **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol). Das Fenster "Hierarchy Lookup" wird geöffnet.
2. Im Feld **Hierarchy Name** (1) geben Sie den Namen einer Hierarchie ein. Alternativ können Sie im Feld **InfoObject** nach InfoObjects suchen. Verwenden Sie Wildcards (*), falls notwendig.
![Look Up Hierarchy](/img/content/extractors.bwhier/Hierarchy-Search-01.png){:class="img-responsive"}
3. Klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) und wählen Sie den gewünschten Extraktor aus der angezeigten Liste (2).
4. Klicken Sie auf **[Select]** zum Bestätigen.


### Ausgabe Formatieren
1. Klicken Sie auf **[Extraction Settings]** (3), um das Ausgabeformat der Hierarchie zu definieren, siehe [{% if page.product == "xtract-is" %}Einstellungen{% else %}Extraktionseinstellungen{% endif %}](./hierarchie-extraktionseinstellungen).
{% if page.product == "xtract-for-alteryx" %}![Hierarchy](/img/content/extractors.bwhier/Define-Data-Source-Hierarchy.png){:class="img-responsive"} {% elsif page.product == "xtract-is" %}![Hierarchy](/img/content/xis/xis-hierarchy.png){:class="img-responsive"} {% else" %}![Hierarchy](/img/content/xu/hierarchy-settings.png){:class="img-responsive"} {% endif %}
2. Klicken Sie auf **[Load live preview]** (4), um eine Echtzeitvorschau anzuzeigen, ohne eine Extraktion auszuführen.
{% if page.product == "xtract-for-alteryx" or page.product == "xtract-is" %}  {% else" %}3. Optional: Öffnen Sie die **General Settings**, um Primärschlüssel zu definieren, die Verschlüsselung von Daten und andere Einstellungen zu ändern, siehe [Allgemeine Einstellungen](./allgemeine-einstellungen).
4. Optional: Der Standardwert von **Date To** ist 99991231. Um diesen Wert zu ändern, überschreiben Sie den Laufzeitparameter *dateTo* im [Fenster "Run Extraction"](../erste-schritte/eine-extraktion-ausfuehren). {% endif %}

****
#### Weiterführende Links
- [Hierarchy {% if page.product == "xtract-is" %}Einstellungen{% else %}Extraktionseinstellungen{% endif %}](./hierarchie-extraktionseinstellungen)
- [SAP Documentation: Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)
