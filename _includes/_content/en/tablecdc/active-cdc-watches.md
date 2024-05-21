
This page shows how to keep track of Table CDC log tables and triggers in your SAP system.<br>
The "Active CDC Watches" menu lists all active log tables and their DB triggers in the SAP source system.

### Open Active CDC Watches

1. In the main window of the Designer, double-click an extraction.<br>
The main window of the component opens.<br>
{% if page.product == "xtract-is" %} ![Active-CDC-Watches_designer](/img/content/tablecdc/Active-CDC-Watches_designer-xis.png){:class="img-responsive"}{% else %}![Active-CDC-Watches_designer](/img/content/tablecdc/Active-CDC-Watches_designer.png){:class="img-responsive"}{% endif %}
2. Click **[Show Active CDC Watches]**.
The window "Active CDC Watches" opens.<br>
![Active-CDC-Watches](/img/content/tablecdc/Active-CDC-Watches.png){:class="img-responsive"}

### Active CDC Watches

#### Source Table
Name of the source table that is tracked by the Table CDC component.

#### Log Table
Name of the log table that tracks changes in the source table.

#### Created on
Timestamp when the log table was created.

#### Created by
SAP username that was used to create the initial log table.

#### Rows
Number of rows in the log table. 
<!--- After successfully running an extraction, the associated log table is cleared and the number of rows should be 0. -->

#### Show Details
Click ![info](/img/content/icons/designer/info.png){:class="img-responsive" style="display:inline"} to display more information about the DB triggers in the "CDC watch details" window.

![Active-CDC-Watches-details](/img/content/tablecdc/Active-CDC-Watches-details.png){:class="img-responsive"}

#### Delete CDC resources
Click ![dustbin](/img/content/icons/trashbin.png){:class="img-responsive" style="display:inline"} to delete the log table and all associated triggers from your SAP system.<br>
It is not possible to delete the log table and the triggers of the current extraction, see [Defining a Table CDC Extraction: Delete Log Table and DB Triggers](./extract-table-cdc#delete-log-table-and-db-triggers).