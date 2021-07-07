### Advanced Settings

**Package Size**<br>
The extracted data will be split into packages of the defined size. 
If the package size is 0, SAP uses the default ODP Packaging size.

{: .box-warning }
**Warning! RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table:** <br> The default for **Package Size** was raised from 14MB to 50MB (default).
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

![ODP Advanced Settings](/img/content/odp/advanced-settings.png){:class="img-responsive"}