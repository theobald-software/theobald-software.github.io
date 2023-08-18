---
ref: xi-q-delta-04
layout: page
title: Datasource-Parameter
description: Datasource-Parameter
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 5
lang: de_DE
progressstate: 5
---

### Parameter bearbeiten 

{: .box-note } 
**Hinweis:** Parameter sind im **Delta Update**-Modus nicht erlaubt, da die Parameter des **Init**-Modus automatisch übernommen werden.

Parameter können *Einzelwerte*, *Intervalle* und *komplexe Filter* haben. <br>

1. Klicken Sie auf **[Edit]** (1) und öffnen Sie den Editor zum Ändern der Parameter. Es öffnet sich das Fenster "Edit Range".<br>
![Edit-Parameters](/img/content/Parameters_edit.png){:class="img-responsive"}
2. Stellen Sie die Werte für **Sign** (2), **Option** (3), **Low Value** (4) und falls erforderlich, für **High Value** (5) ein.<br>
![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}
**Sign** (2) definiert für jede Zeile, ob das Ergebnis der Bedingung in der Ergebnismenge ein- oder ausgeschlossen wird. Wählen Sie entweder *Include* oder *Exclude*.<br>
**Option** (3) enthält die Auswahlmöglichkeit für die Bedingung der Zeile in Form von logischen Operatoren.<br>
**Low Value** (4) bezeichnet den Vergleichswert bzw. die untere Intervallgrenze.<br>
**High Value** (5) bezeichnet die obere Intervallgrenze.
3. Sie können mehrere Filter anwenden oder Filter über die Schaltfläche **[Delete]** in der unteren, linken Ecke des Fensters löschen.
4. Klicken Sie auf **[OK]**, um Ihre Eingabe zu speichern.

### Operatoren

| Operator   |      Bedeutung      |  
|:---------|:------------- |
|=, EQ |  Wahr, wenn der Inhalt von operand1 gleich dem Inhalt von operand2 ist|
|<>, NE |Wahr, wenn der Inhalt von operand1 ungleich dem Inhalt von operand2 ist|
|<, LT | Wahr, wenn der Inhalt von operand1 kleiner als der Inhalt von operand2 ist|
|>, GT |  Wahr, wenn der Inhalt von operand1 größer als der Inhalt von operand2 ist|
|<=, LE | Wahr, wenn der Inhalt von operand1 kleiner oder gleich dem Inhalt von operand2 ist|
|>=, GE |  Wahr, wenn der Inhalt von operand1 größer oder gleich dem Inhalt von operand2 ist|
|*, LIKE | Wahr, wenn der Wert des Operanden operand1 mit dem Muster im Operanden operand2 übereinstimmt (nicht übereinstimmt). |
|[], BETWEEN | Wahr, wenn der Inhalt des Operanden operand (nicht) zwischen den Werten der Operanden operand1 und operand2 liegt. |

### Unterstützte Funktionen

SSIS-Variablen werden unterstützt, siehe [Parametrisierung](./parametrisierung). 

{: .box-note }
**Hinweis:** Fügen Sie *@* direkt vor einem Wert ein, um ihn als Variable zu kennzeichnen.