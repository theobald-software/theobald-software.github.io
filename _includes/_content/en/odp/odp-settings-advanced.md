### Advanced Settings

**Package Size**<br>
The extracted data will be split into packages of the defined size. 
If the package size is 0, SAP uses the default ODP Packaging size.

Load the following notes into your SAP system or make sure that your SAP version already includes the notes: <br>
2196500 - ODP: Package size cannot be reduced below 50 MB <br>
2191995 - ODQ Package Size cannot be reduced below 50 MByte <br>

{: .box-warning }
**Warning! RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table:** <br> The default for **Package Size** was raised from 14MB to 50MB (default).
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

![ODP Advanced Settings](/img/content/odp/advanced-settings.png){:class="img-responsive"}