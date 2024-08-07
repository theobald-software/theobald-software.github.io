---
ref: xfa-abap-reports-01
layout: page
title: Eine Report-Extraktion definieren
description: Eine Report-Extraktion definieren
product: xtract-for-alteryx
parent: reports
permalink: /:collection/:path
weight: 1
lang: de_DE
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract for Alteryx.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract for Alteryx HelpCenter](https://helpcenter.theobald-software.com/xtract-for-alteryx/documentation/introduction/).

Der folgende Abschnitt beschreibt die Anwendung der Xtract Report Komponente. 

### Einen Report oder eine Transaktion finden
1. Klicken Sie auf **[Suchen]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) im Hauptfenster der Report-Komponente. Das Fenster “Report Lookup” öffnet sich.
2. Geben Sie im Feld **Report Name** (1) den Namen des Reports ein, den Sie suchen. Die Verwendung von Wildcards (*) wird unterstützt. 
Alternativ können Sie nach SAP Transaktion Codes suchen, indem Sie die Checkbox TCODE aktivieren.
![Look-Up-Report](/img/content/Look-Up-Report.png){:class="img-responsive"}
3. Klicken Sie auf **[Suchen]** (2) und wählen Sie den Report Ihrer Wahl aus der angezeigten Liste aus (3).
4. Bestätigen Sie die Auswahl mit **[OK]** (4).

### Varianten und Selektionen

1. Wählen Sie eine Variante aus der Dropdown-Liste *Variant* (1).
![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
2. Wählen Sie aus der Liste unter *Selection Screen* (2) ein Selektionskriterium aus, das Sie anpassen oder dynamisieren möchten.
3. Klicken Sie neben den Selektionen, die Sie bearbeiten möchten auf **[Edit]**. Das Fenster "Edit Selections" öffnet sich.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
4. Wählen Sie, ob die Selektion in der Extraktion inkludiert oder exkludiert werden soll (3).
5. Wählen Sie einen Operator (*Equal*, *GreaterThan*, etc.) von der Dropdown-Liste *Option* (4). 
6. Geben Sie die Selektion in den *Low* und *High* Feldern ein. Das *High* Feld ist nur aktiv, wenn *between* oder *not between* als Operator ausgewählt wurde.
7. Optional: Klicken Sie auf **[Add Selection]** (5), um weitere Bedingungen hinzuzufügen.
8. Klicken Sie auf **[OK]** (6), um die Selektion zu bestätigen.

{: .box-note }
**Hinweis:** Für detaillierte Informationen zu Varianten und Selektionen, siehe [Varianten und Selektionen](./variants-and-selections).

### Spalten definieren

1. Klicken Sie auf **[Automatically detect columns]** um den Report basierend auf der ausgewählten Variante oder Selektion auszuführen und automatisch Spalten zu detektieren.
![Report-automatic-columns](/img/content/Report_new_automatic_columns.png){:class="img-responsive"}
2. Klicken Sie auf **[Load Preview]**, um die Spalten im Vorschaubildschirm anzuzeigen.
3. Prüfen Sie, ob die Spalteneinteilung korrekt ist. Wenn eine automatische Spalteneinteilung nicht möglich ist, müssen Spaltenname, Spaltenbreite und Offset manuell definiert werden, siehe [Spalten manuell definieren](./report-columns-define#spalten-manuell-definieren).

{: .box-note }
**Hinweis:** Für detaillierte Informationen zur automatischen und manuellen Definition von Spalten, siehe [Spalten Definieren](./report-columns-define).

****
#### Weiterführende Links
- [Types of ABAP Reports](https://wiki.scn.sap.com/wiki/display/ABAP/Types+of+Reports)
- [Authorizing Access to Specific Reports](https://kb.theobald-software.com/sap/authorizing-access-to-specific-reports)