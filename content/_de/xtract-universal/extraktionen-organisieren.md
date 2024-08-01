---
ref: xu-14
layout: page
title: Extraktionen Organisieren
description: Extraktionen gruppieren
product: xtract-universal
parent: xtract-universal
permalink: /:collection/:path
weight: 14
lang: de_DE
progessstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

Dieser Abschnitt zeigt, wie Extraktionen in Gruppen organisiert werden können.

### Extraktionen Gruppieren

Führen Sie die folgenden Schritte aus, um eine neue Gruppe zu erstellen und der Gruppe Extraktionen hinzuzufügen.

1. In der Baumansicht des Designers, rechtsklicken Sie auf den *extractions* Ordner. Das Kontext-Menü öffnet sich.<br>
![main-window-treeview](/img/content/xu/main-window-treeview.png)
2. Klicken Sie auf **New subfolder**. Das Fenster "Create new subdirectory" öffnet sich.<br>
![create-new-subdirectory](/img/content/xu/create-new-subdirectory.png)
3. Geben Sie einen einzigartigen Namen für die Extraktionsgruppe ein und klicken Sie auf **[OK]**. 
Der neue Unterordner wird in der Baumansicht angezeigt. Verschachtelte Gruppen werden unterstützt.
4. Um dem Unterordner Extraktion hinzuzufügen, öffnen Sie die Liste der Extraktionen in dem *extractions* Ordner (oder einem anderen Unterordner) und markieren Sie alle relevanten Extraktionen.
Verwenden Sie **[STRG]+[linke Maustaste]**, um mehrere Extraktionen zu markieren.
5. Verschieben Sie die markierten Extraktionen per drag & drop von der List der Extraktionen in den neuen Unterordner. <br>
![main-window-treeview-move-extractions](/img/content/xu/main-window-treeview-move-extractions.png)

{: .box-note }
**Hinweis:** Die Baumansicht im Hauptfenster des Designers entspricht der Ordnerstruktur im Verzeichnis `C:\Program Files\XtractUniversal\config\extractions`.

{: .box-tip }
**Tipp:** Sie können allen Extraktionen in einer Gruppe ein SAP Quellsystem oder eine Destination zuweisen, indem Sie über **[Strg]+[A]** alle Extraktionen markieren.
Um ein SAP Quellsystem zuzuweisen, verwenden Sie die GUI-Schaltfläche **[Source]**.
Um eine Destination zuzuweisen, verwenden Sie die GUI-Schaltfläche **[Destination]**.

### Gruppen Umbenennen und Löschen

Öffnen Sie per Rechtsklick das Kontextmenü einer Gruppe. 
Klicken Sie auf **Rename**, um der Gruppe einen anderen Namen zu geben.
Klicken Sie auf **Delete**, um die Gruppe und ihren Inhalt zu löschen.

### Extraktionen Suchen

#### In einer Extraktionsgruppe Suchen

Verwenden Sie die Suchleiste über der Extraktionsliste, um die angezeigten Extraktionen zu filtern.
Platzhalterzeichen (*) werden nicht unterstützt.

![main-window-filter-extractions.png](/img/content/xu/main-window-filter-extractions.png)

#### In allen Extraktionsgruppen Suchen

Führen Sie die folgenden Schritte aus, um eine Extraktion in allen Extraktionsgruppen zu finden:

1. Im Hauptfenster des Designers, klicken Sie auf **[Search]**. Das Fenster "Search Extractions" öffnet sich.<br>
![main-window-search](/img/content/xu/main-window-search.png)
2. Geben Sie in der Suchleiste den Namen einer Gruppe, Extraktion, Extraktionstyp, SAP Quelle, Destination oder eines Schlüsselwortes ein.<br>
![search-extractions](/img/content/xu/search-extractions.png)
3. Klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png). Die Suchergebnisse werden angezeigt.
4. Markieren Sie eine Extraktion aus den Suchergebnissen.
5. Klicken Sie auf **[Go]**. 

Die Extraktionsgruppe wird geöffnet und die markierte Extraktion angezeigt.
