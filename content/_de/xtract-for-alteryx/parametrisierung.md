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

Es gibt 2 Möglichkeiten Xtract Komponenten zu parametrisieren:
- Übergeben Sie Parameter an die Eingabeanker der Xtract Komponenten. <br>
Eingabeanker sind ab Xtract for Alteryx Version 1.19 für alle Xtract Komponenten verfügbar.
- Übergeben Sie Parameter an ein [Batch-Makro](https://help.alteryx.com/de/20231/designer/batch-macro), das einen Workflow mit [Steuerungsparametern](https://help.alteryx.com/de/20231/designer/control-parameter-tool) enthält.<br>
Die Parametrisierung über Batch-Makros wird von Xtract BAPI, Xtract Table, Xtract Cube und Xtract ODP unterstützt.

Die folgenden Abschnitte beschreiben die Parametrisierung von Xtract Komponenten über Batch-Makros.


### Eine Extraktion für ein Batch-Makro erstellen

Das folgende Beispiel verwendet the Xtract ODP Komponente, um zu zeigen, wie Filter parametrisiert werden.

1. Erstellen Sie einen **neuen** Workflow.
2. Fügen Sie eine Xtract ODP Komponente hinzu.
3. Suchen Sie das DataSource *0MATERIAL_ATTR*.
4. Erstellen Sie 2 neue Laufzeitparameter vom Typ *String* und geben Sie ihnen die Namen *p_MATNR_low* und *p_MATNR_high*.
5. Weisen Sie die Laufzeitparameter als Filterwerte der Spalte *MATNR* zu, sodass das Ergebnis der Extraktion nur Materialnummern zwischen *p_MATNR_low* und *p_MATNR_high* enthält. 

Für mehr Informationen über die Xtract ODP Komponente, siehe [Eine ODP Extraktion definieren](./odp/odp-define).

### Erstellen eines Batch-Makros mit Steuerungsparametern

1. Erstellen Sie einen neuen Workflow, der eine Extraktion enthält, siehe [Eine Extraktion für ein Batch-Makro erstellen](#eine-extraktion-für-ein-batch-makro-erstellen).
2. Um den Workflow als Batch Makro verwenden zu können, navigieren Sie zu *Workflow Configuration* und wählen Sie in der Dropdown-Liste **Batch Makro** als Workflow Type aus.<br>
![BatchMacro](/img/content/xfa/batchmakro.png){:class="img-responsive"}
3. Speichern Sie die Datei. Sobald der Workflow als Batch Makro gespeichert ist, erhält jedes Tool im Workflow einen Anker (Blitzsymbol) mit dem sich nur *Interface* Toole verbinden können.
4. Fügen Sie einen **Control Parameter** aus der *Interface* Toolbox hinzu und labeln Sie den Parameter, z.B. *cp_MATNR_low* und *cp_MATNR_high*, um mehrere Parameter voneinander unterscheiden zu können (1).
5. Vebinden Sie das **Control Parameter** Tool mit der Xtract Komponente. Dadurch wird automatisch das *Action* Tool **Update Value** hinzugefügt (2). <br>
![Workflow-Sequence](/img/content/xfa/workflow-sequence.png){:class="img-responsive"}
6. Um einen Steuerungsparameter einem Xtract Laufzeitparameter zuzuweisen, markieren Sie im **Update Value** Tool den entsprechenden Xtract Laufzeitparameter aus dem Baummenü *Value or Attribute to Update* (3). 
![Workflow-Sequence2](/img/content/xfa/workflow-sequence2.png){:class="img-responsive"}
Für dieses Beispiel weisen Sie den Steuerungsparameter *cp_MAKT_low* dem Xtract ODP Laufzeitparameter *p_MATNR_low* zu. *cp_MAKT_high* weisen Sie *p_MATNR_high* zu.
7. Ziehen Sie das **Macro Output** Tool der *Interface* Toolbox in den Workflow, um dem Batch-Makro eine Ausgabe hinzuzufügen (4). 
8. Speichern Sie das Batch-Makro.

{: .box-note}
**Hinweis:** Um Parameter mit Formeln zu verwenden, wählen Sie im **Update Value** Tool die Option *Update Value with Formula* aus der Dropdown-Liste **Select an action type** aus.
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
2. Um ein Batch-Makro zu importieren, machen Sie einen Rechtsklick auf die Leinwand und navigieren zu **Insert > Macro**. Fügen Sie das Makro hinzu, das die Xtract Komponente und die Steuerungsparameter beinhaltet. <br>
3. Verbinden Sie das **Text Input** Tool mit dem Batch-Makro (2).
4. Markieren Sie das Batch-Makro (2) und verwenden Sie die Dropdown-Listen **Choose field**, um den Steuerungsparametern die Werte aus den **Text Input** Spalten zuzuweisen.<br>
![Import-Macro](/img/content/xfa/importmacro.png){:class="img-responsive"}
5. Fügen Sie ein **Browse** Tool (3) hinzu, um das Ergebnis des Batch-Makros zu prüfen und führen Sie den Workflow aus.<br>

****
#### Weiterführende Links
- [Alteryx Help](https://help.alteryx.com/20212/designer)
- [Batch Macros Tutorial Video](https://www.youtube.com/watch?v=YIAbQGQ_Hkg&t=3s)
- [Alteryx Help: Batch Macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm)
