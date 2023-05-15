---
ref: xfa-queries-02
layout: page
title: Varianten und Selektionen
description: Varianten und Selektionen
product: xtract-for-alteryx
parent: queries
permalink: /:collection/:path
weight: 2
lang: de_DE
progressstate: 5
---

Die meisten Queries erlauben die Eingabe von Selektionen vor Ausführung der Query.
Selektionen limitieren die Ausgabe der Query, sodass nur Daten die der Selektion entsprechen ausgegeben werden.<br>
Eine Variante mit Selektionen kann in SAP erstellt werden, siehe [SAP Documentation: Query Variants](https://help.sap.com/docs/SAP_NETWEAVER_750/40d2cb3a4f9249d58e9bbc95f4dbaff8/4e535406a32c4f49e10000000a42189e.html?locale=en-US). 
Der Zweck einer Variante ist es, Selektionen zu speichern. Das minimiert die Eingabe von Selektionen, wenn Sie Queries ausführen.

{: .box-note }
**Hinweis:** Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.

### Eine Variante wählen
Wählen Sie eine Variante aus der Drop-Down-Liste *Variant* (1) aus. <br>
Wenn Sie nach dem Anlegen der Query-Extraktion eine neue Variante in SAP anlegen, klicken Sie ![refresh](/img/content/icons/refresh.png)**, um die neue Variante zu laden.

![Variants-Section](/img/content/xfa/query-variant1.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Die Selektionen der Variante werden in der *Selektionsansicht* des Fensters **nicht** angezeigt.
Um die Definition einer Variante zu sehen, öffnen Sie die Variante in SAP.

### Selektionen bearbeiten

Die *Selektionsansicht* im Query-Fenster entspricht der Query-Eingabemaske in SAP.

![Selections-Section](/img/content/xfa/query-variant2.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Einige Selektionsfelder haben nur einen technischen Namen und keine Beschreibung.  
Um zu verstehen, welches Feld einem Feld in SAP entspricht, öffnen Sie die Eingabemaske der Query in SAP. 
Klicken Sie auf ein Selektionsfeld und drücken Sie die Funktionstaste **[F1]**, um den technischen Namen des Selektionsfeldes anzuzeigen. 

Befolgen Sie die nachstehenden Schritte in Xtract for Alteryx:
1. Klicken Sie auf **[Edit]** neben dem zu bearbeitenden Selektionsfeld. Das Fenster “Edit Selection” wird geöffnet.
2. Klicken Sie auf **[Add Selection]**, um ein neues Filterkriterium hinzuzufügen.
3. Wählen Sie *Include* in der **Sign** (1) Spalte aus, um nur die gefilterten Daten in die Ausgabe aufzunehmen. <br>
Wählen Sie *Exclude* in der **Sign** (1) Spalte aus, um die gefilterten Daten von der Ausgabe auszuschließen.<br>
![ODP Fields](/img/content/query/query-plant-selection.png){:class="img-responsive"}
4. Wählen Sie einen Operator aus der Spalte **Option** (2) aus. Der Operator filtert die Daten gemäß der nachstehenden Tabelle.

   | Operator   |      Bedeutung      |  
   |:---------|:------------- |
   |(Not)ContainsPattern |  Wahr, wenn die Datenwerte den Inhalt von Operand 1 (nicht) enthalten.|
   |(Not)Equal | Wahr, wenn Daten (nicht) gleich dem Inhalt von Operand 1 sind.|
   |GreaterOrEqual |  Wahr, wenn die Daten größer oder gleich dem Inhalt von Operand 1 sind..|
   |GreaterThan | Wahr, wenn die Daten größer sind als der Inhalt von Operand 1.|.|
   |LessOrEqual | Wahr, wenn die Daten kleiner als oder gleich dem Inhalt von Operand 1 sind.|
   |LessThan | Wahr, wenn die Daten kleiner sind als der Inhalt von Operand 1.|
   |(Not)Between | Wahr, wenn die Datenwerte (nicht) zwischen den Werten von Operand 1 und Operand 2 liegen. |
5. Geben Sie die Werte direkt in die Eingabefelder **Low** und **High** ein. 
6. Klicken Sie **[OK]**, um Ihre Eingabe zu bestätigen.

Beachten Sie, dass bearbeitete Selektionsfelder die Selektionsfelder in der Variante überschreiben. 

{: .box-tip }
**Tipp:** Wenn Sie mehrere Selektionsparameter verwenden, legen Sie in SAP eine Variante an. Verwenden Sie die Variante, anstatt Selektionsparameter einzugeben.

### Data Format

{% include _content/en/sap-data-format.md  %}