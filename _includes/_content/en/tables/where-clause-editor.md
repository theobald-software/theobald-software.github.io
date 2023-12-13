
### WHERE Clause Editor

{% if page.parent != "table-cdc" %}
The WHERE clause editor offers a toolkit for those who are not familiar with the syntax of the WHERE clause.<br>
{% if page.product == "yunio" %}Switch to *Editor mode* to open the WHERE clause editor. <br>
![WHERE-Clause-Builder-01](/img/content/yunio/where-clause-editor-mode.png){:class="img-responsive"}{% else %}Click **[Editor mode]** to open the editor. 

![WHERE-Clause-Builder-01](/img/content/where-clause-builder.png){:class="img-responsive"}
{% endif %} {% endif %}

There are 2 options for adding criteria to the WHERE clause:
- **[Add Criteria]** adds single criteria. <br>
	- The default structure for a single criteria with static values is `[Column][Operator][Value]` e.g., *MARC~WERKS = 1000*.
	{% if page.product != "yunio" and page.parent != "table-cdc" %}- The default structure for a single criteria with parameters is `[Column][Operator][Parameter]` e.g., *MARC~WERKS = [p_WERKS]*.{% endif %}
- **[Add Criteria Group]** adds a group of criteria.
	- The default structure for a criteria group is `([Column1][Operator1][Value1][Boolean][Column2][Operator2][Value2])` e.g., *(MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')*.

{: .box-tip }
**Tip:** Combine multiple criteria and criteria groups to create complex filters e.g., 
*MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')* extracts only data where the column WERKS equals 1000 and the column PSTAT equals either 'L' or 'LB'.

#### Components of the WHERE Clause Editor

{% if page.product == "yunio" %}
![WHERE-Clause-Builder-Example](/img/content/yunio/where-clause-editor.png){:class="img-responsive"}
{% else %}
![WHERE-Clause-Builder-Example](/img/content/where-clause-builder-2.png){:class="img-responsive"}
{% endif %}

The following components are available in the editor:

| Icon  | Component   | Function    | 
| ------|-------------|-------------| 
| {% if page.product == "yunio" %}![WHERE-Clause-Builder-Example](/img/content/icons/delete.png){% else %}![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-delete.png){% endif %} | Delete row | deletes a criteria.|
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-up.png) | Move row up | changes the sequence of the criteria. The selected criteria moves up. <br>The sequence of criteria can also be changed with drag&drop. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-down.png) | Move row down | changes the sequence of the criteria. The selected criteria moves down. <br>The sequence of criteria can also be changed with drag&drop.| 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-column.png) | Column    | adds a column. Click on the component to select a column from the available tables. | 
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-sql.png)| SQL       |  adds an Open SQL statement, see [SAP Documentation: Open SQL](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abenopensql.htm).      |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-operator.png)| Operator  | adds an operator e.g., =, <, >, etc. |  
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-literal.png) | Value | adds a static value of type *String*, *Number*, *Flag* or *List*. *List* offers a separate editor to create lists of type *String*, *Number* or *Select*. *Select* enables usage of SELECT statements. For more information, refer to the knowledge base article [Working with Lists in the WHERE-Clause Editor](https://kb.theobald-software.com/tables/where-clause-editor-lists). |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add.png) | Criteria | adds a new criteria after the selected criteria. |
| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-group.png) | Group | adds a new group of criteria the selected criteria. | 
{% if page.product != "yunio" and page.parent != "table-cdc" %}| ![WHERE-Clause-Builder-Example](/img/content/icons/where-clause-add-param.png) | Parameter | adds a previously defined runtime parameter, see [Using Runtime Parameters in the WHERE Clause Editor](#using-runtime-parameters-in-the-where-clause-editor).|{% endif %} 

{: .box-note }
**Note**: When adding or editing a criteria only the relevant components are displayed e.g., **Add Operator** is only available if there is a column or SQL statement to use an operator on.

#### Editing and Deleting Components
- Click on a component to edit it. All areas that are marked green can be edited.<br>
- To delete a component, click the {% if page.product == "yunio" %}![WHERE-Clause-Builder-Example](/img/content/icons/delete.png) icon that appears when hovering over{% else %}(x) icon above{% endif %} the component.<br>

### Using SAP system fields

{: .box-note }
**Note**: System fields can only be used with SAP NW 7.4 SP5 or higher and with the function modules Z_THEO_READ_TABLE or /THEO/READ_TABLE.

You can use [SAP system fields for date and time](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/abentime_system_fields.htm).

*Example:*
1. Navigate to [WHERE-Clause-Editor](#where-clause-editor) and select a column of the type Date *here: BUDAT*. 
![img-01](/img/content/table/table_where_syst_field_1.png){:class="img-responsive"}
2. Delete the criterion "Value" and use the criterion "SQL".
![img-02](/img/content/table/table_where_syst_field_2.png){:class="img-responsive"}
3. Within the "SQL" criterion, use the supported system fields for date and time with a preceding "@" character, *here: @sy-datum*.
![img-03](/img/content/table/table_where_syst_field_3.png){:class="img-responsive"}
4. Click **[Load Live Preview]** to check the result. 
5. Run an extraction.
