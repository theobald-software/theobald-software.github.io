Der folgende Abschnitt beschreibt die Anwendung der {% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%}Xtract{% endif %} Query Komponente.


### Eine Query finden

1. Klicken Sie im Hauptfenster der Komponente auf ![magnifying-glass](/img/content/icons/magnifying-glass.png). Das Fenster “Look Up Query” öffnet sich.<br>
{% if page.product == "xtract-universal" or page.product == "board-connector"%}![Variants-Section](/img/content/xu/empty-Query.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx"%}![Query](/img/content/xfa/empty-Query.png){:class="img-responsive"}{% endif %}
2. Geben Sie den Namen des Query im Feld **Query Name** ein, oder den Namen der Benutzergruppe im Feld **User group** (1) ein. Sie können bei Bedarf Platzhalter (*) verwenden. <br>
![Ein Query finden](/img/content/query/query-lookup.png){:class="img-responsive"}
3. Wählen Sie den Arbeitsbereich, der einen Query-Objekt beinhaltet. (2). Für mehr Informationen, siehe [SAP Dokumentation: Query Areas](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/4e/3bdad0b8503b0fe10000000a42189e/frameset.htm).
4. Klicken Sie auf (![magnifying-glass](/img/content/icons/magnifying-glass.png) und wählen Sie das gewünschte Query aus der dargestellten Liste.(2).
5. Klicken Sie **[OK]**, um Ihre Auswahl zu bestätigen.

Die Anwendung kehrt zum Hauptfenster der Komponente zurück.

### Eine Query-Extraktion Einrichten
<!--- ### Eine Query Extraktion Einrichten -->

[Suchen Sie nach einer Query](#eine-query-finden) und führen Sie die folgenden Schritte aus, um eine Query-Extraktion einzurichten:

1. Sollte eine Query Varianten varianten haben, wählen Sie die Variante in der *Variantenansicht* des Hauptfensters.
Mehr Informationen finden Sie unter [Varianten und Selektionen: Eine Variante wählen](./variants-and-selections#choose-a-variant).<br>
2. Optional: Bearbeiten Sie die Selektionen in der *Selektionsansicht* des Hauptfensters. Mehr Informationen finden Sie unter [Varianten und Selektionen: Selektionen bearbeiten](./variants-and-selections#edit-selections).<br>
3. Optional: Ändern Sie die [Extraktionseinstellungen](./extraction-settings).
4. Klicken Sie **[OK]** im Hauptfenster, um die Extraktion zu speichern.