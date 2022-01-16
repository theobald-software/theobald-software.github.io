---
ref: xtract-for-alteryx-20
layout: page
title: Parametrisierung
description: Parameterizing via Batch Makro und Control Parameter
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: parameterizing
permalink: /:collection/:path
weight: 20
lang: de_DE
old_url: /Xtract-Universal-EN/default.aspx?pageid=abap-reports
---

Um Xtract Komponenten im Alteryx Designer zu parametrisieren, verwenden Sie ein [Batch Makro](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm) das einen Workflow mit Control Parametern enthält.<br>
Das folgende Beispiel zeigt Ihnen, wie man eine Xtract ODP Komponente parametrisiert.

{: .box-note}
**Hinweis:** Aktuell wird die Parametrisierung anhand von Batch Makros und Control Parametern nur von den Komponenten Xtract BAPI, Xtract ODP und Xtract Table unterstützt.

### Eine Extraktion erstellen
Das Ziel dieses Beispiels ist es, einen Filter für das DataSource *0MATERIAL_ATTR*so zu parametrieren, sodass nur Materialien mit einer Materialnummer zwischen den Grenzwerten *p_MATNR_low* und *p_MATNR_high* extrahiert werden.

1. Öffnen Sie einen **neuen Workflow** und erstellen Sie eine Xtract ODP Extraktion.
2. Suchen Sie das DataSource *0MATERIAL_ATTR*.
3. Erstellen Sie 2 neue Laufzeitparameter vom Typ *String* und geben SIe ihnen die Namen *p_MATNR_low* und *p_MATNR_high*.
4. Weisen Sie die Laufzeitparameter als Filterwerte der Spalte *MATNR* zu, sodass das Ergebnis der Extraktion nur Materialnummern zwischen *p_MATNR_low* und *p_MATNR_high* enthält. 

Für detailierte Informationen über die Xtract ODP Komponente, siehe [Eine ODP Extraktion definieren](./odp/odp-define).<br>

### Erstellen eines Batch Makros mit Control Parametern

1. Erstellen Sie einen neuen Workflow, der eine Extraktion enthält, siehe  [Eine Extraktion erstellen](#eine-extraktion-erstellen).
2. Um den Workflow als Batch Makro verwenden zu können, navigieren Sie zu *Workflow Configuration* und wählen Sie in der Drop-down-Liste **Batch Makro** als Workflow Type aus.<br>
![BatchMacro](/img/content/xfa/batchmakro.png){:class="img-responsive"}
3. Speichern Sie die Datei. Sobald der Workflow als Batch Makro gespeichert ist, erhält jedes Tool im Workflow einen Anker (Blitzsymbol) mit dem sich nur *Interface* Toole verbinden können.
4. Fügen Sie einen **Control Parameter** aus der *Interface* Toolbox hinzu und labeln Sie den Parameter, z.B. *cp_MATNR_low* und *cp_MATNR_high*, um mehrere Parameter voneinander unterscheiden zu können (1).
5. Vebinden Sie das **Control Parameter** Tool mit der Xtract Komponente. Dadurch wird automatisch das *Action* Tool **Update Value** hinzugefügt (2). <br>
![Workflow-Sequence](/img/content/xfa/workflow-sequence.png){:class="img-responsive"}
6. Um einen Control Parameter einem Xtract Parameter zuzuweisen, markieren Sie im **Update Value** Tool den entsprechenden Xtract Parameter aus dem Baummenü *Value or Attribute to Update* (3). 
![Workflow-Sequence2](/img/content/xfa/workflow-sequence2.png){:class="img-responsive"}
Für dieses Beispiel weisen Sie den Control Parameter *cp_MAKT_low* dem Xtract ODP Laufzeitparameter *p_MATNR_low* zu. *cp_MAKT_high* weisen Sie *p_MATNR_high* zu.
7. Ziehen Sie das **Macro Output** Tool der *Interface* Toolbox in den Workflow, um dem Batch Makro eine Ausgabe hinzuzufügen (4). 
8. Speichern Sie das Makro.

{: .box-note}
**Hinweis:** Um Parameter mit Formeln zu verwenden, wählen Sie im **Update Value** Tool die Option *Update Value with Formula* aus der Drop-down-Liste **Select an action type** aus.
Geben Sie entweder eine Formel direkt in das Feld **Formula** ein oder klicken Sie auf **[...]**, um den Formeleditor zu öffnen.

#### Parametrisierung von Komponenten ohne Laufzeitparameter

Einige Xtract Komponenten bieten keine Laufzeitparameter, sondern Einstellungen die parametrisiert werden können.

Beispiel: Parametrisierung der WHERE-Bedingung einer Xtract Table Komponente.<br>
- Um eine komplette WHERE-Bedingung zu parametrisieren, markieren Sie die WHERE-Bedingung im Baummenü des **Update Value** Tools.<br>
- Um nur Teile der WHERE-Bedingung zu parametrisieren, aktivieren Sie die Option **Replace a specific string** und geben Sie dort die Zeichenfolge ein, die ersetzt werden soll, z.B. kann bei der WHERE-Bedingung `KNA1~LAND1 = 'param'` "param" als Platzhalter für die Parametereingabe verwendet werden.
![where-clause-parameter](/img/content/xfa/table-where-parameterize.png){:class="img-responsive"}

### Integration eines Batch Makros in einen Workflow

Dieses Beispiel verwendet das **Text Input** Tool, um die Parameter der Extraktion zu definieren.

1. Fügen Sie ein **Text Input** Tool hinzu, um die Eingabeparameter für das Batch Makro zu definieren.Geben Sie gültige Parameterwerte ein und fügen Sie für jeden Control Parameter eine neue Spalte hinzu. (1)<br>
Beispiel: 000000000000000023 als Eingabe für *p_MATNR_low* und 000000000000000100 als Eingabe für *p_MATNR_high*.<br>
![Input-Text](/img/content/xfa/input-text.png){:class="img-responsive"}
2. Um ein Batch Makro zu importieren, machen Sie einen Rechtsklick auf die Leinwand und navigieren zu **Insert > Macro**. Fügen Sie das Makro hinzu, das die Xtract Komponente und die Control Parameter beinhaltet. <br>
3. Verbinden Sie das **Text Input** Tool mit dem Batch Makro (2).
4. Markieren Sie das Batch Makro (2) und verwenden Sie die Drop-down-Listen **Choose field**, um den Control Parametern die Werte aus den **Text Input** Spalten zuzuweisen.<br>
![Import-Macro](/img/content/xfa/importmacro.png){:class="img-responsive"}
5. Fügen Sie ein **Browse** Tool (3) hinzu, um das Ergebnis des Batch Makros zu prüfen und führen Sie den Workflow aus.<br>

****
#### Weiterführende Links
- [Alteryx Help](https://help.alteryx.com/20212/designer)
- [Batch Macros Tutorial Video](https://www.youtube.com/watch?v=YIAbQGQ_Hkg&t=3s)
- [Alteryx Help: Batch Macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm)
