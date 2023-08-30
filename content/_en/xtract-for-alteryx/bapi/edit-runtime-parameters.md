---
ref: xfa-bapi-param
layout: page
title: Runtime Parameters
description: Runtime Parameters
product: xtract-for-alteryx
parent: bapi
permalink: /:collection/:path
weight: 6
lang: en_GB
---


{% include _content/en/edit-runtime-parameters.md %}

{% include _content/en/bapis-and-function-modules/edit-runtime-parameters.md %}

### How to Pass Values and Tables at Runtime

The Xtract BAPI has the following input and output options:
- Input arrow "I" (1): input for runtime parameters.
- Input arrow "P" (2): input for tables.
- Output arrow "1" to "5" (3): custom output.
- Output arrow "E" (4): output for status and error messages.

![bapi-input](/img/content/xfa/bapi-input.png){:class="img-responsive" }

#### Pass Runtime Parameters

Follow the steps below to replace runtime parameters with actual values at runtime:

1. [Create and assign runtime parameters](#create-runtime-parameters) in the Xtract component, e.g, for selections and filters.
2. Close the Xtract component.
3. Define the input values for the runtime parameters.<br>
{% if page.parent == "odp" %}![odp-input](/img/content/odp/odp-input.png){:class="img-responsive" }{% elsif page.parent == "bw-cube" %}![bw-cube-input](/img/content/xfa/cube-input.png){:class="img-responsive" }{% elsif page.parent == "reports" %}![report-input](/img/content/xfa/report-input.png){:class="img-responsive" }{% elsif page.parent == "table" %}![table-input](/img/content/xfa/table-input.png){:class="img-responsive" }{% endif %}
4. Make sure that the data type of the input values match the data type of the corresponding runtime parameter.
5. Make sure that the name of the input matches the name of the corresponding runtime parameter, e.g, the values of the input *Parameter0* is automatically assigned to a runtime parameter by the same name.
6. Connect the input to the Xtract component using the input arrow "P" (2).<br>
7. Run the workflow to test if the parameters are assigned correctly.

#### Pass Tables
Follow the steps below to pass tables at runtime:

1. Define / load the input tables in your workflow. 
2. Make sure that the data types of the input table match the data type of the corresponding runtime parameter.
3. Make sure that the name of the input matches the name of the corresponding runtime parameter, e.g, the values of the input *Parameter0* is automatically assigned to a runtime parameter by the same name.
6. Connect the table to the Xtract component using the input arrow "I".
7. Run the workflow to test if the parameters are assigned correctly.


*****
#### Related Links
- [Parameterizing](../parameterizing)
- [Sample Workflows](../sample-workflows)