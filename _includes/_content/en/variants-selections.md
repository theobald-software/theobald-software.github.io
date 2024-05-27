
{% if page.parent == "sap-queries" %}

Most queries allow entering selections before query execution.
Selections limit the result set of the query to extract only records that match the selection.<br>
A selection variant can be created in SAP, see [SAP Documentation: Query Variants](https://help.sap.com/docs/SAP_NETWEAVER_750/40d2cb3a4f9249d58e9bbc95f4dbaff8/4e535406a32c4f49e10000000a42189e.html?locale=en-US). 
The purpose of a variant is to minimize the necessity to enter selections when running a query.

{% elsif page.product == "abap-reports" or page.product == "report" %}

Most reports allow entering selections before report execution. 
Selections limit the result set of the report to extract only records that match the selection. 

In SAP a [selection variant](https://help.sap.com/docs/btp/ABAP/3353524716.html) can be created in the input screen of an ABAP report. The purpose of a variant is to save selection settings on your input screen. 
The purpose of a variant is to minimize the necessity to enter selections when running a report.

{% endif %}

{: .box-note }
**Note:** Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

### Choose a Variant
Choose a variant from the drop-down-list *Variant*. <br>
If you create a new variant in SAP after creating the extraction, click ![refresh](/img/content/icons/refresh.png) to load the new variant.

{% if page.parent == "abap-reports" or page.parent == "report" %}
![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
{% elsif page.product == "xtract-universal" or page.product == "board-connector"%}
![Variants-Section](/img/content/query/query-variant1.png){:class="img-responsive"}
{% elsif page.product == "xtract-for-alteryx"%}
![Variants-Section](/img/content/xfa/query-variant1.png){:class="img-responsive"}
{% elsif page.product == "xtract-is"%}
![Variants-Section](/img/content/xis/query-variant1.png){:class="img-responsive"}
{% endif %}

{: .box-note }
**Note:** The selections of the variant are **not** displayed in the *Selection Screen* section of the window. 
To see the definition of a variant, open the variant in SAP.

{% if page.product == "xtract-universal"%}

{: .box-tip }
**Tip**: You can define the variant at runtime by using a corresponding parameter in the extraction URL, see [Extraction Parameters](../execute-and-automate-extractions/extraction-parameters).

{% endif %}

