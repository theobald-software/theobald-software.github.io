**Edit Parameters**<br/>

*Edit Parameters* allows defining parameters which can be used as placeholders for data selections, see section *Filtering* below. These placeholders need to be populated with actual values at extraction runtime. This allows you to dynamically set filters at runtime.

You can assign one of the following data types to a parameter. The data types can but don't need to correlate to SAP data types. 
- String: This data type can be used for any type of SAP selection field.
- Integer: This data type would be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an 'X' (true) or an '' (false) as input value.
<br>

If you have defined parameters, icons will appear next to the *Low* and *High* input fields. Those icons allow you to switch between entering actual input values and entering parameters.
<br>
![ODP Selection With Parameters](/img/content/odp/odp-selection-with-parameters.png){:class="img-responsive"}
