### Column Mapping

Activate **Column Mapping** when appending data to an existing file that has different column names or a different number of columns.<br>
**Column Mapping** allows extracting data from two or more extractions into the same destination file where the column names of the extraction and the destination file differ.

{: .box-note }
**Note:** The column names in the destination file must be unique. Duplicated column names cannot be processed.

1. Make sure that the [output directory](#destination-details) and the [file name](#file-name) of the extraction match the destination file.
2. Select the option **Append results** in the section [Existing Files](#existing-files).
3. Click **[Map]** to assign columns. The window "Column Mapping" opens.<br>
*Destination Columns* displays the names of the columns that are available in the destination file.
*Not Mapped* defines whether or not columns are mapped to the destination columns.
*Source Columns* defines which SAP column is mapped to a destination column.
![Column-Mapping](/img/content/column-mapping.png){:class="img-responsive"}
4. a) If the column names of the extraction match the column names in the file, click **[Auto map by name]**.<br>
b) If the column names do not match, assign columns manually by selecting the respective SAP column from the dropdown menu under *Source Columns*.<br>
c) If a column does not have a counterpart or is not supposed to be appended, activate the checkbox under *Not Mapped*.<br>
5. Click **[OK]** to confirm your input.

When running the extraction the extracted data is added to the destination file as specified in the column mapping.

{: .box-tip }
**Tip:** In case an error message pops up, click **[Show more]** to see a description of what caused the error.
