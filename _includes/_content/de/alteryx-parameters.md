
### Werte zur Laufzeit übergeben

Führen Sie die folgenden Schritte aus, um Laufzeitparameter zur Laufzeit durch tatsächliche Werte zu ersetzen:

1. [Erstellen Sie und weisen Sie Laufzeitparameter](#laufzeitparameter-zuweisen) in der Xtract-Komponente zu.
2. Schließen Sie die Xtract-Komponente.
3. Definieren Sie die Eingabewerte für die Laufzeitparameter (1), z. B. Einzelwerte oder Listen.<br>
{% if page.parent == "odp" %}![odp-input](/img/content/odp/odp-input.png){:class="img-responsive" }{% elsif page.parent == "queries" %}![queries-input](/img/content/xfa/query-input.png){:class="img-responsive" }{% elsif page.parent == "bapi" %}![bapi-input](/img/content/xfa/bapi-input-single.png){:class="img-responsive" }{% elsif page.parent == "bw-cube" %}![bw-cube-input](/img/content/xfa/cube-input.png){:class="img-responsive" }{% elsif page.parent == "reports" %}![report-input](/img/content/xfa/report-input.png){:class="img-responsive" }{% elsif page.parent == "table" %}![table-input](/img/content/xfa/table-input.png){:class="img-responsive" }{% endif %}
4. Stellen Sie sicher, dass der Datentyp der Eingabewerte mit dem Datentyp des entsprechenden Laufzeitparameters übereinstimmt.
5. Stellen Sie sicher, dass der Name der Eingabe mit dem Namen des entsprechenden Laufzeitparameters übereinstimmt, z. B. werden die Werte der Eingabe *Parameter0* automatisch einem Laufzeitparameter mit demselben Namen zugewiesen.
6. Verbinden Sie die Eingabe mithilfe des Eingabeankers "P" mit der Xtract-Komponente (2).<br>
7. Führen Sie den Workflow aus, um zu testen, ob die Parameter korrekt zugewiesen sind.

{: .box-note }
**Hinweis:** Die Parametrisierung über Eingabeanker wird unterstützt ab der Xtract for Alteryx Version 1.19. 
Wenn Sie eine ältere Version von Xtract for Alteryx verwenden, parametrisieren Sie Xtract-Komponenten mithilfe von Batch-Makros, siehe [Parameterizing mithilfe von Batch-Makros](../parametrisierung).