
### How to Pass Values at Runtime

Follow the steps below to replace runtime parameters with actual values at runtime:

1. [Create and assign runtime parameters](#create-runtime-parameters) in the Xtract component.
2. Close the Xtract component.
3. Define the input values for the runtime parameters (1), e.g., single values or lists.<br>
{% if page.parent == "odp" %}![odp-input](/img/content/odp/odp-input.png){:class="img-responsive" }{% elsif page.parent == "queries" %}![queries-input](/img/content/xfa/query-input.png){:class="img-responsive" }{% elsif page.parent == "bapi" %}![bapi-input](/img/content/xfa/bapi-input-single.png){:class="img-responsive" }{% elsif page.parent == "bw-cube" %}![bw-cube-input](/img/content/xfa/cube-input.png){:class="img-responsive" }{% elsif page.parent == "reports" %}![report-input](/img/content/xfa/report-input.png){:class="img-responsive" }{% elsif page.parent == "table" %}![table-input](/img/content/xfa/table-input.png){:class="img-responsive" }{% endif %}
4. Make sure that the data type of the input values match the data type of the corresponding runtime parameter.
5. Make sure that the name of the input matches the name of the corresponding runtime parameter, e.g, the values of the input *Parameter0* is automatically assigned to a runtime parameter by the same name.
6. Connect the input to the Xtract component using the input anchor "P" (2).<br>
7. Run the workflow to test if the parameters are assigned correctly.

{: .box-note }
**Note:** Parameterization via input anchors is supported as of Xtract for Alteryx version 1.19. 
When using an older version of Xtract for Alteryx, parameterize Xtract components using batch macros, see [Parameterizing via Batch Macros](https://kb.theobald-software.com/xtract-for-alteryx/parameterizing).
