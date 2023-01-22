---
ref: xtract-is-odp-define
layout: page
title: Eine ODP Extraktion definieren
description: ODP Extracttion
product: xtract-is
parent: odp
permalink: /:collection/:path
weight: 2
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt beschreibt die Anwendung der ODP Komponente. 
{% include _content/de/odp/odp-define.md %}
{% include _content/de/odp/odp-settings-update_mode.md %} 

### Selektion und Filter

1. Wählen Sie ein Element im Unterabschnitt **Fields** und klicken Sie auf *Edit*. Das Fenster "Edit Selections" wird geöffnet.<br> 
![ODP Fields](/img/content/odp/odp-fiter.png){:class="img-responsive"}<br>
2. Klicken Sie auf **[Add]**, um Filterkriterien hinzuzufügen. <br>
![ODP Selection With Parameters](/img/content/odp/odp-selection-with-parameters.png){:class="img-responsive"}
3. Wählen Sie in der Spalte **Sign** die Option *Include*, um nur die gefilterten Daten zu extrahieren.<br>
Wählen Sie in der Spalte **Sign** die Option *Exclude*, um die gefilterten Daten nicht nicht zu extrahieren.
4. Wählen Sie in der Spalte **Option** einen Operator. Der Operator filtert Daten wie in der folgenden Tabelle beschrieben:

   | Operator   |      Bedeutung      |  
   |:---------|:------------- |
   |(Not)Equal |  Wahr, wenn die Daten (nicht) gleich dem Inhalt von Operand 1 sind.|
   |LessThan  | Wahr, wenn die Daten kleiner sind als der Inhalt von Operand 1.|
   |GreaterThan |  Wahr, wenn die Daten größer sind als der Inhalt von Operand 1.|
   |LessOrEqual | Wahr, wenn die Daten kleiner oder gleich dem Inhalt von Operand 1. sind.|
   |GreaterOrEqual |  Wahr, wenn die Daten größer oder gleich dem Inhalt von Operand 1. sind.|
   |(Not)Between | Wahr, wenn die Daten (nicht) zwischen den Werten der Operanden Operand 1 und Operand 2 liegen. |

5. Geben Sie für die Filter feste Werte ein oder wählen Sie Laufzeitparameter. <br>
- Feste Werte: Geben Sie Werte direkt in die Eingabefelder unter **Low** und **High** ein.
Wenn Laufzeitparameter verfügbar sind, prüfen Sie ob das ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol neben dem Eingabefeld angezeigt wird.
Mit einem Klick auf das Symbol wechseln Sie zwischen statischen Werten und Laufzeitparametern.
- Laufzeitparameter: Klicken Sie auf das ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol, um auf die definierten Laufzeitparameter zuzugreifen ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) Symbol).
Wenn keine Symbole angezeigt werden, öffnen Sie das [Edit Runtime Parameters](./odp-settings#edit-runtime-parameters) Menü und erstellen Sie Laufzeitparameter.<br>
Wählen Sie einen Laufzeitparameter aus der Dropdown-Liste aus.
6. Klicken Sie auf **[Load live preview]**, um die Funktionalität der definierten Filter zu prüfen. <br>
Wenn Laufzeitparameter definiert sind, werden Sie aufgefordert, die Parameter mit echten Werten zu füllen. 

Die Anzahl der definierten Filter wird in eckigen Klammern neben *Edit* angezeigt.

