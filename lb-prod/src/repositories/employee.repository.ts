import {DefaultCrudRepository} from '@loopback/repository';
import {Employee, EmployeeRelations} from '../models';
import {PldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.Id,
  EmployeeRelations
> {
  constructor(
    @inject('datasources.pldb') dataSource: PldbDataSource,
  ) {
    super(Employee, dataSource);
  }
}
