
Various settings of Xtract IS components (e.g., package size, selection criteria, etc.) can be parameterized.
Use parameters to assign different values at SSIS package runtime.
Parameters can be populated using standard SSIS functionality, such as expressions and SSIS variables. 

Xtract IS offers two technical options for parameterization:
- [Expression Properties](./parameterization/parameterization-prop)
- [SSIS Variables](./parameterization/parameterization-var)

{: .box-tip }
**Recommendation:** Microsoft's preferred and recommended way of parameterization is using properties. 

Depending on the Xtract IS component you can either use SSIS variables or Data Flow Properties or both to set parameters.

### Parameterization Options in Xtract Components 

| Component   | SSIS Variables | Properties |
|-------------|:-----:|:----:|
| [BAPI](./bapi/parametrization)        |   x    |      | 
| [BW Cube](./bw-cube/parametrization)     |   x    |      | 
| [BW Hierarchy](./hierarchy/paramerization)|    x   |      |
| [BW Loader](./bw-loader/parametrization)|    x   |      |
| [DeltaQ](./deltaq/parametrization)      | x      |  x    |
| [ODP](./odp/odp-parametrization)         |   x    |   x   |
| [OHS](./open-hub-service-ohs/parametrization)         |     x  |    x  |
|[Query](./query/parametrization)       |   x    |      |
| [Report](./abap-reports/parametrization) |    x   |      | 
| [Table](./table/table-parametrization)       | x      |  x    |
