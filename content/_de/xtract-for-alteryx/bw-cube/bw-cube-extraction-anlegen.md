---
ref: xfa-bw-cube-01
layout: page
title: Eine BW Cube Extraktion definieren
description: BW Cube Extraction Anlegen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 1
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt beschreibt die Anwendung der BW Cube Komponente.<br>

### Eine BEx Query oder einen BW Infofrovider finden
1. Klicken Sie im Hauptfenster der Komponente auf  **[Suche]** (Lupensymbol). Das Fenster “Cube and Query Lookup” wird geöffnet.
![Cube Query search](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"}
2. Geben Sie im Feld **Name** (1) den Namen eines BEx-Queries oder eines InfoProviders ein. Verwenden Sie Wildcards (*), falls notwendig.
3. Definieren Sie den Extraktor und Typ des gesuchten Objekts den Feldern **Extractor** und **Type** (2).<br>
- **Extractor** definiert, ob Daten mit dem OLAP BAPI Interface (MADX) oder dem nativen BICS Interface extrahiert werden. BICS befindet sich noch in der Beta-Phase.
- **Type** spezifiziert, ob nach einer BEx-Query oder einem InfoProvider gesucht wird.
4. Klicken Sie auf **[Suche]** (Lupensymbol) (3).
5. Wählen Sie (4) das Objekt aus der Liste und klicken Sie auf **[OK]** (5) zum Bestätigen. <br>
Die Metadaten (Messwerte, Dimensionen, Eigenschaften, BEx-Variablen) der ausgewählten BEx-Query oder des ausgewählten InfoProviders werden aus SAP abgerufen.

#### MDX und BICS (beta)

{: .box-note }
**Hinweis:** Die BICS-Komponente befindet sich noch in der Beta-Phase. Bei Problemen mit der Komponente, kontaktieren Sie den [Theobald Support](https://support.theobald-software.com).

|                                    | MDX                                                                                         | BICS (beta)                                        |
|------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| Syntax bei der Suche von BEx-Queries   | `[tech. Name des InfoPoviders]/[tech. Name der BEx-Query]` <br /> Beispiel: 0SD_C03/0SD_C03_Q0018        | `[tech. Name der BEx-Query]` <br /> Beispiel: 0SD_C03_Q0018   |
| Syntax bei der Suche von InfoProivders | `$[tech. Name des InfoProvoiders]`  <br /> Beispiel: $0SD_C03                                            | `[tech. Name des InfoProviders]` <br /> Beispiel: 0SD_C03      |
| Wildcards bei der Suche                | unterstützt<br /> Beispiel: *0SD_C03_Q0018 anstatt 0SD_C03/0SD_C03_Q0018                          | nicht unterstützt          |
| Unterstützte InfoProviders            | InfoCubes, Multiproviders, Composite Providers                                              | InfoCubes, MuliProviders, Composite Providers, DSOs |
| Einstellungen der BEx-Query               | Die Einstellung "Allow External Access to this Query" muss aktiv sein. Falls nicht, taucht die BEx-Query nicht in der Suche auf, siehe [Allow External Access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries). | keine Einstellungen nötig.                                      |


### Auswählen von Messwerten (Kennzahlen), Dimensionen und Eigenschaften

Nachdem Sie die Schritte aus [Eine BEx Query oder einen BW Infofrovider finden](#eine-bex-query-oder-einen-bw-infofrovider-finden) ausgeführt haben, 
werden die Kennzahlen der BEx-Query / des Infoproviders links in einer Baumstruktur angezeigt.

![Query Structure](/img/content/xfa/xfa_cube-query-select.png){:class="img-responsive"}
Das erste Verzeichnis enthält alle Messwerte (Kennzahlen) (6). 
Die folgenden Verzeichnisse entsprechen den Dimensionen und enthalten oft zusätzliche Dimensionseigenschaften (7). <br>

1. Wählen Sie die Kennzahlen, Dimensionen und Eigenschaften für eine Extraktion. 
Im BICS-Modus sind Dimensionen, die sich in den Zeilen der Definition der BEx-Query befinden, vorselektiert und können nicht deselektiert werden.
2. Im MDX-Modus klappen Sie die Kennzahlen aus, um die verfügbaren Felder für Währungen/Einheiten anzuzeigen.
Falls erforderlich, wählen Sie eine Währung/Einheit aus. Im BICS-Modus ist diese Option nicht verfügbar.
3. Wenn anwendbar, weisen Sie allen erforderlichen BEx-Variablen Werte zu.
3. Klicken Sie auf **[Load live preview]**, um die Ausgabe mit Daten aus dem BW anzuzeigen. Wenn eine Einheit ausgewählt ist (z.B. Währung), wird das entsprechende Feld in der Echtzeitvorschau angezeigt.

{: .box-note }
**Hinweis:** Wählen Sie für die Echtzeitvorschau mindestens eine Dimension und eine Kennzahl aus.

#### Column name style

Die folgenden Anzeigeoptionen für Spaltennamen sind verfügbar: <br>
![Column name style](/img/content/xfa/xfa_cube_column_name_style.png)

### Einstellen eines Dimensionsfilters 
1. Klicken Sie mit der rechten Maustaste auf eine Dimension. Die Schaltfläche **[Edit Filter]** erscheint.
![Query Filter](/img/content/xfa/xfa_cube-query-filter.png){:class="img-responsive"}
2. Klicken Sie **[Edit Filter]**. Das Fenster "Member Filter" wird geöffnet. 
Im MDX-Modus werden die ersten 500,000 Dimensionsmerkmale geladen.
IM BICS-Modus werden 1,001 Merkmale geladen.
Sie können einzelne Werte (*Single Values*) und/oder Wertebereiche (*Value Ranges*) definieren.
![Query Filter Define](/img/content/xfa/xfa_cube-query-filter-def.png){:class="img-responsive"}
3. Wählen Sie einen einzelnen Wert (8) oder klicken Sie auf **[Add]** (9), um Wertebereiche hinzuzufügen. 
4. Definieren Sie Werte für die Filterung oder wählen Sie dynamische Parameter, siehe [Laufzeitparameter](./edit-runtime-parameters). Falls nötig, löschen Sie Filter über das Mülltonnen-Icon (10).
5. Klicken Sie auf **[OK]**, um Ihre Eingabe zu bestätigen. Das Fenster "Member Filter" wird geschlossen.

Wenn ein Filter definiert ist, erscheint ein Filtersymbol neben der Dimension, die gefiltert wird.

{: .box-note }
**Hinweis:** 
BEx-Queries verwenden häufig BEx-Variablen zum Erstellen von Filtern. Für Informationen zur Verwendung von BEx-Variablen, siehe [BEx Query-Variablen](./bw-cube-variablen).


****
#### Weiterführende Links
- [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).
- [Query Variablen](./bw-cube-variablen)
