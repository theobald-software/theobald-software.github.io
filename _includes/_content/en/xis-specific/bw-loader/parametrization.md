
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties

The *Custom Properties* define the properties unique to the Xtract BW Loader component. <br>
When parameterizing the BW Loader component using SSIS variables, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties* of the BW Loader component:

|Property |Comment|
|:----|:----|
| *DataSourceType* | Corresponds to the field *Data Source* in the BW Loader component, see [Connect Source and Destination Columns](./connect-source-and-destination-column). |
| *GatewayHost* | Corresponds to the field *Gateway host* in the BW Loader component, see [Connect Source and Destination Columns](./connect-source-and-destination-column).|
| *GatewayService* | Corresponds to the field *Gateway service* in the BW Loader component, see [Connect Source and Destination Columns](./connect-source-and-destination-column).|
| *InfoPackage* | Corresponds to the field *InfoPackage* in the BW Loader component, see [Defining a BW Loader Extraction](./lookup-info-packages).|
| *InfoSource* | Corresponds to the field *InfoSource* in the BW Loader component, see [Defining a BW Loader Extraction](./lookup-info-packages).|
| *LogSys* | Corresponds to the field *Logical System* in the BW Loader component, see [Connect Source and Destination Columns](./connect-source-and-destination-column).|
| *NolPackageStartOnlyWait* | Corresponds to the field *No InfoPackage Start (Only Wait)* in the BW Loader component, see [Settings](./settings).|
| *PackageSize* | Corresponds to the field *Package Size* in the BW Loader component, see [Settings](./settings#general).|
| *ProcessChain* | Corresponds to the field *Trigger Process Chain after Upload* in the BW Loader component, see [Settings](./settings#general).|
| *ProgramID* | Corresponds to the field *Program ID* in the BW Loader component, see [Connect Source and Destination Columns](./connect-source-and-destination-column). |
| *WaitUntilFinished* | Corresponds to the field *Wait data transfer to be finished* in the BW Loader component, see [Settings](./settings#general). |

### Parameterization using SSIS Variables
The following fields and/or *Custom Properties* of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *Package Size* | Sets the package size in bytes, see [Settings](./settings#general).|
| *Gateway host* | Corresponds to the field *Gateway host* in the BW Loader component, see [Connect Source and Destination Columns](./connect-source-and-destination-column). |
| *Gateway service* | Corresponds to the field *Gateway service* in the BW Loader component, see [Connect Source and Destination Columns](./connect-source-and-destination-column).|
| *Program ID* | Corresponds to the field *Program ID* in the BW Loader component, see [Connect Source and Destination Columns](./connect-source-and-destination-column).|

****
#### Related Links
- [How to use SSIS Variables with Xtract Components](../parameterization/parameterization-var) 
- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)