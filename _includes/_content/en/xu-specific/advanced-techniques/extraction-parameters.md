
<<<<<<< Updated upstream
=======
Extraction parameters can be change in the window "Run extractions".
![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen_2.png){:class="img-responsive"}
>>>>>>> Stashed changes

When you click on the run Dialog, the Extraction Parameters tab offers the following parameters that can be overwritten.

When you overwrite a value, the URL will change accordingly.

![XU_extraction_parameters](/img/content/XU_extraction_parameters.png){:class="img-responsive"}

*preview*<br>
To enable/disable preview mode. Default value is False.

<<<<<<< Updated upstream
*clearBuffer*<br>
To clear/keep the result buffer. Default value is False.
=======
### Subsection "Parameters" Tab "Source"
![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen.png){:class="img-responsive"}
>>>>>>> Stashed changes

*source*<br>
When using multiple SAP source systems in Xtract Universal, e.g. SAP_DEV and SAP_PROD, this parameter lets you dynamically select the SAP system from which data is extracted.

*destination*<br>
When using multiple destinations in Xtract Universal, e.g. db_1 and db_2, this parameter lets you dynamically select the destination to which extraction data is written.

*wait*<br>
To wait until the extraction is finished. Default value is True.
If you set it to False, the extraction will not stop when you close the extraction tool xu.exe. 


**Table** 

For the table extraction you will have the following parameters.

<<<<<<< Updated upstream
*rows*<br>
To set the maximum number of rows to be extracted. 

*where*<br>
To set the where clause. 

*packageSize*<br>
To set the package size.
=======
Example for a parameter setting in the WHERE clause:

```
ERNAM = @parameterx
```

To set the pre-defined parameter, check the box and enter the desired value.

![Custom parameters](/img/content/xu/xu_run_extraction_param_cust.png){:class="img-responsive"}
>>>>>>> Stashed changes
