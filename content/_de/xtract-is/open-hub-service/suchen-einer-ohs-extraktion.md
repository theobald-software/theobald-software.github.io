---
ref: xi-open-hub-service-ohs-02
layout: page
title: Eine OHS Extraktion definieren
description: Suche nach einer OHS-Extraktion
product: xtract-is
parent: open-hub-service
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=suchen-einer-ohs-extraktion
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Der folgende Abschnitt beschreibt die Anwendung der OHS Komponente.

### Eine OHS finden

1. Wählen Sie im Hauptfenster der Komponente einen **Extraction type**. <br>
Falls Sie BW4Hana2.0 verwenden, wählen Sie **Table** als Extraktionstyp. Stellen Sie sicher, dass in SAP *database table* als Typ der OHS Destination ausgewählt ist.
Falls Sie BW7.x order niedriger verwenden, wählen Sie **Third party tool (legacy)** als Extraktionstyp. Stellen Sie sicher, dass in SAP *third party tool* als Typ der OHS Destination ausgewählt ist.<br>
![OHS-Look-Up](/img/content/xis/ohs-main-window-look-up.png){:class="img-responsive" }
2. Klicken Sie auf **[Lookup]**, um nach einer OHS Destination zu suchen. Das Fenster “OHS Lookup” öffnet sich.<br>
3. Geben Sie in das Feld **OHS Destination** (1) den Namen einer OHS Destination. Verwenden Sie Wildcards (*) falls nötig.<br>
![Look-Up-Infospoke-Destination](/img/content/Look-Up-Infospoke-Destination.png){:class="img-responsive"}
4. Klicken Sie auf **[Suchen]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) wählen Sie eine OHS Destination Ihrer Wahl aus der angezeigten Liste aus (2).
5. Bestätigen Sie die Auswahl mit **[OK]**.
6. Wenn das Feld **Process Chain** leer ist, geben Sie eine SAP Prozesskette ein, die Ihrer OHS Extraktion zugewiesen ist, siehe [SAP Dokumentation: Display/Maintenance of Process Chain Attributes](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/4a/2cf30c6ed91c62e10000000a42189c/content.htm).
Wenn **Process Chain** leer bleibt, schlägt die Extraktion fehl.
7. Optional: Setzen Sie neben **Timeout** ein Zeitlimit für die Rückmeldung des BWs. Wenn das Zeitlimit überschritten wird, schlägt die Extraktion fehl.
8. Prüfen / bearbeiten Sie die [Einstellungen](./settings) der Extraktion.


{: .box-note }
**Hinweis:** Um die OHS-Datenquelle nutzen zu können, müssen Anpassungen im SAP BW vorgenommen werden, siehe [Vorbereitungen für OHS im BW](../sap-customizing/vorbereitung-fuer-ohs-im-bw). 